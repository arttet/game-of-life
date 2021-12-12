.PHONY: all
all: deps build

.PHONY: build
build:
	wasm-pack build

.PHONY: test
test:
	wasm-pack test --chrome --headless

.PHONY: run
run:
	npm run start --prefix web

.PHONY: fmt
fmt:
	cargo fmt
	find . -type d -name node_modules -prune -o -name '*.js' -print | xargs clang-format -i

.PHONY: deps
deps:
	cd web && npm install && cd ..
