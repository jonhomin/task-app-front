# Node.jsの最新LTS版を使用
FROM node:20-alpine

# 作業ディレクトリを設定
WORKDIR /app

# パッケージ管理ファイルをコピー
COPY package.json package-lock.json ./

# 依存関係をインストール
RUN npm ci

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションをビルド
RUN npm run build

# アプリケーションを起動
CMD ["npm", "start"]