import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: [
    "eslint",
    "typescript",
    "unicorn",
    "oxc",
    "import",
    "react",
    "jsx-a11y",
    "react-perf",
    "promise",
  ],
  categories: {
    correctness: "error",
    suspicious: "error",
    perf: "warn",
  },
  env: {
    astro: true,
    browser: true,
    es2024: true,
    node: true,
  },
  options: {
    typeAware: true,
  },
  ignorePatterns: ["dist", ".astro"],
  overrides: [
    {
      files: ["**/*.astro"],
      rules: {
        // Astro layout files import CSS for side effects.
        "import/no-unassigned-import": "off",
      },
    },
  ],
  rules: {
    // コールバックで値を返し忘れた配列処理を防ぐ。
    "array-callback-return": "error",
    // 制御構文の波括弧を必須にして、条件追加時の事故を防ぐ。
    curly: "error",
    // 暗黙の型変換による比較バグを防ぐ。ただし null/undefined の緩い比較は許可する。
    eqeqeq: ["error", "always", { null: "ignore" }],
    // 本番 UI にブラウザアラートが混入するのを防ぐ。
    "no-alert": "error",
    // デバッグログの残留を警告する。警告・エラー出力は運用上必要なため許可する。
    "no-console": ["warn", { allow: ["warn", "error"] }],
    // デバッガ文のコミットを防ぐ。
    "no-debugger": "error",
    // !! や +foo などの暗黙変換を避け、意図を明示させる。
    "no-implicit-coercion": "error",
    // Promise executor 内の return 値に意味があるという誤解を防ぐ。
    "no-promise-executor-return": "error",
    // 未定義グローバル参照を検出する。
    "no-undef": "error",
    // 未使用コードを残さず、実装漏れやリファクタ漏れを検出する。
    "no-unused-vars": "error",
    // 関数スコープの var を禁止し、let/const に統一する。
    "no-var": "error",
    // 再代入しない変数を const にして意図を固定する。
    "prefer-const": "error",
    // 文字列連結よりテンプレートリテラルを優先し、可読性を上げる。
    "prefer-template": "warn",

    // 不正な re-export を検出する。
    "import/export": "error",
    // 名前付き import が実際に存在することを検証する。
    "import/named": "error",
    // namespace import の参照先が実際に存在することを検証する。
    "import/namespace": "error",
    // モジュール循環参照を禁止し、初期化順序バグを防ぐ。
    "import/no-cycle": "error",

    // 画像などに代替テキストを要求し、アクセシビリティを守る。
    "jsx-a11y/alt-text": "error",
    // 無効な anchor 実装を防ぎ、リンクの意味と操作性を保つ。
    "jsx-a11y/anchor-is-valid": "error",
    // クリック可能な非ボタン要素にキーボード操作も要求する。
    "jsx-a11y/click-events-have-key-events": "error",
    // 自動フォーカスはユーザー操作を奪いやすいため警告する。
    "jsx-a11y/no-autofocus": "warn",
    // 静的要素へ対話イベントを付ける場合のロール/フォーカス漏れを防ぐ。
    "jsx-a11y/no-static-element-interactions": "error",

    // Promise チェーンで値を返し忘れるバグを防ぐ。
    "promise/always-return": "error",
    // Promise のエラーを握りつぶさず catch/return を要求する。
    "promise/catch-or-return": "error",
    // 深い Promise ネストを警告し、async/await などへの整理を促す。
    "promise/no-nesting": "warn",
    // 不要な Promise ラップを防ぎ、エラー伝播を読みやすくする。
    "promise/no-return-wrap": "error",
    // Promise executor の引数名ミスを検出する。
    "promise/param-names": "error",

    // controlled input に onChange/readOnly がない状態を防ぐ。
    "react/checked-requires-onchange-or-readonly": "error",
    // React Hooks の依存配列漏れを検出する。
    "react/exhaustive-deps": "error",
    // iframe に sandbox を要求し、埋め込みコンテンツの権限を制限する。
    "react/iframe-missing-sandbox": "error",
    // リスト描画の key 漏れを検出し、再レンダリング時の状態ズレを防ぐ。
    "react/jsx-key": "error",
    // Context value に毎回新しいオブジェクトを渡して再レンダリングを増やす問題を防ぐ。
    "react/jsx-no-constructed-context-values": "error",
    // JSX props の重複指定を検出する。
    "react/jsx-no-duplicate-props": "error",
    // javascript: URL を禁止し、XSS リスクを下げる。
    "react/jsx-no-script-url": "error",
    // target="_blank" の rel 漏れを検出し、tabnabbing を防ぐ。
    "react/jsx-no-target-blank": "error",
    // JSX 内の未定義コンポーネント参照を検出する。
    "react/jsx-no-undef": "error",
    // 配列 index を key に使うと並び替え時に状態がズレるため警告する。
    "react/no-array-index-key": "warn",
    // dangerouslySetInnerHTML を禁止し、XSS リスクを明示的に扱わせる。
    "react/no-danger": "error",
    // dangerouslySetInnerHTML と children の併用を禁止する。
    "react/no-danger-with-children": "error",
    // React state の直接変更を禁止する。
    "react/no-direct-mutation-state": "error",
    // React DOM props のスペルミスや無効属性を検出する。
    "react/no-unknown-property": "error",
    // コンポーネント内で毎回コンポーネントを再定義するパターンを警告する。
    "react/no-unstable-nested-components": "warn",
    // 新しい JSX transform では React import が不要なため無効化する。
    "react/react-in-jsx-scope": "off",
    // Hooks の呼び出し順序ルール違反を検出する。
    "react/rules-of-hooks": "error",

    // 危険な型アサーションの書き方を制限する。
    "typescript/consistent-type-assertions": "error",
    // 型定義は type に統一し、union/intersection と同じ表記に揃える。
    "typescript/consistent-type-definitions": ["warn", "type"],
    // 型 export の一貫性を保つ。
    "typescript/consistent-type-exports": "warn",
    // 型のみの import を type import にして実行時依存を減らす。
    "typescript/consistent-type-imports": "error",
    // non-null assertion と nullish coalescing の紛らわしい組み合わせを防ぐ。
    "typescript/no-confusing-non-null-assertion": "error",
    // 非推奨 API の利用を警告する。
    "typescript/no-deprecated": "warn",
    // enum の重複値を検出する。
    "typescript/no-duplicate-enum-values": "error",
    // union/intersection の重複型を検出する。
    "typescript/no-duplicate-type-constituents": "error",
    // 空オブジェクト型による過度に広い型指定を防ぐ。
    "typescript/no-empty-object-type": "error",
    // any を禁止し、型安全性を維持する。
    "typescript/no-explicit-any": "error",
    // 余分な non-null assertion を検出する。
    "typescript/no-extra-non-null-assertion": "error",
    // await されない Promise を検出し、非同期処理の取りこぼしを防ぐ。
    "typescript/no-floating-promises": "error",
    // 配列に対する for-in を禁止し、添字列挙の誤用を防ぐ。
    "typescript/no-for-in-array": "error",
    // side effect を発生させる type import を防ぐ。
    "typescript/no-import-type-side-effects": "error",
    // Promise を返す関数を真偽値や void の文脈で誤用するのを防ぐ。
    "typescript/no-misused-promises": "error",
    // spread の型誤用を検出する。
    "typescript/no-misused-spread": "error",
    // non-null assertion と nullish coalescing の無意味な組み合わせを防ぐ。
    "typescript/no-non-null-asserted-nullish-coalescing": "error",
    // optional chain に対する non-null assertion を禁止する。
    "typescript/no-non-null-asserted-optional-chain": "error",
    // non-null assertion は型安全性を弱めるため警告に留めて利用を見える化する。
    "typescript/no-non-null-assertion": "warn",
    // CommonJS require を禁止し、ESM import に統一する。
    "typescript/no-require-imports": "error",
    // 常に真/偽になる条件を警告し、不要な分岐や型設計ミスを見つける。
    "typescript/no-unnecessary-condition": "warn",
    // 不要な型アサーションを警告する。
    "typescript/no-unnecessary-type-assertion": "warn",
    // unsafe な値を関数引数に渡すのを禁止する。
    "typescript/no-unsafe-argument": "error",
    // unsafe な代入を禁止する。
    "typescript/no-unsafe-assignment": "error",
    // unsafe な関数呼び出しを禁止する。
    "typescript/no-unsafe-call": "error",
    // unsafe なメンバーアクセスを禁止する。
    "typescript/no-unsafe-member-access": "error",
    // unsafe な戻り値を禁止する。
    "typescript/no-unsafe-return": "error",
    // 型を狭めずに危険な型アサーションで逃げるのを禁止する。
    "typescript/no-unsafe-type-assertion": "error",
    // リテラル値は as const を使い、より狭い型を保持する。
    "typescript/prefer-as-const": "error",
    // find で表せる探索に filter()[0] などを使わないよう促す。
    "typescript/prefer-find": "warn",
    // 配列の添字ループより for-of を優先する。
    "typescript/prefer-for-of": "warn",
    // indexOf 比較より includes を優先して意図を明確にする。
    "typescript/prefer-includes": "warn",
    // || より nullish coalescing を優先し、falsy 値の誤処理を防ぐ。
    "typescript/prefer-nullish-coalescing": "warn",
    // ネストした null チェックより optional chaining を優先する。
    "typescript/prefer-optional-chain": "warn",
    // Promise を返す関数は async として宣言し、非同期 API であることを明示する。
    "typescript/promise-function-async": "warn",
    // Array#sort の比較関数漏れを禁止する。
    "typescript/require-array-sort-compare": "error",
    // async 関数内で await がない実装を禁止する。
    "typescript/require-await": "error",
    // + 演算子の型混在を禁止し、数値加算と文字列連結の混同を防ぐ。
    "typescript/restrict-plus-operands": "error",
    // テンプレート文字列へ unsafe な値を埋め込むのを禁止する。
    "typescript/restrict-template-expressions": "error",
    // boolean 文脈に曖昧な型を渡すのを禁止する。
    "typescript/strict-boolean-expressions": "error",
    // switch で union/enum の取りこぼしを検出する。
    "typescript/switch-exhaustiveness-check": "error",
    // this に依存するメソッドを切り離して渡すバグを防ぐ。
    "typescript/unbound-method": "error",
  },
});
