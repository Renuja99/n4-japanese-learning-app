import type { LessonSrc } from "./types";

export const part1a: LessonSrc[] = [
  {
    number: 1,
    title: "比べる",
    titleEn: "Comparing things",
    summary: "より, ほど～ない, のほう and どちら for comparisons.",
    page: 32,
    points: [
      {
        pattern: "AはBより…／AはBほど…ない",
        meaning: "A is more … than B ／ A is not as … as B",
        formation: "Noun + より + adjective\nNoun + ほど + negative adjective (～くない／～じゃない)",
        explanation:
          "より marks the thing you compare against. ほど is used only with a negative and means 'not as … as'.",
        notes: ["ほど cannot be used with an affirmative: ✕ 東京は大阪ほど大きい."],
        examples: [
          { ja: "{今日|きょう}は/{昨日|きのう}より/{寒|さむ}いです。", en: "Today is colder than yesterday.", hl: "より", w: ["今日", "昨日", "寒い"] },
          { ja: "{電車|でんしゃ}は/バスより/{速|はや}いです。", en: "Trains are faster than buses.", hl: "より", w: ["電車", "バス", "速い"] },
          { ja: "{私|わたし}の/{町|まち}は/{東京|とうきょう}ほど/にぎやかでは/ありません。", en: "My town is not as lively as Tokyo.", hl: "ほどにぎやかではありません", w: ["私", "町", "東京", "にぎやか"] },
        ],
        quiz: [
          { q: "{今年|ことし}の{夏|なつ}は{去年|きょねん}（　）{暑|あつ}くないです。", o: ["より", "ほど", "のほう", "まで"], a: 1, ex: "ほど goes with a negative: ～ほど暑くない." },
          { q: "{飛行機|ひこうき}は{新幹線|しんかんせん}（　）{高|たか}いです。", o: ["ほど", "より", "から", "が"], a: 1, ex: "Affirmative comparison uses より." },
        ],
      },
      {
        pattern: "AよりBのほうが…",
        meaning: "B is more … than A",
        formation: "Noun A + より + Noun B + のほうが + adjective\nVerb (dict.) + より + Verb (dict.) + ほうが",
        explanation: "Puts the focus on the winner of the comparison, B. Often used to answer a どちら question.",
        examples: [
          { ja: "{肉|にく}より/{魚|さかな}の/ほうが/{好|す}きです。", en: "I like fish more than meat.", hl: "のほうが", w: ["肉", "魚", "好き"] },
          { ja: "バスより/{地下鉄|ちかてつ}の/ほうが/{便利|べんり}です。", en: "The subway is more convenient than the bus.", hl: "のほうが", w: ["バス", "地下鉄", "便利"] },
          { ja: "{家|いえ}で/{見|み}るより/{映画館|えいがかん}で/{見|み}る/ほうが/{楽|たの}しいです。", en: "Watching at a cinema is more fun than watching at home.", hl: "ほうが", w: ["家", "見る", "映画館", "楽しい"] },
        ],
        quiz: [
          { q: "コーヒーより{紅茶|こうちゃ}（　）よく{飲|の}みます。", o: ["ほど", "のほうを", "より", "でも"], a: 1, ex: "With a verb that takes を, use のほうを." },
          { q: "{夏|なつ}より{冬|ふゆ}の（　）{好|す}きです。", o: ["ほどが", "ほうが", "よりが", "ほうに"], a: 1, ex: "AよりBのほうが + adjective." },
        ],
      },
      {
        pattern: "AとBとどちらが…",
        meaning: "Which is more …, A or B?",
        formation: "Noun A + と + Noun B + と + どちらが + adjective + ですか\nAnswer: Bのほうが… ／ どちらも…",
        explanation:
          "Used to ask about two choices. For three or more choices, use ～の中で何／どれ／だれが一番…ですか.",
        notes: ["Casual speech often uses どっち instead of どちら."],
        examples: [
          { ja: "{犬|いぬ}と/{猫|ねこ}と/どちらが/{好|す}きですか。", en: "Which do you like more, dogs or cats?", hl: "とどちらが", w: ["犬", "猫", "好き"] },
          { ja: "{北海道|ほっかいどう}と/{沖縄|おきなわ}と/どちらが/{遠|とお}いですか。", en: "Which is farther, Hokkaido or Okinawa?", hl: "とどちらが", w: ["北海道", "沖縄", "遠い"] },
          { ja: "{春|はる}と/{秋|あき}と/どちらが/いいですか。/――どちらも/いいです。", en: "Which is better, spring or autumn? — Both are good.", hl: "どちらも", w: ["春", "秋", "いい"] },
        ],
        quiz: [
          { q: "{電車|でんしゃ}とバスと（　）が{安|やす}いですか。", o: ["どれ", "なに", "どちら", "どこ"], a: 2, ex: "For two choices, ask with どちら." },
          { q: "{果物|くだもの}の{中|なか}で（　）が{一番|いちばん}{好|す}きですか。", o: ["どちら", "なに", "どっち", "だれ"], a: 1, ex: "Three or more choices: ～の中で何が一番." },
        ],
      },
    ],
  },
  {
    number: 2,
    title: "時間と動作",
    titleEn: "Time and actions",
    summary: "ながら, ところです, まで and までに.",
    page: 34,
    points: [
      {
        pattern: "～ながら…",
        meaning: "while doing ～ (two actions at the same time)",
        formation: "Verb ます-stem + ながら",
        explanation:
          "The same person does two things at once. The main action comes last; the ながら action is the background one.",
        examples: [
          { ja: "{音楽|おんがく}を/{聞|き}きながら/{勉強|べんきょう}します。", en: "I study while listening to music.", hl: "聞きながら", w: ["音楽", "聞く", "勉強"] },
          { ja: "{歩|ある}きながら/{電話|でんわ}を/しないで/ください。", en: "Please don't talk on the phone while walking.", hl: "歩きながら", w: ["歩く", "電話"] },
          { ja: "{兄|あに}は/{働|はたら}きながら/{大学|だいがく}に/{通|かよ}っています。", en: "My older brother attends university while working.", hl: "働きながら", w: ["兄", "働く", "大学", "通う"] },
        ],
        quiz: [
          { q: "テレビを（　）ご{飯|はん}を{食|た}べます。", o: ["見ながら", "見るながら", "見てながら", "見たながら"], a: 0, ex: "ます-stem + ながら: 見ながら." },
          { q: "{歌|うた}を（　）{料理|りょうり}をしています。", o: ["歌うながら", "歌いながら", "歌ってながら", "歌わながら"], a: 1, ex: "歌います → 歌いながら." },
        ],
      },
      {
        pattern: "～ところです",
        meaning: "be about to ～ ／ be in the middle of ～ ／ have just ～",
        formation:
          "Verb (dict.) + ところです — about to\nVerb て-form + いるところです — in the middle of\nVerb た-form + ところです — just finished",
        explanation: "ところ points to an exact moment in an action. The verb form before it tells you which moment.",
        examples: [
          { ja: "これから/{出|で}かける/ところです。", en: "I'm just about to go out.", hl: "出かけるところです", w: ["これから", "出かける"] },
          { ja: "{今|いま}、/{晩|ばん}ご{飯|はん}を/{作|つく}っている/ところです。", en: "I'm making dinner right now.", hl: "作っているところです", w: ["今", "晩ご飯", "作る"] },
          { ja: "たった{今|いま}/{駅|えき}に/{着|つ}いた/ところです。", en: "I've just this moment arrived at the station.", hl: "着いたところです", w: ["たった今", "駅", "着く"] },
        ],
        quiz: [
          { q: "A「もう{宿題|しゅくだい}は{終|お}わった？」B「うん、{今|いま}{終|お}わった（　）。」", o: ["ところだ", "ところに", "ままだ", "ながら"], a: 0, ex: "た-form + ところ = just finished." },
          { q: "{今|いま}から{寝|ね}る（　）です。", o: ["まま", "ところ", "ながら", "ほど"], a: 1, ex: "Dictionary form + ところ = about to." },
        ],
      },
      {
        pattern: "～まで…／～までに…",
        meaning: "until ～ (continuing) ／ by ～ (deadline)",
        formation: "Noun／Verb (dict.) + まで + continuing action\nNoun／Verb (dict.) + までに + one-time action",
        explanation:
          "まで means the action continues up to that point. までに sets a deadline: the action happens once, some time before that point.",
        examples: [
          { ja: "{五時|ごじ}まで/{図書館|としょかん}で/{勉強|べんきょう}します。", en: "I'll study at the library until five.", hl: "まで", w: ["五時", "図書館", "勉強"] },
          { ja: "{金曜日|きんようび}までに/レポートを/{出|だ}して/ください。", en: "Please submit the report by Friday.", hl: "までに", w: ["金曜日", "レポート", "出す"] },
          { ja: "{母|はは}が/{帰|かえ}って/くるまでに/{部屋|へや}を/{掃除|そうじ}します。", en: "I'll clean my room before my mother comes home.", hl: "までに", w: ["母", "帰る", "部屋", "掃除"] },
        ],
        quiz: [
          { q: "{八時|はちじ}（　）{会社|かいしゃ}に{来|き}てください。", o: ["まで", "までに", "ところ", "ながら"], a: 1, ex: "Arriving is a one-time action → deadline までに." },
          { q: "{雨|あめ}がやむ（　）ここで{待|ま}ちましょう。", o: ["までに", "まで", "より", "ほど"], a: 1, ex: "Waiting continues → まで." },
        ],
      },
    ],
  },
  {
    number: 3,
    title: "誘う",
    titleEn: "Inviting and offering",
    summary: "ませんか, ましょう and ましょうか.",
    page: 36,
    points: [
      {
        pattern: "～ませんか",
        meaning: "Won't you ～? ／ Would you like to ～? (polite invitation)",
        formation: "Verb ます-stem + ませんか",
        explanation:
          "A soft, polite way to invite someone. It leaves the choice to the listener, so it is more considerate than ～ましょう.",
        level: "N5",
        examples: [
          { ja: "{週末|しゅうまつ}、/{一緒|いっしょ}に/{映画|えいが}を/{見|み}ませんか。", en: "Would you like to see a movie together this weekend?", hl: "見ませんか", w: ["週末", "一緒に", "映画", "見る"] },
          { ja: "ちょっと/お{茶|ちゃ}でも/{飲|の}みませんか。", en: "Won't you have some tea or something?", hl: "飲みませんか", w: ["ちょっと", "お茶", "飲む"] },
          { ja: "{今度|こんど}、/{家|いえ}に/{遊|あそ}びに/{来|き}ませんか。", en: "Why don't you come over to my place sometime?", hl: "来ませんか", w: ["今度", "家", "遊ぶ", "来る"] },
        ],
        quiz: [
          { q: "{明日|あした}、テニスを（　）。――いいですね。", o: ["しませんか", "しないですか", "しましたか", "しませんでしたか"], a: 0, ex: "Invitation: ～ませんか." },
          { q: "A「{一緒|いっしょ}に{帰|かえ}りませんか。」B「すみません、{今日|きょう}は（　）。」", o: ["帰りましょう", "ちょっと…", "帰りませんか", "帰りましょうか"], a: 1, ex: "ちょっと… is the polite way to turn down an invitation." },
        ],
      },
      {
        pattern: "～ましょう／～ましょうか",
        meaning: "Let's ～ ／ Shall we ～? ／ Shall I ～? (offer)",
        formation: "Verb ます-stem + ましょう／ましょうか",
        explanation:
          "～ましょう suggests doing something together or accepts an invitation. ～ましょうか either proposes an idea or offers help: 手伝いましょうか (Shall I help?).",
        level: "N5",
        examples: [
          { ja: "{疲|つか}れましたね。/{少|すこ}し/{休|やす}みましょう。", en: "We're tired, aren't we. Let's rest a little.", hl: "休みましょう", w: ["疲れる", "少し", "休む"] },
          { ja: "{荷物|にもつ}が/{重|おも}そうですね。/{持|も}ちましょうか。", en: "Your bag looks heavy. Shall I carry it?", hl: "持ちましょうか", w: ["荷物", "重い", "持つ"] },
          { ja: "{何時|なんじ}に/{会|あ}いましょうか。", en: "What time shall we meet?", hl: "会いましょうか", w: ["何時", "会う"] },
        ],
        quiz: [
          { q: "{寒|さむ}いですね。{窓|まど}を（　）。", o: ["閉めましょうか", "閉めませんか", "閉めましたか", "閉めています"], a: 0, ex: "Offering to do something for the listener: ～ましょうか." },
          { q: "A「{昼|ひる}ご{飯|はん}を{食|た}べに{行|い}きませんか。」B「ええ、（　）。」", o: ["行きませんか", "行きましょう", "行きましょうか", "行きます"], a: 1, ex: "Accepting an invitation: ええ、～ましょう." },
        ],
      },
    ],
  },
  {
    number: 4,
    title: "できること",
    titleEn: "Ability and perception",
    summary: "Potential form, ことができる and 見える・聞こえる.",
    page: 38,
    points: [
      {
        pattern: "～(ら)れます",
        meaning: "can ～ (potential form)",
        formation: "Potential verb (see Forms 4)\nThe object usually takes が instead of を.",
        explanation:
          "Shows ability or possibility. Because the potential verb describes a state, the thing you can do is normally marked with が.",
        examples: [
          { ja: "{妹|いもうと}は/{自転車|じてんしゃ}に/{乗|の}れます。", en: "My little sister can ride a bicycle.", hl: "乗れます", w: ["妹", "自転車", "乗る"] },
          { ja: "{辛|から}い/{料理|りょうり}は/{食|た}べられません。", en: "I can't eat spicy food.", hl: "食べられません", w: ["辛い", "料理", "食べる"] },
          { ja: "この/{店|みせ}では/カードが/{使|つか}えます。", en: "You can use a card at this shop.", hl: "使えます", w: ["店", "カード", "使う"] },
        ],
        quiz: [
          { q: "{日本語|にほんご}で{手紙|てがみ}が（　）。", o: ["書けます", "書きます", "書かれます", "書かせます"], a: 0, ex: "が + potential: 書けます." },
          { q: "{明日|あした}は{朝|あさ}{早|はや}く（　）か。", o: ["来れます", "来られます", "来ます", "来させます"], a: 1, ex: "Standard potential of 来る is 来られる." },
        ],
      },
      {
        pattern: "～ができます／～ことができます",
        meaning: "can do ～",
        formation: "Noun + ができます\nVerb (dict.) + ことができます",
        explanation:
          "A slightly more formal way to express ability or permission. It is common in notices and explanations: ここでは写真を撮ることができます.",
        examples: [
          { ja: "{兄|あに}は/{中国語|ちゅうごくご}が/できます。", en: "My older brother can speak Chinese.", hl: "ができます", w: ["兄", "中国語", "できる"] },
          { ja: "この/{部屋|へや}は/{誰|だれ}でも/{使|つか}う/ことが/できます。", en: "Anyone can use this room.", hl: "ことができます", w: ["部屋", "誰", "使う", "できる"] },
          { ja: "{百|ひゃく}メートル/{泳|およ}ぐ/ことが/できますか。", en: "Can you swim 100 metres?", hl: "ことができますか", w: ["百", "メートル", "泳ぐ", "できる"] },
        ],
        quiz: [
          { q: "{図書館|としょかん}では{本|ほん}を{三冊|さんさつ}まで{借|か}りる（　）できます。", o: ["が", "ことが", "ことを", "のを"], a: 1, ex: "Verb (dict.) + ことができます." },
          { q: "{私|わたし}はピアノ（　）できます。", o: ["を", "に", "が", "で"], a: 2, ex: "Noun + ができます." },
        ],
      },
      {
        pattern: "見えます・聞こえます",
        meaning: "can be seen ／ can be heard (naturally)",
        formation: "Noun + が + 見えます／聞こえます",
        explanation:
          "見える and 聞こえる describe things that come into your eyes or ears naturally. 見られる and 聞ける mean you are able to see or hear something because the situation lets you (a website, a concert ticket).",
        examples: [
          { ja: "{窓|まど}から/{富士山|ふじさん}が/{見|み}えます。", en: "You can see Mt Fuji from the window.", hl: "見えます", w: ["窓", "富士山", "見える"] },
          { ja: "どこかから/{子|こ}どもの/{声|こえ}が/{聞|き}こえます。", en: "I can hear children's voices from somewhere.", hl: "聞こえます", w: ["子ども", "声", "聞こえる"] },
          { ja: "インターネットで/{昔|むかし}の/{映画|えいが}が/{見|み}られます。", en: "You can watch old movies on the internet.", hl: "見られます", w: ["インターネット", "昔", "映画", "見る"] },
        ],
        quiz: [
          { q: "{静|しず}かにしてください。{先生|せんせい}の{声|こえ}が（　）。", o: ["聞けません", "聞こえません", "聞きません", "聞かれません"], a: 1, ex: "Sound naturally reaching your ears → 聞こえる." },
          { q: "{屋上|おくじょう}から{海|うみ}が（　）。", o: ["見えます", "見られます", "見せます", "見ます"], a: 0, ex: "Natural sight → 見える." },
        ],
      },
    ],
  },
  {
    number: 5,
    title: "経験",
    titleEn: "Experience and occasional events",
    summary: "たことがある and ことがある.",
    page: 40,
    points: [
      {
        pattern: "～たことがあります",
        meaning: "have (ever) done ～ (experience)",
        formation: "Verb た-form + ことがあります\nNegative: ～たことがありません",
        explanation:
          "Talks about something you have experienced at least once in the past. Don't use it for everyday actions or things that just happened (✕ 今朝パンを食べたことがあります).",
        examples: [
          { ja: "{私|わたし}は/{一度|いちど}/{富士山|ふじさん}に/{登|のぼ}った/ことが/あります。", en: "I have climbed Mt Fuji once.", hl: "登ったことがあります", w: ["私", "一度", "富士山", "登る"] },
          { ja: "{着物|きもの}を/{着|き}た/ことが/ありますか。", en: "Have you ever worn a kimono?", hl: "着たことがありますか", w: ["着物", "着る"] },
          { ja: "まだ/{新幹線|しんかんせん}に/{乗|の}った/ことが/ありません。", en: "I've never ridden the shinkansen yet.", hl: "乗ったことがありません", w: ["まだ", "新幹線", "乗る"] },
        ],
        quiz: [
          { q: "{納豆|なっとう}を（　）ことがありますか。", o: ["食べる", "食べた", "食べて", "食べない"], a: 1, ex: "Experience: た-form + ことがある." },
          { q: "{日本|にほん}へは{三回|さんかい}{行|い}った（　）。", o: ["ことがあります", "ことにします", "ところです", "ことができます"], a: 0, ex: "Number of times experienced → ～たことがあります." },
        ],
      },
      {
        pattern: "～ことがあります",
        meaning: "sometimes ～ / there are times when ～",
        formation: "Verb (dict.)／ない-form + ことがあります",
        explanation:
          "With the dictionary or ない-form, ことがある means something happens now and then, not always. Often paired with ときどき or たまに.",
        examples: [
          { ja: "{忙|いそが}しい/ときは/{朝|あさ}ご{飯|はん}を/{食|た}べない/ことが/あります。", en: "When I'm busy, I sometimes skip breakfast.", hl: "食べないことがあります", w: ["忙しい", "とき", "朝ご飯", "食べる"] },
          { ja: "この/{電車|でんしゃ}は/たまに/{遅|おく}れる/ことが/あります。", en: "This train is occasionally late.", hl: "遅れることがあります", w: ["電車", "たまに", "遅れる"] },
          { ja: "{週末|しゅうまつ}は/{家族|かぞく}で/{外食|がいしょく}する/ことが/あります。", en: "At weekends we sometimes eat out as a family.", hl: "することがあります", w: ["週末", "家族", "外食"] },
        ],
        quiz: [
          { q: "{父|ちち}はときどき{会社|かいしゃ}に{泊|と}まる（　）。", o: ["ことがあります", "たことがあります", "ことにします", "ところです"], a: 0, ex: "ときどき + dict. form + ことがある = sometimes." },
          { q: "{雨|あめ}の{日|ひ}は、バスが{来|こ}ない（　）あります。", o: ["ことを", "ことが", "ことに", "のが"], a: 1, ex: "～ないことがあります." },
        ],
      },
    ],
  },
  {
    number: 6,
    title: "許可と義務",
    titleEn: "Permission and obligation",
    summary: "てもいい, てはいけない, なくてもいい, なければならない.",
    page: 44,
    points: [
      {
        pattern: "～てもいいです／～てはいけません",
        meaning: "may ～ ／ must not ～",
        formation: "Verb て-form + もいいです (permission)\nVerb て-form + はいけません (prohibition)",
        explanation:
          "～てもいいですか asks for permission. ～てはいけません forbids something and sounds strict — it is used for rules or by people in authority.",
        notes: ["Casual: ～てもいい？ ／ ～ちゃだめ (～てはだめ)."],
        examples: [
          { ja: "ここに/{座|すわ}っても/いいですか。", en: "May I sit here?", hl: "座ってもいいですか", w: ["座る", "いい"] },
          { ja: "{美術館|びじゅつかん}の/{中|なか}で/{写真|しゃしん}を/{撮|と}っては/いけません。", en: "You must not take photos inside the art museum.", hl: "撮ってはいけません", w: ["美術館", "中", "写真", "撮る"] },
          { ja: "{辞書|じしょ}を/{使|つか}っても/いいです。", en: "You may use a dictionary.", hl: "使ってもいいです", w: ["辞書", "使う", "いい"] },
        ],
        quiz: [
          { q: "{試験|しけん}の{間|あいだ}、{話|はな}して（　）。", o: ["もいいです", "はいけません", "ください", "おきます"], a: 1, ex: "A rule forbidding talking → てはいけません." },
          { q: "A「{窓|まど}を{開|あ}けても（　）か。」B「ええ、どうぞ。」", o: ["いけません", "いいです", "なりません", "ください"], a: 1, ex: "Asking permission: ～てもいいですか." },
        ],
      },
      {
        pattern: "～なくてもいいです／～なければなりません",
        meaning: "don't have to ～ ／ must ～",
        formation: "Verb ない-form − い + くてもいいです\nVerb ない-form − い + ければなりません",
        explanation:
          "～なくてもいい says something is not necessary. ～なければならない says it is necessary or an obligation. In conversation, ～なきゃ／～ないと are common shortened forms.",
        examples: [
          { ja: "{明日|あした}は/{休|やす}みだから、/{早|はや}く/{起|お}きなくても/いいです。", en: "Tomorrow is a day off, so I don't have to get up early.", hl: "起きなくてもいいです", w: ["明日", "休み", "早い", "起きる", "いい"] },
          { ja: "{薬|くすり}を/{一日|いちにち}{三回|さんかい}/{飲|の}まなければ/なりません。", en: "I have to take the medicine three times a day.", hl: "飲まなければなりません", w: ["薬", "一日", "三回", "飲む"] },
          { ja: "{今日|きょう}中に/この/{仕事|しごと}を/{終|お}わらせなければ/なりません。", en: "I must finish this work today.", hl: "終わらせなければなりません", w: ["今日", "仕事", "終わる"] },
        ],
        quiz: [
          { q: "{全部|ぜんぶ}{食|た}べ（　）いいですよ。{残|のこ}してもいいです。", o: ["なくても", "なければ", "ては", "ても"], a: 0, ex: "Not necessary → なくてもいい." },
          { q: "{日本|にほん}では{車|くるま}は{左|ひだり}を{走|はし}ら（　）なりません。", o: ["なくても", "なければ", "ないで", "なくて"], a: 1, ex: "Obligation → なければなりません." },
        ],
      },
    ],
  },
  {
    number: 7,
    title: "希望",
    titleEn: "Wants and wishes",
    summary: "がほしい, たい and といい.",
    page: 46,
    points: [
      {
        pattern: "～がほしいです・～たいです",
        meaning: "want (something) ／ want to do ～",
        formation: "Noun + がほしいです\nVerb ます-stem + たいです\nThird person: ～をほしがっています／～たがっています",
        explanation:
          "ほしい is for things, たい for actions. Both express the speaker's own wish. To talk about another person's wish, use ～がっている (see Lesson 8) or ～たいと言っていました.",
        examples: [
          { ja: "{新|あたら}しい/パソコンが/ほしいです。", en: "I want a new computer.", hl: "がほしいです", w: ["新しい", "パソコン", "ほしい"] },
          { ja: "{夏休|なつやす}みに/{海|うみ}へ/{行|い}きたいです。", en: "I want to go to the sea in the summer holidays.", hl: "行きたいです", w: ["夏休み", "海", "行く"] },
          { ja: "{弟|おとうと}は/{犬|いぬ}を/{飼|か}いたがっています。", en: "My little brother wants to keep a dog.", hl: "飼いたがっています", w: ["弟", "犬", "飼う"] },
        ],
        quiz: [
          { q: "{冷|つめ}たい{水|みず}が（　）。", o: ["飲みたいです", "ほしいです", "ほしがります", "飲みたがります"], a: 1, ex: "Noun + がほしい." },
          { q: "{妹|いもうと}は{留学|りゅうがく}し（　）。", o: ["たいです", "たがっています", "ほしいです", "たいと思います"], a: 1, ex: "Someone else's wish → ～たがっている." },
        ],
      },
      {
        pattern: "～といいです",
        meaning: "I hope ～ ／ it would be good if ～",
        formation: "Verb (plain non-past)／い-adj + といいですね／といいんですが\nな-adj・Noun + だといいですね",
        explanation:
          "Expresses a hope about something outside the speaker's control, such as weather or another person's success. ～といいですね is a friendly wish for the listener.",
        examples: [
          { ja: "{明日|あした}、/{晴|は}れると/いいですね。", en: "I hope it's sunny tomorrow.", hl: "晴れるといいですね", w: ["明日", "晴れる", "いい"] },
          { ja: "{試験|しけん}に/{合格|ごうかく}できると/いいんですが。", en: "I hope I can pass the exam…", hl: "できるといいんですが", w: ["試験", "合格", "できる", "いい"] },
          { ja: "{旅行|りょこう}の/{日|ひ}が/{休|やす}みだと/いいな。", en: "I hope the trip falls on a day off.", hl: "休みだといいな", w: ["旅行", "日", "休み", "いい"] },
        ],
        quiz: [
          { q: "{病気|びょうき}が{早|はや}く{治|なお}る（　）ですね。", o: ["といい", "たい", "ほしい", "ばいい"], a: 0, ex: "Hoping for someone else → ～といいですね." },
          { q: "{週末|しゅうまつ}は{天気|てんき}が（　）といいですね。", o: ["いいだ", "いい", "よくて", "いく"], a: 1, ex: "い-adjective + といい." },
        ],
      },
    ],
  },
  {
    number: 8,
    title: "様子",
    titleEn: "Appearances and states",
    summary: "そうです (looks like), がる and まま.",
    page: 48,
    points: [
      {
        pattern: "～そうです（様態）",
        meaning: "looks ～ ／ seems about to ～ (from what you see)",
        formation:
          "Verb ます-stem + そうです (落ちそう — about to fall)\nい-adj − い + そうです (おいしそう; いい → よさそう)\nな-adj + そうです (元気そう)\nNegative: ～なさそう／～そうもない",
        explanation:
          "A judgement based on what you can see right now. It cannot be used for things that are obvious at a glance, such as colour or size (✕ 赤そう).",
        notes: ["Before a noun: おいしそうなケーキ. Before a verb: おいしそうに食べる."],
        examples: [
          { ja: "この/ケーキは/おいしそうですね。", en: "This cake looks delicious.", hl: "おいしそうですね", w: ["ケーキ", "おいしい"] },
          { ja: "{空|そら}が/{暗|くら}いですね。/{雨|あめ}が/{降|ふ}りそうです。", en: "The sky is dark. It looks like it's going to rain.", hl: "降りそうです", w: ["空", "暗い", "雨", "降る"] },
          { ja: "{子|こ}どもたちが/{楽|たの}しそうに/{遊|あそ}んでいます。", en: "The children are playing happily.", hl: "楽しそうに", w: ["子ども", "楽しい", "遊ぶ"] },
        ],
        quiz: [
          { q: "この{本|ほん}は（　）そうですね。", o: ["おもしろい", "おもしろ", "おもしろく", "おもしろかった"], a: 1, ex: "い-adj drops い: おもしろそう." },
          { q: "{田中|たなか}さんは{元気|げんき}が（　）そうです。", o: ["ない", "なさ", "なく", "な"], a: 1, ex: "ない → なさそう." },
        ],
      },
      {
        pattern: "～がっています・～がります",
        meaning: "(someone else) shows signs of feeling ～",
        formation: "い-adj − い + がる (寒がる, ほしがる)\nな-adj + がる (残念がる)\nVerb ます-stem + たがる",
        explanation:
          "Japanese avoids stating another person's feelings directly. がる describes feelings that show on the outside. Use ～がっている for the present situation and ～がる for a habit.",
        examples: [
          { ja: "{妹|いもうと}は/{暗|くら}い/{所|ところ}を/{怖|こわ}がります。", en: "My little sister is scared of dark places.", hl: "怖がります", w: ["妹", "暗い", "所", "怖い"] },
          { ja: "{子|こ}どもが/{新|あたら}しい/ゲームを/ほしがっています。", en: "My child wants a new game.", hl: "ほしがっています", w: ["子ども", "新しい", "ゲーム", "ほしい"] },
          { ja: "{試合|しあい}に/{負|ま}けて、/{選手|せんしゅ}たちは/{残念|ざんねん}がっていました。", en: "The players were disappointed to lose the match.", hl: "残念がっていました", w: ["試合", "負ける", "選手", "残念"] },
        ],
        quiz: [
          { q: "{田中|たなか}さんは{寒|さむ}（　）います。", o: ["がって", "そうで", "たがって", "くて"], a: 0, ex: "Another person's feeling → 寒がっている." },
          { q: "{息子|むすこ}はいつも{外|そと}で{遊|あそ}び（　）。", o: ["たいです", "たがります", "ほしいです", "そうです"], a: 1, ex: "Another person's habitual wish → たがる." },
        ],
      },
      {
        pattern: "～まま…",
        meaning: "leaving it as ～ ／ without changing the state",
        formation: "Verb た-form + まま\nVerb ない-form + まま\nNoun + のまま／い-adj + まま／な-adj + なまま",
        explanation:
          "Something stays in a certain state while something else happens, often a state that is unusual or not ideal.",
        examples: [
          { ja: "{電気|でんき}を/つけた/まま/{寝|ね}て/しまいました。", en: "I fell asleep with the lights on.", hl: "つけたまま", w: ["電気", "つける", "寝る"] },
          { ja: "{靴|くつ}を/{履|は}いた/まま/{部屋|へや}に/{入|はい}らないで/ください。", en: "Please don't enter the room with your shoes on.", hl: "履いたまま", w: ["靴", "履く", "部屋", "入る"] },
          { ja: "{野菜|やさい}を/{生|なま}の/まま/{食|た}べます。", en: "I eat vegetables raw.", hl: "生のまま", w: ["野菜", "生", "食べる"] },
        ],
        quiz: [
          { q: "{窓|まど}を{開|あ}けた（　）{出|で}かけてしまった。", o: ["ながら", "まま", "ところ", "そう"], a: 1, ex: "Left in a state → たまま." },
          { q: "{子|こ}どものときの（　）の{部屋|へや}です。", o: ["まま", "ように", "ほど", "そう"], a: 0, ex: "Noun + のまま." },
        ],
      },
    ],
  },
  {
    number: 9,
    title: "理由",
    titleEn: "Reasons",
    summary: "から, ので and て／くて／で for causes.",
    page: 50,
    points: [
      {
        pattern: "～から…・～からです",
        meaning: "because ～ (speaker's own reason)",
        formation: "Plain or polite form + から\nResult. + (それは) plain form + からです",
        explanation:
          "から gives a subjective reason. It can be followed by requests, commands, invitations and opinions. ～からです adds the reason after the result has been stated.",
        level: "N5",
        examples: [
          { ja: "{暑|あつ}いから、/{窓|まど}を/{開|あ}けましょう。", en: "It's hot, so let's open the window.", hl: "から", w: ["暑い", "窓", "開ける"] },
          { ja: "{危|あぶ}ないから、/{触|さわ}らないで。", en: "It's dangerous, so don't touch it.", hl: "から", w: ["危ない", "触る"] },
          { ja: "{遅|おく}れたのは、/{電車|でんしゃ}が/{止|と}まった/からです。", en: "The reason I was late is that the train stopped.", hl: "からです", w: ["遅れる", "電車", "止まる"] },
        ],
        quiz: [
          { q: "どうして{来|こ}なかったんですか。――{熱|ねつ}があった（　）。", o: ["からです", "ので", "ためです", "からに"], a: 0, ex: "Answering 'why' → ～からです." },
          { q: "もう{遅|おそ}い（　）、{早|はや}く{帰|かえ}りなさい。", o: ["ので", "から", "のに", "ても"], a: 1, ex: "A command after the reason → から is the natural choice." },
        ],
      },
      {
        pattern: "～ので…",
        meaning: "since ～ / because ～ (soft, objective reason)",
        formation: "Plain form + ので\nな-adj・Noun + なので",
        explanation:
          "ので presents the reason as a natural cause-and-effect, so it sounds softer and more polite than から. It is often used for excuses and polite requests.",
        examples: [
          { ja: "{頭|あたま}が/{痛|いた}いので、/{早|はや}く/{帰|かえ}っても/いいですか。", en: "I have a headache, so may I go home early?", hl: "ので", w: ["頭", "痛い", "早い", "帰る", "いい"] },
          { ja: "{明日|あした}は/{日曜日|にちようび}なので、/{銀行|ぎんこう}は/{休|やす}みです。", en: "Tomorrow is Sunday, so the bank is closed.", hl: "なので", w: ["明日", "日曜日", "銀行", "休み"] },
          { ja: "{道|みち}が/{込|こ}んでいたので、/{遅|おく}れて/しまいました。", en: "The roads were busy, so I ended up being late.", hl: "ので", w: ["道", "込む", "遅れる"] },
        ],
        quiz: [
          { q: "{今日|きょう}は{雨|あめ}（　）、{試合|しあい}は{中止|ちゅうし}です。", o: ["ので", "なので", "だので", "のでに"], a: 1, ex: "Noun + なので." },
          { q: "{用事|ようじ}がある（　）、お{先|さき}に{失礼|しつれい}します。", o: ["ので", "のに", "ても", "まで"], a: 0, ex: "A polite excuse → ので." },
        ],
      },
      {
        pattern: "～て…・～くて…・～で…",
        meaning: "～ and so … (cause → feeling/state)",
        formation: "Verb て-form／い-adj − い + くて／な-adj・Noun + で",
        explanation:
          "A light way to give a cause. The second part is usually a feeling or a state you cannot control (困った, 疲れた, できない). It cannot be followed by requests, invitations or the speaker's intentions.",
        examples: [
          { ja: "{事故|じこ}が/あって、/{電車|でんしゃ}が/{遅|おく}れました。", en: "There was an accident, so the train was late.", hl: "あって", w: ["事故", "ある", "電車", "遅れる"] },
          { ja: "この/{問題|もんだい}は/{難|むずか}しくて、/わかりません。", en: "This problem is difficult, so I don't understand it.", hl: "難しくて", w: ["問題", "難しい", "わかる"] },
          { ja: "{風邪|かぜ}で/{学校|がっこう}を/{休|やす}みました。", en: "I was off school with a cold.", hl: "風邪で", w: ["風邪", "学校", "休む"] },
        ],
        quiz: [
          { q: "{手紙|てがみ}を{読|よ}んで、とても（　）。", o: ["うれしかったです", "読みましょう", "書いてください", "行きたいです"], a: 0, ex: "て-form cause → a feeling, not a request or intention." },
          { q: "{地震|じしん}（　）{家|いえ}が{壊|こわ}れました。", o: ["から", "で", "ので", "て"], a: 1, ex: "Noun cause + で." },
        ],
      },
    ],
  },
  {
    number: 10,
    title: "目的",
    titleEn: "Purpose",
    summary: "に (go to do), ために and ように.",
    page: 52,
    points: [
      {
        pattern: "～に…（行く・来る・帰る）",
        meaning: "go / come / return (in order) to do ～",
        formation: "Verb ます-stem + に + 行きます／来ます／帰ります\nする-noun + に + 行きます (買い物に行く)",
        explanation: "Gives the purpose of moving somewhere. It is only used with movement verbs.",
        level: "N5",
        examples: [
          { ja: "デパートへ/{服|ふく}を/{買|か}いに/{行|い}きます。", en: "I'm going to the department store to buy clothes.", hl: "買いに", w: ["デパート", "服", "買う", "行く"] },
          { ja: "{友|とも}だちが/{家|いえ}に/{遊|あそ}びに/{来|き}ました。", en: "A friend came over to my house to hang out.", hl: "遊びに", w: ["友だち", "家", "遊ぶ", "来る"] },
          { ja: "{昼休|ひるやす}みに/{家|いえ}へ/{昼|ひる}ご{飯|はん}を/{食|た}べに/{帰|かえ}ります。", en: "I go home at lunch break to eat lunch.", hl: "食べに", w: ["昼休み", "家", "昼ご飯", "食べる", "帰る"] },
        ],
        quiz: [
          { q: "{図書館|としょかん}へ{本|ほん}を（　）{行|い}きます。", o: ["返しに", "返すに", "返して", "返すために"], a: 0, ex: "ます-stem + に + 行く." },
          { q: "{空港|くうこう}へ{友|とも}だちを（　）{行|い}きます。", o: ["迎えるに", "迎えに", "迎えて", "迎えよう"], a: 1, ex: "迎えます → 迎えに行く." },
        ],
      },
      {
        pattern: "～ため(に)…",
        meaning: "in order to ～ ／ for the sake of ～",
        formation: "Verb (dict.) + ために\nNoun + のために",
        explanation:
          "Shows a purpose the subject wants to achieve on purpose. The verb before ため is a volitional (controllable) action, and the subject of both parts is the same.",
        examples: [
          { ja: "{家|いえ}を/{買|か}う/ために、/お{金|かね}を/ためています。", en: "I'm saving money to buy a house.", hl: "ために", w: ["家", "買う", "お金", "ためる"] },
          { ja: "{健康|けんこう}の/ために、/{毎朝|まいあさ}/{走|はし}っています。", en: "I run every morning for my health.", hl: "のために", w: ["健康", "毎朝", "走る"] },
          { ja: "{日本|にほん}の/{大学|だいがく}に/{入|はい}る/ために、/{日本語|にほんご}を/{勉強|べんきょう}しています。", en: "I'm studying Japanese to get into a Japanese university.", hl: "ために", w: ["日本", "大学", "入る", "日本語", "勉強"] },
        ],
        quiz: [
          { q: "{家族|かぞく}（　）{一生懸命|いっしょうけんめい}{働|はたら}きます。", o: ["ために", "のために", "ように", "のように"], a: 1, ex: "Noun + のために." },
          { q: "{試験|しけん}に{合格|ごうかく}する（　）、{毎日|まいにち}{勉強|べんきょう}しています。", o: ["ために", "ように", "ので", "のに"], a: 0, ex: "合格する is used as a deliberate goal here → ために." },
        ],
      },
      {
        pattern: "～ように…",
        meaning: "so that ～ ／ in order that ～ (a state you hope for)",
        formation: "Verb (dict.)／ない-form／potential verb + ように",
        explanation:
          "Unlike ために, the verb before ように is not something you directly control: potential verbs, ない-forms, and verbs like わかる, 見える, 治る. The subjects can be different.",
        notes: ["✕ 見えるために → ◯ 見えるように. ✕ 忘れないために is unnatural; use 忘れないように."],
        examples: [
          { ja: "{後|うし}ろの/{人|ひと}にも/{見|み}えるように、/{大|おお}きく/{書|か}きます。", en: "I write large so that people at the back can see too.", hl: "見えるように", w: ["後ろ", "人", "見える", "大きい", "書く"] },
          { ja: "{忘|わす}れないように、/メモして/おきます。", en: "I'll make a note so I don't forget.", hl: "忘れないように", w: ["忘れる", "メモ"] },
          { ja: "{早|はや}く/{泳|およ}げるように、/{毎週|まいしゅう}/プールに/{通|かよ}っています。", en: "I go to the pool every week so that I can swim soon.", hl: "泳げるように", w: ["早い", "泳ぐ", "毎週", "プール", "通う"] },
        ],
        quiz: [
          { q: "{風邪|かぜ}をひかない（　）、{手|て}を{洗|あら}いましょう。", o: ["ために", "ように", "のに", "ので"], a: 1, ex: "Negative (not controllable) → ないように." },
          { q: "{日本語|にほんご}が{話|はな}せる（　）、{毎日|まいにち}{練習|れんしゅう}します。", o: ["ために", "ように", "のために", "ことに"], a: 1, ex: "Potential verb → ように." },
        ],
      },
    ],
  },
  {
    number: 11,
    title: "並べる",
    titleEn: "Listing reasons and actions",
    summary: "し and たり～たり.",
    page: 56,
    points: [
      {
        pattern: "(～も)～し、(～も)…",
        meaning: "and also ～ (listing reasons or points)",
        formation: "Plain form + し\n(な-adj・Noun + だし)",
        explanation:
          "Lists two or more points, often as reasons for a conclusion. Using も with each point emphasises that there are several reasons.",
        examples: [
          { ja: "この/{店|みせ}は/{安|やす}いし、/おいしいし、/よく/{来|き}ます。", en: "This place is cheap and tasty, so I come here often.", hl: "安いし、おいしいし", w: ["店", "安い", "おいしい", "よく", "来る"] },
          { ja: "{雨|あめ}も/{降|ふ}っているし、/{今日|きょう}は/{出|で}かけません。", en: "It's raining too, so I'm not going out today.", hl: "降っているし", w: ["雨", "降る", "今日", "出かける"] },
          { ja: "{彼|かれ}は/{親切|しんせつ}だし、/{頭|あたま}も/いいです。", en: "He's kind, and he's smart too.", hl: "親切だし", w: ["彼", "親切", "頭", "いい"] },
        ],
        quiz: [
          { q: "この{部屋|へや}は{静|しず}か（　）、{明|あか}るいし、{気|き}に{入|い}りました。", o: ["し", "だし", "なし", "でし"], a: 1, ex: "な-adj + だし." },
          { q: "{熱|ねつ}もある（　）、{今日|きょう}は{休|やす}みます。", o: ["し", "たり", "ながら", "まま"], a: 0, ex: "Listing reasons → し." },
        ],
      },
      {
        pattern: "～たり～たりします",
        meaning: "do things like ～ and ～ ／ sometimes ～, sometimes ～",
        formation: "Verb た-form + り, Verb た-form + り + します\n(Adjectives: 高かったり安かったり)",
        explanation:
          "Gives a few examples from a longer list of actions. With opposites (行ったり来たり, 降ったりやんだり) it shows something going back and forth.",
        level: "N5",
        examples: [
          { ja: "{休|やす}みの/{日|ひ}は/{本|ほん}を/{読|よ}んだり、/{散歩|さんぽ}したり/します。", en: "On days off I do things like read and go for walks.", hl: "読んだり、散歩したり", w: ["休み", "日", "本", "読む", "散歩"] },
          { ja: "{今日|きょう}は/{雨|あめ}が/{降|ふ}ったり/やんだり/しています。", en: "Today it keeps raining on and off.", hl: "降ったりやんだり", w: ["今日", "雨", "降る", "やむ"] },
          { ja: "パーティーでは/{歌|うた}ったり/{踊|おど}ったり/しました。", en: "At the party we sang, danced and so on.", hl: "歌ったり踊ったり", w: ["パーティー", "歌う", "踊る"] },
        ],
        quiz: [
          { q: "{週末|しゅうまつ}は{掃除|そうじ}を（　）{洗濯|せんたく}をしたりします。", o: ["して", "したり", "するし", "しながら"], a: 1, ex: "～たり～たりする." },
          { q: "{子|こ}どもが{部屋|へや}を{出|で}たり{入|はい}ったり（　）。", o: ["です", "します", "なります", "あります"], a: 1, ex: "The pattern ends with する." },
        ],
      },
    ],
  },
  {
    number: 12,
    title: "推量",
    titleEn: "Guessing and inferring",
    summary: "かもしれない, はずだ, ようだ／みたいだ.",
    page: 58,
    points: [
      {
        pattern: "～かもしれません",
        meaning: "might ～ / may ～ (about 50% sure)",
        formation: "Plain form + かもしれません\n(な-adj・Noun: no だ — 静かかもしれない, 雨かもしれない)",
        explanation: "The speaker thinks it is possible but is not sure. Casual: ～かも.",
        examples: [
          { ja: "{午後|ごご}から/{雨|あめ}が/{降|ふ}る/かもしれません。", en: "It might rain from the afternoon.", hl: "かもしれません", w: ["午後", "雨", "降る"] },
          { ja: "{田中|たなか}さんは/もう/{帰|かえ}った/かもしれません。", en: "Mr Tanaka may have already gone home.", hl: "かもしれません", w: ["もう", "帰る"] },
          { ja: "あの/{店|みせ}は/{今日|きょう}/{休|やす}み/かもしれない。", en: "That shop might be closed today.", hl: "かもしれない", w: ["店", "今日", "休み"] },
        ],
        quiz: [
          { q: "あの{人|ひと}は（　）かもしれません。", o: ["学生だ", "学生", "学生な", "学生の"], a: 1, ex: "Noun + かもしれない, with no だ." },
          { q: "{道|みち}が{込|こ}んでいるから、{遅|おく}れる（　）。", o: ["かもしれません", "はずです", "ようにします", "ところです"], a: 0, ex: "A possibility → かもしれない." },
        ],
      },
      {
        pattern: "～はずです",
        meaning: "should ～ / is expected to ～ (logical certainty)",
        formation: "Plain form + はずです\nな-adj + なはず／Noun + のはず\nNegative: ～ないはず／～はずがない (can't possibly)",
        explanation:
          "The speaker has a reason or evidence for being fairly sure. ～はずがない strongly denies the possibility.",
        examples: [
          { ja: "{荷物|にもつ}は/{明日|あした}/{届|とど}く/はずです。", en: "The package should arrive tomorrow.", hl: "はずです", w: ["荷物", "明日", "届く"] },
          { ja: "{彼|かれ}は/{十年|じゅうねん}/{日本|にほん}に/いたから、/{日本語|にほんご}が/{上手|じょうず}な/はずです。", en: "He lived in Japan for ten years, so his Japanese should be good.", hl: "上手なはずです", w: ["彼", "十年", "日本", "いる", "日本語", "上手"] },
          { ja: "かぎを/かけたから、/ドアが/{開|あ}いている/はずが/ない。", en: "I locked it, so there's no way the door is open.", hl: "はずがない", w: ["かぎ", "かける", "ドア", "開く"] },
        ],
        quiz: [
          { q: "{会議|かいぎ}は{三時|さんじ}に{終|お}わる（　）です。", o: ["はず", "そう", "よう", "らしい"], a: 0, ex: "Expected by schedule → はずです." },
          { q: "{今日|きょう}は{日曜日|にちようび}だから、{学校|がっこう}は{休|やす}み（　）はずです。", o: ["な", "の", "だ", "で"], a: 1, ex: "Noun + のはず." },
        ],
      },
      {
        pattern: "～ようです・～みたいです",
        meaning: "it seems ～ / looks like ～ (judgement from evidence)",
        formation:
          "Plain form + ようです (な-adj + な, Noun + の)\nPlain form + みたいです (な-adj・Noun: no だ) — more casual",
        explanation:
          "The speaker judges from what they see, hear or feel. ようだ is neutral or written; みたいだ is conversational. Both can also mean 'like ～' (comparison): 夢のようだ.",
        examples: [
          { ja: "{隣|となり}の/{部屋|へや}に/{誰|だれ}か/いる/ようです。", en: "It seems there's someone in the next room.", hl: "ようです", w: ["隣", "部屋", "誰", "いる"] },
          { ja: "{道|みち}が/{濡|ぬ}れていますね。/{夜|よる}、/{雨|あめ}が/{降|ふ}った/みたいです。", en: "The road is wet. It looks like it rained last night.", hl: "みたいです", w: ["道", "濡れる", "夜", "雨", "降る"] },
          { ja: "{山田|やまだ}さんは/{今日|きょう}/{元気|げんき}が/ない/ようですね。", en: "Ms Yamada doesn't seem very energetic today.", hl: "ようですね", w: ["今日", "元気", "ない"] },
        ],
        quiz: [
          { q: "{電気|でんき}が{消|き}えている。{留守|るす}の（　）だ。", o: ["よう", "みたい", "そう", "はず"], a: 0, ex: "Noun + のようだ (みたい would be 留守みたい without の)." },
          { q: "この{店|みせ}は{人気|にんき}（　）ですね。いつも{並|なら}んでいます。", o: ["のよう", "みたい", "なみたい", "だよう"], a: 1, ex: "Noun + みたい (no の, no だ)." },
        ],
      },
    ],
  },
  {
    number: 13,
    title: "命令・助言",
    titleEn: "Instructions and advice",
    summary: "なさい, ほうがいい and ないと.",
    page: 60,
    points: [
      {
        pattern: "～なさい",
        meaning: "Do ～ (instruction from a superior)",
        formation: "Verb ます-stem + なさい",
        explanation:
          "A soft command used by parents to children, teachers to students, and in test instructions (正しいものを選びなさい). Not used toward people of higher status.",
        examples: [
          { ja: "{早|はや}く/{寝|ね}なさい。", en: "Go to bed early.", hl: "寝なさい", w: ["早い", "寝る"] },
          { ja: "ご{飯|はん}の/{前|まえ}に/{手|て}を/{洗|あら}いなさい。", en: "Wash your hands before eating.", hl: "洗いなさい", w: ["ご飯", "前", "手", "洗う"] },
          { ja: "{次|つぎ}の/{文|ぶん}を/{読|よ}んで、/{質問|しつもん}に/{答|こた}えなさい。", en: "Read the following text and answer the questions.", hl: "答えなさい", w: ["次", "文", "読む", "質問", "答える"] },
        ],
        quiz: [
          { q: "（{母|はは}が{子|こ}どもに）{宿題|しゅくだい}を（　）。", o: ["しなさい", "しなさいます", "するなさい", "してなさい"], a: 0, ex: "ます-stem + なさい." },
          { q: "{先生|せんせい}に「なさい」を{使|つか}うのは（　）。", o: ["いい", "失礼", "丁寧", "普通"], a: 1, ex: "なさい is only used toward people below you." },
        ],
      },
      {
        pattern: "～ほうがいいです",
        meaning: "you'd better ～ / you should ～",
        formation: "Verb た-form + ほうがいいです\nVerb ない-form + ほうがいいです",
        explanation:
          "Gives strong advice. The た-form is common for positive advice even though it talks about the future. Can sound pushy to superiors, so add と思います to soften it.",
        examples: [
          { ja: "{熱|ねつ}が/あるなら、/{病院|びょういん}へ/{行|い}った/ほうが/いいですよ。", en: "If you have a fever, you'd better go to the hospital.", hl: "行ったほうがいいです", w: ["熱", "ある", "病院", "行く"] },
          { ja: "{夜|よる}/{遅|おそ}く/{一人|ひとり}で/{歩|ある}かない/ほうが/いいです。", en: "You'd better not walk alone late at night.", hl: "歩かないほうがいいです", w: ["夜", "遅い", "一人", "歩く"] },
          { ja: "{傘|かさ}を/{持|も}って/いった/ほうが/いいと/{思|おも}います。", en: "I think you should take an umbrella.", hl: "ほうがいいと思います", w: ["傘", "持つ", "行く", "思う"] },
        ],
        quiz: [
          { q: "{疲|つか}れているなら、{早|はや}く（　）ほうがいいよ。", o: ["寝る", "寝た", "寝て", "寝よう"], a: 1, ex: "Positive advice: た-form + ほうがいい." },
          { q: "お{酒|さけ}はあまり（　）ほうがいいですよ。", o: ["飲まない", "飲まなかった", "飲んで", "飲みたい"], a: 0, ex: "Negative advice: ない-form + ほうがいい." },
        ],
      },
      {
        pattern: "～ないと",
        meaning: "I've got to ～ / must ～ (casual)",
        formation: "Verb ない-form + と (+ いけない／だめだ)",
        explanation:
          "A conversational short form of ～ないといけない. Speakers often stop after と when talking about what they must do.",
        examples: [
          { ja: "もう/{九時|くじ}だ。/{早|はや}く/{行|い}かないと。", en: "It's already nine. I've got to hurry and go.", hl: "行かないと", w: ["もう", "九時", "早い", "行く"] },
          { ja: "{明日|あした}は/{試験|しけん}だから、/{勉強|べんきょう}しないと。", en: "There's a test tomorrow, so I have to study.", hl: "勉強しないと", w: ["明日", "試験", "勉強"] },
          { ja: "{薬|くすり}を/{飲|の}まないと/だめですよ。", en: "You need to take your medicine.", hl: "飲まないとだめ", w: ["薬", "飲む"] },
        ],
        quiz: [
          { q: "{牛乳|ぎゅうにゅう}がない。{買|か}いに（　）。", o: ["行かないと", "行かなくて", "行かないで", "行かないので"], a: 0, ex: "Sentence-ending 'must' → ないと." },
          { q: "{約束|やくそく}は{守|まも}らない（　）だめだよ。", o: ["ので", "と", "で", "ても"], a: 1, ex: "～ないとだめ." },
        ],
      },
    ],
  },
];
