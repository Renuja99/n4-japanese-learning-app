import type { LessonSrc } from "./types";

export const part2: LessonSrc[] = [
  {
    number: 1,
    title: "で・に",
    titleEn: "The particles で and に",
    summary: "Where actions happen vs where things are and where you go.",
    page: 94,
    points: [
      {
        pattern: "で",
        meaning: "at / in (place of action) ・ by / with (means) ・ in (scope) ・ because of",
        formation: "Place + で + action verb\nTool／Transport／Language + で\nScope + で (三人で, 全部で, クラスで一番)",
        explanation:
          "で marks where an action takes place, the means you use, a total or group, and a cause (Noun + で). Ask yourself: is something being done there?",
        level: "N5",
        examples: [
          { ja: "{公園|こうえん}で/{子|こ}どもたちが/{遊|あそ}んでいます。", en: "Children are playing in the park.", hl: "公園で", w: ["公園", "子ども", "遊ぶ"] },
          { ja: "はしで/{食|た}べるのは/{難|むずか}しいです。", en: "Eating with chopsticks is difficult.", hl: "はしで", w: ["はし", "食べる", "難しい"] },
          { ja: "{全部|ぜんぶ}で/{三千円|さんぜんえん}です。", en: "That's 3,000 yen altogether.", hl: "全部で", w: ["全部", "三千円"] },
        ],
        quiz: [
          { q: "{駅|えき}の{前|まえ}（　）{友|とも}だちを{待|ま}ちました。", o: ["で", "に", "を", "へ"], a: 0, ex: "Waiting is an action done there → で." },
          { q: "{日本語|にほんご}（　）レポートを{書|か}きます。", o: ["に", "で", "を", "が"], a: 1, ex: "Language as a means → で." },
        ],
      },
      {
        pattern: "に",
        meaning: "in / at (place of existence) ・ to (destination) ・ at (time) ・ to (recipient)",
        formation: "Place + に + いる／ある／住む\nDestination + に + 行く／入る／乗る／着く\nTime + に\nPerson + に + あげる／会う／聞く",
        explanation:
          "に points to a fixed location or target: where something exists, where something arrives, a specific time, or the person who receives an action.",
        notes: ["住む, 勤める, 座る take に even though they look like actions."],
        level: "N5",
        examples: [
          { ja: "{私|わたし}は/{大阪|おおさか}に/{住|す}んでいます。", en: "I live in Osaka.", hl: "大阪に", w: ["私", "大阪", "住む"] },
          { ja: "{毎朝|まいあさ}/{七時|しちじ}に/{家|いえ}を/{出|で}ます。", en: "I leave home at seven every morning.", hl: "七時に", w: ["毎朝", "七時", "家", "出る"] },
          { ja: "バスに/{乗|の}って、/{会社|かいしゃ}に/{行|い}きます。", en: "I get on the bus and go to the office.", hl: "バスに", w: ["バス", "乗る", "会社", "行く"] },
        ],
        quiz: [
          { q: "{机|つくえ}の{上|うえ}（　）{本|ほん}があります。", o: ["で", "に", "を", "と"], a: 1, ex: "Existence → に." },
          { q: "{椅子|いす}（　）{座|すわ}ってください。", o: ["で", "に", "を", "が"], a: 1, ex: "座る takes に (where you end up)." },
        ],
      },
    ],
  },
  {
    number: 2,
    title: "を・と",
    titleEn: "The particles を and と",
    summary: "Objects, places you move through or leave, and partners.",
    page: 96,
    points: [
      {
        pattern: "を",
        meaning: "(object) ・ through / along (route) ・ out of (place left)",
        formation: "Object + を + transitive verb\nRoute + を + 歩く／渡る／通る／飛ぶ\nPlace left + を + 出る／降りる／卒業する",
        explanation:
          "Besides marking the direct object, を marks a space you move through and a place you leave from.",
        level: "N5",
        examples: [
          { ja: "{橋|はし}を/{渡|わた}って、/{右|みぎ}に/{曲|ま}がって/ください。", en: "Cross the bridge and turn right.", hl: "橋を", w: ["橋", "渡る", "右", "曲がる"] },
          { ja: "{次|つぎ}の/{駅|えき}で/{電車|でんしゃ}を/{降|お}ります。", en: "I get off the train at the next station.", hl: "電車を", w: ["次", "駅", "電車", "降りる"] },
          { ja: "{去年|きょねん}、/{大学|だいがく}を/{卒業|そつぎょう}しました。", en: "I graduated from university last year.", hl: "大学を", w: ["去年", "大学", "卒業"] },
        ],
        quiz: [
          { q: "{鳥|とり}が{空|そら}（　）{飛|と}んでいます。", o: ["を", "に", "で", "へ"], a: 0, ex: "Moving through a space → を." },
          { q: "{毎朝|まいあさ}{八時|はちじ}に{家|いえ}（　）{出|で}ます。", o: ["で", "を", "が", "と"], a: 1, ex: "Place you leave → を." },
        ],
      },
      {
        pattern: "と",
        meaning: "with (partner) ・ and (complete list) ・ (same as / different from)",
        formation: "Person + と + verb (一緒に)\nNoun A + と + Noun B\nA は B と 同じ／違う",
        explanation:
          "と marks someone you do something together with, joins a complete list of nouns, and marks the thing compared in 同じ／違う. Some verbs need a partner: 結婚する, けんかする, 会う.",
        level: "N5",
        examples: [
          { ja: "{週末|しゅうまつ}、/{妹|いもうと}と/{買|か}い{物|もの}に/{行|い}きました。", en: "I went shopping with my little sister at the weekend.", hl: "妹と", w: ["週末", "妹", "買い物", "行く"] },
          { ja: "パンと/{牛乳|ぎゅうにゅう}を/{買|か}いました。", en: "I bought bread and milk.", hl: "パンと", w: ["パン", "牛乳", "買う"] },
          { ja: "{私|わたし}の/{考|かんが}えは/{田中|たなか}さんと/{違|ちが}います。", en: "My opinion is different from Mr Tanaka's.", hl: "田中さんと", w: ["私", "考え", "違う"] },
        ],
        quiz: [
          { q: "{昨日|きのう}、{弟|おとうと}（　）けんかしました。", o: ["を", "と", "で", "が"], a: 1, ex: "けんかする needs a partner → と." },
          { q: "この{色|いろ}はあの{色|いろ}（　）{同|おな}じですか。", o: ["と", "を", "で", "に"], a: 0, ex: "～と同じ." },
        ],
      },
    ],
  },
  {
    number: 3,
    title: "も・しか",
    titleEn: "The particles も and しか",
    summary: "'Also', 'as many as', and 'only' with a negative.",
    page: 98,
    points: [
      {
        pattern: "も",
        meaning: "also / too ・ as many as (emphasis on amount) ・ not even one",
        formation: "Noun + も\nNumber + も (= surprisingly many)\n一 + counter + も + negative (= not even one)",
        explanation:
          "も after a number stresses that the amount is large in the speaker's opinion. With 一つも／一人も／一度も + negative, it means 'not a single one'.",
        examples: [
          { ja: "{私|わたし}も/{日本|にほん}の/{料理|りょうり}が/{好|す}きです。", en: "I like Japanese food too.", hl: "私も", w: ["私", "日本", "料理", "好き"] },
          { ja: "{駅|えき}まで/{一時間|いちじかん}も/かかりました。", en: "It took a whole hour to get to the station.", hl: "一時間も", w: ["駅", "一時間", "かかる"] },
          { ja: "{今日|きょう}は/{一度|いちど}も/{電話|でんわ}が/{鳴|な}りませんでした。", en: "The phone didn't ring even once today.", hl: "一度も", w: ["今日", "一度", "電話", "鳴る"] },
        ],
        quiz: [
          { q: "ケーキを{五|いつ}つ（　）{食|た}べたんですか。", o: ["も", "しか", "だけ", "でも"], a: 0, ex: "Surprise at a large number → も." },
          { q: "{教室|きょうしつ}には{一人|ひとり}（　）いません。", o: ["しか", "も", "だけ", "が"], a: 1, ex: "一人も + negative = nobody." },
        ],
      },
      {
        pattern: "しか～ない",
        meaning: "only ～ (and nothing more — feels like not enough)",
        formation: "Noun／Number + しか + negative verb",
        explanation:
          "しか is always followed by a negative. It sounds like the amount is less than hoped, while だけ is neutral.",
        examples: [
          { ja: "{財布|さいふ}に/{千円|せんえん}しか/ありません。", en: "I only have 1,000 yen in my wallet.", hl: "千円しかありません", w: ["財布", "千円", "ある"] },
          { ja: "{昨日|きのう}は/{三時間|さんじかん}しか/{寝|ね}なかった。", en: "I only slept three hours last night.", hl: "三時間しか寝なかった", w: ["昨日", "三時間", "寝る"] },
          { ja: "この/{店|みせ}は/{現金|げんきん}しか/{使|つか}えません。", en: "You can only use cash at this shop.", hl: "現金しか使えません", w: ["店", "現金", "使う"] },
        ],
        quiz: [
          { q: "{時間|じかん}が{五分|ごふん}しか（　）。", o: ["あります", "ありません", "ある", "あった"], a: 1, ex: "しか needs a negative." },
          { q: "{日本語|にほんご}は{少|すこ}し（　）{話|はな}せません。", o: ["だけ", "しか", "も", "でも"], a: 1, ex: "～しか話せない (with a negative verb)." },
        ],
      },
    ],
  },
  {
    number: 4,
    title: "だけ・でも",
    titleEn: "The particles だけ and でも",
    summary: "'Just / only' and 'or something / even'.",
    page: 100,
    points: [
      {
        pattern: "だけ",
        meaning: "only / just (neutral limit)",
        formation: "Noun／Number + だけ\nVerb (plain) + だけ",
        explanation:
          "Limits something to a certain amount or item, without saying whether it is too little. Can be used with affirmative or negative verbs.",
        examples: [
          { ja: "{朝|あさ}は/コーヒーだけ/{飲|の}みます。", en: "In the morning I just drink coffee.", hl: "コーヒーだけ", w: ["朝", "コーヒー", "飲む"] },
          { ja: "{少|すこ}しだけ/{待|ま}って/ください。", en: "Please wait just a little.", hl: "少しだけ", w: ["少し", "待つ"] },
          { ja: "{見|み}る/だけですから、/{入|はい}っても/いいですか。", en: "I'm only looking — may I come in?", hl: "見るだけ", w: ["見る", "入る", "いい"] },
        ],
        quiz: [
          { q: "{一回|いっかい}（　）でいいから、{会|あ}ってください。", o: ["だけ", "しか", "も", "でも"], a: 0, ex: "Affirmative limit → だけ." },
          { q: "パーティーに{来|き}たのは{三人|さんにん}（　）でした。", o: ["しか", "だけ", "も", "でも"], a: 1, ex: "しか would need a negative verb; だけ works with でした." },
        ],
      },
      {
        pattern: "でも",
        meaning: "…or something (soft suggestion) ・ even ～ ・ any～ (with question words)",
        formation: "Noun + でも\nQuestion word + でも (いつでも, だれでも, 何でも)",
        explanation:
          "でも softens a suggestion by giving one example ('tea or something'). It can also mean 'even' (子どもでもわかる) and, with question words, 'any' (いつでもいい).",
        examples: [
          { ja: "{疲|つか}れたから、/お{茶|ちゃ}でも/{飲|の}みましょう。", en: "I'm tired — let's have some tea or something.", hl: "お茶でも", w: ["疲れる", "お茶", "飲む"] },
          { ja: "この/{問題|もんだい}は/{子|こ}どもでも/わかります。", en: "Even a child can understand this problem.", hl: "子どもでも", w: ["問題", "子ども", "わかる"] },
          { ja: "{困|こま}ったら、/いつでも/{連絡|れんらく}して/ください。", en: "If you're in trouble, contact me any time.", hl: "いつでも", w: ["困る", "いつでも", "連絡"] },
        ],
        quiz: [
          { q: "{暇|ひま}なら、{映画|えいが}（　）{見|み}に{行|い}きませんか。", o: ["でも", "だけ", "しか", "も"], a: 0, ex: "A soft suggestion → でも." },
          { q: "{好|す}きな{物|もの}を{何|なん}（　）{注文|ちゅうもん}してください。", o: ["も", "でも", "しか", "だけ"], a: 1, ex: "何でも = anything." },
        ],
      },
    ],
  },
  {
    number: 5,
    title: "は・が",
    titleEn: "The particles は and が",
    summary: "Topic vs subject.",
    page: 102,
    points: [
      {
        pattern: "は",
        meaning: "as for ～ (topic) ・ contrast",
        formation: "Topic + は + comment\nA は…、B は… (contrast)",
        explanation:
          "は presents something already known as the topic, then says something about it. In contrast, は sets two things against each other, often with a negative: 肉は食べますが、魚は食べません.",
        examples: [
          { ja: "{私|わたし}は/{会社員|かいしゃいん}です。", en: "I'm an office worker.", hl: "私は", w: ["私", "会社員"] },
          { ja: "{肉|にく}は/{食|た}べますが、/{魚|さかな}は/{食|た}べません。", en: "I eat meat, but I don't eat fish.", hl: "魚は", w: ["肉", "食べる", "魚"] },
          { ja: "{東京|とうきょう}へは/{行|い}った/ことが/ありません。", en: "As for Tokyo, I've never been.", hl: "東京へは", w: ["東京", "行く"] },
        ],
        quiz: [
          { q: "お{酒|さけ}は{飲|の}みませんが、ジュース（　）{飲|の}みます。", o: ["は", "が", "を", "も"], a: 0, ex: "Contrast → は." },
          { q: "これ（　）{何|なん}ですか。", o: ["が", "は", "を", "に"], a: 1, ex: "Asking about a known topic → は." },
        ],
      },
      {
        pattern: "が",
        meaning: "(subject) ・ new information ・ subject inside a clause",
        formation: "Question word + が (だれが, どれが)\nSubject inside a modifying or time clause (私が作った料理, 母が来たとき)\nObject of 好き／わかる／できる／ほしい",
        explanation:
          "が marks new or focused information — answers to 'who?/which?', and things that appear or happen. Inside a clause that modifies a noun or a time clause, the subject is marked with が, not は.",
        examples: [
          { ja: "だれが/この/{絵|え}を/{描|か}きましたか。/――{妹|いもうと}が/{描|か}きました。", en: "Who drew this picture? — My little sister drew it.", hl: "妹が", w: ["絵", "描く", "妹"] },
          { ja: "これは/{母|はは}が/{作|つく}った/セーターです。", en: "This is a sweater my mother made.", hl: "母が", w: ["母", "作る", "セーター"] },
          { ja: "あっ、/{雨|あめ}が/{降|ふ}って/きました。", en: "Oh, it's started raining.", hl: "雨が", w: ["雨", "降る"] },
        ],
        quiz: [
          { q: "{私|わたし}（　）{生|う}まれた{町|まち}は{小|ちい}さいです。", o: ["は", "が", "を", "で"], a: 1, ex: "Subject inside a noun-modifying clause → が." },
          { q: "どの{人|ひと}（　）{田中|たなか}さんですか。", o: ["は", "が", "を", "も"], a: 1, ex: "Question word as subject → が." },
        ],
      },
    ],
  },
  {
    number: 6,
    title: "の・こと",
    titleEn: "Nominalisers の and こと",
    summary: "Turning verbs into nouns.",
    page: 106,
    points: [
      {
        pattern: "～の",
        meaning: "(the act of) ～ing — with senses and feelings",
        formation: "Plain form + の + が／を／は\n(な-adj + な + の)",
        explanation:
          "Use の when the verb that follows is about perception (見る, 聞こえる, 見える) or actions happening on the spot (待つ, 手伝う). の is also common with 好き／上手／早い.",
        examples: [
          { ja: "{子|こ}どもたちが/{歌|うた}って/いるのが/{聞|き}こえます。", en: "I can hear the children singing.", hl: "歌っているのが", w: ["子ども", "歌う", "聞こえる"] },
          { ja: "{私|わたし}は/{料理|りょうり}を/{作|つく}るのが/{好|す}きです。", en: "I like cooking.", hl: "作るのが", w: ["私", "料理", "作る", "好き"] },
          { ja: "{友|とも}だちが/{来|く}るのを/{待|ま}っています。", en: "I'm waiting for my friend to come.", hl: "来るのを", w: ["友だち", "来る", "待つ"] },
        ],
        quiz: [
          { q: "{猫|ねこ}が{窓|まど}から{入|はい}る（　）を{見|み}ました。", o: ["の", "こと", "もの", "ため"], a: 0, ex: "With 見る (perception) → の." },
          { q: "{兄|あに}は{泳|およ}ぐ（　）が{速|はや}いです。", o: ["こと", "の", "もの", "ところ"], a: 1, ex: "速い／上手 + の." },
        ],
      },
      {
        pattern: "～こと",
        meaning: "(the fact / matter of) ～ing — with fixed expressions",
        formation: "Plain form + こと\nFixed patterns: ～ことができる／～ことがある／～ことにする／趣味は～ことです",
        explanation:
          "こと is used for abstract facts and in many set patterns. Before です／だ, use こと: 私の趣味は写真を撮ることです (✕ 撮るのです).",
        examples: [
          { ja: "{私|わたし}の/{趣味|しゅみ}は/{写真|しゃしん}を/{撮|と}る/ことです。", en: "My hobby is taking photos.", hl: "撮ることです", w: ["私", "趣味", "写真", "撮る"] },
          { ja: "{彼|かれ}が/{結婚|けっこん}した/ことを/{知|し}っていますか。", en: "Did you know that he got married?", hl: "結婚したことを", w: ["彼", "結婚", "知る"] },
          { ja: "{大切|たいせつ}なのは/{毎日|まいにち}/{続|つづ}ける/ことです。", en: "What matters is keeping it up every day.", hl: "続けることです", w: ["大切", "毎日", "続ける"] },
        ],
        quiz: [
          { q: "{夢|ゆめ}は{先生|せんせい}になる（　）です。", o: ["の", "こと", "もの", "ところ"], a: 1, ex: "Before です in 'X is ～ing' → こと." },
          { q: "{車|くるま}を{運転|うんてん}する（　）ができます。", o: ["の", "こと", "ため", "もの"], a: 1, ex: "Fixed pattern ～ことができる." },
        ],
      },
    ],
  },
  {
    number: 7,
    title: "～て…・～ないで…",
    titleEn: "～て and ～ないで",
    summary: "How you do something, and doing without / instead.",
    page: 108,
    points: [
      {
        pattern: "～て…（方法・状態）",
        meaning: "by ～ing / in a state of ～ing (manner of the next action)",
        formation: "Verb て-form + main verb",
        explanation:
          "The て-clause shows how the main action is done or what state you are in while doing it: 歩いて行く, 座って話す.",
        level: "N5",
        examples: [
          { ja: "{毎日|まいにち}/{自転車|じてんしゃ}に/{乗|の}って/{学校|がっこう}へ/{行|い}きます。", en: "I go to school by bike every day.", hl: "乗って", w: ["毎日", "自転車", "乗る", "学校", "行く"] },
          { ja: "{傘|かさ}を/{持|も}って/{出|で}かけました。", en: "I went out taking an umbrella.", hl: "持って", w: ["傘", "持つ", "出かける"] },
          { ja: "{辞書|じしょ}を/{使|つか}って/{読|よ}みました。", en: "I read it using a dictionary.", hl: "使って", w: ["辞書", "使う", "読む"] },
        ],
        quiz: [
          { q: "{立|た}って（　）ください。", o: ["話して", "話さないで", "話すと", "話すので"], a: 0, ex: "Manner: standing up → 立って話す." },
          { q: "{眼鏡|めがね}を（　）{新聞|しんぶん}を{読|よ}みます。", o: ["かけて", "かけないで", "かけると", "かけたら"], a: 0, ex: "State while doing → かけて." },
        ],
      },
      {
        pattern: "～ないで…",
        meaning: "without ～ing ／ instead of ～ing",
        formation: "Verb ない-form + で + main verb",
        explanation:
          "The negative partner of ～て. It shows an action done without doing something (朝ご飯を食べないで来た), or one thing done instead of another (バスに乗らないで歩いた). Don't confuse it with ～なくて, which gives a reason.",
        examples: [
          { ja: "{今朝|けさ}は/{朝|あさ}ご{飯|はん}を/{食|た}べないで/{来|き}ました。", en: "This morning I came without eating breakfast.", hl: "食べないで", w: ["今朝", "朝ご飯", "食べる", "来る"] },
          { ja: "エレベーターを/{使|つか}わないで、/{階段|かいだん}で/{上|あ}がりましょう。", en: "Let's take the stairs instead of using the lift.", hl: "使わないで", w: ["エレベーター", "使う", "階段", "上がる"] },
          { ja: "{砂糖|さとう}を/{入|い}れないで/コーヒーを/{飲|の}みます。", en: "I drink coffee without sugar.", hl: "入れないで", w: ["砂糖", "入れる", "コーヒー", "飲む"] },
        ],
        quiz: [
          { q: "{昨日|きのう}は{歯|は}を（　）{寝|ね}てしまいました。", o: ["みがかないで", "みがかなくて", "みがかなければ", "みがかないと"], a: 0, ex: "Without doing → ないで." },
          { q: "{子|こ}どもが{帰|かえ}って（　）、{心配|しんぱい}です。", o: ["こないで", "こなくて", "こなければ", "こないと"], a: 1, ex: "Reason → なくて (not ないで)." },
        ],
      },
    ],
  },
  {
    number: 8,
    title: "他動詞・自動詞",
    titleEn: "Transitive and intransitive verbs",
    summary: "開ける／開く and other verb pairs.",
    page: 110,
    points: [
      {
        pattern: "他動詞（～を＋Vt）",
        meaning: "someone does something to an object",
        formation: "Person が／は Object を + transitive verb\n開ける, 閉める, つける, 消す, 始める, 止める, 入れる, 出す, 落とす, 壊す",
        explanation:
          "A transitive verb has someone acting on something. Use it when the person doing the action matters, or when asking someone to do something (窓を開けてください).",
        examples: [
          { ja: "{寒|さむ}いので/{窓|まど}を/{閉|し}めました。", en: "It was cold, so I closed the window.", hl: "窓を閉めました", w: ["寒い", "窓", "閉める"] },
          { ja: "{部屋|へや}を/{出|で}る/とき、/{電気|でんき}を/{消|け}して/ください。", en: "Please turn off the light when you leave the room.", hl: "電気を消して", w: ["部屋", "出る", "とき", "電気", "消す"] },
          { ja: "{先生|せんせい}が/{授業|じゅぎょう}を/{始|はじ}めます。", en: "The teacher starts the class.", hl: "授業を始めます", w: ["先生", "授業", "始める"] },
        ],
        quiz: [
          { q: "{財布|さいふ}を（　）しまいました。", o: ["落として", "落ちて", "落ちられて", "落とされて"], a: 0, ex: "I dropped my wallet → transitive 落とす + を." },
          { q: "テレビを（　）ください。", o: ["ついて", "つけて", "ついで", "つかせて"], a: 1, ex: "A request needs a transitive verb: つける." },
        ],
      },
      {
        pattern: "自動詞（～が＋Vi）",
        meaning: "something happens / changes by itself",
        formation: "Thing が + intransitive verb\n開く, 閉まる, つく, 消える, 始まる, 止まる, 入る, 出る, 落ちる, 壊れる",
        explanation:
          "An intransitive verb describes the change itself, without focusing on who caused it. Japanese often uses it to describe what happened neutrally (コップが割れた).",
        examples: [
          { ja: "{風|かぜ}で/ドアが/{閉|し}まりました。", en: "The door closed because of the wind.", hl: "ドアが閉まりました", w: ["風", "ドア", "閉まる"] },
          { ja: "{急|きゅう}に/{電気|でんき}が/{消|き}えました。", en: "The lights suddenly went out.", hl: "電気が消えました", w: ["急に", "電気", "消える"] },
          { ja: "{授業|じゅぎょう}は/{九時|くじ}に/{始|はじ}まります。", en: "Class starts at nine.", hl: "始まります", w: ["授業", "九時", "始まる"] },
        ],
        quiz: [
          { q: "{棚|たな}から{本|ほん}が（　）。", o: ["落としました", "落ちました", "落とされました", "落とさせました"], a: 1, ex: "Fell by itself → 落ちる + が." },
          { q: "パソコンが{急|きゅう}に（　）。", o: ["壊しました", "壊れました", "壊させました", "壊してしまいました"], a: 1, ex: "Broke by itself → 壊れる." },
        ],
      },
    ],
  },
  {
    number: 9,
    title: "～ています・～てあります",
    titleEn: "～ている and ～てある",
    summary: "Ongoing actions, resulting states, and states someone prepared.",
    page: 112,
    points: [
      {
        pattern: "～ています",
        meaning: "is ～ing (in progress) ・ is in the state of having ～ed ・ habit",
        formation: "Verb て-form + います\nAction verb → in progress (食べている)\nChange verb (intransitive) → resulting state (窓が開いている, 結婚している)",
        explanation:
          "With action verbs, ～ている shows an action in progress or a habit. With change verbs (開く, 落ちる, 結婚する, 住む), it shows the state that remains after the change.",
        level: "N5",
        examples: [
          { ja: "{弟|おとうと}は/{今|いま}、/{宿題|しゅくだい}を/しています。", en: "My little brother is doing his homework now.", hl: "しています", w: ["弟", "今", "宿題"] },
          { ja: "{窓|まど}が/{開|あ}いて/いますよ。", en: "The window is open.", hl: "開いています", w: ["窓", "開く"] },
          { ja: "{姉|あね}は/{結婚|けっこん}して/います。", en: "My older sister is married.", hl: "結婚しています", w: ["姉", "結婚"] },
        ],
        quiz: [
          { q: "{道|みち}にお{金|かね}が{落|お}ち（　）。", o: ["ています", "てあります", "ておきます", "てみます"], a: 0, ex: "Intransitive verb + ている = resulting state." },
          { q: "{父|ちち}は{銀行|ぎんこう}に{勤|つと}め（　）。", o: ["てあります", "ています", "ておきます", "てしまいます"], a: 1, ex: "Ongoing state (job) → ている." },
        ],
      },
      {
        pattern: "～てあります",
        meaning: "has been ～ed (by someone, on purpose)",
        formation: "Thing が + transitive verb て-form + あります",
        explanation:
          "Describes a state that someone deliberately created, usually as preparation. Compare 窓が開いている (it's open) with 窓が開けてある (someone has opened it, for a reason).",
        examples: [
          { ja: "{壁|かべ}に/カレンダーが/{掛|か}けて/あります。", en: "A calendar has been hung on the wall.", hl: "掛けてあります", w: ["壁", "カレンダー", "掛ける"] },
          { ja: "{会議室|かいぎしつ}の/{窓|まど}は/もう/{開|あ}けて/あります。", en: "The meeting-room windows have already been opened.", hl: "開けてあります", w: ["会議室", "窓", "もう", "開ける"] },
          { ja: "{冷蔵庫|れいぞうこ}に/ビールが/{冷|ひ}やして/ありますよ。", en: "There's beer chilling in the fridge (I put it there).", hl: "冷やしてあります", w: ["冷蔵庫", "ビール", "冷やす"] },
        ],
        quiz: [
          { q: "{黒板|こくばん}に{名前|なまえ}が{書|か}いて（　）。", o: ["あります", "います", "おきます", "みます"], a: 0, ex: "Transitive verb + てある." },
          { q: "パーティーの{準備|じゅんび}はもう{全部|ぜんぶ}し（　）。", o: ["てあります", "ています", "てきます", "ていきます"], a: 0, ex: "Prepared on purpose → てある." },
        ],
      },
    ],
  },
  {
    number: 10,
    title: "～てきます・～ていきます",
    titleEn: "～てくる and ～ていく",
    summary: "Direction of movement and change over time.",
    page: 114,
    points: [
      {
        pattern: "～てきます",
        meaning: "come ～ing (toward me) ・ go and come back ・ has been ～ing up to now",
        formation: "Verb て-form + きます",
        explanation:
          "Shows movement toward the speaker (走ってきた), going somewhere and returning (買ってきます), or a change that has continued up to now (寒くなってきた).",
        examples: [
          { ja: "ちょっと/コンビニで/{飲|の}み{物|もの}を/{買|か}って/きます。", en: "I'll just go and buy a drink at the convenience store.", hl: "買ってきます", w: ["ちょっと", "コンビニ", "飲み物", "買う"] },
          { ja: "{向|む}こうから/{犬|いぬ}が/{走|はし}って/きました。", en: "A dog came running from over there.", hl: "走ってきました", w: ["向こう", "犬", "走る"] },
          { ja: "だんだん/{日本|にほん}の/{生活|せいかつ}に/{慣|な}れて/きました。", en: "I've gradually got used to life in Japan.", hl: "慣れてきました", w: ["だんだん", "日本", "生活", "慣れる"] },
        ],
        quiz: [
          { q: "{雨|あめ}が{降|ふ}って（　）。{傘|かさ}を{持|も}っていきましょう。", o: ["きました", "いきました", "おきました", "みました"], a: 0, ex: "Change that has started → てきた." },
          { q: "{忘|わす}れ{物|もの}をしたので、{取|と}って（　）。", o: ["きます", "いきます", "あります", "おきます"], a: 0, ex: "Go and come back → てくる." },
        ],
      },
      {
        pattern: "～ていきます",
        meaning: "go ～ing (away from me) ・ will continue to ～ from now on",
        formation: "Verb て-form + いきます",
        explanation:
          "Shows movement away from the speaker (持っていく), or a change that will continue into the future (これから人口は減っていく).",
        examples: [
          { ja: "{明日|あした}の/ハイキングに/お{弁当|べんとう}を/{持|も}って/いきます。", en: "I'll take a packed lunch on tomorrow's hike.", hl: "持っていきます", w: ["明日", "ハイキング", "弁当", "持つ"] },
          { ja: "{鳥|とり}が/{南|みなみ}へ/{飛|と}んで/いきました。", en: "The birds flew off to the south.", hl: "飛んでいきました", w: ["鳥", "南", "飛ぶ"] },
          { ja: "これからも/{日本語|にほんご}の/{勉強|べんきょう}を/{続|つづ}けて/いきたいです。", en: "I want to keep studying Japanese from now on.", hl: "続けていきたい", w: ["日本語", "勉強", "続ける"] },
        ],
        quiz: [
          { q: "これから{寒|さむ}くなって（　）でしょう。", o: ["いく", "くる", "ある", "おく"], a: 0, ex: "Change continuing into the future → ていく." },
          { q: "{友|とも}だちの{家|いえ}にケーキを{買|か}って（　）。", o: ["いきます", "あります", "みます", "います"], a: 0, ex: "Take it there → ていく." },
        ],
      },
    ],
  },
  {
    number: 11,
    title: "こ・そ・あ",
    titleEn: "Demonstratives こ・そ・あ",
    summary: "これ・それ・あれ in conversation and in writing.",
    page: 118,
    points: [
      {
        pattern: "こ・そ・あ（会話）",
        meaning: "this (near me) ・ that (near you) ・ that over there",
        formation: "こ: near the speaker\nそ: near the listener\nあ: far from both, or something both people know",
        explanation:
          "In conversation, こ／そ／あ point to physical distance. When talking about something from the past that both people know, use あ (あの店, おいしかったね).",
        level: "N5",
        examples: [
          { ja: "その/かばん、/すてきですね。/どこで/{買|か}いましたか。", en: "That bag (you have) is lovely. Where did you buy it?", hl: "その", w: ["かばん", "すてき", "買う"] },
          { ja: "{昨日|きのう}/{行|い}った/あの/{店|みせ}、/また/{行|い}きたいね。", en: "That shop we went to yesterday — I want to go again.", hl: "あの", w: ["昨日", "行く", "店", "また"] },
          { ja: "これは/{私|わたし}の/{国|くに}の/お{菓子|かし}です。", en: "This is a sweet from my country.", hl: "これ", w: ["私", "国", "お菓子"] },
        ],
        quiz: [
          { q: "A「{先週|せんしゅう}{一緒|いっしょ}に{見|み}た{映画|えいが}、よかったね。」B「うん、（　）{映画|えいが}はよかった。」", o: ["この", "その", "あの", "どの"], a: 2, ex: "Something both people experienced → あの." },
          { q: "A「すみません、（　）ペン、ちょっと{貸|か}してください。」（{相手|あいて}が{持|も}っている）", o: ["この", "その", "あの", "どの"], a: 1, ex: "Near the listener → その." },
        ],
      },
      {
        pattern: "そ（文章・話の中で）",
        meaning: "that (the thing just mentioned)",
        formation: "それ／その／そこ refers back to something just said or written",
        explanation:
          "When referring back to something in a text, or something only one person knows about, use そ-words. あ-words are only for things both people share.",
        examples: [
          { ja: "{駅|えき}の/{近|ちか}くに/{新|あたら}しい/カフェが/できました。/その/{店|みせ}の/ケーキは/{人気|にんき}です。", en: "A new café opened near the station. Its cakes are popular.", hl: "その店", w: ["駅", "近く", "新しい", "カフェ", "店", "ケーキ", "人気"] },
          { ja: "{昨日|きのう}/{山田|やまだ}という/{人|ひと}に/{会|あ}いました。/その/{人|ひと}は/{医者|いしゃ}でした。", en: "Yesterday I met someone called Yamada. That person was a doctor.", hl: "その人", w: ["昨日", "人", "会う", "医者"] },
          { ja: "{漢字|かんじ}が/{難|むずか}しいと/{言|い}う/{人|ひと}が/{多|おお}いです。/それは/{数|かず}が/{多|おお}いからです。", en: "Many people say kanji are hard. That's because there are so many.", hl: "それは", w: ["漢字", "難しい", "言う", "人", "多い", "数"] },
        ],
        quiz: [
          { q: "{私|わたし}の{町|まち}には{古|ふる}いお{寺|てら}があります。（　）お{寺|てら}は{有名|ゆうめい}です。", o: ["その", "あの", "この", "どの"], a: 0, ex: "Referring back in a text → その." },
          { q: "A「{佐藤|さとう}さんという{先生|せんせい}を{知|し}っていますか。」B「いいえ、（　）{人|ひと}は{知|し}りません。」", o: ["あの", "その", "この", "どの"], a: 1, ex: "B doesn't know the person → その." },
        ],
      },
    ],
  },
  {
    number: 12,
    title: "接続の言葉",
    titleEn: "Conjunctions",
    summary: "Words that link sentences: だから, でも, それに and more.",
    page: 120,
    points: [
      {
        pattern: "だから・それで・すると",
        meaning: "so / therefore ・ and so ・ and then (result)",
        formation: "Sentence。 + だから／それで／すると + sentence。",
        explanation:
          "だから gives the speaker's own conclusion and can be followed by requests or opinions. それで connects a cause to a natural result. すると means 'and then (something happened)'.",
        examples: [
          { ja: "{明日|あした}は/テストです。/だから、/{今晩|こんばん}は/{勉強|べんきょう}します。", en: "There's a test tomorrow. So I'm studying tonight.", hl: "だから", w: ["明日", "テスト", "今晩", "勉強"] },
          { ja: "{寝坊|ねぼう}しました。/それで、/{遅刻|ちこく}して/しまいました。", en: "I overslept. And so I ended up being late.", hl: "それで", w: ["寝坊", "遅刻"] },
          { ja: "ボタンを/{押|お}しました。/すると、/ドアが/{開|あ}きました。", en: "I pressed the button. Then the door opened.", hl: "すると", w: ["ボタン", "押す", "ドア", "開く"] },
        ],
        quiz: [
          { q: "{雨|あめ}が{降|ふ}りそうです。（　）、{傘|かさ}を{持|も}っていってください。", o: ["だから", "それで", "でも", "それに"], a: 0, ex: "Followed by a request → だから." },
          { q: "{窓|まど}を{開|あ}けました。（　）、{冷|つめ}たい{風|かぜ}が{入|はい}ってきました。", o: ["しかし", "すると", "それに", "ところで"], a: 1, ex: "And then something happened → すると." },
        ],
      },
      {
        pattern: "でも・しかし・けれども",
        meaning: "but / however",
        formation: "Sentence。 + でも／しかし／けれども + sentence。",
        explanation: "All show contrast. でも is conversational, しかし is formal or written, and けれども (けど) sits in between.",
        examples: [
          { ja: "この/{服|ふく}は/すてきです。/でも、/ちょっと/{高|たか}いです。", en: "These clothes are lovely. But they're a bit expensive.", hl: "でも", w: ["服", "すてき", "ちょっと", "高い"] },
          { ja: "{一生懸命|いっしょうけんめい}/{練習|れんしゅう}した。/しかし、/{試合|しあい}には/{負|ま}けた。", en: "We practised hard. However, we lost the match.", hl: "しかし", w: ["一生懸命", "練習", "試合", "負ける"] },
          { ja: "{行|い}きたいです。/けれども、/{時間|じかん}が/ありません。", en: "I want to go. But I don't have time.", hl: "けれども", w: ["行く", "時間", "ある"] },
        ],
        quiz: [
          { q: "{薬|くすり}を{飲|の}みました。（　）、まだ{頭|あたま}が{痛|いた}いです。", o: ["でも", "だから", "それで", "すると"], a: 0, ex: "Contrast → でも." },
          { q: "{日本|にほん}の{人口|じんこう}は{減|へ}っている。（　）、{東京|とうきょう}の{人口|じんこう}は{増|ふ}えている。", o: ["しかし", "それで", "だから", "それに"], a: 0, ex: "Written contrast → しかし." },
        ],
      },
      {
        pattern: "それに・それから・ところで",
        meaning: "besides / what's more ・ and then / also ・ by the way",
        formation: "Sentence。 + それに／それから／ところで + sentence。",
        explanation:
          "それに adds another point of the same kind (often another reason). それから adds the next action or item. ところで changes the topic.",
        examples: [
          { ja: "この/アパートは/{駅|えき}から/{近|ちか}いです。/それに、/{家賃|やちん}も/{安|やす}いです。", en: "This flat is near the station. What's more, the rent is cheap too.", hl: "それに", w: ["アパート", "駅", "近い", "家賃", "安い"] },
          { ja: "シャワーを/{浴|あ}びました。/それから、/{寝|ね}ました。", en: "I took a shower. And then I went to bed.", hl: "それから", w: ["シャワー", "浴びる", "寝る"] },
          { ja: "いい/{天気|てんき}ですね。/ところで、/{来週|らいしゅう}の/{旅行|りょこう}は/どう/なりましたか。", en: "Nice weather, isn't it. By the way, what happened with next week's trip?", hl: "ところで", w: ["いい", "天気", "来週", "旅行", "なる"] },
        ],
        quiz: [
          { q: "{彼|かれ}は{優|やさ}しいです。（　）、おもしろいです。", o: ["それに", "でも", "ところで", "すると"], a: 0, ex: "Adding another good point → それに." },
          { q: "{試験|しけん}、{終|お}わったね。（　）、{夏休|なつやす}みはどうするの？", o: ["それで", "ところで", "だから", "しかし"], a: 1, ex: "Changing the topic → ところで." },
        ],
      },
    ],
  },
  {
    number: 13,
    title: "副詞",
    titleEn: "Adverbs",
    summary: "Adverbs that pair with negatives, certainty and time.",
    page: 122,
    points: [
      {
        pattern: "あまり・ぜんぜん・なかなか ＋ ～ない",
        meaning: "not very ・ not at all ・ not easily / just won't",
        formation: "あまり + negative\nぜんぜん + negative\nなかなか + negative (things don't go as hoped)",
        explanation:
          "These adverbs come with a negative ending. なかなか～ない means something takes longer or is harder than expected (バスがなかなか来ない).",
        examples: [
          { ja: "{今日|きょう}は/あまり/{寒|さむ}く/ないです。", en: "It's not very cold today.", hl: "あまり", w: ["今日", "あまり", "寒い"] },
          { ja: "{彼|かれ}の/{話|はなし}は/ぜんぜん/わかりませんでした。", en: "I didn't understand his talk at all.", hl: "ぜんぜん", w: ["彼", "話", "ぜんぜん", "わかる"] },
          { ja: "{待|ま}っても/バスが/なかなか/{来|き}ません。", en: "However long I wait, the bus just won't come.", hl: "なかなか", w: ["待つ", "バス", "なかなか", "来る"] },
        ],
        quiz: [
          { q: "{日本語|にほんご}の{発音|はつおん}が（　）{上手|じょうず}になりません。", o: ["なかなか", "きっと", "ぜひ", "たぶん"], a: 0, ex: "Not improving as hoped → なかなか～ない." },
          { q: "{肉|にく}は（　）{好|す}きじゃないです。", o: ["とても", "あまり", "ずっと", "もっと"], a: 1, ex: "あまり + negative." },
        ],
      },
      {
        pattern: "きっと・たぶん・ぜひ・もし",
        meaning: "surely ・ probably ・ by all means ・ if",
        formation: "きっと + ～でしょう／～と思う\nたぶん + ～でしょう\nぜひ + ～たい／～てください\nもし + ～たら／～ば",
        explanation:
          "These adverbs set up the end of the sentence. ぜひ goes with wishes and requests (never with negatives or simple facts). もし goes with conditionals.",
        examples: [
          { ja: "{彼|かれ}は/きっと/{来|く}るでしょう。", en: "He'll surely come.", hl: "きっと", w: ["彼", "きっと", "来る"] },
          { ja: "{日本|にほん}に/{来|き}たら、/ぜひ/{連絡|れんらく}して/ください。", en: "If you come to Japan, be sure to get in touch.", hl: "ぜひ", w: ["日本", "来る", "ぜひ", "連絡"] },
          { ja: "もし/{宝|たから}くじが/{当|あ}たったら、/{世界旅行|せかいりょこう}を/したいです。", en: "If I won the lottery, I'd like to travel around the world.", hl: "もし", w: ["もし", "宝くじ", "当たる", "世界旅行"] },
        ],
        quiz: [
          { q: "{一度|いちど}（　）{京都|きょうと}へ{行|い}ってみたいです。", o: ["ぜひ", "たぶん", "きっと", "なかなか"], a: 0, ex: "A wish (～たい) → ぜひ." },
          { q: "（　）{明日|あした}{雨|あめ}だったら、{試合|しあい}は{中止|ちゅうし}です。", o: ["ぜひ", "もし", "きっと", "ずっと"], a: 1, ex: "With a conditional → もし." },
        ],
      },
      {
        pattern: "もう・まだ・ずっと・そろそろ",
        meaning: "already / anymore ・ still / not yet ・ the whole time ・ soon (it's about time)",
        formation: "もう + affirmative = already／もう + negative = not anymore\nまだ + affirmative = still／まだ + ～ていない = not yet",
        explanation:
          "The meaning of もう and まだ changes with the verb ending. ずっと means continuously for a long time; そろそろ means 'it's nearly time to…'.",
        examples: [
          { ja: "もう/{昼|ひる}ご{飯|はん}を/{食|た}べましたか。/――いいえ、/まだです。", en: "Have you had lunch yet? — No, not yet.", hl: "もう／まだ", w: ["もう", "昼ご飯", "食べる", "まだ"] },
          { ja: "{朝|あさ}から/ずっと/{雨|あめ}が/{降|ふ}っています。", en: "It's been raining the whole time since morning.", hl: "ずっと", w: ["朝", "ずっと", "雨", "降る"] },
          { ja: "もう/{十時|じゅうじ}ですね。/そろそろ/{帰|かえ}りましょうか。", en: "It's already ten. Shall we head home soon?", hl: "そろそろ", w: ["もう", "十時", "そろそろ", "帰る"] },
        ],
        quiz: [
          { q: "{宿題|しゅくだい}は（　）{終|お}わっていません。", o: ["もう", "まだ", "ずっと", "そろそろ"], a: 1, ex: "Not yet → まだ～ていない." },
          { q: "{疲|つか}れたので、（　）{歩|ある}けません。", o: ["まだ", "もう", "そろそろ", "ぜひ"], a: 1, ex: "もう + negative = can't anymore." },
        ],
      },
    ],
  },
  {
    number: 14,
    title: "～すぎます・～にくいです・～やすいです",
    titleEn: "Too much, hard to, easy to",
    summary: "すぎる, にくい and やすい.",
    page: 124,
    points: [
      {
        pattern: "～すぎます",
        meaning: "too ～ / do ～ too much",
        formation: "Verb ます-stem + すぎます (食べすぎる)\nい-adj − い + すぎます (高すぎる; いい → よすぎる)\nな-adj + すぎます (静かすぎる)",
        explanation:
          "Says something goes beyond the right level, usually with a negative feeling. すぎる conjugates as a Group II verb: 食べすぎて, 高すぎない.",
        examples: [
          { ja: "{昨日|きのう}は/{飲|の}みすぎて、/{頭|あたま}が/{痛|いた}いです。", en: "I drank too much yesterday, so I have a headache.", hl: "飲みすぎて", w: ["昨日", "飲む", "頭", "痛い"] },
          { ja: "この/{靴|くつ}は/{大|おお}きすぎます。", en: "These shoes are too big.", hl: "大きすぎます", w: ["靴", "大きい"] },
          { ja: "この/{町|まち}は/{静|しず}かすぎて、/ちょっと/{寂|さび}しいです。", en: "This town is too quiet — it's a bit lonely.", hl: "静かすぎて", w: ["町", "静か", "ちょっと", "寂しい"] },
        ],
        quiz: [
          { q: "{働|はたら}き（　）{病気|びょうき}になってしまいました。", o: ["すぎて", "やすくて", "にくくて", "ながら"], a: 0, ex: "Worked too much → 働きすぎて." },
          { q: "この{問題|もんだい}は{難|むずか}し（　）、わかりません。", o: ["すぎて", "いすぎて", "くすぎて", "すぎで"], a: 0, ex: "い-adj drops い: 難しすぎて." },
        ],
      },
      {
        pattern: "～やすいです・～にくいです",
        meaning: "easy to ～ ／ hard to ～",
        formation: "Verb ます-stem + やすい／にくい",
        explanation:
          "Says how easy or hard an action is, or how likely something is to happen (壊れやすい — breaks easily). The result is an い-adjective.",
        examples: [
          { ja: "この/ペンは/{書|か}きやすいです。", en: "This pen is easy to write with.", hl: "書きやすい", w: ["ペン", "書く"] },
          { ja: "{先生|せんせい}の/{説明|せつめい}は/わかりやすいです。", en: "The teacher's explanations are easy to understand.", hl: "わかりやすい", w: ["先生", "説明", "わかる"] },
          { ja: "この/{薬|くすり}は/{苦|にが}くて/{飲|の}みにくいです。", en: "This medicine is bitter and hard to swallow.", hl: "飲みにくい", w: ["薬", "苦い", "飲む"] },
        ],
        quiz: [
          { q: "ガラスのコップは{割|わ}れ（　）から、{気|き}をつけてください。", o: ["やすい", "にくい", "すぎる", "たい"], a: 0, ex: "Breaks easily → 割れやすい." },
          { q: "{字|じ}が{小|ちい}さくて{読|よ}み（　）です。", o: ["やすい", "にくい", "すぎ", "たい"], a: 1, ex: "Small letters → hard to read." },
        ],
      },
    ],
  },
  {
    number: 15,
    title: "品詞",
    titleEn: "Parts of speech",
    summary: "Modifying nouns and turning adjectives into adverbs.",
    page: 126,
    points: [
      {
        pattern: "名詞修飾",
        meaning: "describing a noun with a verb, adjective or clause",
        formation: "Verb (plain) + Noun (昨日買った本)\nい-adj + Noun (高い山)\nな-adj + な + Noun (静かな町)\nNoun + の + Noun (日本の車)",
        explanation:
          "Japanese puts the description before the noun. Inside the description, verbs are in plain form and the subject takes が (or の).",
        examples: [
          { ja: "これは/{昨日|きのう}/{買|か}った/{本|ほん}です。", en: "This is the book I bought yesterday.", hl: "昨日買った本", w: ["昨日", "買う", "本"] },
          { ja: "{静|しず}かな/{所|ところ}で/{勉強|べんきょう}したいです。", en: "I want to study somewhere quiet.", hl: "静かな所", w: ["静か", "所", "勉強"] },
          { ja: "{母|はは}が/{作|つく}る/カレーが/{一番|いちばん}/おいしいです。", en: "The curry my mother makes is the best.", hl: "母が作るカレー", w: ["母", "作る", "カレー", "一番", "おいしい"] },
        ],
        quiz: [
          { q: "{有名|ゆうめい}（　）{歌手|かしゅ}に{会|あ}いました。", o: ["な", "の", "に", "で"], a: 0, ex: "な-adj + な + noun." },
          { q: "{日本|にほん}で{一番|いちばん}{高|たか}い（　）は{富士山|ふじさん}です。", o: ["な山", "山", "の山", "に山"], a: 1, ex: "い-adj connects directly to a noun." },
        ],
      },
      {
        pattern: "～く・～に（副詞的用法）",
        meaning: "～ly (adjective used as an adverb)",
        formation: "い-adj − い + く + verb (早く起きる)\nな-adj + に + verb (きれいに書く)",
        explanation: "Adjectives change form to describe how an action is done.",
        examples: [
          { ja: "{明日|あした}は/{早|はや}く/{起|お}きなければ/なりません。", en: "I have to get up early tomorrow.", hl: "早く", w: ["明日", "早い", "起きる"] },
          { ja: "{字|じ}を/もっと/きれいに/{書|か}いて/ください。", en: "Please write your letters more neatly.", hl: "きれいに", w: ["字", "もっと", "きれい", "書く"] },
          { ja: "{子|こ}どもたちは/{元気|げんき}に/{走|はし}り{回|まわ}っています。", en: "The children are running around energetically.", hl: "元気に", w: ["子ども", "元気", "走り回る"] },
        ],
        quiz: [
          { q: "もう{少|すこ}し（　）{話|はな}してください。", o: ["ゆっくりな", "ゆっくり", "ゆっくりで", "ゆっくりく"], a: 1, ex: "ゆっくり is already an adverb." },
          { q: "{部屋|へや}を（　）{掃除|そうじ}しました。", o: ["きれいな", "きれいに", "きれく", "きれいで"], a: 1, ex: "な-adj + に before a verb." },
        ],
      },
    ],
  },
];
