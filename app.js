const STORAGE_KEY = "bao-personal-archive-v1";
const BUILT_IN_RITUAL_ID = "builtin-hermes-rituals";
const BUILT_IN_HERBAL_OVERVIEW_ID = "builtin-herbal-overview";
const BUILT_IN_HERBAL_MAKING_ID = "builtin-herbal-making";
const BUILT_IN_MAGICAL_HERBS_ID = "builtin-magical-herbs";
const BUILT_IN_GRIMOIRE_ID = "builtin-green-grimoire";
const BUILT_IN_CANDLE_RITUAL_ID = "builtin-candle-rituals";
const BUILT_IN_ASTRO_HOUSES_ID = "builtin-astro-houses";
const BUILT_IN_ASTRO_PLANETS_ID = "builtin-astro-planets";
const BUILT_IN_ASTRO_ASPECTS_ID = "builtin-astro-aspects";
const BUILT_IN_HERBAL_PAIRING_ID = "builtin-herbal-pairing";

const noteCategoryOrder = ["astrology", "herbal", "ritual", "mixed"];

const candleRitualGroups = [
  {
    title: "安全与身体状态",
    notes: [
      "红色蜡烛的能量比较强，心脏、血压、发热、心率过快或身体状态不稳时尽量避开；为来访者做仪式时也要先考虑对方身体状况。",
      "开始前让自己情绪稳定。操作者的焦虑、急躁或恐惧会影响火焰观察和判断。",
      "蜡烛会消耗氧气，不要在密闭空间里长时间点很多蜡烛；保持通风和基础防火，旁边不要放易燃物。",
      "空间要先打扫、净化、充能。不要在长期不见光、楼梯间或杂乱压抑的地方做。酒店可作为临时选择，但建议先做黑色清理蜡烛。"
    ]
  },
  {
    title: "熄灭、保存与时限",
    notes: [
      "普通许愿蜡烛如果只是不好点燃、烛芯问题，可以重新点燃。",
      "清理/净化蜡烛如果很早熄灭，新手不建议强行继续点，可能代表要清理的目标太重、愿望难度较高，或来访者描述并不完全客观。",
      "愿望写上蜡烛后就等于开始启动，不要放太久。最好 7 天内点燃，最长不要超过 15 天。",
      "写好但暂时未点的蜡烛要密封、避光保存；阳光直晒会削弱它的效力。"
    ]
  },
  {
    title: "摆放与保护结构",
    notes: [
      "最简单：一支小蜡烛放在小盘子上，适合轻量、明确、单一的意图。",
      "常用保护结构：意图蜡烛放中央，四个方向放小蜡烛做保护和平衡，通常用白色或黄色；四角蜡烛不写愿望。",
      "多支蜡烛同时工作时要保持距离。新手可以让蜡烛之间相隔约 1 米，避免注意力和能量互相干扰。",
      "做空间清理前可先画保护符号，再进行清理。"
    ]
  },
  {
    title: "空间清理流程",
    notes: [
      "门窗先关好，从入户门位置开始。",
      "拿黑色蜡烛逆时针绕房间行走，不走回头路。",
      "逢角必清：墙角、柜角、厨房台面角、容易积滞的角落都要照顾到。",
      "反光必清：镜子、窗户、电视、大面积反光电器都要清理。",
      "如果清理过程中蜡烛熄灭，回到入户门位置重新开始。"
    ]
  },
  {
    title: "愿望书写规则",
    notes: [
      "增长、吸引、上升类愿望：用金色笔，从下往上写，方向走顺时针。",
      "释放、减少、远离类愿望：用银色笔，从上往下写，方向走逆时针。",
      "月相参考：新月之后到盈月阶段更适合增长类；亏月阶段更适合释放类。原资料中提到农历 28/29 日和满月不做白魔法类操作。",
      "愿望里写清楚对象姓名、生日、符号/天使星座等身份信息，以及一句简单明确的愿望。生日可用日.月.年格式。",
      "可以用英文、拼音或其他拉丁字母语言书写，重点是指令清楚。清理蜡烛较特殊，姓名可写成镜像字母。",
      "愿望句要短、清楚、单一，避免复杂从句。涉及金钱或具体目标时可以加数字和时间限制。",
      "蜡烛写不下时，可把愿望写在干净白纸上压在托盘下或绑在蜡烛上，但效果弱于直接写在蜡烛上。"
    ]
  },
  {
    title: "颜色速查",
    notes: [
      "红色：强烈、行动、身体性能量、热度，也可用于保护和空间充能；身体不稳、第一次给房子充能或来访者健康情况不明时慎用。",
      "橙色：介于红与粉之间，带来热情、流动、乐观、友情、创造力、灵感，也与骶轮、情绪流动和部分生育/性议题有关；孕期慎用。",
      "粉色：更柔和的爱、关系、吸引与情感流动，比红色温和。",
      "黄色：智慧、思考、学习、考试、灵感、表达与创意。",
      "天蓝色：高层沟通、好运、抽签/游戏类运气，也可用于较温和的居家充能。",
      "深蓝色：降温、冷静、安抚情绪，适合先处理争吵、激动和过热状态。",
      "紫色：在已有准备的基础上支持考试、表演、深层思考和创造性输出。",
      "绿色：健康与财富，但不太适合做一般房屋充能。"
    ]
  }
];

