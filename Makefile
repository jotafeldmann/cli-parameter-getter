args := ''
.PHONY: cli
cli:
	npm run cli -- dummyArgumentToIgnore $(args)

.PHONY: dev
dev:
	npm run dev

.PHONY: test
test:
	npm test

.PHONY: test/example
test/example:
	make cli args="flag parameter=value"

.PHONY: test/watch
test/watch:
	npm run test:watch