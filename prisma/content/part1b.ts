import type { LessonSrc } from "./types";

export const part1b: LessonSrc[] = [
  {
    number: 14,
    title: "条件（１）",
    titleEn: "Conditions (1)",
    summary: "たら, ば／なら and と for 'if' and 'when'.",
    page: 62,
    points: [
      {
        pattern: "～たら…（条件）",
        meaning: "if ～ ／ when ～ (once ～ happens)",
        formation: "Verb た-form + ら (行ったら)\nい-adj: ～かったら\nな-adj・Noun: ～だったら",
        explanation:
          "The most flexible conditional. The second part can be a request, invitation, wish or intention. When the condition is certain to happen, たら means 'when / once': 駅に着いたら電話してください.",
        examples: [
          { ja: "{駅|えき}に/{着|つ}いたら、/{電話|でんわ}して/ください。", en: "When you get to the station, please call me.", hl: "着いたら", w: ["駅", "着く", "電話"] },
          { ja: "もし/{雨|あめ}だったら、/{試合|しあい}は/{中止|ちゅうし}です。", en: "If it rains, the match will be cancelled.", hl: "雨だったら", w: ["もし", "雨", "試合", "中止"] },
          { ja: "{安|やす}かったら、/{二|ふた}つ/{買|か}いたいです。", en: "If it's cheap, I want to buy two.", hl: "安かったら", w: ["安い", "二つ", "買う"] },
        ],
        quiz: [
          { q: "{仕事|しごと}が{終|お}わっ（　）、{飲|の}みに{行|い}きましょう。", o: ["たら", "ば", "と", "なら"], a: 0, ex: "After the condition happens + invitation → たら." },
          { q: "{暇|ひま}（　）、{手伝|てつだ}ってください。", o: ["かったら", "だったら", "たら", "くたら"], a: 1, ex: "な-adj + だったら." },
        ],
      },
      {
        pattern: "～ば…・～なら…",
        meaning: "if ～ (the condition needed for a result)",
        formation: "Verb／い-adj ば-form (行けば, 高ければ)\nな-adj・Noun + なら",
        explanation:
          "ば focuses on the condition: 'if (only) ～, then …'. When the first part is an action verb, the second part usually can't be a request or intention — use たら instead. With states (ある, いる, adjectives) any ending is fine.",
        notes: ["Common phrases: ～ばいい (you just need to ～), ～ばよかった (I wish I had ～)."],
        examples: [
          { ja: "この/ボタンを/{押|お}せば、/ドアが/{開|あ}きます。", en: "If you press this button, the door opens.", hl: "押せば", w: ["ボタン", "押す", "ドア", "開く"] },
          { ja: "{天気|てんき}が/よければ、/{山|やま}に/{登|のぼ}りましょう。", en: "If the weather is good, let's climb the mountain.", hl: "よければ", w: ["天気", "いい", "山", "登る"] },
          { ja: "わからなければ、/{先生|せんせい}に/{聞|き}けば/いいですよ。", en: "If you don't understand, you just need to ask the teacher.", hl: "聞けばいい", w: ["わかる", "先生", "聞く", "いい"] },
        ],
        quiz: [
          { q: "{時間|じかん}が（　）、もう{少|すこ}し{話|はな}したかったです。", o: ["あれば", "あると", "あるなら", "あって"], a: 0, ex: "A state verb (ある) works naturally with ば." },
          { q: "{静|しず}か（　）、この{部屋|へや}を{借|か}ります。", o: ["ければ", "なら", "れば", "と"], a: 1, ex: "な-adj + なら." },
        ],
      },
      {
        pattern: "～と…（条件）",
        meaning: "whenever ～ / if ～ (natural, automatic result)",
        formation: "Plain non-past + と\n(な-adj・Noun + だと)",
        explanation:
          "Used for results that always follow: nature, machines, habits and directions. The second part can't be a request, wish or intention.",
        examples: [
          { ja: "{春|はる}に/なると、/{桜|さくら}が/{咲|さ}きます。", en: "When spring comes, the cherry blossoms bloom.", hl: "なると", w: ["春", "なる", "桜", "咲く"] },
          { ja: "この/{道|みち}を/まっすぐ/{行|い}くと、/{右|みぎ}に/{銀行|ぎんこう}が/あります。", en: "If you go straight along this road, there's a bank on the right.", hl: "行くと", w: ["道", "まっすぐ", "行く", "右", "銀行", "ある"] },
          { ja: "{私|わたし}は/お{酒|さけ}を/{飲|の}むと、/{顔|かお}が/{赤|あか}く/なります。", en: "Whenever I drink alcohol, my face goes red.", hl: "飲むと", w: ["私", "酒", "飲む", "顔", "赤い", "なる"] },
        ],
        quiz: [
          { q: "{右|みぎ}に{曲|ま}がる（　）、{駅|えき}が{見|み}えます。", o: ["と", "たら", "なら", "ので"], a: 0, ex: "Giving directions → と." },
          { q: "{冬|ふゆ}になる（　）、ここは{雪|ゆき}で{白|しろ}くなります。", o: ["なら", "と", "ても", "のに"], a: 1, ex: "A natural, repeated result → と." },
        ],
      },
    ],
  },
  {
    number: 15,
    title: "条件（２）",
    titleEn: "Conditions (2)",
    summary: "たら for discoveries, and なら for advice.",
    page: 64,
    points: [
      {
        pattern: "～たら…（発見・きっかけ）",
        meaning: "when I did ～, (I found / it turned out) …",
        formation: "Verb た-form + ら + past-tense result",
        explanation:
          "With a past result, たら describes something you discovered or something that happened unexpectedly after your action. The result is outside your control.",
        examples: [
          { ja: "{家|いえ}に/{帰|かえ}ったら、/{荷物|にもつ}が/{届|とど}いていました。", en: "When I got home, a package had arrived.", hl: "帰ったら", w: ["家", "帰る", "荷物", "届く"] },
          { ja: "{窓|まど}を/{開|あ}けたら、/{雪|ゆき}が/{降|ふ}っていました。", en: "When I opened the window, it was snowing.", hl: "開けたら", w: ["窓", "開ける", "雪", "降る"] },
          { ja: "{薬|くすり}を/{飲|の}んだら、/すぐ/{治|なお}りました。", en: "When I took the medicine, I got better right away.", hl: "飲んだら", w: ["薬", "飲む", "すぐ", "治る"] },
        ],
        quiz: [
          { q: "{箱|はこ}を{開|あ}け（　）、{中|なか}は{空|から}でした。", o: ["たら", "れば", "るなら", "ても"], a: 0, ex: "A discovery after an action → たら + past." },
          { q: "{先生|せんせい}に{聞|き}いたら、すぐ（　）。", o: ["教えてください", "教えてくれました", "教えましょう", "教えたいです"], a: 1, ex: "The result after たら here is a past fact." },
        ],
      },
      {
        pattern: "～なら…（話題・助言）",
        meaning: "if (it's about) ～, then … ／ if you're going to ～",
        formation: "Noun + なら\nVerb (plain) + なら",
        explanation:
          "Picks up what the other person just said and gives advice or information about it. With a verb, the advice is something to do before the action: 旅行に行くなら、カメラを持っていくといい.",
        examples: [
          { ja: "{京都|きょうと}へ/{行|い}くなら、/{秋|あき}が/いいですよ。", en: "If you're going to Kyoto, autumn is a good time.", hl: "行くなら", w: ["京都", "行く", "秋", "いい"] },
          { ja: "{辞書|じしょ}なら、/{私|わたし}のを/{使|つか}って/ください。", en: "If it's a dictionary you need, please use mine.", hl: "辞書なら", w: ["辞書", "私", "使う"] },
          { ja: "パソコンを/{買|か}うなら、/{軽|かる}い/ほうが/いいです。", en: "If you're buying a computer, a light one is better.", hl: "買うなら", w: ["パソコン", "買う", "軽い", "いい"] },
        ],
        quiz: [
          { q: "A「{日本語|にほんご}の{本|ほん}を{探|さが}しています。」B「{日本語|にほんご}の{本|ほん}（　）、あの{店|みせ}にありますよ。」", o: ["なら", "たら", "と", "ば"], a: 0, ex: "Taking up the listener's topic → なら." },
          { q: "{海|うみ}で{泳|およ}ぐ（　）、{日焼|ひや}け{止|ど}めを{塗|ぬ}ったほうがいいです。", o: ["と", "なら", "たら", "ので"], a: 1, ex: "Advice about something to do before the action → なら." },
        ],
      },
    ],
  },
  {
    number: 16,
    title: "逆接",
    titleEn: "Contrast",
    summary: "ても and のに.",
    page: 68,
    points: [
      {
        pattern: "～ても…",
        meaning: "even if ～ / even though ～",
        formation: "Verb て-form + も\nい-adj − い + くても\nな-adj・Noun + でも",
        explanation:
          "The result is not what you would expect from the condition. Often used with いくら or どんなに (no matter how much).",
        examples: [
          { ja: "{雨|あめ}が/{降|ふ}っても、/{試合|しあい}は/あります。", en: "Even if it rains, the match will go ahead.", hl: "降っても", w: ["雨", "降る", "試合", "ある"] },
          { ja: "いくら/{考|かんが}えても、/わかりません。", en: "No matter how much I think about it, I don't get it.", hl: "考えても", w: ["いくら", "考える", "わかる"] },
          { ja: "{高|たか}くても、/{質|しつ}が/いい/{物|もの}を/{買|か}いたい。", en: "Even if it's expensive, I want to buy something of good quality.", hl: "高くても", w: ["高い", "質", "いい", "物", "買う"] },
        ],
        quiz: [
          { q: "{薬|くすり}を{飲|の}ん（　）、{熱|ねつ}が{下|さ}がりません。", o: ["でも", "では", "だら", "だり"], a: 0, ex: "飲む → 飲んでも." },
          { q: "{日曜日|にちようび}（　）、{店|みせ}は{開|あ}いています。", o: ["ても", "でも", "だでも", "なのに"], a: 1, ex: "Noun + でも." },
        ],
      },
      {
        pattern: "～のに…",
        meaning: "although ～ / even though ～ (with surprise or regret)",
        formation: "Plain form + のに\n(な-adj・Noun + なのに)",
        explanation:
          "States a fact and a result that goes against expectation, carrying a feeling of surprise, dissatisfaction or disappointment. The first part is a real fact, not a hypothesis.",
        examples: [
          { ja: "{一生懸命|いっしょうけんめい}/{勉強|べんきょう}したのに、/{試験|しけん}に/{落|お}ちました。", en: "Even though I studied hard, I failed the exam.", hl: "したのに", w: ["一生懸命", "勉強", "試験", "落ちる"] },
          { ja: "{約束|やくそく}したのに、/{彼|かれ}は/{来|こ}なかった。", en: "Although he promised, he didn't come.", hl: "したのに", w: ["約束", "彼", "来る"] },
          { ja: "{日曜日|にちようび}なのに、/{会社|かいしゃ}へ/{行|い}かなければ/なりません。", en: "Even though it's Sunday, I have to go to the office.", hl: "なのに", w: ["日曜日", "会社", "行く"] },
        ],
        quiz: [
          { q: "{窓|まど}を{閉|し}めた（　）、{寒|さむ}いです。", o: ["のに", "ても", "ので", "なら"], a: 0, ex: "A real fact + unexpected result → のに." },
          { q: "もし{雨|あめ}が{降|ふ}って（　）、{出|で}かけます。", o: ["のに", "も", "なら", "から"], a: 1, ex: "Hypothetical (もし) → ても, not のに." },
        ],
      },
    ],
  },
  {
    number: 17,
    title: "引用・疑問",
    titleEn: "Quoting and embedded questions",
    summary: "と (quotation) and か／かどうか.",
    page: 70,
    points: [
      {
        pattern: "～と…（引用）",
        meaning: "that ～ (quoting words or thoughts)",
        formation: "「Direct quote」と + 言う／書く／聞く\nPlain form + と + 思う／言う／考える",
        explanation:
          "と marks what was said, written, thought or heard. Indirect quotes use the plain form. Casual speech often uses って instead of と.",
        examples: [
          { ja: "{母|はは}は/「{気|き}をつけてね」と/{言|い}いました。", en: "My mother said, 'Take care.'", hl: "と言いました", w: ["母", "気をつける", "言う"] },
          { ja: "{明日|あした}は/{晴|は}れると/{思|おも}います。", en: "I think it'll be sunny tomorrow.", hl: "と思います", w: ["明日", "晴れる", "思う"] },
          { ja: "{手紙|てがみ}に/「ありがとう」と/{書|か}いて/ありました。", en: "'Thank you' was written in the letter.", hl: "と書いて", w: ["手紙", "書く"] },
        ],
        quiz: [
          { q: "{田中|たなか}さんは{来週|らいしゅう}{国|くに}へ{帰|かえ}る（　）{言|い}っていました。", o: ["と", "を", "に", "か"], a: 0, ex: "Quotation marker と." },
          { q: "この{漢字|かんじ}は「やま」（　）{読|よ}みます。", o: ["を", "と", "に", "が"], a: 1, ex: "How something is read/called → と." },
        ],
      },
      {
        pattern: "～か…・～かどうか…",
        meaning: "whether / what / when … (embedded question)",
        formation: "Question word + plain form + か + わかる／知る／教える\nPlain form + かどうか (whether or not)\n(な-adj・Noun: no だ)",
        explanation:
          "Puts a question inside a sentence. If it has a question word (何, いつ, どこ…) use か. If it's a yes/no question use かどうか.",
        examples: [
          { ja: "{会議|かいぎ}が/{何時|なんじ}に/{始|はじ}まるか/{知|し}っていますか。", en: "Do you know what time the meeting starts?", hl: "始まるか", w: ["会議", "何時", "始まる", "知る"] },
          { ja: "{明日|あした}/{行|い}けるか/どうか、/まだ/わかりません。", en: "I don't know yet whether I can go tomorrow.", hl: "行けるかどうか", w: ["明日", "行く", "まだ", "わかる"] },
          { ja: "この/{答|こた}えが/{正|ただ}しいか/どうか、/{確|たし}かめて/ください。", en: "Please check whether this answer is correct.", hl: "正しいかどうか", w: ["答え", "正しい", "確かめる"] },
        ],
        quiz: [
          { q: "{彼|かれ}がどこに{住|す}んでいる（　）{知|し}りません。", o: ["か", "かどうか", "と", "の"], a: 0, ex: "Has a question word (どこ) → か." },
          { q: "{味|あじ}がいい（　）、{食|た}べてみてください。", o: ["か", "かどうか", "なら", "ので"], a: 1, ex: "Yes/no question → かどうか." },
        ],
      },
    ],
  },
  {
    number: 18,
    title: "意志・予定",
    titleEn: "Intentions and plans",
    summary: "(よ)うと思う and つもりだ.",
    page: 72,
    points: [
      {
        pattern: "～(よ)うと思います",
        meaning: "I'm thinking of ～ / I intend to ～",
        formation: "Verb volitional form + と思います／と思っています",
        explanation:
          "Shares a plan the speaker has decided on (or is considering). と思っています shows the intention has been held for some time; it can also describe a third person's intention.",
        examples: [
          { ja: "{今年|ことし}は/{日本語能力試験|にほんごのうりょくしけん}を/{受|う}けようと/{思|おも}います。", en: "I'm thinking of taking the JLPT this year.", hl: "受けようと思います", w: ["今年", "日本語能力試験", "受ける", "思う"] },
          { ja: "{夏休|なつやす}みに/{国|くに}へ/{帰|かえ}ろうと/{思|おも}っています。", en: "I'm planning to go back to my country in the summer holidays.", hl: "帰ろうと思っています", w: ["夏休み", "国", "帰る", "思う"] },
          { ja: "{来月|らいげつ}から/{毎朝|まいあさ}/ジョギングしようと/{思|おも}います。", en: "I'm thinking of jogging every morning from next month.", hl: "しようと思います", w: ["来月", "毎朝", "ジョギング", "思う"] },
        ],
        quiz: [
          { q: "{週末|しゅうまつ}は{部屋|へや}を（　）と{思|おも}います。", o: ["掃除しよう", "掃除する", "掃除して", "掃除した"], a: 0, ex: "Intention: volitional + と思う." },
          { q: "{来年|らいねん}、{車|くるま}を（　）と{思|おも}っています。", o: ["買う", "買おう", "買え", "買いたい"], a: 1, ex: "買う → 買おう." },
        ],
      },
      {
        pattern: "～つもりです",
        meaning: "intend to ～ / plan to ～",
        formation: "Verb (dict.) + つもりです\nVerb ない-form + つもりです (intend not to)",
        explanation:
          "A firm plan decided in advance. It sounds more settled than ～(よ)うと思う. Asking a superior about their plans with つもり can sound rude.",
        examples: [
          { ja: "{卒業|そつぎょう}したら、/{日本|にほん}で/{働|はたら}く/つもりです。", en: "After graduating, I plan to work in Japan.", hl: "働くつもりです", w: ["卒業", "日本", "働く"] },
          { ja: "もう/たばこは/{吸|す}わない/つもりです。", en: "I intend not to smoke any more.", hl: "吸わないつもりです", w: ["もう", "たばこ", "吸う"] },
          { ja: "{今晩|こんばん}は/{早|はや}く/{寝|ね}る/つもりだったのに、/{遅|おそ}く/なった。", en: "I meant to go to bed early tonight, but it got late.", hl: "寝るつもりだった", w: ["今晩", "早い", "寝る", "遅い", "なる"] },
        ],
        quiz: [
          { q: "{結婚式|けっこんしき}には{出席|しゅっせき}する（　）です。", o: ["つもり", "よう", "はず", "そう"], a: 0, ex: "A settled intention → つもり." },
          { q: "{今日|きょう}は{何|なに}も{買|か}わない（　）です。", o: ["つもり", "ところ", "まま", "ほう"], a: 0, ex: "ない-form + つもり." },
        ],
      },
    ],
  },
  {
    number: 19,
    title: "伝聞",
    titleEn: "Reporting what you heard",
    summary: "と言っていました, そうです (hearsay), らしいです.",
    page: 74,
    points: [
      {
        pattern: "～と言っていました",
        meaning: "(someone) said that ～",
        formation: "Plain form + と言っていました",
        explanation:
          "Passes on a message from a specific person. 言っていました (not 言いました) is used when you relay a message whose content still applies.",
        examples: [
          { ja: "{田中|たなか}さんが/{少|すこ}し/{遅|おく}れると/{言|い}っていました。", en: "Mr Tanaka said he'll be a little late.", hl: "と言っていました", w: ["少し", "遅れる", "言う"] },
          { ja: "{先生|せんせい}が/{明日|あした}/テストを/すると/{言|い}っていましたよ。", en: "The teacher said there'll be a test tomorrow.", hl: "と言っていました", w: ["先生", "明日", "テスト", "する", "言う"] },
          { ja: "{母|はは}が/よろしくと/{言|い}っていました。", en: "My mother sends her regards.", hl: "と言っていました", w: ["母", "よろしく", "言う"] },
        ],
        quiz: [
          { q: "{山田|やまだ}さんが{明日|あした}は{休|やす}む（　）{言|い}っていました。", o: ["と", "を", "が", "のに"], a: 0, ex: "Quotation と + 言っていました." },
          { q: "リンさんは{来週|らいしゅう}{引|ひ}っ{越|こ}す（　）。", o: ["と言っていました", "と思っています", "つもりです", "ようにします"], a: 0, ex: "Relaying what Lin said." },
        ],
      },
      {
        pattern: "～そうです（伝聞）",
        meaning: "I heard that ～ / they say ～",
        formation: "Plain form + そうです\n(Source: ～によると／～の話では)",
        explanation:
          "Reports information heard or read somewhere. Unlike the 'looks like' そう, it attaches to the full plain form, including だ: 雨だそうです. It doesn't change into past or negative.",
        examples: [
          { ja: "{天気予報|てんきよほう}に/よると、/{明日|あした}は/{雪|ゆき}が/{降|ふ}る/そうです。", en: "According to the weather forecast, it's going to snow tomorrow.", hl: "降るそうです", w: ["天気予報", "明日", "雪", "降る"] },
          { ja: "あの/レストランは/とても/{高|たか}い/そうです。", en: "I hear that restaurant is very expensive.", hl: "高いそうです", w: ["レストラン", "とても", "高い"] },
          { ja: "{鈴木|すずき}さんの/お{父|とう}さんは/{医者|いしゃ}だ/そうです。", en: "I hear Ms Suzuki's father is a doctor.", hl: "医者だそうです", w: ["お父さん", "医者"] },
        ],
        quiz: [
          { q: "ニュースによると、{昨日|きのう}{大|おお}きい{地震|じしん}が（　）そうです。", o: ["あった", "あり", "ある", "あって"], a: 0, ex: "Hearsay そう takes the full plain form: あったそうです." },
          { q: "この{町|まち}は{昔|むかし}、とても（　）そうです。", o: ["静かだった", "静かな", "静か", "静かで"], a: 0, ex: "Hearsay: 静かだったそうです (not 静かそう, which means 'looks quiet')." },
        ],
      },
      {
        pattern: "～らしいです",
        meaning: "apparently ～ / it seems ～ (from what I've heard)",
        formation: "Plain form + らしいです\n(な-adj・Noun: no だ — 静からしい, 雨らしい)",
        explanation:
          "Based on information from others or indirect evidence. Less direct than そうです; the speaker keeps some distance from the information.",
        examples: [
          { ja: "{駅|えき}の/{前|まえ}に/{新|あたら}しい/{店|みせ}が/できた/らしいです。", en: "Apparently a new shop has opened in front of the station.", hl: "できたらしいです", w: ["駅", "前", "新しい", "店", "できる"] },
          { ja: "{木村|きむら}さんは/{風邪|かぜ}/らしいですよ。", en: "It seems Mr Kimura has a cold.", hl: "風邪らしいです", w: ["風邪"] },
          { ja: "{今年|ことし}の/{夏|なつ}は/{暑|あつ}く/なる/らしい。", en: "Apparently this summer is going to be hot.", hl: "なるらしい", w: ["今年", "夏", "暑い", "なる"] },
        ],
        quiz: [
          { q: "{試験|しけん}は（　）らしいです。", o: ["来週だ", "来週", "来週な", "来週の"], a: 1, ex: "Noun + らしい, with nothing in between." },
          { q: "{隣|となり}の{人|ひと}は{犬|いぬ}を{飼|か}っている（　）。{声|こえ}が{聞|き}こえます。", o: ["らしい", "つもりだ", "ことにする", "ほうがいい"], a: 0, ex: "Indirect evidence (a sound) → らしい." },
        ],
      },
    ],
  },
  {
    number: 20,
    title: "変化（１）",
    titleEn: "Change (1)",
    summary: "くする／にする and くなる／になる／ようになる.",
    page: 76,
    points: [
      {
        pattern: "～くします・～にします",
        meaning: "make (something) ～ (someone causes a change)",
        formation: "い-adj − い + くします\nな-adj・Noun + にします",
        explanation: "Someone deliberately changes the state of something. The thing changed is marked with を.",
        examples: [
          { ja: "{部屋|へや}を/{明|あか}るく/しましょう。", en: "Let's make the room brighter.", hl: "明るくしましょう", w: ["部屋", "明るい"] },
          { ja: "{図書館|としょかん}では/{静|しず}かに/して/ください。", en: "Please be quiet in the library.", hl: "静かにして", w: ["図書館", "静か"] },
          { ja: "{髪|かみ}を/{短|みじか}く/しました。", en: "I had my hair cut short.", hl: "短くしました", w: ["髪", "短い"] },
        ],
        quiz: [
          { q: "{音|おと}が{大|おお}きいので、もう{少|すこ}し（　）ください。", o: ["小さくして", "小さいして", "小さになって", "小さくなって"], a: 0, ex: "Someone changes it → 小さくする." },
          { q: "{部屋|へや}をきれい（　）しました。", o: ["く", "に", "で", "と"], a: 1, ex: "な-adj + にする." },
        ],
      },
      {
        pattern: "～くなります・～になります・～ようになります",
        meaning: "become ～ ／ come to (be able to) ～",
        formation: "い-adj − い + くなります\nな-adj・Noun + になります\nVerb (dict.)／potential + ようになります\nVerb ない-form − い + くなります",
        explanation:
          "Describes a natural change. With verbs, ようになる shows a change in ability or habit that happened gradually: 泳げるようになった.",
        examples: [
          { ja: "{日本語|にほんご}が/{上手|じょうず}に/なりましたね。", en: "Your Japanese has got good!", hl: "上手になりました", w: ["日本語", "上手", "なる"] },
          { ja: "{漢字|かんじ}が/{少|すこ}し/{読|よ}めるように/なりました。", en: "I've become able to read some kanji.", hl: "読めるようになりました", w: ["漢字", "少し", "読む", "なる"] },
          { ja: "{最近|さいきん}、/{父|ちち}は/お{酒|さけ}を/{飲|の}まなく/なりました。", en: "Recently my father has stopped drinking.", hl: "飲まなくなりました", w: ["最近", "父", "酒", "飲む", "なる"] },
        ],
        quiz: [
          { q: "{赤|あか}ちゃんが{歩|ある}ける（　）なりました。", o: ["ように", "くに", "ことに", "ために"], a: 0, ex: "Change in ability → ようになる." },
          { q: "{秋|あき}になって、{涼|すず}し（　）なりました。", o: ["に", "く", "いに", "ように"], a: 1, ex: "い-adj → くなる." },
        ],
      },
    ],
  },
  {
    number: 21,
    title: "変化（２）・決定",
    titleEn: "Decisions",
    summary: "にする／ことにする and になる／ことになる.",
    page: 80,
    points: [
      {
        pattern: "～にします・～ことにします",
        meaning: "decide on ～ ／ decide to ～ (my own decision)",
        formation: "Noun + にします\nVerb (dict.)／ない-form + ことにします\n～ことにしています = a rule you keep",
        explanation:
          "The speaker makes the decision. ～ことにしている describes a personal rule or habit that you decided on.",
        examples: [
          { ja: "{私|わたし}は/コーヒーに/します。", en: "I'll have coffee.", hl: "にします", w: ["私", "コーヒー"] },
          { ja: "{来年|らいねん}、/{留学|りゅうがく}する/ことに/しました。", en: "I've decided to study abroad next year.", hl: "ことにしました", w: ["来年", "留学"] },
          { ja: "{寝|ね}る/{前|まえ}は/スマホを/{見|み}ない/ことに/しています。", en: "I make a point of not looking at my phone before bed.", hl: "ことにしています", w: ["寝る", "前", "スマホ", "見る"] },
        ],
        quiz: [
          { q: "{健康|けんこう}のために、{毎日|まいにち}{歩|ある}く（　）にしました。", o: ["こと", "よう", "の", "ため"], a: 0, ex: "My own decision → ことにする." },
          { q: "A「{何|なに}を{食|た}べますか。」B「{私|わたし}はカレー（　）。」", o: ["にします", "になります", "がします", "をなります"], a: 0, ex: "Choosing → Noun + にします." },
        ],
      },
      {
        pattern: "～になります・～ことになります",
        meaning: "it has been decided that ～ (not by me)",
        formation: "Noun + になります\nVerb (dict.)／ない-form + ことになります\n～ことになっている = it's a rule",
        explanation:
          "Presents a decision as made by others or by circumstances. It sounds modest, so it is also used to announce your own news politely. ～ことになっている expresses a rule or custom.",
        examples: [
          { ja: "{来月|らいげつ}、/{大阪|おおさか}へ/{転勤|てんきん}する/ことに/なりました。", en: "I'm being transferred to Osaka next month.", hl: "ことになりました", w: ["来月", "大阪", "転勤"] },
          { ja: "{会議|かいぎ}は/{木曜日|もくようび}に/なりました。", en: "The meeting has been set for Thursday.", hl: "になりました", w: ["会議", "木曜日", "なる"] },
          { ja: "この/{寮|りょう}では/{十時|じゅうじ}までに/{帰|かえ}る/ことに/なっています。", en: "In this dorm, you're supposed to be back by ten.", hl: "ことになっています", w: ["寮", "十時", "帰る"] },
        ],
        quiz: [
          { q: "{会社|かいしゃ}の{規則|きそく}で、{制服|せいふく}を{着|き}る（　）。", o: ["ことになっています", "ことにしています", "ようにしています", "つもりです"], a: 0, ex: "A rule made by others → ことになっている." },
          { q: "{結婚|けっこん}する（　）。――おめでとうございます。", o: ["ことになりました", "ようになりました", "ところでした", "はずでした"], a: 0, ex: "Modest announcement of news → ことになりました." },
        ],
      },
    ],
  },
  {
    number: 22,
    title: "て形の表現",
    titleEn: "Te-form expressions",
    summary: "てみる, ておく and てしまう.",
    page: 82,
    points: [
      {
        pattern: "～てみます",
        meaning: "try doing ～ (to see what it's like)",
        formation: "Verb て-form + みます",
        explanation: "Do something to find out how it is. It doesn't mean 'attempt something difficult' — for that, use ～ようとする.",
        examples: [
          { ja: "この/{服|ふく}を/{着|き}て/みても/いいですか。", en: "May I try this outfit on?", hl: "着てみても", w: ["服", "着る", "いい"] },
          { ja: "{一度|いちど}/{北海道|ほっかいどう}へ/{行|い}って/みたいです。", en: "I'd like to go to Hokkaido once.", hl: "行ってみたい", w: ["一度", "北海道", "行く"] },
          { ja: "わからない/ことは、/{先生|せんせい}に/{聞|き}いて/みます。", en: "I'll try asking the teacher about things I don't understand.", hl: "聞いてみます", w: ["わかる", "こと", "先生", "聞く"] },
        ],
        quiz: [
          { q: "{新|あたら}しいレストランで{食|た}べて（　）。", o: ["みました", "おきました", "しまいました", "いきました"], a: 0, ex: "Trying something to see → てみる." },
          { q: "この{靴|くつ}、{履|は}いて（　）もいいですか。", o: ["おいて", "みて", "しまって", "いて"], a: 1, ex: "～てみてもいいですか." },
        ],
      },
      {
        pattern: "～ておきます",
        meaning: "do ～ in advance ／ leave it as is",
        formation: "Verb て-form + おきます (casual: ～とく)",
        explanation:
          "Two uses: preparing for something in the future (ホテルを予約しておく), or leaving something in its current state (窓を開けておいてください).",
        examples: [
          { ja: "{旅行|りょこう}の/{前|まえ}に、/ホテルを/{予約|よやく}して/おきます。", en: "I'll book the hotel before the trip.", hl: "予約しておきます", w: ["旅行", "前", "ホテル", "予約"] },
          { ja: "{会議|かいぎ}の/{資料|しりょう}を/コピーして/おいて/ください。", en: "Please make copies of the meeting materials ahead of time.", hl: "コピーしておいて", w: ["会議", "資料", "コピー"] },
          { ja: "{暑|あつ}いから、/{窓|まど}を/{開|あ}けて/おきましょう。", en: "It's hot, so let's leave the window open.", hl: "開けておきましょう", w: ["暑い", "窓", "開ける"] },
        ],
        quiz: [
          { q: "{友|とも}だちが{来|く}るから、ジュースを{買|か}って（　）。", o: ["おきます", "みます", "しまいます", "きます"], a: 0, ex: "Preparation → ておく." },
          { q: "{使|つか}ったはさみは{元|もと}の{所|ところ}に{戻|もど}して（　）ください。", o: ["みて", "おいて", "しまって", "いって"], a: 1, ex: "～ておいてください." },
        ],
      },
      {
        pattern: "～てしまいます",
        meaning: "end up ～ (regret) ／ finish ～ completely",
        formation: "Verb て-form + しまいます\nCasual: ～ちゃう／～じゃう",
        explanation:
          "Shows either completion (全部食べてしまった) or regret about something unintended (財布をなくしてしまった). Context tells which.",
        examples: [
          { ja: "{電車|でんしゃ}に/{傘|かさ}を/{忘|わす}れて/しまいました。", en: "I left my umbrella on the train (oops).", hl: "忘れてしまいました", w: ["電車", "傘", "忘れる"] },
          { ja: "この/{本|ほん}は/{一日|いちにち}で/{読|よ}んで/しまいました。", en: "I finished this book in one day.", hl: "読んでしまいました", w: ["本", "一日", "読む"] },
          { ja: "{寝坊|ねぼう}して、/バスに/{遅|おく}れちゃった。", en: "I overslept and missed the bus.", hl: "遅れちゃった", w: ["寝坊", "バス", "遅れる"] },
        ],
        quiz: [
          { q: "{大切|たいせつ}なカップを{割|わ}って（　）。", o: ["しまいました", "おきました", "みました", "あげました"], a: 0, ex: "Regret → てしまう." },
          { q: "「{飲|の}んでしまった」のカジュアルな{形|かたち}は（　）です。", o: ["飲んじゃった", "飲んちゃった", "飲みちゃった", "飲んどいた"], a: 0, ex: "で + しまう → じゃう: 飲んじゃった." },
        ],
      },
    ],
  },
  {
    number: 23,
    title: "やりもらい",
    titleEn: "Giving and receiving",
    summary: "あげる, くれる, もらう — for things and for favours.",
    page: 84,
    points: [
      {
        pattern: "あげます・～てあげます",
        meaning: "give (to someone else) ／ do ～ for someone",
        formation: "Giver は Receiver に Thing を あげます\nVerb て-form + あげます",
        explanation:
          "The giver is the speaker or someone on the speaker's side, and the receiver is someone else. ～てあげる can sound condescending when said directly to the person you helped.",
        notes: ["Polite: さしあげる. To animals or plants: やる."],
        examples: [
          { ja: "{私|わたし}は/{弟|おとうと}に/{本|ほん}を/あげました。", en: "I gave my little brother a book.", hl: "あげました", w: ["私", "弟", "本", "あげる"] },
          { ja: "{友|とも}だちに/{駅|えき}までの/{道|みち}を/{教|おし}えて/あげました。", en: "I showed my friend the way to the station.", hl: "教えてあげました", w: ["友だち", "駅", "道", "教える"] },
          { ja: "おばあさんの/{荷物|にもつ}を/{持|も}って/あげました。", en: "I carried an elderly woman's bags for her.", hl: "持ってあげました", w: ["おばあさん", "荷物", "持つ"] },
        ],
        quiz: [
          { q: "{私|わたし}は{妹|いもうと}に{宿題|しゅくだい}を{手伝|てつだ}って（　）。", o: ["あげました", "くれました", "もらいました", "やりました"], a: 0, ex: "I do a favour for someone else → てあげる." },
          { q: "{先生|せんせい}にお{土産|みやげ}を（　）。", o: ["あげました", "さしあげました", "くださいました", "やりました"], a: 1, ex: "Giving to a superior → さしあげる." },
        ],
      },
      {
        pattern: "くれます・～てくれます",
        meaning: "(someone) gives to me ／ does ～ for me",
        formation: "Giver は／が (私に) Thing を くれます\nVerb て-form + くれます",
        explanation:
          "The receiver is the speaker or someone in the speaker's group. It shows gratitude. Polite: くださる.",
        examples: [
          { ja: "{姉|あね}が/{誕生日|たんじょうび}に/{時計|とけい}を/くれました。", en: "My older sister gave me a watch for my birthday.", hl: "くれました", w: ["姉", "誕生日", "時計", "くれる"] },
          { ja: "{友|とも}だちが/{引|ひ}っ{越|こ}しを/{手伝|てつだ}って/くれました。", en: "My friend helped me move house.", hl: "手伝ってくれました", w: ["友だち", "引っ越し", "手伝う"] },
          { ja: "{先生|せんせい}が/{作文|さくぶん}を/{直|なお}して/くださいました。", en: "The teacher kindly corrected my essay.", hl: "直してくださいました", w: ["先生", "作文", "直す"] },
        ],
        quiz: [
          { q: "{父|ちち}が{私|わたし}に{自転車|じてんしゃ}を{買|か}って（　）。", o: ["くれました", "あげました", "もらいました", "さしあげました"], a: 0, ex: "Someone does something for me → てくれる." },
          { q: "{知|し}らない{人|ひと}が{道|みち}を{教|おし}えて（　）。", o: ["あげました", "くれました", "やりました", "おきました"], a: 1, ex: "The favour is received by me." },
        ],
      },
      {
        pattern: "もらいます・～てもらいます",
        meaning: "receive ／ have someone do ～ for me",
        formation: "Receiver は Giver に／から Thing を もらいます\nVerb て-form + もらいます",
        explanation:
          "The subject is the receiver. ～てもらう often implies that you asked for the favour. Polite: いただく.",
        examples: [
          { ja: "{友|とも}だちに/{花|はな}を/もらいました。", en: "I got flowers from a friend.", hl: "もらいました", w: ["友だち", "花", "もらう"] },
          { ja: "{兄|あに}に/{車|くるま}で/{駅|えき}まで/{送|おく}って/もらいました。", en: "I had my older brother drive me to the station.", hl: "送ってもらいました", w: ["兄", "車", "駅", "送る"] },
          { ja: "{部長|ぶちょう}に/{書類|しょるい}を/{見|み}て/いただきました。", en: "I had the department manager look over the documents.", hl: "見ていただきました", w: ["部長", "書類", "見る"] },
        ],
        quiz: [
          { q: "{私|わたし}は{先輩|せんぱい}（　）ノートを{貸|か}してもらいました。", o: ["に", "を", "が", "で"], a: 0, ex: "The giver of a favour takes に with てもらう." },
          { q: "{医者|いしゃ}に{診|み}て（　）ほうがいいですよ。", o: ["くれた", "あげた", "もらった", "やった"], a: 2, ex: "Have someone do it for you → てもらう." },
        ],
      },
    ],
  },
  {
    number: 24,
    title: "受身",
    titleEn: "The passive",
    summary: "Using the passive: direct, possessive and suffering passive.",
    page: 86,
    points: [
      {
        pattern: "～(ら)れます（受身）",
        meaning: "be ～ed / have something done to you",
        formation:
          "Direct: A は B に Verb-passive (私は先生に褒められた)\nPossessive: A は B に (A's) Noun を Verb-passive (足を踏まれた)\nSuffering: A は B に intransitive passive (雨に降られた)\nNo agent: Thing が／は + passive (この寺は400年前に建てられた)",
        explanation:
          "The passive changes the viewpoint to the person or thing affected. Japanese often uses it when the speaker is troubled by someone's action, and for facts where the actor doesn't matter.",
        examples: [
          { ja: "{私|わたし}は/{先生|せんせい}に/{褒|ほ}められました。", en: "I was praised by the teacher.", hl: "褒められました", w: ["私", "先生", "褒める"] },
          { ja: "{電車|でんしゃ}で/{隣|となり}の/{人|ひと}に/{足|あし}を/{踏|ふ}まれました。", en: "On the train, the person next to me stepped on my foot.", hl: "踏まれました", w: ["電車", "隣", "人", "足", "踏む"] },
          { ja: "{出|で}かける/とき、/{雨|あめ}に/{降|ふ}られて/しまった。", en: "I got caught in the rain when I went out.", hl: "降られて", w: ["出かける", "とき", "雨", "降る"] },
        ],
        quiz: [
          { q: "{楽|たの}しみにしていたのに、{弟|おとうと}にケーキを（　）。", o: ["食べられました", "食べさせました", "食べてあげました", "食べてもらいました"], a: 0, ex: "Possessive passive: my cake was eaten (and I'm annoyed)." },
          { q: "このお{寺|てら}は{六百年前|ろっぴゃくねんまえ}に（　）。", o: ["建てました", "建てられました", "建たせました", "建てさせられました"], a: 1, ex: "A fact where the builder doesn't matter → passive." },
        ],
      },
    ],
  },
  {
    number: 25,
    title: "使役",
    titleEn: "The causative",
    summary: "させる and させられる in use.",
    page: 88,
    points: [
      {
        pattern: "～(さ)せます",
        meaning: "make someone do ～ ／ let someone do ～",
        formation:
          "Intransitive verb: A は B を Verb-causative (子どもを遊ばせる)\nTransitive verb: A は B に Thing を Verb-causative (子どもに野菜を食べさせる)\nAsking permission: ～(さ)せてください",
        explanation:
          "Someone with authority makes or lets another person act. ～させてください politely asks to be allowed to do something.",
        examples: [
          { ja: "{先生|せんせい}は/{学生|がくせい}を/{立|た}たせました。", en: "The teacher made the student stand up.", hl: "立たせました", w: ["先生", "学生", "立つ"] },
          { ja: "{父|ちち}は/{私|わたし}に/{好|す}きな/{仕事|しごと}を/させて/くれました。", en: "My father let me do the job I liked.", hl: "させてくれました", w: ["父", "私", "好き", "仕事"] },
          { ja: "すみません、/{少|すこ}し/{考|かんが}えさせて/ください。", en: "Excuse me, please let me think about it for a bit.", hl: "考えさせてください", w: ["少し", "考える"] },
        ],
        quiz: [
          { q: "{頭|あたま}が{痛|いた}いので、{早|はや}く{帰|かえ}ら（　）ください。", o: ["せて", "れて", "させられて", "ないで"], a: 0, ex: "Asking permission → 帰らせてください." },
          { q: "{母|はは}は{妹|いもうと}（　）{部屋|へや}を{掃除|そうじ}させました。", o: ["に", "を", "が", "で"], a: 0, ex: "With a transitive verb (掃除する + を), the person made to act takes に." },
        ],
      },
      {
        pattern: "～さ(せら)れます",
        meaning: "be made to do ～ (causative-passive)",
        formation: "Person は Causer に + causative-passive (待たされる, 食べさせられる)",
        explanation:
          "The speaker was forced to do something they didn't want to do. It often expresses complaint or reluctance.",
        examples: [
          { ja: "{子|こ}どもの/ころ、/{嫌|きら}いな/{野菜|やさい}を/{食|た}べさせられました。", en: "When I was a child, I was made to eat vegetables I didn't like.", hl: "食べさせられました", w: ["子ども", "ころ", "嫌い", "野菜", "食べる"] },
          { ja: "{彼女|かのじょ}に/{三十分|さんじゅっぷん}も/{待|ま}たされました。", en: "My girlfriend kept me waiting for a full 30 minutes.", hl: "待たされました", w: ["彼女", "三十分", "待つ"] },
          { ja: "{先輩|せんぱい}に/{歌|うた}を/{歌|うた}わされた。", en: "I was made to sing by my senior.", hl: "歌わされた", w: ["先輩", "歌", "歌う"] },
        ],
        quiz: [
          { q: "{試合|しあい}に{負|ま}けて、コーチにグラウンドを{十周|じゅっしゅう}（　）。", o: ["走らせました", "走らされました", "走られました", "走ってもらいました"], a: 1, ex: "I was made to run → 走らされた." },
          { q: "{社長|しゃちょう}に{夜遅|よるおそ}くまで（　）。", o: ["働かされました", "働かれました", "働かせました", "働けました"], a: 0, ex: "Forced by the boss → causative-passive." },
        ],
      },
    ],
  },
];