const astrologyHouseGroups = [
  {
    title: "宫位怎么理解",
    notes: [
      "占星基础由三部分组成：黄道十二星座、黄道十二宫位、十大星体。星座像能量风格，星体像行动主体，宫位像事情发生的生命场所。",
      "宫位不是星座本身，而是以出生地与出生时刻为中心划分出的十二个生命领域。它描述“这件事发生在哪里”。",
      "同一颗行星使用不同分宫制时，可能会落在不同宫位；这不是占星失效，而是不同系统强调的观察角度不同。",
      "普拉西度分宫制常用于现代心理占星，适合观察内在动机、心理模式和个人经验；整宫制常用于古典占星、卜卦占星和命运事件判断。",
      "如果初学时不确定用哪一种，可以两个都看：普拉西度看心理描述，整宫制看事件走向，再用真实个案经验校准。"
    ]
  },
  {
    title: "一宫到六宫：个人世界",
    notes: [
      "第一宫：我是谁。上升点与人格面具、外在气质、身体状态、进入新环境时的本能反应有关。",
      "第二宫：我的钱与资源。代表可流动的钱、物质、安全感、价值感，也包含能转化成收入的天赋和技能。",
      "第三宫：我的思想与表达。代表沟通、语言、学习方式、短途移动、兄弟姐妹、邻居和童年近距离环境。",
      "第四宫：我的根。代表原生家庭、家宅、内在安全基地，也可看生命的根部、晚年、墓地和家族记忆。",
      "第五宫：我的快乐与创造。代表恋爱、舞台感、孩子、创作、游戏、赌博、让人感到被点亮和愉悦的事。",
      "第六宫：我的工作与日常。代表日常劳动、同事、服务、细节、健康习惯、身体管理和需要持续处理的琐事。"
    ]
  },
  {
    title: "七宫到十二宫：关系与社会世界",
    notes: [
      "第七宫：一对一关系。代表伴侣、婚姻、合伙、契约关系，也代表自己拥有但尚未完全活出来、容易投射到他人身上的部分。",
      "第八宫：深层亲密与暗流。代表共享资源、伴侣的钱、性、潜意识、恐惧、控制、危机、创伤激活与深度转化。",
      "第九宫：远方与意义。代表高等教育、哲学、宗教、心理学、法律、出版、长途旅行、异国文化和生命意义的追寻。",
      "第十宫：事业与社会位置。代表职业成就、社会地位、权威形象、名望、公众角色，也常与父母期待和社会评价有关。",
      "第十一宫：群体与理想。代表朋友、社群、团队、组织、同学同事、大众关系、公共网络，以及一个人如何进入更大的群体。",
      "第十二宫：隐藏与合一。代表潜意识、独处、隔离之地、医院、寺院、监狱、幕后、前世缘分、母亲孕期经验，以及一个周期的结束和下个周期的开始。"
    ]
  },
  {
    title: "宫位轴线速查",
    notes: [
      "一宫-七宫：我与他人。第一宫看自我呈现，第七宫看伴侣、合作和一对一关系。",
      "二宫-八宫：我的资源与共享资源。第二宫看自己的钱和价值感，第八宫看亲密关系里的钱、权力、性与危机。",
      "三宫-九宫：近处学习与远方意义。第三宫看日常沟通和基础学习，第九宫看高等教育、信仰、哲学和远行。",
      "四宫-十宫：家庭根基与社会顶点。第四宫是星盘底部，代表根与家；第十宫是星盘高处，代表事业、名望和社会角色。",
      "五宫-十一宫：个人创造与群体理想。第五宫看个人的快乐、恋爱和作品；第十一宫看朋友、团体和共同愿景。",
      "六宫-十二宫：日常服务与隐秘消融。第六宫处理现实生活里的工作、身体和秩序；第十二宫指向隐藏、疗愈、独处和更大的精神性。"
    ]
  },
  {
    title: "宫位与生命周期",
    notes: [
      "第一宫约对应出生到 18 个月：出生经验、身体降临、对世界的第一反应。上升星座像进入新环境时会不断被激活的浓缩经验。",
      "第二宫约对应 18 个月到 4 岁：通过味觉、触觉、嗅觉、听觉、视觉感受世界，建立身体感、安全感和“我拥有”的经验。",
      "第三宫约对应 4 岁到 7 岁：语言、学习、模仿、提问、表达、与兄弟姐妹或同龄人的近距离互动开始变重要。",
      "第四宫约对应 7 岁到 12 岁：家庭、归属、安全基地、对父母和家族氛围的吸收更明显。",
      "第五宫约对应青春期前后：恋爱、被看见、创造力、游戏感、舞台感和自我表达开始被点亮。",
      "第六宫约对应进入实际劳动与训练的阶段：学习责任、规则、日常秩序、服务、工作技能和身体管理。",
      "第七宫约对应建立伴侣和契约关系的阶段：婚姻、合伙、一对一关系，以及通过对方看见自己未整合的部分。",
      "第八宫约对应亲密关系的深水区：共享金钱、权力斗争、性、恐惧、创伤激活与蜕变。",
      "第九宫约对应意义追寻：经历痛苦或转化后，开始寻找哲学、宗教、心理学、教育和更大的生命解释。",
      "第十宫约对应事业高峰和社会定位：把内在积累带到外部世界，建立权威、成果和社会位置。",
      "第十一宫约对应从个人成就走向群体：朋友、社群、公共理想、大众连接和更大的共同体。",
      "第十二宫约对应周期结束：退隐、整合、放下、疗愈、与世界隔离的空间，也孕育下一个生命周期。"
    ]
  },
  {
    title: "查盘时的整合顺序",
    notes: [
      "第一步：先看行星是什么。太阳、月亮、水星、金星、火星等各自代表不同生命功能。",
      "第二步：看行星落入哪个星座。星座描述这个生命功能以什么风格表达。",
      "第三步：看行星落入哪个宫位。宫位说明这股能量主要在哪个生命领域发生。",
      "第四步：看宫头星座。宫头星座会给该宫领域染上基本气质，比如六宫处女更重视工作细节，六宫双子可能有双重工作或靠表达吃饭。",
      "第五步：再看相位。相位只看行星之间的角度关系，不要把宫位本身当成相位来数。"
    ]
  }
];

const astrologyPlanetGroups = [
  {
    title: "整合原则",
    notes: [
      "先看行星代表什么生命功能，再看星座描述它如何表达，最后看宫位说明它在哪个生活领域发生。",
      "相位只看行星之间的角度关系，与宫位本身无关。不要把“同宫”直接当作相位。",
      "太阳、月亮是读盘核心。太阳偏向自我、意志、荣耀感和想活出的样子；月亮偏向情绪、安全感、母亲经验和本能反应。",
      "如果一颗行星靠近一宫、四宫、七宫、十宫等角宫宫头，它会更容易在现实生活中被看见。"
    ]
  },
  {
    title: "太阳落宫摘记",
    notes: [
      "太阳七宫：在意一对一关系，渴望在关系中被看见、被尊重，也可能在伴侣、合伙、婚姻议题中发展自我。",
      "太阳八宫：与深层亲密、共享资源、金钱暗流、隐私和控制议题连接很深，适合研究金融、税务、心理、危机处理等领域。",
      "太阳九宫：热爱学习与探索，对宗教、哲学、心理学、出版、教育和异国文化有兴趣，需要不断扩展生命视野。",
      "太阳十宫：重视事业成就、社会位置、威望和公众影响力，适合领导、管理或需要被看见的职业角色。",
      "太阳十一宫：活跃于团体和朋友网络，容易通过社群、团队、公共平台或共同理想建立自我价值。",
      "太阳十二宫：能量较隐藏，适合幕后、独处、疗愈、艺术、灵性或与隔离空间相关的领域；需要学习把隐藏的自我慢慢整合出来。"
    ]
  },
  {
    title: "月亮落宫摘记",
    notes: [
      "月亮八宫：对危机和情绪暗流很敏锐，安全感不容易稳定；可用于金融、商业、心理洞察和危机判断。",
      "月亮十宫：受母亲或家庭期待影响较大，容易希望在社会上做出成绩，也可能从事与家庭、照顾、餐饮、民宿等有关的工作。",
      "月亮十一宫：朋友、群体和理想很重要，可能把朋友当作家人；参与群体时容易照顾他人，也容易被情绪影响理想实现。",
      "月亮十二宫：情绪隐藏性强，越亲近也未必越容易被看懂；独处、医院、寺院、图书馆、大学等与外界保持距离的空间会带来放松感。"
    ]
  },
  {
    title: "金星与火星摘记",
    notes: [
      "金星八宫：可能通过伴侣、家庭、遗产、礼物或共享资源获得金钱与支持；亲密关系中的吸引力、占有欲和享受感会被放大。",
      "金星十二宫：对爱有无限度的期待，容易觉得现实中的爱不够完美；也可能出现隐秘恋情、地下关系或不为人知的钱财。",
      "火星七宫：容易吸引强势、直接、有行动力的伴侣；关系里会有碰撞和对抗，也适合律师、谈判、替人争取权益等工作。",
      "火星八宫：对金融、性、潜意识和危机议题有强烈兴趣，生命中容易出现激烈事件，需要把强大的攻击性转化成创造力。",
      "火星九宫：渴望扩展生命维度，对异国文化、宗教、哲学、教学、旅行或传播理念有动力。",
      "火星十宫：把大量精力投入事业和社会成就，容易与权威或领导发生冲突，也适合自己掌握事业方向。"
    ]
  },
  {
    title: "外行星摘记",
    notes: [
      "冥王星七宫：关系是深度转化工具，容易经历权力斗争、控制、不信任和强烈情绪；关系结束也可能带来人生阶段的重生。",
      "冥王星八宫：生命力强、意志顽强，适合把巨大能量投入事业、心理、神秘学、医学或深度研究。",
      "冥王星九宫：会严肃深入地钻研宗教、哲学、法律、心理学或专业知识，也可能经历信仰崩塌后重建。",
      "冥王星十宫：事业会经历摧毁与重建，适合医学、心理学、神秘学等能处理深层议题的方向。",
      "冥王星十二宫：隐藏欲望，容易把欲望投射到外界；可通过梦境、冥想、独处和反思完成深层蜕变。",
      "海王星十宫：容易被大众理想化或崇拜，适合艺术、疗愈、服务大众的职业；也要注意事业理想与现实边界。",
      "天王星八宫：会用客观、实验性的方式探索潜意识、死亡、性、占星、心理学或量子议题，共享资源和亲密关系中容易有突然转折。"
    ]
  }
];

