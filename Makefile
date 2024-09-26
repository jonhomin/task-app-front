# デフォルトのシェルをbashに設定
SHELL := /bin/bash

# デフォルトのターゲット
.DEFAULT_GOAL := help

# ヘルプコマンド
help:
	@echo "利用可能なコマンド:"
	@echo "  make build      - Dockerイメージをビルド"
	@echo "  make up         - コンテナを起動"
	@echo "  make down       - コンテナを停止"
	@echo "  make logs       - コンテナのログを表示"
	@echo "  make sh         - コンテナ内でシェルを起動"
	@echo "  make test       - テストを実行"
	@echo "  make lint       - リンターを実行"
	@echo "  make tree       - プロジェクトのディレクトリ構造を表示"

# Dockerイメージをビルド
build:
	@cd my-app && docker-compose build

# コンテナを起動
up:
	@cd my-app && docker-compose up -d

# コンテナを停止
down:
	@cd my-app && docker-compose down

# コンテナのログを表示
logs:
	@cd my-app && docker-compose logs -f

# コンテナ内でシェルを起動
sh:
	@cd my-app && docker-compose exec app sh

# テストを実行
test:
	@cd my-app && docker-compose run --rm app npm test

# リンターを実行
lint:
	@cd my-app && docker-compose run --rm app npm run lint

# プロジェクトのディレクトリ構造を表示
tree:
	@tree -I 'node_modules|build|coverage'