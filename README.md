# 編譯TS檔案
tsc => 編譯所有專案底下ts檔案

# 專案運行
node app.js  //本地運行
heroku open  //開啟heroku上的專案

# 專案部署
git push heroku main

# ts config檔案
## 設置tsc編譯檔案輸出位置
執行tsc編譯的檔案，都會放到你設定的資料夾底下
並且會以你根目錄設定的結構存放!
```
"outDir": "./dist",    /* Specify an output folder for all emitted files. */
```
## 設置根目錄
```
"rootDir": "./src",   /* Specify the root folder within your source files. */
```