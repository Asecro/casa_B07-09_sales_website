#!/bin/bash

echo "🔍 GitHub Pages公開状態チェッカー"
echo "================================"

URL="https://asecro.github.io/casa_B07-09_sales_website/"

echo ""
echo "📌 公開URL: $URL"
echo ""

# HTTPステータスコードを取得
STATUS=$(curl -o /dev/null -s -w "%{http_code}" $URL)

if [ $STATUS -eq 200 ]; then
    echo "✅ サイトは正常に公開されています！"
    echo "🌐 ブラウザで開く: $URL"
    open $URL
elif [ $STATUS -eq 404 ]; then
    echo "⏳ まだ公開されていません（404エラー）"
    echo ""
    echo "📝 チェックリスト:"
    echo "1. GitHub Settings → Pages でgh-pagesブランチが選択されているか確認"
    echo "2. 初回公開の場合、5-10分待つ必要があります"
    echo "3. https://github.com/Asecro/casa_B07-09_sales_website/settings/pages"
    echo ""
    echo "🔄 gh-pagesブランチの状態:"
    cd /Users/keita/Downloads/販売用LP作成
    git ls-tree -r origin/gh-pages --name-only | head -5
else
    echo "❌ エラー: HTTPステータス $STATUS"
fi

echo ""
echo "📅 現在時刻: $(date '+%Y-%m-%d %H:%M:%S')"
echo "================================"