const astrologyAspectGroups = [
  {
    title: "相位怎么看",
    notes: [
      "相位看的是行星之间的角度，不看宫位。宫位说明领域，相位说明两个生命功能之间如何互相牵动。",
      "合相 0 度：两颗行星能量混在一起，表现明显；如果紧贴宫头或角宫，外显度更强。",
      "四分相 90 度：带来摩擦、压力和行动需求，容易形成内在冲突，也最能推动成长。",
      "对分相 180 度：两股能量彼此拉扯，常通过关系、外界事件或投射被看见。",
      "三分相 120 度、六分相 60 度：较流畅、容易使用，但也可能因为太自然而缺少主动觉察。",
      "读相位时先回到两颗行星本身：它们分别代表什么生命功能，再看它们之间是支持、冲突、拉扯还是融合。"
    ]
  },
  {
    title: "太阳与月亮相位",
    notes: [
      "太阳代表自我、阳性能量、父亲经验、荣耀感和想活出的生命方向；月亮代表情绪、安全感、母亲经验、过去和本能反应。",
      "太阳月亮有困难相位时，常见表现是内在分裂：想成为的自己和情绪需求不一致，家庭中也可能存在父母关系紧张、角色缺位或彼此否定。",
      "太阳月亮四分相可能带来自我压抑，不敢如实表达自己，因为表达可能会激活家庭冲突或内在冲突。",
      "太阳月亮对分相容易把内在两极投射到关系中：一边想活出自我，一边又被情绪、安全感或亲密需求牵动。",
      "太阳月亮三分/六分相通常代表内在协调度较高，较能自然表达自己，早期家庭经验也更容易带来安全感；但也可能因为冲突少，转化动力较弱。"
    ]
  },
  {
    title: "太阳与水星相位",
    notes: [
      "水星代表思考、语言、学习、资讯流动、交易和认知方式。太阳水星相位会把自我认同和表达、知识、观点绑定在一起。",
      "太阳水星合相的人很希望自己的观点被听见、被尊重，容易把表达能力、知识水平和自我价值联系起来。",
      "紧密合相时可能带来很强的主观性：会觉得自己的想法就是正确的，不容易真正接纳不同观点。",
      "如果太阳水星再与土星形成困难相位，可能会不信任自己的表达和沟通能力，害怕说错，表达更谨慎、更压抑。",
      "如果太阳水星落在知识、教学、咨询、写作相关宫位，会更容易把说话、学习、写作、研究发展成重要能力。"
    ]
  },
  {
    title: "水星与土星相位",
    notes: [
      "水星土星相位会让思考更严谨、结构化、谨慎，但学习和表达通常比较慢热。",
      "水星摩羯或水星土星相位的人，常需要更长时间理解新知识；一旦投入足够时间，容易在专业领域建立扎实能力。",
      "困难表现是对表达没有信心、害怕出错、语言不够流动，早期学习过程可能不轻松。",
      "优势表现是适合学术研究、咨询、结构化表达、长期训练型知识，不容易只停在表面。"
    ]
  },
  {
    title: "火星与土星相位",
    notes: [
      "火星代表行动、攻击性、欲望、冲劲和身体火力；土星代表限制、恐惧、责任、压抑和权威。",
      "火土相位常见表现是火能量被压住：不一定总是发脾气，反而可能长期克制，压到某个点才爆发。",
      "困难相位时，攻击性可能不敢对权威释放，却会对安全范围内的人突然爆发。资料里提到火星巨蟹尤其容易把愤怒压在情绪里，再找不具威胁性的人释放。",
      "女性盘里火土相位有时会投射到伴侣身上，吸引强硬、压抑、严肃或带有火土特质的人。",
      "整合方向：允许自己用成熟方式表达愤怒和边界，把火星的行动力放进土星的结构里，变成稳定执行力。"
    ]
  },
  {
    title: "火星与天王星/冥王星",
    notes: [
      "火星天王星困难相位容易叛逆、突然爆发、喜欢唱反调，不喜欢被打扰或被别人安排；如果靠近上升点，外在个性更明显。",
      "火星天王星也可能带来突发性、意外性和强烈自主需求，需要避免冲动行事。",
      "火星冥王星相位强度更深，可能带来强大意志、攻击性、欲望、控制感和摧毁旧结构的冲动。",
      "读这类相位时要看是否有合相、四分、对分，以及落入的宫位；它会指出能量在哪个生活领域最容易爆发或转化。"
    ]
  },
  {
    title: "宫头与行星影响",
    notes: [
      "靠近宫头线的行星，对该宫位影响更明显。尤其靠近一宫、四宫、七宫、十宫宫头时，会更容易外显。",
      "如果多颗行星落在同一宫位，说明该宫主题很集中。例如第七宫落入太阳、水星、金星、火星，会显示婚姻、伴侣和一对一关系非常复杂且重要。",
      "同一宫位内，越靠近宫头的行星越先被感受到；后面的行星也有效，但影响层次会更靠后。",
      "资料中提到例子：六宫若依次有水星、月亮、北交、太阳，靠近宫头者对六宫工作、健康、日常秩序的影响更直接。"
    ]
  }
];

