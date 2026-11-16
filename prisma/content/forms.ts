import type { PartSrc } from "./types";

export const forms: PartSrc = {
  slug: "forms",
  order: 0,
  title: "形の練習",
  titleEn: "Practising grammatical forms",
  color: "peach",
  lessons: [
    {
      number: 1,
      title: "動詞のグループ",
      titleEn: "Verb groups",
      summary: "Sort verbs into Group I, II and III by the sound before ます.",
      page: 12,
      points: [
        {
          pattern: "Group I・II・III",
          meaning: "The three verb groups that decide how every verb conjugates",
          formation:
            "Group I: ます-form ends in an -i sound (かきます, のみます, かえります)\nGroup II: ます-form ends in an -e sound (たべます) or is a short -i verb (みます, おきます, います)\nGroup III: します and きます (and any noun + します)",
          explanation:
            "Look at the sound just before ます. An -i sound usually means Group I, an -e sound means Group II. A few -i verbs such as 見ます, 起きます, います and 借ります are Group II, and there are only two irregular verbs: する and 来る.",
          notes: [
            "Watch out for Group I verbs that look like Group II: 帰る, 入る, 走る, 切る, 知る.",
            "Group III includes every 'noun + する' verb: 勉強する, 練習する, 運転する.",
          ],
          level: "N5",
          examples: [
            { ja: "{毎朝|まいあさ}/{六時|ろくじ}に/{起|お}きます。", en: "I get up at six every morning. (起きる — Group II)", hl: "起きます", w: ["毎朝", "起きる"] },
            { ja: "{今日|きょう}は/{早|はや}く/{家|いえ}に/{帰|かえ}ります。", en: "I'm going home early today. (帰る — Group I)", hl: "帰ります", w: ["今日", "早い", "家", "帰る"] },
            { ja: "{週末|しゅうまつ}は/{友|とも}だちと/テニスを/します。", en: "I play tennis with friends at the weekend. (する — Group III)", hl: "します", w: ["週末", "友だち", "テニス", "する"] },
          ],
          quiz: [
            { q: "「{入|はい}ります」は（　）です。", o: ["グループI", "グループII", "グループIII", "どれでもない"], a: 0, ex: "入る looks like an -eru/-iru verb but conjugates as Group I: 入らない, 入って." },
            { q: "「{借|か}ります」は（　）です。", o: ["グループI", "グループII", "グループIII", "どれでもない"], a: 1, ex: "借りる is Group II: 借りない, 借りて." },
          ],
        },
      ],
    },
    {
      number: 2,
      title: "て形・た形",
      titleEn: "Te-form and ta-form",
      summary: "Build the て-form and the past plain た-form for every group.",
      page: 14,
      points: [
        {
          pattern: "～て／～た",
          meaning: "Connecting form (て) and plain past (た)",
          formation:
            "Group I: う・つ・る → って／った　む・ぶ・ぬ → んで／んだ　く → いて　ぐ → いで　す → して\n(行く → 行って is the exception)\nGroup II: drop る → て／た\nGroup III: する → して／した, 来る → 来て／来た",
          explanation:
            "The た-form is made exactly like the て-form, replacing て with た and で with だ. Many N4 patterns are built on these two forms, so they need to be automatic.",
          level: "N5",
          examples: [
            { ja: "{駅|えき}まで/{歩|ある}いて/{行|い}きました。", en: "I walked to the station.", hl: "歩いて", w: ["駅", "歩く", "行く"] },
            { ja: "{昨日|きのう}は/{本|ほん}を/{読|よ}んで/{寝|ね}ました。", en: "Yesterday I read a book and went to bed.", hl: "読んで", w: ["昨日", "本", "読む", "寝る"] },
            { ja: "もう/{宿題|しゅくだい}を/{出|だ}した。", en: "I've already handed in my homework.", hl: "出した", w: ["もう", "宿題", "出す"] },
          ],
          quiz: [
            { q: "{急|いそ}ぐ → （　）", o: ["急いて", "急いで", "急んで", "急って"], a: 1, ex: "ぐ verbs take いで: 急いで." },
            { q: "{行|い}く → （　）", o: ["行いて", "行んで", "行って", "行きて"], a: 2, ex: "行く is the one く-verb exception: 行って." },
          ],
        },
      ],
    },
    {
      number: 3,
      title: "ていねい形とふつう形",
      titleEn: "Polite form and plain form",
      summary: "Switch between です/ます style and plain style for verbs, adjectives and nouns.",
      page: 16,
      points: [
        {
          pattern: "ます形 ⇄ ふつう形",
          meaning: "Polite style vs plain (casual / written) style",
          formation:
            "Verb: 書きます／書きません／書きました／書きませんでした → 書く／書かない／書いた／書かなかった\nい-adj: 高いです → 高い／高くない／高かった／高くなかった\nな-adj・Noun: 静かです → 静かだ／静かじゃない／静かだった／静かじゃなかった",
          explanation:
            "Plain form is used with friends and family, in diaries and reports, and inside longer sentences (before と思います, そうです, かもしれません, etc.). Many N4 patterns require the plain form even when the whole sentence is polite.",
          notes: ["ある → ない (not あらない).", "いい → よくない／よかった."],
          level: "N5",
          examples: [
            { ja: "この/{映画|えいが}、/おもしろかったよ。", en: "That movie was fun! (casual)", hl: "おもしろかった", w: ["映画", "おもしろい"] },
            { ja: "{今日|きょう}は/{雨|あめ}だから、/{出|で}かけない。", en: "It's raining today, so I'm not going out.", hl: "出かけない", w: ["今日", "雨", "出かける"] },
            { ja: "{明日|あした}は/{休|やす}みだと/{思|おも}います。", en: "I think tomorrow is a day off.", hl: "休みだ", w: ["明日", "休み", "思う"] },
          ],
          quiz: [
            { q: "「いいです」のふつう{形|けい}の{過去|かこ}は（　）です。", o: ["いかった", "よかった", "いいだった", "よいでした"], a: 1, ex: "いい conjugates from よい: よかった." },
            { q: "「ありません」のふつう{形|けい}は（　）です。", o: ["あらない", "ないです", "ない", "あるない"], a: 2, ex: "The plain negative of ある is simply ない." },
          ],
        },
      ],
    },
    {
      number: 4,
      title: "可能形",
      titleEn: "The potential form",
      summary: "Say what someone can do.",
      page: 18,
      points: [
        {
          pattern: "～(ら)れる",
          meaning: "can do ～",
          formation:
            "Group I: change -u to -eru (書く → 書ける, 話す → 話せる)\nGroup II: drop る + られる (食べる → 食べられる)\nGroup III: する → できる, 来る → 来られる",
          explanation:
            "Potential verbs conjugate like Group II verbs (書ける → 書けない → 書けます). The object is usually marked with が: 日本語が話せます.",
          examples: [
            { ja: "{私|わたし}は/{漢字|かんじ}が/{少|すこ}し/{読|よ}めます。", en: "I can read a few kanji.", hl: "読めます", w: ["私", "漢字", "少し", "読む"] },
            { ja: "ここで/{写真|しゃしん}が/{撮|と}れますか。", en: "Can I take photos here?", hl: "撮れます", w: ["写真", "撮る"] },
            { ja: "{明日|あした}は/{何時|なんじ}に/{来|こ}られますか。", en: "What time can you come tomorrow?", hl: "来られます", w: ["明日", "何時", "来る"] },
          ],
          quiz: [
            { q: "{泳|およ}ぐ → （　）", o: ["泳がれる", "泳げる", "泳ぎられる", "泳ぎれる"], a: 1, ex: "Group I: -u → -eru. 泳ぐ → 泳げる." },
            { q: "{起|お}きる → （　）", o: ["起きれる", "起けられる", "起きられる", "起ける"], a: 2, ex: "Group II takes られる: 起きられる." },
          ],
        },
      ],
    },
    {
      number: 5,
      title: "「～ば・～なら」の形",
      titleEn: "The ば / なら conditional forms",
      summary: "Make the conditional forms of verbs, adjectives and nouns.",
      page: 20,
      points: [
        {
          pattern: "～ば／～なら",
          meaning: "if ～",
          formation:
            "Group I: -u → -eba (行く → 行けば)\nGroup II: る → れば (見る → 見れば)\nGroup III: すれば／来れば\nNegative: ない → なければ\nい-adj: い → ければ (高ければ, いい → よければ)\nな-adj・Noun: なら (静かなら, 雨なら)",
          explanation:
            "The ば-form is used for verbs and い-adjectives; な-adjectives and nouns use なら. Lesson 14 of Part 1 covers how these conditionals are used.",
          examples: [
            { ja: "{安|やす}ければ/{買|か}います。", en: "If it's cheap, I'll buy it.", hl: "安ければ", w: ["安い", "買う"] },
            { ja: "{時間|じかん}が/あれば、/{手伝|てつだ}います。", en: "If I have time, I'll help.", hl: "あれば", w: ["時間", "ある", "手伝う"] },
            { ja: "{日曜日|にちようび}なら/{行|い}けます。", en: "If it's Sunday, I can go.", hl: "日曜日なら", w: ["日曜日", "行く"] },
          ],
          quiz: [
            { q: "いい → （　）", o: ["いければ", "よければ", "いいなら", "よいれば"], a: 1, ex: "いい uses よ-: よければ." },
            { q: "{来|く}る → （　）", o: ["来れば", "来るば", "来られば", "来すれば"], a: 0, ex: "来る → 来れば (くれば)." },
          ],
        },
      ],
    },
    {
      number: 6,
      title: "う・よう形",
      titleEn: "The volitional form",
      summary: "Make the 'let's / I'll' form.",
      page: 22,
      points: [
        {
          pattern: "～(よ)う",
          meaning: "let's ～ / I'll ～ (plain volitional)",
          formation:
            "Group I: -u → -ou (行く → 行こう, 待つ → 待とう)\nGroup II: る → よう (食べる → 食べよう)\nGroup III: しよう／来よう",
          explanation:
            "This is the plain version of ～ましょう. It is used among friends to invite (行こう！) and in the pattern ～(よ)うと思います (Part 1, Lesson 18).",
          examples: [
            { ja: "{疲|つか}れたね。/ちょっと/{休|やす}もう。", en: "I'm tired. Let's take a short break.", hl: "休もう", w: ["疲れる", "ちょっと", "休む"] },
            { ja: "{一緒|いっしょ}に/{昼|ひる}ご{飯|はん}を/{食|た}べよう。", en: "Let's eat lunch together.", hl: "食べよう", w: ["一緒に", "昼ご飯", "食べる"] },
            { ja: "{明日|あした}/また/{来|こ}よう。", en: "Let's come again tomorrow.", hl: "来よう", w: ["明日", "また", "来る"] },
          ],
          quiz: [
            { q: "{帰|かえ}る → （　）", o: ["帰よう", "帰ろう", "帰りよう", "帰るう"], a: 1, ex: "帰る is Group I: 帰ろう." },
            { q: "する → （　）", o: ["しろう", "すよう", "しよう", "そう"], a: 2, ex: "する → しよう." },
          ],
        },
      ],
    },
    {
      number: 7,
      title: "受身の形",
      titleEn: "The passive form",
      summary: "Make the passive form of verbs.",
      page: 24,
      points: [
        {
          pattern: "～(ら)れる（受身）",
          meaning: "be ～ed (by someone)",
          formation:
            "Group I: -u → -areru (書く → 書かれる, 言う → 言われる)\nGroup II: る → られる (見る → 見られる)\nGroup III: される／来られる",
          explanation:
            "For Group II verbs and 来る, the passive looks the same as the potential form — the context tells you which one it is. Part 1, Lesson 24 covers how the passive is used.",
          examples: [
            { ja: "{先生|せんせい}に/{名前|なまえ}を/{呼|よ}ばれました。", en: "My name was called by the teacher.", hl: "呼ばれました", w: ["先生", "名前", "呼ぶ"] },
            { ja: "{母|はは}に/{部屋|へや}を/{見|み}られた。", en: "My room was seen by my mother.", hl: "見られた", w: ["母", "部屋", "見る"] },
            { ja: "この/{歌|うた}は/{世界中|せかいじゅう}で/{歌|うた}われています。", en: "This song is sung all over the world.", hl: "歌われています", w: ["歌", "世界中", "歌う"] },
          ],
          quiz: [
            { q: "{言|い}う → （　）", o: ["言あれる", "言われる", "言いられる", "言れる"], a: 1, ex: "う-ending verbs use わ: 言われる." },
            { q: "する → （　）", o: ["しられる", "すられる", "される", "させる"], a: 2, ex: "する → される." },
          ],
        },
      ],
    },
    {
      number: 8,
      title: "使役の形",
      titleEn: "The causative form",
      summary: "Make the 'make / let someone do' form.",
      page: 26,
      points: [
        {
          pattern: "～(さ)せる",
          meaning: "make / let someone do ～",
          formation:
            "Group I: -u → -aseru (書く → 書かせる, 待つ → 待たせる)\nGroup II: る → させる (食べる → 食べさせる)\nGroup III: させる／来させる",
          explanation:
            "Causative verbs conjugate like Group II verbs. Part 1, Lesson 25 covers who is marked with を and who with に.",
          examples: [
            { ja: "{母|はは}は/{弟|おとうと}に/{野菜|やさい}を/{食|た}べさせます。", en: "My mother makes my little brother eat vegetables.", hl: "食べさせます", w: ["母", "弟", "野菜", "食べる"] },
            { ja: "{先生|せんせい}は/{学生|がくせい}に/{作文|さくぶん}を/{書|か}かせました。", en: "The teacher had the students write an essay.", hl: "書かせました", w: ["先生", "学生", "作文", "書く"] },
            { ja: "{子|こ}どもを/{公園|こうえん}で/{遊|あそ}ばせます。", en: "I let the children play in the park.", hl: "遊ばせます", w: ["子ども", "公園", "遊ぶ"] },
          ],
          quiz: [
            { q: "{待|ま}つ → （　）", o: ["待たせる", "待ちさせる", "待させる", "待てさせる"], a: 0, ex: "Group I: -u → -aseru. 待つ → 待たせる." },
            { q: "{来|く}る → （　）", o: ["来させる", "来らせる", "来かせる", "来れさせる"], a: 0, ex: "来る → 来させる (こさせる)." },
          ],
        },
      ],
    },
    {
      number: 9,
      title: "使役受身の形",
      titleEn: "The causative-passive form",
      summary: "Say you were made to do something.",
      page: 28,
      points: [
        {
          pattern: "～(さ)せられる",
          meaning: "be made to do ～ (against your will)",
          formation:
            "Group I: -u → -aserareru, often shortened to -asareru (書く → 書かせられる／書かされる)\n(す-verbs only use the long form: 話させられる)\nGroup II: る → させられる (食べる → 食べさせられる)\nGroup III: させられる／来させられる",
          explanation:
            "Combine the causative (させる) and the passive (られる). The speaker is the one who was made to act, and the person who forced them is marked with に.",
          examples: [
            { ja: "{子|こ}どもの/とき、/{母|はは}に/{毎日|まいにち}/ピアノを/{練習|れんしゅう}させられました。", en: "As a child, my mother made me practise the piano every day.", hl: "練習させられました", w: ["子ども", "とき", "母", "毎日", "ピアノ", "練習"] },
            { ja: "{駅|えき}で/{一時間|いちじかん}も/{待|ま}たされた。", en: "I was made to wait at the station for a whole hour.", hl: "待たされた", w: ["駅", "一時間", "待つ"] },
            { ja: "{部長|ぶちょう}に/お{酒|さけ}を/{飲|の}まされました。", en: "I was made to drink alcohol by the department manager.", hl: "飲まされました", w: ["部長", "酒", "飲む"] },
          ],
          quiz: [
            { q: "{読|よ}む → （　）", o: ["読まられる", "読まされる", "読みさせられる", "読めさせる"], a: 1, ex: "Short Group I form: 読まされる (= 読ませられる)." },
            { q: "{話|はな}す → （　）", o: ["話さされる", "話させられる", "話しさせられる", "話せられる"], a: 1, ex: "す-verbs can't shorten: 話させられる." },
          ],
        },
      ],
    },
  ],
};
