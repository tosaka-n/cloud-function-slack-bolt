### Cloud Functions Slack Bolt
#### How to Use
1. bot作成
   - https://api.slack.com/apps [Create New App] でbot(App)を作成する
2. firebaseの設定
   - [Mac] `curl -sL https://firebase.tools | bash` で firebase cliのインストール
    ```
    ログイン
    $ firebase login
    ```
    ```
    プロジェクト一覧参照
    $ firebase projects:list
    ```
    ```
    利用するプロジェクト指定
    $ firebase use slack-bot
    ```
3. firebaseにSlack Appの設定をする
   - 登録したアプリの [OAuth & Permissions] から `Signing Secret` と `Bot User OAuth Token` を取得してfirebaseのconfigに登録する
    ```
    $ firebase functions:config:set slack.signing_secret=xoxb-xxxxxxxxxx-xxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxx
    $ firebase functions:config:set slack.bot_token=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    ```
4. このリポジトリをgit cloneする
   - `npm run deploy` or `firebase deploy --only functions` でデプロイする
5. デプロイ後に取得できるURLをSlack Appに設定する
   - ex) Function URL: https://xxxxxxx.cloudfunctions.net/
   - 上記のURLを Slack Appの [Event Subscriptions] から登録する
   - 下部の緑[Save Changes]をクリックしないと保存されない
6. botが利用するイベントを登録する
  - Slack Appの [Subscribe to bot events] から指定する
  - 特に `message.channels` を指定しないと投稿に反応できないので必ず登録する