const herbalPairingGroups = [
  {
    title: "先按目标选草药",
    notes: [
      "保护：偏预防和建立边界。适合香包、门口撒粉、熏香、护符袋；事情已经发生后，保护草药通常只是辅助。",
      "净化/驱魔：用于清除日常负面情绪、空间滞重感和不舒服的能量。日常净化不等于处理强烈实体或严重问题。",
      "治疗/健康：可做香包、熏香、沐浴、人偶或外用配方；不要把魔法当成医疗替代，身体问题仍要正常求医。",
      "爱情：用于吸引合适的人进入生活、增强温柔和情感振动，不适合强迫某个具体对象爱你。",
      "忠诚：只能作为温和提醒和关系维护，不建议用来胁迫对方。",
      "幸运：帮助人在对的时间、对的地点、说对的话；更像趋吉避凶和打开机会。",
      "金钱/繁荣：增加赚钱机会、礼物、遗产、调薪、投资机会或别人还钱，不是凭空制造现金。",
      "愿望：用于重要但未必紧急的愿望；先确认这是真实需要，再选择月相、行星日和草药。"
    ]
  },
  {
    title: "行星对应",
    notes: [
      "太阳：法律纠纷、治疗、保健、心脏、荣耀感、成功。",
      "月亮：睡眠、预言梦、生育、和平、治疗、情绪、皮肤和生理节奏。",
      "水星：心智能力、占卜、灵力、智慧、学习、表达、肺部。",
      "金星：爱、友谊、忠实、美貌、青春、生殖系统、肾脏。",
      "火星：勇气、力量、欲望、性能力、驱邪、破除诅咒、保护、胆囊。",
      "木星：金钱、发达、消除法律纠纷、运气、贵人、肝脏。",
      "土星：长寿、驱魔、结束、限制、边界、脾脏。"
    ]
  },
  {
    title: "元素对应",
    notes: [
      "土元素：金钱、发达、生育、治疗、就业，适合需要稳定、落地和实际结果的目标。",
      "风元素：心智能力、幻觉、灵力、智慧、占卜、表达，适合学习、沟通、信息流动和灵感。",
      "火元素：欲望、勇气、力量、驱魔、保护、健康，适合行动、突破、防御和提升能量。",
      "水元素：睡眠、冥想、净化、梦境预言、治疗、爱情、友谊、忠实，适合情感、疗愈、柔化和连接。"
    ]
  },
  {
    title: "形式怎么选",
    notes: [
      "香包/巫术袋：适合保护、爱情、健康、幸运、金钱等持续携带的目标。草药通常不超过一汤匙，布和绳子的颜色按意图选择。",
      "熏香：适合空间净化、召唤氛围、保护、爱情、繁荣。配方不宜太复杂，超过 9 种材料通常会散。",
      "沐浴：适合净化、爱情吸引、解除滞重感、放松身体。可用草药香包泡澡，或把过滤后的浸剂加入浴缸。",
      "人偶：适合疗愈、财富、爱情或个人转化；资料建议最好只做代表自己的，不要替代另一个具体的人。",
      "油膏/油：适合外用、涂脉搏点、涂蜡烛、涂香包或人偶。储存在密闭容器和阴凉处。",
      "四元素法：土埋、风吹、火烧、水撒，分别适合落地、传播、转化、流动释放。"
    ]
  },
  {
    title: "月相与时间",
    notes: [
      "新月：适合新开始、长期愿景、目标设定和许愿。",
      "新月到满月：适合吸引类、丰盛类、增加类、变多类的魔法。",
      "满月：适合重要愿望和需要明确指标的愿望。蓝月可用于重大愿望。",
      "满月到下弦月：适合减少、断舍离、清理和释放。",
      "黑月：适合切断、结束、死亡象征、召唤灵魂、清业力或诅咒类主题；新手谨慎。",
      "行星日：周日太阳，周一月亮，周二火星，周三水星，周四木星，周五金星，周六土星。",
      "月空、日食、月食时谨慎操作；资料里建议日食和月空不做，月食更偏清理、忏悔、戒除。"
    ]
  },
  {
    title: "蜡烛圣化颜色",
    notes: [
      "不知道草药对应颜色时，可以用白色蜡烛。",
      "爱情类草药：粉色或红色。粉色偏浪漫、柔和，红色偏激情和承诺。",
      "智慧、记忆力、考试：蓝色。",
      "木星类机遇、贵人、财富、金钱：绿色。",
      "疗愈、净化、月亮能量、保护、抚平情绪：白色。",
      "土星日或结束、边界、切断类主题：黑色较常用。",
      "四角四根蜡烛加中央一根蜡烛，可用于把能量浸透进草药碗中。"
    ]
  },
  {
    title: "常用熏香配方",
    notes: [
      "房间净化：乳香树脂 1 茶匙、香脂树脂 1 茶匙、柠檬皮粉末 1 茶匙、干薰衣草 3 撮。",
      "幸福：乳香、柠檬、橙子。",
      "和谐：薰衣草、白檀香粉、茉莉。",
      "健康：没药、安息香、牛膝草、桉树。",
      "爱情：苏合香、玫瑰、茉莉、肉桂。",
      "和平：乳香、薰衣草、紫罗兰。",
      "繁荣：乳香、松树、罗勒、薄荷、肉桂。",
      "保护：龙血树脂、迷迭香、丁香。"
    ]
  },
  {
    title: "草药条目摘记",
    notes: [
      "阿拉伯胶树：保护、灵力、净化；可与檀香燃烧以激发灵力，也可少量加入金钱和柏拉图式爱情相关配方。",
      "芦荟：保护、运气；室内悬挂或种植可用于家庭保护、趋吉避凶。",
      "欧白芷：驱魔、保护、治疗、幻觉；可用于保护和驱魔熏香，也可加入浴缸用于破除诅咒类主题。",
      "大茴香：保护、净化、青春；籽可用于净化沐浴，也常与月桂叶搭配。",
      "苹果：爱情、治疗、花园魔法；苹果花可用于爱情香包，苹果木适合情感和爱情仪式。",
      "柠檬香蜂草：爱情、成功、治疗；可用于爱情影响、疗愈和温和吸引。",
      "竹子：保护、运气、破除诅咒、愿望；可用于家宅保护、愿望和破咒。",
      "罗勒：爱情、驱魔、财富、保护；可用于爱情香包、净化沐浴，也可撒地板驱邪。",
      "月桂：保护、灵力、治疗、净化、力量；与檀香可用于破除恶意咒语，写愿望后燃烧可用于愿望显化。",
      "迷迭香：爱情、欲望、心智能力、驱魔、净化、治疗、睡眠、青春；是很通用的保护、净化、治疗和爱情材料。"
    ]
  }
];

const hermesRitualGroups = [
  {
    title: "胜利护符",
    notes: [
      "用途：偏向胜利、力量、影响力与行动信心。",
      "材料：太阳般金色的金片或小护符片，铜笔或可刻写工具。",
      "做法：在金片上刻写对应字符，将其放在你想获得成功或保护的位置，例如船上、马上、随身物或工作区域。",
      "咒文线索：原图给出英文含义为“这些字符给予佩戴者胜利、力量与影响力”。可改写成自己的短句：愿我所行之处有清晰、力量与胜利。"
    ]
  },
  {
    title: "占卜仪式",
    notes: [
      "用途：向赫尔墨斯请求知识启示、预知、沟通与洞见，也适合占卜前的定心。",
      "象征物：赫尔墨斯神像或图像、卡杜修斯象征、塔罗牌或“魔术师”牌。",
      "蜡烛与香料：以黄色或橙色蜡烛为佳，可搭配乳香、没药、丁香、松香类香料。",
      "布置：中央放置赫尔墨斯象征物，周围可用八芒形或象征水星的布局。",
      "步骤：净化空间，点燃香与蜡烛，静坐呼吸，观想火焰化为星辰之光，向赫尔墨斯诵读祈请文。",
      "占卜：在心中默念问题，静默几分钟，记录浮现的念头、词语或图像，再抽牌或使用其他占卜工具。",
      "结束：感谢赫尔墨斯，熄灭蜡烛，记录启示与牌面。"
    ]
  },
  {
    title: "镇宅仪式",
    notes: [
      "用途：净宅、守护门口、保护家庭边界。",
      "净宅圣火：点燃蜡烛或火把，请赫斯提亚/灶神以圣火净化门户，将火焰放在门口一侧，象征炉火之光守护家庭。",
      "净化水：以清水一碗绕门槛洒水，口念净化语，可将余水倒在门外土中，完成净化循环。",
      "护符与甜蜜供品：把赫尔墨斯护符或柱像置于门楣或门口；可用少许蜂蜜涂抹护符或门框四角，象征愉悦的守护。",
      "门口供奉：缓缓倒上牛奶或酒，向赫尔墨斯献礼，取谷物撒在门口，象征丰饶与家宅结界。",
      "门楣祷词：可写下或口念守护语，请赫尔墨斯保护家门、阻止不善进入、引导正当往来。"
    ]
  },
  {
    title: "事业与繁荣咒",
    notes: [
      "用途：商业成功、顾客、声誉、财富、保护与社交影响力。",
      "建议时机：月盈期间，尤其水星日或太阳日。",
      "材料：橄榄木块、没药墨水、莎草纸、翼盔形饰、香料与香炉。",
      "核心形象：雕刻或绘制“狗面狒狒形赫尔墨斯像”，将主祈祷文与神名写入纸中，封入像内小箱。",
      "步骤：书写主祈祷文与神名，封入像中，焚香祈愿，将像放在工作坊或事业区域中央，通读主咒文。",
      "祈祷文要点：请求赫尔墨斯带来恩惠、供养、胜利、繁荣、优雅、容颜之美、男女之力、事业与目盟，并排除阻碍、流言和敌意。",
      "使用提醒：这类愿望要写得具体，例如“让合适客户看见我”“让沟通顺利”“让合作关系稳定”。"
    ]
  },
  {
    title: "圣火仪式",
    notes: [
      "用途：用灯火/圣火进行占卜、神圣召唤、灵感连接与真理洞见。",
      "环境：夜晚、安静、无人打扰的黑暗空间。",
      "材料：油灯或长明蜡烛、火柴或打火机，可选乳香或神圣香草。",
      "进入状态：把油灯或蜡烛置于面前，平息心绪，轻声念净化祷词或短暂冥想。",
      "召唤：凝视火焰，把火焰视为尘世与神界之间的门户，缓慢诵念请赫尔墨斯降临于火光之中的祈词。",
      "占视：保持沉默，观察火光的变化、脑海画面、声音或直觉；若火焰摇动或熄灭，不要惊慌，可重新点燃并稳定呼吸。",
      "记录：把出现的图像、词语、身体感受、问题答案写下来，之后再分析。",
      "结束：向赫尔墨斯致谢，熄灭灯火，可用一句结束语封闭仪式。"
    ]
  },
  {
    title: "旅行平安仪式",
    notes: [
      "用途：旅途保护、道路顺畅、避开延误与险阻。",
      "准备：选择安静片刻，放松呼吸，让心神平静。",
      "材料：蜡烛或随身护符；可用蜂蜜酒或甜蜜供品象征奉献。",
      "步骤：点燃蜡烛或握住护符，面向东方或前行方向，三次呼唤赫尔墨斯。",
      "祈祷要点：请求赫尔墨斯以光守护旅程，让关口顺利、同伴友善、车辆与道路平安无碍。",
      "随身锚点：可把护符、车票或旅行小物轻触/按压护符，象征赫尔墨斯与旅程同在。",
      "途中短句：赫尔墨斯在此，护我的路。"
    ]
  }
];

