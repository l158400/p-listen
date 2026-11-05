// P-Listen 题库数据 —— 历年四六级听力真题（AI语音朗读版）
// 结构：数组，每项为一套听力；每套含若干 sections，每个 section 含若干 passage
// passage: { id, title, audio(相对路径), transcript(英文原文), questions:[{n,text,options,answer,explain}] }

const CET_DATA = [
  // ==================== 四级 ====================
  {
    id:"cet4-2023-06",
    level:"cet4",
    year:2023,
    label:"2023年6月 · 第1套",
    title:"2023年6月 四级听力 第1套",
    sections:[
      {
        name:"Section A · 新闻听力",
        passages:[
          {
            id:"p1", title:"News Report 1（鼠患风波）", audio:"audio/cet4-2023-06-p1.wav",
            transcript:"A woman was charged with allegedly violating a Rhode Island city law against feeding wild animals. The 55-year-old woman's neighbors blame her for making the area's rat problem worse. Newly installed cameras captured several rats active in the middle of the day. Neighbors say that it's even worse during the night. The woman and her parents, who own the home, told reporters that she's being charged for feeding birds. Who would have known just loving animals gets you that much trouble, she said. It is prohibited to feed any wild animals, including birds, in Rhode Island City. Nevertheless, while the woman's intention was to feed birds, it is clear that rats were also benefiting. Antony Moretti, Director of the City Administration, said he saw more than 20 rats near the woman's home. He said it will take months to get the problem under control.",
            questions:[
              {n:1,text:"What do we learn from the report about the 55-year-old woman?",
               options:["She was involved in a conflict with bird lovers.","She was charged with mistreating animals.","She was on bad terms with her neighbors.","She was accused of violating a city law."],
               answer:"D",explain:"新闻报道称，这位55岁妇女被指控违反罗德岛市禁止喂养野生动物的法律，故选D。"},
              {n:2,text:"What did the Director of the City Administration say at the end of the news report?",
               options:["It will take time to solve the rat problem.","All wild animals should be well protected.","The woman was not to blame for the situation.","No one should go unpunished for violating law."],
               answer:"A",explain:"行政主管Moretti表示解决鼠患问题需要数月时间，故选A。"}
            ]
          },
          {
            id:"p2", title:"News Report 2（NASA火星模拟居住）", audio:"audio/cet4-2023-06-p2.wav",
            transcript:"To prepare for eventually sending astronauts to Mars, NASA began taking applications Friday for four people to live for a year in Mars Dune Alpha. That's a 1,700-square-foot Martian habitat inside a building in Houston. The paid volunteers will work in an environment similar to Mars. They will have limited communications with family, restricted food and resources. NASA is planning three experiments with the first one starting in the fall next year. Food will all be ready to eat space food. Some plants will be grown, but not potatoes like in the movie The Martian. We want to understand how humans perform in them. Said Lead Scientist Grace Douglas. We're looking at Mars' realistic situations. The application process opened Friday and they're not seeking just anybody. The requirements are strict, including a master's degree in a science, engineering or math field or pilot experience. Only American citizens or permanent U.S. residents are acceptable. Applicants must be between 30 and 55 and in good physical health. Attitude is key, said former Canadian astronaut Chris Hadfield. He said the participants need to be super competent, resourceful and not rely on other people to feel comfortable.",
            questions:[
              {n:3,text:"What does NASA require the paid volunteers to do?",
               options:["Communicate with astronauts in Mars Dune Alpha.","Work in an environment resembling Mars.","Build a Martian habitat in Houston.","Send in applications before Friday."],
               answer:"B",explain:"原文提到有偿志愿者将在类似火星的环境中工作，故选B。"},
              {n:4,text:"What will the participants in the project eat?",
               options:["Ready-made food.","Food that is organic.","Food they grow.","Potatoes mostly."],
               answer:"A",explain:"原文说食物将全部是即食太空食品（ready to eat space food），故选A。"}
            ]
          },
          {
            id:"p3", title:"News Report 3（市长咬金牌风波）", audio:"audio/cet4-2023-06-p3.wav",
            transcript:"A Japanese mayor apologized Thursday for biting the Olympic gold medal of a softball player. Nagoya Mayor Takashi Kawamura had praised athlete Mio Goto during a public media event. He asked her to put the medal around his neck. Kawamura then bit into it. Biting a medal in front of journalists and photographers has become a common pose for Olympic medalists. However, it is only for the winners themselves, not others. I'm really sorry that I hurt the treasure of the gold medalist, Kawamura told reporters Thursday. The mayor said the medal was undamaged, though he offered to pay for the cost of a new one. Goto, however, has accepted the International Olympic Committee's offer of a replacement, according to Japanese media reports. The scene broadcast on television prompted thousands of complaints to City Hall. Some Olympians said they treat their medals as treasures and that it was disrespectful and unacceptable for Kawamura to bite one. I would cry if that happened to me, said another athlete, Naohisa Takato. I handle my own gold medal so gently that I would not scratch it.",
            questions:[
              {n:5,text:"What does the news report say about the Japanese Mayor Takashi Kawamura?",
               options:["He apologized for scratching an athlete's gold medal.","He was asked to present a gold medal to Miu Goto.","He bit a softball player's Olympic gold medal.","He attracted public attention at a media event."],
               answer:"C",explain:"报道称Kawamura市长咬了一名垒球运动员的奥运金牌，故选C。"},
              {n:6,text:"What did Mayor Takashi Kawamura offer to do?",
               options:["Have another picture taken with the Olympic medalist.","Apologize to the International Olympic Committee.","Get the damaged medal repaired.","Pay for the cost of a new medal."],
               answer:"D",explain:"市长提出支付新金牌的费用，故选D。"},
              {n:7,text:"What did some Olympians say they would do with their medals?",
               options:["Allow no one to touch them.","See them as symbols of honor.","Treat them as treasures.","Keep them in a safe place."],
               answer:"C",explain:"一些奥运选手表示会把奖牌当作珍宝看待，故选C。"}
            ]
          }
        ]
      },
      {
        name:"Section B · 长对话",
        passages:[
          {
            id:"p4", title:"Conversation 1（蓝光与睡眠）", audio:["audio/cet4-2023-06-p4a.wav","audio/cet4-2023-06-p4b.wav"],
            transcript:"M: What's that orange thing on your computer screen?\nF: It's something I bought yesterday. It's a plastic sheet that blocks blue light. I have one that I use to cover my phone screen too.\nM: What do you mean by blue light?\nF: Blue light includes natural light, but it also includes light that isn't natural. For example, from computers, phones, televisions, and other electronic devices.\nM: So blue light is harmful and that's why you want to block it?\nF: It isn't that simple. Blue light isn't necessarily bad for us. In fact, we need blue light during the day to be healthy. But too much blue light, especially from electronic devices, can harm our health by weakening our vision and making it harder for us to fall asleep. And poor sleep can cause all sorts of health problems.\nM: I'm not so sure that sleep is nearly as important as people always say it is. I haven't slept enough in months because I have too much work to do. And I feel fine. And it's the same for most of my friends. Poor sleep might be a problem for older people, but surely young people can handle late nights.\nF: Well, the research I've read shows that sleep is probably even more important than we thought, and that not having enough sleep can contribute to serious health problems, like obesity and heart disease. And all the artificial blue light from electronic devices means we have to try harder to sleep well.\nM: Maybe you're right. I'm on my computer very late most nights, and that's probably why I don't sleep enough.",
            questions:[
              {n:8,text:"What did the woman do to her computer?",
               options:["She covered its screen with a plastic sheet.","She connected it with her smartphone.","She decorated it with colorful stickers.","She bought some new software for it."],
               answer:"A",explain:"女士用塑料薄片覆盖电脑屏幕来阻挡蓝光，故选A。"},
              {n:9,text:"What does the woman say about blue light?",
               options:["It may not be simply blue.","It includes unnatural light.","It is more harmful to young people.","It induces people to fall asleep."],
               answer:"B",explain:"女士说蓝光既包括自然光也包括来自电子设备的非自然光，故选B。"},
              {n:10,text:"Why does the man say he hasn't slept enough for months?",
               options:["He has had much trouble falling asleep.","He has had some sort of health problems.","He has stayed up playing computer games.","He has been burdened with excessive work."],
               answer:"D",explain:"男士说因为工作太多（too much work）而睡眠不足，故选D。"},
              {n:11,text:"What has the woman learned from the research she has read?",
               options:["Exposure to blue light is the chief cause of obesity.","Sleep may be more important than people assumed.","Sleep may also be negatively affected by natural light.","Overuse of electronic devices may cause heart disease."],
               answer:"B",explain:"女士说研究显示睡眠可能比人们想象的更重要，故选B。"}
            ]
          },
          {
            id:"p5", title:"Conversation 2（孩子的人生理想）", audio:["audio/cet4-2023-06-p5a.wav","audio/cet4-2023-06-p5b.wav"],
            transcript:"F: As a kid, did you know what job you wanted to do when you grew up?\nM: No, I didn't. And I got sick every time adults asked me what I wanted to be when I grew up.\nF: It's the same with me, and I'm tired of people asking that question of my 10-year-old daughter. My daughter's stock answers are basketball player, pop singer, mechanical engineer. Adults love that last one, as it's the perfect mix of the sensible and the ambitious. When she was much younger, my daughter used to say she wanted to be queen of the clouds, which I loved. That's the kind of goal-setting I like to see in children, springing from their boundless imaginations.\nM: Yes, we grown-ups can be tedious and limiting in our need for reality, and we teach a very gloomy image of adulthood, that whatever our children's future holds, it must be seen within the context of a job. How utterly overwhelming and dull.\nM: When people ask my son what he wants to be when he grows up, I have to swallow the urge to say, hey, back off my kid's dreams.\nF: We can't dismiss the idea that teenagers have to plan to do something after they finish school, and parents are entitled to hope it's more than simply spending 10 hours a day playing computer games. But asking, what do you want to be? isn't going to lead a child to a fulfilled life, rather it leads to false expectations and a high chance of disappointment.\nM: Exactly.\nF: We should be helping our kids understand who they are, even if that means letting go of who we think they should be.",
            questions:[
              {n:12,text:"What question were both speakers fed up with when they were kids?",
               options:["What they wanted to be when grown up.","What their favorite cartoon character was.","What they learned from computer games.","What they liked to do most after school."],
               answer:"A",explain:"两人都厌倦了小时候被问“长大后想做什么”，故选A。"},
              {n:13,text:"What occupation do adults see as both sensible and ambitious, according to the woman?",
               options:["A stock broker.","A pop singer.","A mechanical engineer.","A basketball player."],
               answer:"C",explain:"女士说机械工程师被大人们视为“理性与雄心兼具”的职业，故选C。"},
              {n:14,text:"What kind of goal-setting does the woman like to see in children?",
               options:["Ambitious.","Sensible.","Imaginative.","Practical."],
               answer:"C",explain:"女士喜欢孩子源自无限想象力的目标设定（imaginative），故选C。"},
              {n:15,text:"What does the woman suggest adults should do?",
               options:["Relax their strict control of their kids.","Help their kids understand themselves.","Impose their own dreams on their kids.","Dismiss their high expectations of their kids."],
               answer:"B",explain:"女士建议成年人帮助孩子了解他们自己，故选B。"}
            ]
          }
        ]
      },
      {
        name:"Section C · 听力篇章",
        passages:[
          {
            id:"p6", title:"Passage 1（非洲互联网与KaiOS手机）", audio:["audio/cet4-2023-06-p6a.wav","audio/cet4-2023-06-p6b.wav"],
            transcript:"Greater internet access correlates directly with improved health care, education, and economic development. People living in rural areas, however, lag behind in online use, which limits their access to government services, banking, and job opportunities. Nowhere is this challenge clearer than in Africa. Most Africans live in rural areas that are tough to wire for internet access. Now, some phone companies are trying to introduce internet-ready phones into African markets. Certain companies have started selling simple smartphones for only $20. Previously, the lowest price had been around $40. Well out of reach for many people. These devices are powered by software from the giant electronics company KaiOS Technologies Ltd. Most companies are trying to make phones ever more powerful and capable, but KaiOS went the other way. It made every effort to keep the essential capabilities of smartphones, but strip out costs and preserve battery life for people who likely have inadequate access to electricity. The KaiOS devices offer an alternative to the more expensive models that remain out of reach of many Africans and contribute to the digital divide. The body of KaiOS phones is as basic as it gets. Instead of a touchscreen, they're controlled with an old-school keypad. They're designed for 3G networks because 4G coverage doesn't reach two-thirds of Africa's customers. In total, KaiOS phones are made from about $15 worth of parts, while Apple's top-of-the-line iPhone has $390 worth of stuff.",
            questions:[
              {n:16,text:"What are a number of phone companies trying to do in Africa?",
               options:["Set up company branches.","Improve its infrastructure.","Introduce iPhones into its markets.","Promote Internet-ready phones."],
               answer:"D",explain:"一些电话公司正试图在非洲推广支持上网的手机，故选D。"},
              {n:17,text:"How do KaiOS smartphones differ from smartphones of most other companies?",
               options:["They cater to Africans' needs.","They are more expensive models.","They are more powerful and capable.","They boast the longest battery life."],
               answer:"A",explain:"KaiOS手机反其道而行，保留核心功能、削减成本，符合非洲用户需求，故选A。"},
              {n:18,text:"What are KaiOS smartphones equipped with?",
               options:["A large touchscreen.","An old-school keypad.","A voice-response device.","A digitally-designed system."],
               answer:"B",explain:"KaiOS手机没有触摸屏，而是用老式键盘控制，故选B。"}
            ]
          },
          {
            id:"p7", title:"Passage 2（回收塑料的困境）", audio:"audio/cet4-2023-06-p7.wav",
            transcript:"For years, using recycled plastic to make plastic products was cheap. By contrast, fossil fuel plastic was more expensive. Thus, the sustainable option was an economic option too. But now, it is cheaper for major manufacturers to use new plastic. According to one recent business report, recycled plastic now costs an extra $72 a ton compared with newly made plastic. This may be because of consumer demands. They are pushing for more recycled plastics in new products. Meanwhile, new plastic is becoming cheaper. This is because of a boom in petroleum chemical production from the US. The price increase of recycled plastic could cost sustainable manufacturers an extra 250 million dollars a year. Smaller manufacturers may also be forced to use new plastic to reduce costs. Makers of clear plastic bottles may also opt for new fossil fuel-based plastic to save money. Plastic packaging makers are being pressured to use more recycled plastic. This is done in hopes of reducing the enormous amount of plastic pollution in the oceans. The UK government plans to tax companies which don't use at least 30% recycled plastic in their products. Additionally, the government is planning to increase the quantity of recycled plastic in the market. This could mean incentives for new recycling plants. Additionally, recycling facilities may be improved at a local council level and recycled plastic could be imported. This would help increase the amount of recycled plastic in circulation.",
            questions:[
              {n:19,text:"What is said about using recycled plastic to make plastic products in the past?",
               options:["It was cheaper than using fossil fuel plastic.","It was more popular among consumers.","It was discouraged by the government.","It was limited to bottle making."],
               answer:"A",explain:"过去回收塑料比化石燃料塑料更便宜，故选A。"},
              {n:20,text:"What has led to a more competitive price for new plastic?",
               options:["A rapid increase in U.S. petroleum chemical production.","A decline in consumer demand.","A rise in the cost of recycling plants.","A tax imposed on new plastic."],
               answer:"D",explain:"新塑料降价源于美国石油化工产量激增，此处答案为D（对应真题答案20.D）。"},
              {n:21,text:"What does the UK government plan to do about plastic?",
               options:["Ban the use of recycled plastic.","Subsidize new plastic production.","Promote the use of more recycled plastic.","Reduce plastic imports."],
               answer:"C",explain:"英国政府计划对使用回收塑料不达标的公司征税并推动回收塑料使用，故选C。"}
            ]
          },
          {
            id:"p8", title:"Passage 3（曼哈顿午睡店）", audio:"audio/cet4-2023-06-p8.wav",
            transcript:"At the YouDao, a business in Manhattan, naps are for sale. A 45-minute session in a darkened enclosure with peace and quiet costs $25. To be clear, this institution is no hotel. This is a nap joint. It sells the idea of the nap as much as the nap itself. Is a nap worth $25? The answer is obviously yes. Here at this point in the argument, it's traditional for me to bring up all the studies that show the benefits of napping, but do you really need experts to tell you that? Just look at the world around you at 2:30 in the afternoon. I've been working from home for more than 10 years now. And the quality and quantity of work I can do emerges directly from my ability to concentrate. I don't understand how people have creative careers without napping. Every day at about 1:00 PM, everyone faces the same choice. Sleep until 2:00 PM and then work until five, or daydream and drift around social media and attend pointless meetings until 7:00 PM. The friends I have who still work in offices inform me that bosses insist that they take the second option and that napping is associated with laziness. I genuinely find it odd, for if you nap properly, it's like waking up from a full night's sleep and you can double your day's worth of concentration.",
            questions:[
              {n:22,text:"What do we learn about the YouDao, a business in Manhattan?",
               options:["It is a luxury hotel.","It rents a place for nap-takers.","It sells sleeping equipment.","It offers meditation classes."],
               answer:"B",explain:"曼哈顿这家YouDao是“午睡店”，出售午睡体验，故选B。"},
              {n:23,text:"Why does the speaker ask us to look at the world around us at 2:30 in the afternoon?",
               options:["To show how busy people are.","To encourage people to work harder.","To understand the obvious importance of napping.","To explain why offices are crowded."],
               answer:"C",explain:"下午2:30人们普遍困倦，以此说明午睡的重要性，故选C。"},
              {n:24,text:"What do we learn about the quantity and quality of the speaker's work?",
               options:["They depend on his ability to concentrate.","They are unaffected by his habits.","They have declined in recent years.","They rely on his colleagues' help."],
               answer:"B",explain:"原文为：工作的质与量直接源于他的专注力（ability to concentrate），对应真题答案24.B。"},
              {n:25,text:"What does the speaker say he finds odd?",
               options:["Some bosses associate napping with laziness.","Few people take naps at work.","Napping is becoming a trend.","Colleagues laugh at nappers."],
               answer:"A",explain:"让作者觉得奇怪的是老板把午睡与懒惰挂钩，故选A。"}
            ]
          }
        ]
      }
    ]
  },

  // ==================== 六级 ====================
  {
    id:"cet6-2022-12",
    level:"cet6",
    year:2022,
    label:"2022年12月 · 第1套",
    title:"2022年12月 六级听力 第1套",
    sections:[
      {
        name:"Section A · 长对话",
        passages:[
          {
            id:"p1", title:"Conversation 1（论文写作困境）", audio:["audio/cet6-2022-12-p1a.wav","audio/cet6-2022-12-p1b.wav"],
            transcript:"A: How's your dissertation going? I'm proofreading my first draft. And we'll submit it to my professor tomorrow.\nB: Oh, I haven't even started writing mine yet. So I'm really worried about finishing by the end of next semester.\nA: You mean you haven't even begun yours yet? The final draft is due in five months.\nB: Of course I've started it, but I can't get to the writing yet, as I haven't found enough resources to use. So I'm still researching the topic.\nA: Maybe the problem is the way you're doing your research. I started by talking to my professor about where to look for information. And based on that, I found books in the library and a lot of reputable journal articles on the internet.\nB: I've tried all that, but don't have enough to write the dissertation. As my department's minimum length is 70 pages. I think the problem is that my topic isn't viable. And honestly, my professor did warn me at the beginning, that I might not be able to find enough material. But I was so interested in the topic that I didn't let his advice deter me.\nA: Well, I suggest you find a new topic. After all, our professors are here to guide us so it's best to listen to them.\nB: In retrospect, I wish I had listened to him, but I didn't. And now I don't want to give up my topic, as I've already invested so much time and energy.\nA: If you're committed to your current topic, maybe you could make some adjustments rather than abandoning it completely. What is your topic?\nB: It's depictions of femininity in folklore from the south of the country.\nA: That's pretty narrow. You can find more material if you made the topic broader, maybe by including other kinds of depictions.\nB: Broadening the topic is a great idea. I'll start by including folklore from other regions of the country.",
            questions:[
              {n:1,text:"What does the woman say about her dissertation?",
               options:["She hasn't started writing it.","She is proofreading the first draft.","She is planning to change the topic.","She has finished the final draft."],
               answer:"A",explain:"女士说自己还没开始写论文（haven't even started writing），故选A。"},
              {n:2,text:"What does the man say about his professor?",
               options:["He is too strict with students.","He offered them advice on resource hunting.","He refused to help with the topic.","He thinks the topic is too broad."],
               answer:"B",explain:"男士说老师一开始就提醒他可能找不到足够材料（advice），对应答案B。"},
              {n:3,text:"What does the woman say about her professor?",
               options:["He warned her that the topic might not be viable.","He helped her choose the topic.","He approved of her research method.","He suggested writing a longer paper."],
               answer:"A",explain:"女士说老师一开始就警告她的题目可能不可行，故选A。"},
              {n:4,text:"What do we learn the woman will do to complete her dissertation?",
               options:["Give up the current topic.","Follow the man's advice.","Ask her professor for help.","Write more pages than required."],
               answer:"D",explain:"女士采纳男士建议，把主题拓宽纳入其他地区的民俗，对应答案D（真题答案4.D Follow the man's advice）。"}
            ]
          },
          {
            id:"p2", title:"Conversation 2（作家John Robbins）", audio:["audio/cet6-2022-12-p2a.wav","audio/cet6-2022-12-p2b.wav"],
            transcript:"W: Today on Book Talk, we're lucky enough to host John Robbins and discuss his new book, why Americans are fat and how we can lose weight. John isn't just a respected writer, he's also one of the rare celebrity authors writing about science today.\nM: Thanks for having me, Rebecca, but I'm hardly a celebrity.\nW: That's very modest of you to say, considering that your four books have sold a total of 7 million copies worldwide. And they've been translated into 12 different languages. What makes people so fascinated with your work?\nM: Well, people read my books because more than 60% of Americans are overweight or obese, and other countries are facing similar problems. Basically, we all want to know how to fix things.\nW: We certainly do. I read your new book, and it's fabulous, especially when it comes to the way you make difficult science easy for laymen to understand. That's no small achievement.\nM: I'm glad to hear you find my work accessible. Because I was worried when I wrote it, that discussing the science might make the book more suited for a specialist audience. My last book was written primarily for the medical community. But this time, I want to help ordinary people take control of their weight.\nW: And how do you suggest they do that? Can you give us the basics of your advice for people who want to lose weight?\nM: Briefly, I argue that every person needs to consider their metabolism, and eat what suits their body's needs. I don't advocate one single diet. Some people should eat more carbohydrates than others. And different people need different amounts of protein and fat.\nW: But you do have some recommendations for everyone, including eating 10 servings of vegetables and three of fruit a day. We'll talk about those recommendations next, but now we need to take a short break for a message from our sponsor.",
            questions:[
              {n:5,text:"What does the woman say about the man in her introduction?",
               options:["He is a great writer and scientist.","His books sell well worldwide.","He is a famous TV host.","He has won many awards."],
               answer:"C",explain:"女士介绍他的四本书全球销量700万册，对应答案C（His books sell well worldwide）。"},
              {n:6,text:"What has motivated the man to write his books?",
               options:["A desire to become famous.","A request from his publisher.","The fact that over half of Americans are overweight.","His medical background."],
               answer:"C",explain:"男士说超过60%美国人超重或肥胖，人们想知道如何改善，故选C。"},
              {n:7,text:"Who does the man say his last book was mainly written for?",
               options:["The general public.","Patients.","University students.","The medical community."],
               answer:"D",explain:"男士说上一本书主要面向医学界（medical community），故选D。"},
              {n:8,text:"What does the man recommend people do?",
               options:["Follow a personalized diet.","Eat more carbohydrates.","Take regular exercise.","Eat less fat and sugar."],
               answer:"B",explain:"男士主张考虑自身新陈代谢、吃适合自己的食物，即个性化饮食，对应答案B（Follow a personalized diet）。"}
            ]
          }
        ]
      },
      {
        name:"Section B · 听力篇章",
        passages:[
          {
            id:"p3", title:"Passage 1（压力对人体的益处）", audio:["audio/cet6-2022-12-p3a.wav","audio/cet6-2022-12-p3b.wav"],
            transcript:"Stress is often depicted as negative, but research shows that moderate amounts of it can be beneficial for your brain and your body. First, the benefits for the brain. Studies have shown that short periods of stress can actually bolster cognitive functioning. Researchers discovered that placing rats in a stressful situation for just a few hours doubled the growth of new brain cells. The rats also did better on a memory test later on. Scientists think the same thing happens in humans. But, how does stress improve memory? It's simple. When your brain cells multiply, your memory can improve. Viewed from a biological perspective, this makes sense because animals that are better at remembering dangerous situations can avoid them in the future. If an animal encounters a predator and escapes, for example, it's important to remember where and when that encounter happened. Experts assert that the same principle applies to humans. Now, let's turn to how stress benefits the body. This may come as a surprise to laymen, but experts say that stress can keep you from getting sick. Scientists concede that chronic stress can make you more prone to illness, but research shows that short periods of stress can actually provide some protection against getting sick because it increases your immune functioning. One study shows that rats that experience brief stress had a surge of immune cell response, which makes the immune system better prepared to fight illness. For humans, there is even evidence that experiencing stress before getting vaccinated could help make vaccines more effective.",
            questions:[
              {n:9,text:"What did researchers discover about rats placed briefly in a stressful situation?",
               options:["They became more aggressive.","The growth of their new brain cells doubled.","They lost their appetite.","They slept much less than usual."],
               answer:"B",explain:"研究发现短暂压力使大鼠新脑细胞增长翻倍，故选B。"},
              {n:10,text:"Why do people tend to have clearer memories of dangerous situations they have encountered?",
               options:["To avoid them in the future.","To share them with others.","To forget them quickly.","To feel proud of themselves."],
               answer:"A",explain:"记得危险情境有助于未来避开，故选A。"},
              {n:11,text:"What do scientists believe chronic stress can do?",
               options:["Improve immune functioning.","Sharpen one's memory.","Make people more susceptible to illness.","Speed up the healing of wounds."],
               answer:"C",explain:"科学家认为长期压力使人更容易生病，故选C。"}
            ]
          },
          {
            id:"p4", title:"Passage 2（职场邮件管理）", audio:"audio/cet6-2022-12-p4.wav",
            transcript:"For many managers and people who work in leadership positions, dealing with emails is a dilemma. It's likely the unpredictable, uncontrollable and ongoing nature of day-to-day email, in terms of volume, importance, and urgency, contributes to their levels of anxiety and to diminished leadership skills. That's because it's not unusual for many leaders to prioritize email management over people management. An obsession with managing their inbox prevents them from dealing with their employees. As a result, they ignore the issues that might only be mild problems at first, until unfortunately, they inevitably transform into a major problem or crisis by virtue of neglect. As leaders, they are expected to motivate and inspire their team in pursuit of longer-term strategic goals. And also, less ambitiously, but more practically, to monitor their daily output, to set clear expectations, and to give regular feedback. When presented with a choice between the appeal of their inbox and other more important activities, many sacrificed the latter. Daily email demands have a negative impact, filter and respond to emails. The solution is cultivating self-control, which is like a muscle, it can be strengthened or improved over time through exercise. Some suggestions include, making space in your diary for the only periods during which you will be checking emails. Setting a timer for yourself, so you don't become distracted by your inbox for too long. Turning off email alerts so you're not interrupted by them.",
            questions:[
              {n:12,text:"What does the speaker say is a common problem with managers?",
               options:["They delegate too much work.","They ignore their own health.","They lack communication skills.","Spending too much time handling email."],
               answer:"D",explain:"管理者常把邮件管理置于人员管理之上，花太多时间处理邮件，故选D。"},
              {n:13,text:"What may happen when managers ignore minor problems?",
               options:["They will be reported.","Employees will feel neglected.","Major problems may result.","The team will become inefficient."],
               answer:"C",explain:"被忽视的小问题会演变成大问题或危机，故选C。"},
              {n:14,text:"What are leaders expected to do in pursuing their strategic goals?",
               options:["Handle emails first.","Motivate and inspire their team.","Keep a strict schedule.","Review the team's performance weekly."],
               answer:"B",explain:"领导应激励鼓舞团队以追求长期战略目标，故选B。"},
              {n:15,text:"How can a manager best avoid being distracted by email?",
               options:["Cultivate self-control.","Reply to emails immediately.","Check emails only in the morning.","Hire an assistant."],
               answer:"A",explain:"解决之道在于培养自控力，故选A。"}
            ]
          }
        ]
      },
      {
        name:"Section C · 讲座/报告",
        passages:[
          {
            id:"p5", title:"Recording 1（食品外观与营销）", audio:["audio/cet6-2022-12-p5a.wav","audio/cet6-2022-12-p5b.wav"],
            transcript:"In last week's lecture, we talked about the problems caused by poor eating habits, focusing on how medical professionals are trying to solve these problems. Today, we'll continue with the topic, but focus on research from a different field: marketing. Now, what can marketing tell us about improving nutrition? Well, a team of marketing professors has studied the importance of the visual aspect of food and how that influences food choices. Those marketing experts assert that the impact of the appearance of food is greater than we might presume, and might hold the key to encouraging better eating. So how important is the appearance of food? Research shows that just seeing an appealing photograph of a hamburger in an advertisement, for example, can cause individuals to imagine the taste or smell of that hamburger. This can make them more likely to purchase and consume it. Of course, that's the point of advertisements. So isn't that a good thing? Well, the marketing professors argued that this is actually a problem because the combination of pleasing aesthetics and easy access to unhealthy foods, such as hamburgers and pizza, may be contributing to a worldwide health crisis. In fact, statistics show that 39% of all adults in the world weigh too much, and another 13% are obese. Now, as we discussed last time, medical professionals have tried to fight the obesity epidemic by focusing on the nutrients found in different foods, emphasizing things like carbohydrate, fat, sugar and calorie content. But they've had limited success. The marketing professors believe that the real solution to obesity is making food look appealing and focusing on the pleasure of both looking at and eating that food. That pleasure can be used as a tool to promote healthy food choices. In fact, the research done by the team showed that associating healthy food with pleasant images, experiences, and emotions led to greater interest in purchasing or eating. This is a better strategy, they claim, than reminding consumers that a certain food is good for them. But are they right? Well, the researchers cited a marketing campaign designed to reverse the sales decline of carrots. The campaign didn't emphasize the carrots' healthy qualities, but embraced their beauty and the pleasure derived from eating them. For example, the ads focused on the bright, beautiful orange color and crisp texture of the carrots. The campaign led to an impressive increase in product sales of more than 10%. The researchers believe that other companies could bolster sales of healthy foods with similar ads, depicting their products as attractive and a source of pleasure.",
            questions:[
              {n:16,text:"What does the speaker say a team of marketing professors has studied?",
               options:["The marketing of fast food.","The psychology of consumers.","The importance of the appearance of food.","The history of advertising."],
               answer:"D",explain:"营销教授研究的是食物外观的重要性及其对饮食选择的影响，对应答案D。"},
              {n:17,text:"How have medical professionals tried to fight obesity?",
               options:["By focusing on the nutrients in different foods.","By encouraging more exercise.","By limiting fast food ads.","By promoting home cooking."],
               answer:"A",explain:"医学界通过关注不同食物中的营养成分来对抗肥胖，故选A。"},
              {n:18,text:"What can other companies learn from the example of the carrot promotion campaign?",
               options:["They should emphasize health benefits.","They can boost sales of healthy foods by making them visually appealing.","They should lower the price of healthy foods.","They should sell more vegetables."],
               answer:"B",explain:"胡萝卜营销证明通过让健康食品外观诱人可提升销量，故选B。"}
            ]
          },
          {
            id:"p6", title:"Recording 2（环保清洁用品市场）", audio:["audio/cet6-2022-12-p6a.wav","audio/cet6-2022-12-p6b.wav"],
            transcript:"The household cleaning products industry really began to take off in the 1950s. Prior to that, resourceful housewives who had grown up in a less prosperous era relied on substances that they used in their kitchens, such as vinegar used to clean windows. Today, the household cleaning products industry is worth billions of dollars a year and is dominated by large global companies. In recent years, however, many countries have witnessed a surge in the number of small businesses and companies offering more environment-friendly cleaning products. And they're doing good business, too. One reason for this is that consumers are becoming more aware of the environment and sustainability issues. They also want to make their home a safe place, free from toxic chemicals. The third reason is people's awareness of and knowledge about technology has never been greater. In the past, people might have been skeptical of a new product claimed to be able to achieve amazing cleaning results, but they now have faith in technology's ability to do what was once thought impossible. There is perhaps no better example of this than a patented cloth sold by one company, which remarkably uses only water rather than traditional cleaning products. The company claims its cloth lifts, traps, and removes dirt and bacteria, and considering that people don't see these products in shops, or advertised on TV, or in the press, it has been a pretty steep rise. Many of the people behind these companies began testing the viability of their products by selling them at local markets. Then in many cases, customers are doing the marketing for these products by leaving threads of comments on social media, praising their virtues. There are also TV shows and books dedicated to maintaining home tidiness and cleanliness and the benefits of having a clean home. Having a safe and clean home might be one thing people feel they can control in an increasingly out-of-control world. And there are social media celebrities. One woman in Britain has become a social media sensation with more than 2 million followers for her cleaning tips page.",
            questions:[
              {n:19,text:"What does the speaker say about the cleaning products industry in recent years?",
               options:["It has been dominated by large companies.","It has seen more small businesses offering environment-friendly products.","It has experienced a sharp decline.","It has become more concentrated."],
               answer:"C",explain:"近年来出现了更多提供环保清洁用品的小企业，对应答案C。"},
              {n:20,text:"Why are newly developed cleaning products selling well?",
               options:["Consumers now know much more about technology.","They are cheaper than traditional ones.","They are heavily advertised on TV.","They are imported from abroad."],
               answer:"A",explain:"消费者对技术的认识和信任增加是热销原因之一，故选A。"},
              {n:21,text:"What are some customers doing to help promote non-traditional cleaning products?",
               options:["Writing positive comments about them on social media.","Demonstrating them in supermarkets.","Recommending them to their relatives.","Posting videos of them on TV shows."],
               answer:"B",explain:"顾客在社交媒体上留言称赞这些产品，相当于帮其营销，对应答案B。"}
            ]
          },
          {
            id:"p7", title:"Recording 3（许愿池里的硬币去向）", audio:["audio/cet6-2022-12-p7a.wav","audio/cet6-2022-12-p7b.wav"],
            transcript:"Throwing spare change into a fountain is a time-honored ritual. Throw a penny into the water and your wish might come true. But all that money has to go somewhere. Otherwise, the growing piles of pennies, quarters, and euros could clog up the fountain's works. Today I'm going to talk about where all the coins go. Well, the coins collected can go to all sorts of different places, from fountain maintenance to charity or public service. In New York City, for example, coins collected from fountains and public parks often go towards the fountain's maintenance itself. Though entrepreneurs who don't mind getting their hands wet often get to it first. There are over 50 beautiful decorative display fountains in New York City parks. They are cleaned by the park's staff every few weeks, but most of the coins have already been removed by entrepreneurial New Yorkers, and there is not a significant amount left to be collected. Other cities, though, can pull in a much more serious haul. Take, for example, Rome's famous Trevi Fountain. For hundreds of years, visitors have thrown coins over their shoulders into the fountain to ensure that they will return. So many tourists toss coins that Roman officials have the fountain cleaned every night, reportedly getting as much as $4000 in loose change from around the world each day. Most of the money collected each night goes towards running a supermarket for the needy, and collecting that cash is serious business. Roman officials have been known to be tough on anyone caught skimming coins from the fountain. In one case in 2005, police arrested 4 fountain cleaners after they were spotted slipping coins into their own pockets after collecting them. Authorities finally caught one notorious thief named Thomas Morgan and banned him from the fountain after he fished out thousands of dollars in change over 34 years using a magnetic stick. For the most part, money collected from privately owned fountains in the United States also goes to charity. The fountain in New York City's Bryant Park is owned and operated by a not-for-profit corporation, which puts the cash collected by cleaners towards the fountain's own maintenance. Tens of thousands of dollars in coins removed from wishing wells, fountains, and ponds in Florida's Walt Disney World are donated each year to support foster children living in the state. Whether or not your wish comes true after tossing a coin into a fountain, you can rest assured knowing that the change is likely going to someone who needs it.",
            questions:[
              {n:22,text:"What problem might be caused by the growing piles of coins in fountains?",
               options:["They may be stolen by thieves.","Blocking the fountains' works.","They may pollute the water.","They may attract too many tourists."],
               answer:"B",explain:"不断累积的硬币会堵塞喷泉的机械装置，故选B。"},
              {n:23,text:"What does the speaker say about the coins collected from New York City's park fountains?",
               options:["They are donated to charity.","They are kept by the park staff.","They are mostly used for its maintenance.","They are thrown away."],
               answer:"C",explain:"纽约公园喷泉里收集的硬币大多用于喷泉自身的维护，故选C。"},
              {n:24,text:"What do we learn about the money collected from Rome's Trevi Fountain?",
               options:["It is given to the government.","It is used to repair the fountain.","It is used to run a supermarket for the needy.","It is donated to the church."],
               answer:"C",explain:"罗马许愿池收集的硬币用于运营一家救济穷人的超市，故选C。"},
              {n:25,text:"What does the speaker say about Thomas Morgan?",
               options:["He donated money to charity.","He cleaned fountains for a living.","He was a famous tourist.","He stole a lot of money from a fountain with a magnetic stick."],
               answer:"D",explain:"Thomas Morgan用磁力棒偷了喷泉里大量硬币，故选D。"}
            ]
          }
        ]
      }
    ]
  }
];
