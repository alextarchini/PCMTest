const questions = [
  {
    /* 1 */
    question: "THE MOST VALUABLE PARTS OF MY PERSONALITY ARE THOSE THAT?",
    answer1: "have flexibility, creativity, and a joy for life.",
    answer1Total: "E",
    answer2: "have high ideals, morals and expectations.",
    answer2Total: "B",
    answer3: "show sensitivity and respond to the feelings of others",
    answer3Total: "C",
    answer4: "give and take information and organize it.",
    answer4Total: "A",
    answer5: "allow me to be calm and introspective",
    answer5Total: "D",
    answer6: "I can use to survive and adapt",
    answer6Total: "B"
  },
  {
    /* 2 */
    question: "I PREFER TO BE WITH FRIENDS WHO",
    answer1: "are warm and accepting.",
    answer1Total: "C",
    answer2: "respect my beliefs and principles",
    answer2Total: "B",
    answer3: "are creative, fun and do their own things.",
    answer3Total: "E",
    answer4: "like excitement and taking chances.",
    answer4Total: "F",
    answer5: "provide a lively exchange of interesting ideas",
    answer5Total: "B",
    answer6: "respect my privacy",
    answer6Total: "D"
  },
  {
    /* 3 */
    question: "I AM OFTEN",
    answer1: "nurturing.",
    answer1Total: "C",
    answer2: "dedicated.",
    answer2Total: "B",
    answer3: "adaptable.",
    answer3Total: "F",
    answer4: "responsible.",
    answer4Total: "A",
    answer5: "playful.",
    answer5Total: "E",
    answer6: "reflective.",
    answer6Total: "D"
  },
  {
    /* 4 */
    question: "WHEN UPSET, I AM LIKELY TO EXPERIENCE",
    answer1: "feeling hurt or rejected.",
    answer1Total: "C",
    answer2: "myself withdrawing and being alone.",
    answer2Total: "D",
    answer3: "the other person still not accepting my opinions.",
    answer3Total: "B",
    answer4: "I’ll show you.",
    answer4Total: "F",
    answer5: "frustrated at someone else’s stupidity.",
    answer5Total: "A",
    answer6: "who needs you.",
    answer6Total: "D"
  },
  {
    /* 5 */
    question: "AN IDEAL RELATIONSHIP FOR ME WOULD BE TO HAVE A FRIEND WHO",
    answer1:
      "is warm, nurturing, and caring - someone who cares about me and how I feel.",
    answer1Total: "C",
    answer2: "likes to do fun, spontaneous, playful things with me.",
    answer2Total: "E",
    answer3: "respects my opinions and believes in me and my values.",
    answer3Total: "B",
    answer4:
      "recognizes the hard work I do, how responsible I am, and how I plan my time.",
    answer4Total: "A",
    answer5:
      "can handle being on the fast track, and who likes excitement; who’ll follow my lead.",
    answer5Total: "F",
    answer6: "allows me my own space, pace and privacy.",
    answer6Total: "D"
  },
  {
    /* 6 */
    question: "WHEN THINGS GO BADLY, I",
    answer1: "dig in and hold firm with my beliefs.",
    answer1Total: "B",
    answer2: "feel unloved or rejected.",
    answer2Total: "C",
    answer3: "feel hurt, and then vengeful.",
    answer3Total: "E",
    answer4: "go off by myself and seem not to feel much.",
    answer4Total: "D",
    answer5: "think that others can’t be that stupid.",
    answer5Total: "A",
    answer6: "look out for number one.",
    answer6Total: "F"
  },
  {
    /* 7 */
    question: "I PREFER",
    answer1: "fun things.",
    answer1Total: "E",
    answer2: "excitement.",
    answer2Total: "F",
    answer3: "values.",
    answer3Total: "B",
    answer4: "ideas.",
    answer4Total: "A",
    answer5: "privacy.",
    answer5Total: "D",
    answer6: "people.",
    answer6Total: "C"
  },
  {
    /* 8 */
    question: "AS A CHILD, I",
    answer1:
      "was withdrawn and shy. I discovered I could use my imagination and daydreams.",
    answer1Total: "D",
    answer2:
      "wanted to belong . . . Friendships and caring people were important to me.",
    answer2Total: "C",
    answer3:
      "had a parent who instilled in me strong beliefs and convictions. I learned how to value integrity and honor.",
    answer3Total: "B",
    answer4: "liked animals, loved to play and have fun, and got bored easily.",
    answer4Total: "E",
    answer5: "liked learning facts and information.",
    answer5Total: "A",
    answer6: "took risks and liked lots of action.",
    answer6Total: "F"
  },
  {
    /* 9 */
    question: "THE PART OF MY PERSONALITY THAT I SEEM TO USE A LOT IS",
    answer1:
      "an imaginative one. I tend to let my mind drift in time and space.",
    answer1Total: "D",
    answer2: "a fun, playful, sometimes very active one.",
    answer2Total: "E",
    answer3: "a concerned, nurturing, taking-care-of-others part.",
    answer3Total: "C",
    answer4: "one with emphasis on values, opinions, and beliefs.",
    answer4Total: "B",
    answer5: "a direct, bottom-line, cut to the chase approach.",
    answer5Total: "F",
    answer6: "a clear thinking, logical one.",
    answer6Total: "A"
  },
  {
    /* 10 */
    question:
      "WHEN IN DISTRESS, WITH WHICH OF THE FOLLOWING DO YOU MOST CLOSELY IDENTIFY?",
    answer1: "I try to be responsible. I even take on more than my share.",
    answer1Total: "E",
    answer2: "I feel awful when I let others down.",
    answer2Total: "C",
    answer3: "Without morals and ethics, people are dangerous",
    answer3Total: "B",
    answer4: "I seem to be the one always left out",
    answer4Total: "D",
    answer5: "I’ll show you; it’s not always my fault",
    answer5Total: "A",
    answer6:
      "P.T. Barnum was right, there are fools, and people who make fools of fools.",
    answer6Total: "F"
  },
  {
    /* 11 */
    question: "OFTEN I",
    answer1: "am driven to excel and achieve.",
    answer1Total: "A",
    answer2: "try to please almost everyone.",
    answer2Total: "C",
    answer3: "try but it’s really hard sometimes.",
    answer3Total: "E",
    answer4: "am convinced a person is either a leader or a follower",
    answer4Total: "F",
    answer5: "experience myself in a shell-like world.",
    answer5Total: "D",
    answer6: "have high expectations for other people.",
    answer6Total: "B"
  },
  {
    /* 12 */
    question: "PEOPLE KNOW THAT I LIKE THEM BY MY",
    answer1: "being warm, close and caring.",
    answer1Total: "C",
    answer2: "having values, and being loyal and devoted.",
    answer2Total: "B",
    answer3: "playing and having fun with them.",
    answer3Total: "E",
    answer4: "respecting their privacy and alone time.",
    answer4Total: "D",
    answer5: "trusting them to do something big and exciting with me.",
    answer5Total: "F",
    answer6: "planning, thinking and working hard.",
    answer6Total: "A"
  },
  {
    /* 13 */
    question: "IN GENERAL, I HAVE PREFERRED",
    answer1:
      "being alone with my fantasies, daydreams or using my imagination. Sometimes, I prefer doing things that do not require lots of energy thinking all the time.",
    answer1Total: "D",
    answer2:
      "being with people and especially feeling wanted, accepted, and important when I am in a group.",
    answer2Total: "C",
    answer3:
      "to take the initiative and capitalize on opportunities when they present themselves.",
    answer3Total: "F",
    answer4:
      "being with my friends and doing our thing, even though others may not approve or understand.",
    answer4Total: "E",
    answer5:
      "either being alone and thinking or planning, or being with one other person in a stimulating, intellectual, or thought-provoking discussion.",
    answer5Total: "A",
    answer6:
      "either being alone and thinking, organizing, or philosophizing, or being with one other person, sharing beliefs, opinions, or views on politics, religion, or current events.",
    answer6Total: "B"
  },
  {
    /* 14 */
    question: "I PREFER TO BE WITH FRIENDS WHO",
    answer1: "are warm and accepting.",
    answer1Total: "C",
    answer2: "respect my beliefs and principles",
    answer2Total: "A",
    answer3: "are creative, fun and do their own things.",
    answer3Total: "E",
    answer4: "like excitement and taking chances.",
    answer4Total: "F",
    answer5: "provide a lively exchange of interesting ideas",
    answer5Total: "B",
    answer6: "respect my privacy",
    answer6Total: "D"
  },
  {
    /* 15 */
    question: "MY STRENGTHS ARE MY ABILITIES TO",
    answer1: "nurture and care about others.",
    answer1Total: "C",
    answer2: "play, have fun and be creative.",
    answer2Total: "E",
    answer3: "adapt, survive, and make things happen.",
    answer3Total: "F",
    answer4: "stick with my beliefs, even under pressure.",
    answer4Total: "B",
    answer5: "do tasks others might find boring.",
    answer5Total: "D",
    answer6: "receive and process information to solve problems.",
    answer6Total: "A"
  },
  {
    /* 16 */
    question: "SOME OF MY FRIENDS MIGHT SAY I AM TOO",
    answer1: "sentimental.",
    answer1Total: "C",
    answer2: "much of a free spirit.",
    answer2Total: "E",
    answer3: "set in my beliefs.",
    answer3Total: "B",
    answer4: "shy.",
    answer4Total: "D",
    answer5: "work oriented.",
    answer5Total: "A",
    answer6: "manipulative.",
    answer6Total: "F"
  },
  {
    /* 17 */
    question:
      "AT WORK (OR WHEN INVOLVED IN A PROJECT OR TASK) I WOULD RATHER BE",
    answer1: "involved in the creative, less structured part of a project.",
    answer1Total: "E",
    answer2: "requested to structure and organize projects.",
    answer2Total: "A",
    answer3:
      "given a project that requires stick-to-it-iveness and that will be important",
    answer3Total: "B",
    answer4: "given a task to do alone, but with lots of directions.",
    answer4Total: "D",
    answer5: "involved in an exciting, short-term project.",
    answer5Total: "F",
    answer6: "surrounded by friends.",
    answer6Total: "C"
  },
  {
    /* 18 */
    question: "OFTEN I",
    answer1: "take on more responsibility and want to achieve.",
    answer1Total: "A",
    answer2: "get bored with routines, and have to get some stimulation.",
    answer2Total: "E",
    answer3: "find my private place to be alone.",
    answer3Total: "D",
    answer4:
      "have a desire to give to others love and affection and to be given to.",
    answer4Total: "C",
    answer5: "crave excitement and quick rewards.",
    answer5Total: "F",
    answer6:
      "am driven by a mission and a desire to convince others of what they should believe in.",
    answer6Total: "B"
  },
  {
    /* 19 */
    question: "I SOMETIMES EXPERIENCE",
    answer1:
      "myself wanting to please others in hopes of being accepted. Sometimes I have a hard time saying “no” or putting myself first.",
    answer1Total: "C",
    answer2:
      "others being upset with me. It is difficult for me to accept that things “be done so perfectly” or that there have to be so many “rules”.",
    answer2Total: "E",
    answer3:
      "myself withdrawing into a shy, shell-like appearance. It is as if I am in a world all by myself.",
    answer3Total: "D",
    answer4:
      "putting lots of pressure on myself to be perfect in order not to make mistakes, or in order that others will understand me just right, I often over qualify or need to explain myself.",
    answer4Total: "B",
    answer5:
      "myself taking care of “me” and expecting others either to get behind me or get out of the way.",
    answer5Total: "F",
    answer6:
      "myself finding imperfections in others or noticing what they have done wrong.",
    answer6Total: "A"
  },
  {
    /* 20 */
    question: "A SAYING FOR ME COULD BE",
    answer1: "Do your own thing.",
    answer1Total: "D",
    answer2: "Stick to it and trust in your beliefs",
    answer2Total: "B",
    answer3: "It’s better to give than to receive.",
    answer3Total: "C",
    answer4: "Work now, play later",
    answer4Total: "E",
    answer5: "Look out for number one.",
    answer5Total: "F",
    answer6: "Don’t make waves.",
    answer6Total: "A"
  },
  {
    /* 21 */
    question: "OF THE FOLLOWING ANIMALS, FRIENDS WOULD SEE ME AS A(N)",
    answer1: "mother hen",
    answer1Total: "C",
    answer2: "cat.",
    answer2Total: "B",
    answer3: "fox.",
    answer3Total: "F",
    answer4: "turtle.",
    answer4Total: "D",
    answer5: "owl.",
    answer5Total: "A",
    answer6: "beaver.",
    answer6Total: "E"
  },
  {
    /* 22 */
    question: "I WOULD GIVE UP LAST MY",
    answer1: "beliefs.",
    answer1Total: "B",
    answer2: "charm and ability to influence others.",
    answer2Total: "F",
    answer3: "knack for fun.",
    answer3Total: "E",
    answer4: "alone time.",
    answer4Total: "D",
    answer5: "warmth.",
    answer5Total: "C",
    answer6: "clear thinking.",
    answer6Total: "A"
  },
  {
    /* 23 */
    question: "A GREAT FANTASY FOR ME WOULD BE TO",
    answer1: "have everyone love one another.",
    answer1Total: "C",
    answer2: "have all people believe the right way.",
    answer2Total: "B",
    answer3: "have all the fun I want.",
    answer3Total: "E",
    answer4: "win at high stakes gambling.",
    answer4Total: "F",
    answer5: "have all the alone time I want.",
    answer5Total: "D",
    answer6: "know every word in the dictionary.",
    answer6Total: "A"
  },
  {
    /* 24 */
    question:
      "IN IMPORTANT FRIENDSHIPS IN THE PAST WHEN THERE WAS AN UNPLEASANT ENDING, I",
    answer1:
      "just wanted to please my friend, but it seemed the more I gave, the less I got. I ended up feeling rejected and unloved.",
    answer1Total: "C",
    answer2:
      "couldn’t seem to convince my friend how important some things in life are…having goals, commitments, or strong beliefs by which to live. I’d even find myself “preaching” sometimes.",
    answer2Total: "B",
    answer3:
      "couldn’t seem to express what was going on inside of me. I have had difficulty even with closest friends making lively conversation. The more my friends expected me to be involved and outgoing, the more I seemed to withdraw.",
    answer3Total: "D",
    answer4:
      "tried to make things fun. The more I tried, the more I got criticized. I felt hurt and angry at being rejected and ignored.",
    answer4Total: "E",
    answer5:
      "got tired of the demands on me and my time after I had worked hard all day and been responsible enough to meet my obligations. I would get frustrated and even lose my temper occasionally.",
    answer5Total: "A",
    answer6: "knew when to cut my losses and move on.",
    answer6Total: "F"
  },
  {
    /* 25 */
    question: "I SEE MYSELF SOMETIMES",
    answer1: "giving people advice, or even preaching at them.",
    answer1Total: "B",
    answer2: "shutting down and pulling away.",
    answer2Total: "D",
    answer3: "having people criticize or reject me.",
    answer3Total: "C",
    answer4: "frustrated that people won’t look at the facts.",
    answer4Total: "A",
    answer5: "egging people on just to see them boil at me.",
    answer5Total: "E",
    answer6: "pitting people against each other to see them argue or fight",
    answer6Total: "F"
  },
  {
    /* 26 */
    question: "MOST ALL OF MY LIFE I HAVE BEEN INTERESTED IN",
    answer1: "religion and/or politics",
    answer1Total: "B",
    answer2: "fashion and/or decorating.",
    answer2Total: "E",
    answer3: "video games and/or art.",
    answer3Total: "C",
    answer4: "deals and/or risks.",
    answer4Total: "F",
    answer5: "trivia and/or puzzles.",
    answer5Total: "A",
    answer6: "solitude and/or seclusion.",
    answer6Total: "D"
  },
  {
    /* 27 */
    question: "IN HIGH SCHOOL, I WAS PROBABLY SEEN AS",
    answer1: "Mr./Miss Make it Happen.",
    answer1Total: "F",
    answer2: "Mr./Miss Quiet.",
    answer2Total: "D",
    answer3: "Mr./Miss Beliefs.",
    answer3Total: "B",
    answer4: "Mr./Miss Nice.",
    answer4Total: "C",
    answer5: "Mr./Miss Information.",
    answer5Total: "A",
    answer6: "Mr./Miss Clown",
    answer6Total: "E"
  },
  {
    /* 28 */
    question: "I WOULD AGREE THAT THE SECRET TO LIFE IS",
    answer1:
      "to have strong values and beliefs and be committed to your mission in life.",
    answer1Total: "B",
    answer2: "to be compassionate, caring and loving to everyone.",
    answer2Total: "C",
    answer3:
      "to chill out. Have fun, be yourself, and let the creative juices flow.",
    answer3Total: "E",
    answer4: "keeping calm and having an active imagination..",
    answer4Total: "D",
    answer5: "I did it my way",
    answer5Total: "F",
    answer6: "to be logical, think clearly and work hard.",
    answer6Total: "A"
  },
  {
    /* 29 */
    question: "WHEN I HAVE PHYSICAL PAIN, I MOST LIKELY FEEL IT IN MY",
    answer1: "neck and shoulders.",
    answer1Total: "B",
    answer2: "stomach.",
    answer2Total: "A",
    answer3: "back.",
    answer3Total: "D",
    answer4: "chest.",
    answer4Total: "C",
    answer5: "all over.",
    answer5Total: "E",
    answer6: "bottom.",
    answer6Total: "F"
  },
  {
    /* 30 */
    question: "I AM MORE LIKELY TO LISTEN TO A SALESPERSON WHO",
    answer1: "is genuinely friendly and concerned about my needs.",
    answer1Total: "C",
    answer2: "is trustworthy and appreciates the value of things.",
    answer2Total: "B",
    answer3:
      "is a bottom liner like me who cuts through the red tape and cuts me a deal.",
    answer3Total: "F",
    answer4: "knows his/her product and can answer my questions accurately.",
    answer4Total: "A",
    answer5:
      "has a lighter approach and makes purchasing more fun and less work.",
    answer5Total: "E",
    answer6:
      "takes initiative, tells me what I need to do and leads me through the sale.",
    answer6Total: "D"
  },
  {
    /* 31 */
    question: "I AM MORE LIKELY TO BUY A PRODUCT THAT",
    answer1:
      "is unique, fun or has a whimsical quality that I think is peculiar or fun.",
    answer1Total: "E",
    answer2: "dependably serves the purpose for which it was made.",
    answer2Total: "A",
    answer3: "has good workmanship and quality.",
    answer3Total: "B",
    answer4: "is first offered to me that meets my needs.",
    answer4Total: "D",
    answer5: "I feel comfortable with and fits me best.",
    answer5Total: "C",
    answer6: "has eye appeal and looks pricier than it really is.",
    answer6Total: "F"
  },
  {
    /* 32 */
    question: "PEOPLE I LIKE THE LEAST ARE",
    answer1: "unprincipled.",
    answer1Total: "B",
    answer2: "insensitive.",
    answer2Total: "C",
    answer3: "intrusive.",
    answer3Total: "D",
    answer4: "unreasonable.",
    answer4Total: "A",
    answer5: "clingy",
    answer5Total: "F",
    answer6: "boring.",
    answer6Total: "E"
  },
  {
    /* 33 */
    question: "OF THE FOLLOWING ANIMALS, FRIENDS WOULD SEE ME AS A(N)",
    answer1: "mother hen",
    answer1Total: "C",
    answer2: "cat.",
    answer2Total: "B",
    answer3: "fox.",
    answer3Total: "F",
    answer4: "turtle.",
    answer4Total: "D",
    answer5: "owl.",
    answer5Total: "A",
    answer6: "beaver.",
    answer6Total: "E"
  },
  {
    /* 34 */
    question: "IF I WERE IN CHARGE OF AN OFFICE, I WOULD MAKE WORK A PLACE TO",
    answer1: "build relationships and encourage and support others.",
    answer1Total: "C",
    answer2: "impact our bottom line - profit.",
    answer2Total: "F",
    answer3:
      "create few waves while seeing or conceptualizing things in unusual ways.",
    answer3Total: "D",
    answer4: "gather information, analyze data and plan a consistent approach.",
    answer4Total: "A",
    answer5:
      "observe closely, compare to an internal standard or ideal and then identify problems",
    answer5Total: "B",
    answer6:
      "stay loose, generate energy and use my creativity to overcome obstacles.",
    answer6Total: "E"
  },
  {
    /* 35 */
    question: "WHEN DISAGREEMENTS ARISE I AM MOST LIKELY TO",
    answer1: "feel hurt, rejected or personally unappreciated.",
    answer1Total: "C",
    answer2: "feel myself withdrawing and needing to be alone.",
    answer2Total: "D",
    answer3: "feel misunderstood, judged and get vengefully angry.",
    answer3Total: "E",
    answer4: "be confounded that others won’t listen to my opinions.",
    answer4Total: "B",
    answer5: "get the one who tried to get me.",
    answer5Total: "F",
    answer6:
      "frustrated that others are too emotional and not trying to solve a problem like I am.",
    answer6Total: "A"
  },
  {
    /* 36 */
    question: "WHICH OF THE FOLLOWING STATEMENTS RING “TRUE” FOR YOU?",
    answer1: "Everyone should have a mission in life",
    answer1Total: "B",
    answer2: "There is no friend like an old friend",
    answer2Total: "C",
    answer3: "Strike while the iron is hot.”",
    answer3Total: "F",
    answer4: "Just the facts, please.”",
    answer4Total: "A",
    answer5: "Still waters run deep",
    answer5Total: "D",
    answer6: "Either I like it, or I don’t.”",
    answer6Total: "E"
  },
  {
    /* 37 */
    question: "A PROMINENT PART OF MY PERSONALITY IS THAT WHICH",
    answer1:
      "invites others to have fun, be spontaneous and express their individuality.",
    answer1Total: "E",
    answer2: "likes to give to others, encouraging and building them up.",
    answer2Total: "C",
    answer3: "makes things happen.",
    answer3Total: "F",
    answer4: "knows what is right and sticks to it.",
    answer4Total: "B",
    answer5:
      "identifies a goal, gathers information and then proceeds in a logical way.",
    answer5Total: "A",
    answer6: "tends to hold back unless asked to join in and share.",
    answer6Total: "D"
  },
  {
    /* 38 */
    question: "MOST RECENTLY IN MY LIFE I SEEM TO BE MORE CONCERNED WITH",
    answer1: "if I am really being myself and having fun.",
    answer1Total: "E",
    answer2: "politics and/or religion.",
    answer2Total: "B",
    answer3: "whether or not people like me.",
    answer3Total: "C",
    answer4: "how I structure my time.",
    answer4Total: "A",
    answer5: "doing things that give me a rush.",
    answer5Total: "F",
    answer6: "my privacy.",
    answer6Total: "D"
  },
  {
    /* 39 */
    question: "THE WAY OTHERS KNOW I LOVE THEM IS BY MY",
    answer1:
      "being dependable, trustworthy and someone in whom they can place their trust.",
    answer1Total: "B",
    answer2: "providing for them in reliable and responsible ways.",
    answer2Total: "A",
    answer3:
      "spending time with them doing activities, sports, arts and crafts or just hanging out.",
    answer3Total: "E",
    answer4:
      "buying them nice things, going on exciting vacations and providing other experiences.",
    answer4Total: "F",
    answer5:
      "open physical affection and verbal expressions of love and caring.",
    answer5Total: "C",
    answer6: "making few demands and giving them their space.",
    answer6Total: "D"
  },
  {
    /* 40 */
    question: "I COME TO KNOW OTHERS BY",
    answer1: "what they do.",
    answer1Total: "F",
    answer2: "how they react.",
    answer2Total: "E",
    answer3: "what they feel.",
    answer3Total: "C",
    answer4: "how they think.",
    answer4Total: "A",
    answer5: "what they believe in.",
    answer5Total: "B",
    answer6: "what they imagine.",
    answer6Total: "D"
  },
  {
    /* 41 */
    question: "I SEEK",
    answer1: "respect.",
    answer1Total: "B",
    answer2: "acceptance.",
    answer2Total: "C",
    answer3: "accomplishment.",
    answer3Total: "A",
    answer4: "fun.",
    answer4Total: "E",
    answer5: "excitement.",
    answer5Total: "F",
    answer6: "privacy.",
    answer6Total: "D"
  },
  {
    /* 42*/
    question: "AN EFFECTIVE LEADER KNOWS THAT PEOPLE NEED",
    answer1: "to be loved and cared for.",
    answer1Total: "C",
    answer2: "more responsibility, education and fair treatment.",
    answer2Total: "B",
    answer3:
      "to be spontaneous, express themselves in an atmosphere of acceptance and appreciation for their creative gifts.",
    answer3Total: "E",
    answer4: "quick rewards.",
    answer4Total: "F",
    answer5: "a moral and ethical structure in which they can trust.",
    answer5Total: "B",
    answer6: "some alone time.",
    answer6Total: "D"
  },
  {
    /* 43 */
    question: "I HAVE APPRECIATED MY",
    answer1: "compassion.",
    answer1Total: "C",
    answer2: "charm.",
    answer2Total: "F",
    answer3: "values.",
    answer3Total: "B",
    answer4: "imagination.",
    answer4Total: "D",
    answer5: "humor.",
    answer5Total: "E",
    answer6: "logic.",
    answer6Total: "A"
  },
  {
    /* 44 */
    question: "IF I WERE TO BE PRAISED, I’D PREFER TO HEAR SOMEONE SAY",
    answer1: "that I’d done a good job.",
    answer1Total: "A",
    answer2: "that I really made things happen",
    answer2Total: "F",
    answer3: "that I was creative and fun to be with.",
    answer3Total: "E",
    answer4: "that they admired my commitment.",
    answer4Total: "B",
    answer5: "that they like me as a person.",
    answer5Total: "C",
    answer6: "that I deserve some time to myself.",
    answer6Total: "D"
  },
  {
    /* 45 */
    question:
      "I WOULD VOTE FOR A PRESIDENT OR POLITICAL LEADER WHO WAS ABLE TO",
    answer1:
      "recognize dedication, loyalty, perseverance and commitment in people, as well as rewarding them for believing in and accomplishing their duties and tasks.",
    answer1Total: "B",
    answer2:
      "recognize people for who they are inside, not for what they do. Such a leader unconditionally cares about people and lets them know that they are appreciated and accepted.",
    answer2Total: "C",
    answer3:
      "schedule time efficiently and recognize hard work, performance and task completion abilities in people.",
    answer3Total: "A",
    answer4:
      "make it happen, call the shots, and when the going is the roughest show who is the toughest!",
    answer4Total: "F",
    answer5: "be spontaneous, playful, joking, fun and humorous with people.",
    answer5Total: "E",
    answer6:
      "respect that some people need their own space and privacy – a time to be alone and reflective.",
    answer6Total: "D"
  },
  {
    /* 46 */
    question: "AN EFFECTIVE LEADER IS",
    answer1: "dedicated.",
    answer1Total: "B",
    answer2: "charming..",
    answer2Total: "F",
    answer3: "calm.",
    answer3Total: "D",
    answer4: "compassionate.",
    answer4Total: "C",
    answer5: "logical.",
    answer5Total: "A",
    answer6: "playful.",
    answer6Total: "E"
  },
  {
    /* 47 */
    question: "MONEY MEANS (TO ME)",
    answer1: "the means to care for others.",
    answer1Total: "C",
    answer2: "security.",
    answer2Total: "B",
    answer3: "a way to chill out (more toys or fun things).",
    answer3Total: "E",
    answer4: "reward for hard work.",
    answer4Total: "A",
    answer5: "excitement.",
    answer5Total: "E",
    answer6: "privacy.",
    answer6Total: "D"
  }
];