const builtInLearningEntries = [
  {
    id: BUILT_IN_HERBAL_OVERVIEW_ID,
    type: "note",
    status: "active",
    title: "草药资料总览：英文书名与学习路线",
    date: todayLocal(),
    tags: ["草药", "资料索引", "学习路线"],
    background: "",
    goal: "",
    caseCategory: "",
    noteCategory: "herbal",
    body: [
      "这条笔记是你桌面 caoyao 文件夹中草药/绿巫资料的中文索引，不是整本翻译，适合当学习路线。",
      "",
      "1. The Herbal Medicine-Maker's Handbook：可译为《草药制剂制作手册》。重点是家庭草药制剂、采集、浸泡、酊剂、油浸、药膏等实践方法。",
      "2. The Witch's Herbal Apothecary：可译为《女巫的草药药房》。重点是四季节律、地球魔法、神圣药草、仪式与药剂制作。",
      "3. The Green Witch's Grimoire：可译为《绿巫手札》。重点是如何建立自己的自然魔法笔记本，整理草药、对应关系、仪式、观察和个人经验。",
      "4. The Magic of Herbs：可译为《草药的魔法》。重点是草药传统、占星对应、象征学、草药准备、花语和草药魔法资料库。",
      "5. Year of the Witch：可译为《女巫之年》。重点是把个人生活、季节、土地、元素和节庆整合成自己的年轮。",
      "6. 魔藥學 / Cunningham 系资料：偏实用魔法草药学，适合查工具、原则、草药魔化、香包、人偶、熏香等形式。",
      "",
      "建议学习顺序：先读“工具与原则”建立安全边界，再读“制剂基础”理解草药如何被做成可用形式，然后建立自己的绿巫手札，最后按季节和主题补充仪式。"
    ].join("\n"),
    images: [],
    ritualGroups: [],
    updatedAt: Date.now() - 259200000
  },
  {
    id: BUILT_IN_HERBAL_MAKING_ID,
    type: "note",
    status: "active",
    title: "草药制剂基础：采集、浸泡、酊剂、油与药膏",
    date: todayLocal(),
    tags: ["草药", "制剂", "药房"],
    background: "",
    goal: "",
    caseCategory: "",
    noteCategory: "herbal",
    body: [
      "来源整理：James Green《The Herbal Medicine-Maker's Handbook》与相关草药药房资料。",
      "",
      "核心观念：草药学习不是只背功效表，而是理解植物、采集时机、溶剂、保存方式和使用场景。做制剂本身也是学习过程。",
      "",
      "常见制剂词汇：",
      "- infusion：浸泡/泡剂，常用于叶、花等较柔软部位。",
      "- decoction：煎煮剂，常用于根、皮、种子等较硬材料。",
      "- tincture：酊剂，以酒精或酒精水作为溶剂萃取。",
      "- infused oil：浸泡油，用油萃取脂溶性成分，常作为按摩油或药膏基础。",
      "- salve：药膏，通常由草药浸泡油加蜂蜡凝固。",
      "- poultice：敷剂，把植物材料捣碎或调成糊状外敷。",
      "- syrup：糖浆，常用于味道较强或需要润喉的配方。",
      "",
      "建立个人草药笔记时建议记录：植物中文名/英文名/拉丁名、使用部位、采集季节、干燥方式、溶剂、比例、制作日期、过滤日期、气味颜色变化、使用感受。",
      "",
      "安全提醒：草药可能有禁忌、过敏、药物交互和剂量问题。内服、孕期、慢性病、儿童和宠物相关内容都要额外查证；这条笔记只作学习整理，不当医疗建议。"
    ].join("\n"),
    images: [],
    ritualGroups: [],
    updatedAt: Date.now() - 259100000
  },
  {
    id: BUILT_IN_MAGICAL_HERBS_ID,
    type: "note",
    status: "active",
    title: "魔法草药工具与原则：祭坛、视觉化、草药魔化",
    date: todayLocal(),
    tags: ["草药", "魔法原则", "工具", "仪式"],
    background: "",
    goal: "",
    caseCategory: "",
    noteCategory: "herbal",
    body: [
      "来源整理：工具.docx、《魔藥學》以及 Cunningham 系草药魔法资料。",
      "",
      "基础工具：研钵和研杵、木碗或陶碗、玻璃/瓷壶、针线剪刀、棉布或羊毛布、蜡烛、香炉、木炭、草药罐。尽量避免用金属容器冲泡草药。",
      "",
      "祭坛：不一定每次都需要，但可以作为放置蜡烛、香炉、草药和法术材料的平面。它不是越复杂越好，而是要让你感到专注、舒适和安全。",
      "",
      "视觉化：把需求想象成已经完成的画面。重点不是反复想着“我为什么缺少它”，而是呈现“它已经实现时的状态”。",
      "",
      "魔法原则摘记：",
      "- 不伤害自己或他人。",
      "- 魔法需要努力和时间，不是即时按钮。",
      "- 不为了炫耀或攻击而施作。",
      "- 防御可以，攻击不宜。",
      "- 所有操作都应回到爱、尊重和清醒。",
      "",
      "草药魔化流程：把草药放入木碗或瓷碗，点燃对应颜色蜡烛，静心后凝视草药，感受植物振动；用手触碰或搅动草药，同时视觉化需求，必要时配合短句反复念诵。复方可逐一加入、逐一魔化。",
      "",
      "应用形式：香包、草药人偶、熏香、粉末、茶包、护符袋。制作前先明确目的、颜色、材料和保存方式。"
    ].join("\n"),
    images: [],
    ritualGroups: [],
    updatedAt: Date.now() - 259000000
  },
  {
    id: BUILT_IN_GRIMOIRE_ID,
    type: "note",
    status: "active",
    title: "绿巫手札：如何建立自己的草药与自然魔法笔记",
    date: todayLocal(),
    tags: ["绿巫", "手札", "占星", "草药"],
    background: "",
    goal: "",
    caseCategory: "",
    noteCategory: "mixed",
    body: [
      "来源整理：《The Green Witch's Grimoire》《Year of the Witch》《The Magic of Herbs》。",
      "",
      "核心观念：grimoire 不是抄书，而是你自己的自然魔法数据库。它应该记录你如何观察植物、季节、月相、身体感受、仪式结果和占卜反馈。",
      "",
      "建议分区：",
      "1. 草药资料卡：名称、拉丁名、元素、行星、部位、气味、采集季节、用途、禁忌。",
      "2. 季节年轮：你所在地的气候、节气、花期、果期、个人纪念日和适合做的仪式。",
      "3. 占星对应：行星、星座、元素、身体部位、草药性质之间的对应。",
      "4. 仪式记录：日期、月相、天气、材料、步骤、身体感受、结果、复盘。",
      "5. 配方实验：材料比例、制作日期、保存状态、使用反馈。",
      "",
      "学习提醒：书里的年轮和节庆不一定适合你的所在地。更好的做法是观察你自己城市的季节、植物和生活节律，再建立属于你的系统。"
    ].join("\n"),
    images: [],
    ritualGroups: [],
    updatedAt: Date.now() - 258900000
  },
  {
    id: BUILT_IN_HERBAL_PAIRING_ID,
    type: "note",
    status: "active",
    title: "草药魔法搭配速查",
    date: todayLocal(),
    tags: ["草药", "搭配", "熏香", "对应"],
    background: "",
    goal: "",
    caseCategory: "",
    noteCategory: "herbal",
    body: "从 工具.docx 里提取整理的草药搭配资料：按目标、行星、元素、形式、月相和常用配方快速查找。",
    images: [],
    ritualGroups: herbalPairingGroups,
    updatedAt: Date.now() - 258880000
  },
  {
    id: BUILT_IN_ASTRO_HOUSES_ID,
    type: "note",
    status: "active",
    title: "黄道十二宫速查",
    date: todayLocal(),
    tags: ["占星", "宫位", "十二宫", "生命周期"],
    background: "",
    goal: "",
    caseCategory: "",
    noteCategory: "astrology",
    body: "从 zhanxing.docx 里提取整理的宫位基础：适合查盘时快速查看宫位含义、宫位轴线、生命周期和解读顺序。",
    images: [],
    ritualGroups: astrologyHouseGroups,
    updatedAt: Date.now() - 258850000
  },
  {
    id: BUILT_IN_ASTRO_PLANETS_ID,
    type: "note",
    status: "active",
    title: "行星落宫摘记",
    date: todayLocal(),
    tags: ["占星", "行星落宫", "太阳", "月亮"],
    background: "",
    goal: "",
    caseCategory: "",
    noteCategory: "astrology",
    body: "从 zhanxing.docx 后半段提取整理的行星落宫案例要点：先保留高频、清晰、适合查盘时使用的部分。",
    images: [],
    ritualGroups: astrologyPlanetGroups,
    updatedAt: Date.now() - 258840000
  },
  {
    id: BUILT_IN_ASTRO_ASPECTS_ID,
    type: "note",
    status: "active",
    title: "相位表现与案例速查",
    date: todayLocal(),
    tags: ["占星", "相位", "太阳月亮", "火土"],
    background: "",
    goal: "",
    caseCategory: "",
    noteCategory: "astrology",
    body: "从 zhanxing.docx 里补充整理的相位例子：包括太阳月亮、太阳水星、水星土星、火星土星等表现。",
    images: [],
    ritualGroups: astrologyAspectGroups,
    updatedAt: Date.now() - 258830000
  },
  {
    id: BUILT_IN_CANDLE_RITUAL_ID,
    type: "note",
    status: "active",
    title: "蜡烛仪式速查",
    date: todayLocal(),
    tags: ["蜡烛", "仪式", "速查", "颜色"],
    background: "",
    goal: "",
    caseCategory: "",
    noteCategory: "ritual",
    body: "从 Word 文档里提取整理的蜡烛仪式要点：适合用来快速查看安全、空间清理、愿望书写和颜色选择。",
    images: [],
    ritualGroups: candleRitualGroups,
    updatedAt: Date.now() - 258800000
  }
];

