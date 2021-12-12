mod utils;

extern crate fixedbitset;
extern crate web_sys;

use fixedbitset::FixedBitSet;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use wasm_bindgen::JsValue;

const DEAD: bool = false;
const ALIVE: bool = true;

// A macro to provide `println!(..)`-style syntax for `console.log` logging.
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!( $( $t )* ).into());
    }
}

#[wasm_bindgen]
pub struct Universe {
    width: u32,
    height: u32,
    cells: FixedBitSet,
}

/// Public methods, exported to JavaScript.
#[wasm_bindgen]
impl Universe {
    pub fn new(width: u32, height: u32) -> Universe {
        utils::set_panic_hook();

        log!("width = {:?}\theight{:?}", width, height);

        let size = (width * height) as usize;
        let mut cells = FixedBitSet::with_capacity(size);

        for i in 0..size {
            cells.set(
                i,
                if js_sys::Math::random() < 0.5 {
                    DEAD
                } else {
                    ALIVE
                },
            );
        }

        Universe {
            width,
            height,
            cells,
        }
    }

    pub fn tick(&mut self) {
        let mut next = self.cells.clone();

        for row in 0..self.height {
            for col in 0..self.width {
                let idx = self.get_index(row, col);
                let cell = self.cells[idx];
                let live_neighbors = self.live_neighbor_count(row, col);

                next.set(
                    idx,
                    match (cell, live_neighbors) {
                        // Rule 1: Any live cell with fewer than two live neighbours
                        // dies, as if caused by underpopulation.
                        (ALIVE, x) if x < 2 => DEAD,

                        // Rule 2: Any live cell with two or three live neighbours
                        // lives on to the next generation.
                        (ALIVE, 2) | (ALIVE, 3) => ALIVE,

                        // Rule 3: Any live cell with more than three live
                        // neighbours dies, as if by overpopulation.
                        (ALIVE, x) if x > 3 => DEAD,

                        // Rule 4: Any dead cell with exactly three live neighbours
                        // becomes a live cell, as if by reproduction.
                        (DEAD, 3) => ALIVE,

                        // All other cells remain in the same state.
                        (otherwise, _) => otherwise,
                    },
                );
            }
        }

        self.cells = next;
    }

    pub fn render(&self, width: u32, height: u32) {
        let window = web_sys::window().unwrap();
        let document = window.document().unwrap();
        let canvas = document.get_element_by_id("canvas").unwrap();
        let canvas: web_sys::HtmlCanvasElement = canvas
            .dyn_into::<web_sys::HtmlCanvasElement>()
            .map_err(|_| ())
            .unwrap();

        let context = canvas
            .get_context("2d")
            .unwrap()
            .unwrap()
            .dyn_into::<web_sys::CanvasRenderingContext2d>()
            .unwrap();

        let cell_size = (((width - 2 * self.width) / self.width) as f64)
            .min(((height - 2 * self.height) / self.height) as f64);

        self.draw_grid(&context, cell_size);
        self.draw_cells(&context, cell_size);
    }
}

impl Universe {
    pub fn set_cells(&mut self, cells: &[(u32, u32)]) {
        self.cells.clear();

        for (row, col) in cells.iter().cloned() {
            let idx = self.get_index(row, col);
            self.cells.set(idx, ALIVE);
        }
    }

    pub fn get_cells(&self) -> &[u32] {
        &self.cells.as_slice()
    }

    fn get_index(&self, row: u32, column: u32) -> usize {
        (row * self.width + column) as usize
    }

    fn live_neighbor_count(&self, row: u32, column: u32) -> u8 {
        let mut count = 0;
        for delta_row in [self.height - 1, 0, 1].iter().cloned() {
            for delta_col in [self.width - 1, 0, 1].iter().cloned() {
                if delta_row == 0 && delta_col == 0 {
                    continue;
                }

                let neighbor_row = (row + delta_row) % self.height;
                let neighbor_col = (column + delta_col) % self.width;
                let idx = self.get_index(neighbor_row, neighbor_col);
                count += self.cells[idx] as u8;
            }
        }
        count
    }

    fn draw_grid(&self, context: &web_sys::CanvasRenderingContext2d, cell_size: f64) {
        let grid_color = JsValue::from_str("#CCCCCC");

        context.begin_path();
        context.set_stroke_style(&grid_color);

        // Vertical lines.
        for i in 0..self.width + 1 {
            let x = i as f64;
            context.move_to(x * (cell_size + 1.) + 1., 0.);
            context.line_to(
                x * (cell_size + 1.) + 1.,
                (cell_size + 1.) * self.height as f64 + 1.,
            );
        }

        // Horizontal lines.
        for j in 0..self.height + 1 {
            let y = j as f64;
            context.move_to(0., y * (cell_size + 1.) + 1.);
            context.line_to(
                (cell_size + 1.) * self.width as f64 + 1.,
                y * (cell_size + 1.) + 1.,
            );
        }

        context.stroke();
    }

    fn draw_cells(&self, context: &web_sys::CanvasRenderingContext2d, cell_size: f64) {
        let dead_color = JsValue::from_str("#FFFFFF");
        let alive_color = JsValue::from_str("#000000");

        context.begin_path();

        for row in 0..self.height {
            for col in 0..self.width {
                let idx = self.get_index(row, col);
                context.set_fill_style(if self.cells[idx] == DEAD {
                    &dead_color
                } else {
                    &alive_color
                });

                let x = col as f64;
                let y = row as f64;

                context.fill_rect(
                    x * (cell_size + 1.) + 1.,
                    y * (cell_size + 1.) + 1.,
                    cell_size,
                    cell_size,
                );

                context.fill_rect(
                    x * (cell_size + 1.) + 1.,
                    y * (cell_size + 1.) + 1.,
                    cell_size,
                    cell_size,
                );
            }
        }

        context.stroke();
    }
}
