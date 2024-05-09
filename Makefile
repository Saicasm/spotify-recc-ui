.PHONY: build
build: ## Build the development docker image.
	docker compose -f docker-compose.yml build

.PHONY: start
start: ## Start the development docker container.
	docker compose -f docker-compose.yml up -d

.PHONY: stop
stop: ## Stop the development docker container.
	docker compose -f docker-compose.yml down