const seedEntries = [
  {
    id: crypto.randomUUID(),
    type: "case",
    status: "review",
    title: "示例案例：关系议题三张牌",
    date: todayLocal(),
    tags: ["关系", "三张牌", "待复盘"],
    background: "来访者想确认一段关系里自己的真实需要，也想看清对方目前的状态。",
    goal: "牌阵：我 / 对方 / 关系的下一步。可在这里记录抽到的牌、正逆位和关键词。",
    caseCategory: "tarot",
    noteCategory: "",
    body: "这里可以记录咨询过程、来访者反馈、你自己的表达方式，以及下次想调整的地方。",
    images: [],
    updatedAt: Date.now()
  },
  {
    id: crypto.randomUUID(),
    type: "note",
    status: "active",
    title: "学习笔记：占星与草药对应",
    date: todayLocal(),
    tags: ["占星", "草药", "学习"],
    background: "",
    goal: "",
    noteCategory: "mixed",
    body: "例如把行星、元素、身体部位、草药性质放在一起整理。后面可以拆成单独专题。",
    images: [],
    updatedAt: Date.now() - 86400000
  },
  {
    id: BUILT_IN_RITUAL_ID,
    type: "note",
    status: "active",
    title: "赫尔墨斯仪式资料",
    date: todayLocal(),
    tags: ["赫尔墨斯", "仪式", "护符", "祈祷文"],
    background: "",
    goal: "",
    caseCategory: "",
    noteCategory: "ritual",
    body: "整理赫尔墨斯相关仪式资料：胜利护符、占卜仪式、镇宅仪式、事业与繁荣咒、圣火仪式、旅行平安仪式。下方文字按主题折叠展开。",
    images: [],
    ritualGroups: hermesRitualGroups,
    updatedAt: Date.now() - 172800000
  }
];

seedEntries.push(...builtInLearningEntries);

let entries = loadEntries();
let selectedId = entries[0]?.id ?? null;
let typeFilter = "all";
let tagFilter = "";

const els = {
  list: document.querySelector("#entry-list"),
  form: document.querySelector("#entry-form"),
  title: document.querySelector("#entry-title"),
  type: document.querySelector("#entry-type"),
  caseCategory: document.querySelector("#entry-case-category"),
  caseCategoryField: document.querySelector("#case-category-field"),
  noteCategory: document.querySelector("#entry-note-category"),
  noteCategoryField: document.querySelector("#note-category-field"),
  date: document.querySelector("#entry-date"),
  tags: document.querySelector("#entry-tags"),
  background: document.querySelector("#entry-background"),
  goal: document.querySelector("#entry-goal"),
  body: document.querySelector("#entry-body"),
  caseFields: document.querySelector("#case-fields"),
  imagePanel: document.querySelector("#image-panel"),
  imageInput: document.querySelector("#entry-images"),
  imageGrid: document.querySelector("#image-grid"),
  ritualPanel: document.querySelector("#ritual-panel"),
  ritualList: document.querySelector("#ritual-list"),
  lookupPanel: document.querySelector("#lookup-panel"),
  lookupCategory: document.querySelector("#lookup-category"),
  lookupTitle: document.querySelector("#lookup-title"),
  lookupSummary: document.querySelector("#lookup-summary"),
  lookupBody: document.querySelector("#lookup-body"),
  lookupRitualList: document.querySelector("#lookup-ritual-list"),
  saveState: document.querySelector("#save-state"),
  search: document.querySelector("#search-input"),
  tagList: document.querySelector("#tag-list"),
  emptyTemplate: document.querySelector("#empty-template")
};

document.querySelector("#new-entry").addEventListener("click", createEntry);
document.querySelector("#delete-entry").addEventListener("click", deleteSelected);
document.querySelector("#export-btn").addEventListener("click", exportEntries);
document.querySelector("#import-file").addEventListener("change", importEntries);
els.imageInput.addEventListener("change", addImages);

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    typeFilter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
    render();
  });
});

els.search.addEventListener("input", render);
els.type.addEventListener("change", () => {
  updateEditorSections();
});

els.noteCategory.addEventListener("change", () => {
  updateEditorSections();
});

els.form.addEventListener("submit", (event) => {
  event.preventDefault();
  saveCurrent();
});

els.form.addEventListener("input", (event) => {
  if (event.target === els.imageInput) return;
  els.saveState.textContent = "有未保存修改";
});

render();

function loadEntries() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedEntries));
    return seedEntries;
  }

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? ensureBuiltInEntries(parsed.map(normalizeEntry)) : seedEntries;
  } catch {
    return seedEntries;
  }
}

function ensureBuiltInEntries(currentEntries) {
  const builtIns = [seedEntries.find((entry) => entry.id === BUILT_IN_RITUAL_ID), ...builtInLearningEntries];
  builtIns.forEach((builtIn) => {
    if (builtIn && !currentEntries.some((entry) => entry.id === builtIn.id)) {
      currentEntries.push(builtIn);
    }
  });

  return currentEntries.map((entry) => {
    if (entry.id === BUILT_IN_RITUAL_ID) {
      return {
        ...entry,
        body: "整理赫尔墨斯相关仪式资料：胜利护符、占卜仪式、镇宅仪式、事业与繁荣咒、圣火仪式、旅行平安仪式。下方文字按主题折叠展开。",
        ritualGroups: hermesRitualGroups,
        noteCategory: "ritual",
        tags: [...new Set([...(entry.tags || []), "赫尔墨斯", "仪式"])]
      };
    }
    const replacement = builtInLearningEntries.find((builtIn) => builtIn.id === entry.id);
    if (replacement) {
      return {
        ...entry,
        body: replacement.body,
        noteCategory: replacement.noteCategory,
        tags: replacement.tags,
        ritualGroups: replacement.ritualGroups || []
      };
    }
    return entry;
  });
}

function materialCount(entry) {
  const images = entry.images?.length || 0;
  const ritualNotes = (entry.ritualGroups || []).reduce((sum, group) => sum + (group.notes?.length || 0), 0);
  const ritualImages = (entry.ritualGroups || []).reduce((sum, group) => sum + (group.images?.length || 0), 0);
  return images + ritualNotes + ritualImages;
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function createEntry() {
  const entry = {
    id: crypto.randomUUID(),
    type: typeFilter === "note" ? "note" : "case",
    status: "active",
    title: typeFilter === "note" ? "新的学习笔记" : "新的咨询案例",
    date: todayLocal(),
    tags: [],
    background: "",
    goal: "",
    caseCategory: typeFilter === "note" ? "" : "tarot",
    noteCategory: typeFilter === "note" ? "astrology" : "",
    body: "",
    images: [],
    updatedAt: Date.now()
  };
  entries.unshift(entry);
  selectedId = entry.id;
  persist();
  render();
  requestAnimationFrame(() => {
    focusEditorOnMobile();
    els.title.focus();
    els.title.select();
  });
}

function deleteSelected() {
  if (!selectedId || entries.length === 0) return;
  const current = entries.find((entry) => entry.id === selectedId);
  if (!current) return;
  const ok = confirm(`删除「${current.title}」？`);
  if (!ok) return;

  entries = entries.filter((entry) => entry.id !== selectedId);
  selectedId = entries[0]?.id ?? null;
  persist();
  render();
}

function saveCurrent() {
  const index = entries.findIndex((entry) => entry.id === selectedId);
  if (index === -1) return;

  entries[index] = {
    ...entries[index],
    title: els.title.value.trim() || "未命名记录",
    type: els.type.value,
    status: "active",
    caseCategory: els.type.value === "case" ? els.caseCategory.value : "",
    noteCategory: els.type.value === "note" ? els.noteCategory.value : "",
    date: els.date.value,
    tags: splitTags(els.tags.value),
    background: els.background.value.trim(),
    goal: els.goal.value.trim(),
    body: els.body.value.trim(),
    updatedAt: Date.now()
  };

  persist();
  els.saveState.textContent = "已保存";
  render();
}

function selectEntry(id) {
  selectedId = id;
  render();
  requestAnimationFrame(focusEditorOnMobile);
}

function focusEditorOnMobile() {
  if (!window.matchMedia("(max-width: 720px)").matches) return;
  document.querySelector(".editor-pane")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function render() {
  renderCounts();
  renderTags();
  renderList();
  renderEditor();
}

function renderCounts() {
  const now = new Date();
  const monthPrefix = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  document.querySelector("#count-all").textContent = entries.length;
  document.querySelector("#count-case").textContent = entries.filter((entry) => entry.type === "case").length;
  document.querySelector("#count-note").textContent = entries.filter((entry) => entry.type === "note").length;
  document.querySelector("#count-month").textContent = entries.filter((entry) => entry.date?.startsWith(monthPrefix)).length;
  document.querySelector("#count-materials").textContent = entries.reduce((total, entry) => total + materialCount(entry), 0);
}

function renderTags() {
  const tags = [...new Set(entries.flatMap((entry) => entry.tags))].filter(Boolean).sort((a, b) => a.localeCompare(b, "zh-CN"));
  els.tagList.innerHTML = "";

  tags.slice(0, 14).forEach((tag) => {
    const button = document.createElement("button");
    button.className = `tag-button${tagFilter === tag ? " is-active" : ""}`;
    button.type = "button";
    button.textContent = `# ${tag}`;
    button.addEventListener("click", () => {
      tagFilter = tagFilter === tag ? "" : tag;
      render();
    });
    els.tagList.append(button);
  });
}

function renderList() {
  const query = els.search.value.trim().toLowerCase();
  const filtered = entries
    .filter((entry) => typeFilter === "all" || entry.type === typeFilter)
    .filter((entry) => !tagFilter || entry.tags.includes(tagFilter))
    .filter((entry) => {
      const ritualText = (entry.ritualGroups || []).map((group) => `${group.title} ${(group.notes || []).join(" ")} ${(group.images || []).map((image) => image.name).join(" ")}`).join(" ");
      const text = [
        entry.title,
        entry.body,
        entry.background,
        entry.goal,
        caseCategoryLabel(entry.caseCategory),
        noteCategoryLabel(entry.noteCategory),
        ritualText,
        entry.tags.join(" ")
      ].join(" ").toLowerCase();
      return !query || text.includes(query);
    })
    .sort((a, b) => b.updatedAt - a.updatedAt);

  els.list.innerHTML = "";

  if (!filtered.length) {
    els.list.append(els.emptyTemplate.content.cloneNode(true));
    return;
  }

  const caseEntries = filtered.filter((entry) => entry.type === "case");
  if (caseEntries.length) {
    const section = document.createElement("section");
    section.className = "entry-section";
    section.innerHTML = `<div class="entry-section-title">咨询案例<span>${caseEntries.length}</span></div>`;

    caseEntries.forEach((entry) => {
      section.append(createEntryCard(entry));
    });

    els.list.append(section);
  }

  const noteEntries = filtered.filter((entry) => entry.type === "note");
  noteCategoryOrder.forEach((category) => {
    const categoryEntries = noteEntries.filter((entry) => (entry.noteCategory || inferNoteCategory(entry)) === category);
    if (!categoryEntries.length) return;

    const section = document.createElement("details");
    section.className = "entry-section note-category-section";
    section.open = !window.matchMedia("(max-width: 720px)").matches;
    section.innerHTML = `<summary class="entry-section-title">学习笔记 · ${noteCategoryLabel(category)}<span>${categoryEntries.length}</span></summary>`;

    categoryEntries.forEach((entry) => {
      section.append(createEntryCard(entry));
    });

    els.list.append(section);
  });
  return;

  const groups = [
    { type: "case", title: "咨询案例", entries: filtered.filter((entry) => entry.type === "case") },
    { type: "note", title: "学习笔记", entries: filtered.filter((entry) => entry.type === "note") }
  ].filter((group) => group.entries.length);

  groups.forEach((group) => {
    const section = document.createElement("section");
    section.className = "entry-section";
    section.innerHTML = `<div class="entry-section-title">${group.title}<span>${group.entries.length}</span></div>`;

    group.entries.forEach((entry) => {
      section.append(createEntryCard(entry));
    });

    els.list.append(section);
  });
}

function createEntryCard(entry) {
  const button = document.createElement("button");
  button.className = `entry-card ${entry.type === "note" ? "note-card" : "case-card"}${entry.id === selectedId ? " is-active" : ""}`;
  button.type = "button";
  button.addEventListener("click", () => selectEntry(entry.id));

  const badges = [
    `<span class="badge ${entry.type === "case" ? "type-case" : "type-note"}">${entry.type === "case" ? "咨询案例" : "学习笔记"}</span>`,
    entry.type === "case" ? `<span class="badge">${caseCategoryLabel(entry.caseCategory)}</span>` : "",
    entry.type === "note" ? `<span class="badge">${noteCategoryLabel(entry.noteCategory)}</span>` : "",
    ...(entry.tags || []).slice(0, 3).map((tag) => `<span class="badge"># ${escapeHtml(tag)}</span>`)
  ].filter(Boolean).join("");

  const preview = entry.body || entry.goal || entry.background || "空白记录";
  const previewImages = [
    ...(entry.images || []),
    ...(entry.ritualGroups || []).flatMap((group) => group.images || [])
  ];
  const thumbs = previewImages.slice(0, 3).map((image) => `<img class="entry-thumb" src="${image.src}" alt="${escapeHtml(image.name || "资料图片")}">`).join("");
  const materials = materialCount(entry);
  const thumbRow = thumbs ? `<div class="entry-thumb-row">${thumbs}<span class="badge">${previewImages.length} 张图</span></div>` : (materials ? `<div class="entry-thumb-row"><span class="badge">${materials} 条资料</span></div>` : "");

  button.innerHTML = `
    <header>
      <h2>${escapeHtml(entry.title)}</h2>
      <span class="badge">${entry.date || "无日期"}</span>
    </header>
    <p>${escapeHtml(preview.slice(0, 92))}</p>
    ${thumbRow}
    <div class="badge-row">${badges}</div>
  `;
  return button;
}

function renderEditor() {
  const selected = entries.find((entry) => entry.id === selectedId) ?? entries[0];
  if (!selected) {
    els.form.hidden = true;
    els.lookupPanel.hidden = true;
    return;
  }

  selectedId = selected.id;
  if (selected.type === "note") {
    els.form.hidden = true;
    els.lookupPanel.hidden = false;
    renderLookup(selected);
    return;
  }

  els.form.hidden = false;
  els.lookupPanel.hidden = true;
  els.title.value = selected.title;
  els.type.value = selected.type;
  els.caseCategory.value = selected.caseCategory || "tarot";
  els.noteCategory.value = selected.noteCategory || "astrology";
  els.date.value = selected.date || "";
  els.tags.value = (selected.tags || []).join(", ");
  els.background.value = selected.background || "";
  els.goal.value = selected.goal || "";
  els.body.value = selected.body || "";
  els.saveState.textContent = "已保存";
  updateEditorSections();
  renderImages(selected);
  renderRitualGroups(selected);
}

function updateEditorSections() {
  const isCase = els.type.value === "case";
  const isRitualNote = !isCase && els.noteCategory.value === "ritual";
  els.caseFields.hidden = !isCase;
  els.imagePanel.hidden = !isCase;
  els.caseCategoryField.hidden = !isCase;
  els.noteCategoryField.hidden = isCase;
  els.ritualPanel.hidden = !isRitualNote;
}

function renderLookup(entry) {
  els.lookupCategory.textContent = noteCategoryLabel(entry.noteCategory);
  els.lookupTitle.textContent = entry.title || "学习速查";
  els.lookupSummary.textContent = (entry.tags || []).length ? entry.tags.map((tag) => `#${tag}`).join("  ") : "速查资料";

  const bodyLines = (entry.body || "").split(/\n+/).map((line) => line.trim()).filter(Boolean);
  els.lookupBody.innerHTML = bodyLines.map((line) => `<p class="lookup-paragraph">${escapeHtml(line)}</p>`).join("");
  els.lookupBody.hidden = !bodyLines.length;

  renderRitualGroups(entry, els.lookupRitualList);
}

function renderImages(entry) {
  els.imageGrid.innerHTML = "";
  const images = entry.images || [];

  if (!images.length) {
    const empty = document.createElement("div");
    empty.className = "image-empty";
    empty.textContent = "还没有图片。可以添加牌阵照片，方便复盘时回看。";
    els.imageGrid.append(empty);
    return;
  }

  images.forEach((image) => {
    const card = document.createElement("div");
    card.className = "image-card";
    card.innerHTML = `
      <img src="${image.src}" alt="${escapeHtml(image.name || "案例图片")}">
      <button class="remove-image" type="button" title="删除图片">×</button>
    `;
    card.querySelector("button").addEventListener("click", () => removeImage(image.id));
    els.imageGrid.append(card);
  });
}

function renderRitualGroups(entry, target = els.ritualList) {
  target.innerHTML = "";
  const groups = entry.ritualGroups || [];

  if (!groups.length) {
    const empty = document.createElement("div");
    empty.className = "image-empty";
    empty.textContent = "这条笔记还没有仪式资料。";
    target.append(empty);
    return;
  }

  groups.forEach((group, index) => {
    const details = document.createElement("details");
    details.className = "ritual-group";
    details.open = index === 0;
    const notes = (group.notes || []).map((note) => `<p class="ritual-note">${escapeHtml(note)}</p>`).join("");
    const images = (group.images || []).map((image) => `
      <div class="ritual-image-card">
        <img src="${image.src}" alt="${escapeHtml(image.name || group.title)}">
        <span>${escapeHtml(image.name || group.title)}</span>
      </div>
    `).join("");
    const itemCount = (group.notes?.length || 0) + (group.images?.length || 0);

    details.innerHTML = `
      <summary><strong>${escapeHtml(group.title)}</strong><span>${itemCount} 条</span></summary>
      ${notes ? `<div class="ritual-notes">${notes}</div>` : ""}
      ${images ? `<div class="ritual-images">${images}</div>` : ""}
    `;
    target.append(details);
  });
}

async function addImages(event) {
  const files = [...(event.target.files || [])].filter((file) => file.type.startsWith("image/"));
  event.target.value = "";
  if (!files.length) return;

  const index = entries.findIndex((entry) => entry.id === selectedId);
  if (index === -1) return;

  els.saveState.textContent = "正在添加图片";
  const images = await Promise.all(files.map(readImageFile));
  entries[index].images = [...(entries[index].images || []), ...images];
  entries[index].updatedAt = Date.now();
  persist();
  els.saveState.textContent = "已保存";
  render();
}

function removeImage(imageId) {
  const index = entries.findIndex((entry) => entry.id === selectedId);
  if (index === -1) return;

  entries[index].images = (entries[index].images || []).filter((image) => image.id !== imageId);
  entries[index].updatedAt = Date.now();
  persist();
  render();
}

function readImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => resolve(resizeImage(img, file.name));
      img.onerror = reject;
      img.src = String(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function resizeImage(img, name) {
  const maxSide = 1400;
  const ratio = Math.min(1, maxSide / Math.max(img.width, img.height));
  const width = Math.max(1, Math.round(img.width * ratio));
  const height = Math.max(1, Math.round(img.height * ratio));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  context.drawImage(img, 0, 0, width, height);

  return {
    id: crypto.randomUUID(),
    name,
    src: canvas.toDataURL("image/jpeg", 0.82),
    createdAt: Date.now()
  };
}

function splitTags(value) {
  return [...new Set(value.split(/[,，\s]+/).map((tag) => tag.trim()).filter(Boolean))];
}

function noteCategoryLabel(category) {
  return {
    astrology: "占星",
    herbal: "草药",
    ritual: "仪式",
    mixed: "综合"
  }[category] || "占星";
}

function caseCategoryLabel(category) {
  return {
    tarot: "塔罗",
    astrology: "占星",
    mixed: "综合"
  }[category] || "塔罗";
}

function exportEntries() {
  const payload = JSON.stringify(entries, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `bao-tarot-archive-${todayLocal()}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function importEntries(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = JSON.parse(String(reader.result));
      if (!Array.isArray(imported)) throw new Error("invalid");
      entries = imported.map(normalizeEntry);
      selectedId = entries[0]?.id ?? null;
      persist();
      render();
    } catch {
      alert("导入失败，文件格式不对。");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

function normalizeEntry(entry) {
  return {
    id: entry.id || crypto.randomUUID(),
    type: entry.type === "note" ? "note" : "case",
    status: ["active", "review", "done"].includes(entry.status) ? entry.status : "active",
    title: entry.title || "未命名记录",
    date: entry.date || "",
    tags: Array.isArray(entry.tags) ? entry.tags : [],
    background: entry.background || "",
    goal: entry.goal || "",
    caseCategory: entry.caseCategory || inferCaseCategory(entry),
    noteCategory: entry.noteCategory || inferNoteCategory(entry),
    body: entry.body || "",
    images: Array.isArray(entry.images) ? entry.images : [],
    ritualGroups: Array.isArray(entry.ritualGroups) ? entry.ritualGroups : [],
    updatedAt: entry.updatedAt || Date.now()
  };
}

function inferCaseCategory(entry) {
  const tags = Array.isArray(entry.tags) ? entry.tags.join(" ") : "";
  const text = `${entry.title || ""} ${tags}`;
  if (text.includes("占星")) return "astrology";
  return entry.type === "case" ? "tarot" : "";
}

function inferNoteCategory(entry) {
  const tags = Array.isArray(entry.tags) ? entry.tags.join(" ") : "";
  const text = `${entry.title || ""} ${tags}`;
  if (text.includes("草药")) return "herbal";
  if (text.includes("仪式") || text.includes("赫尔墨斯")) return "ritual";
  if (text.includes("占星")) return "astrology";
  return entry.type === "note" ? "mixed" : "";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function todayLocal() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

