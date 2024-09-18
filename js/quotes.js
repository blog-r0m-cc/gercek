const RANDOM_QUOTES = [
	{
		text: "Bazen doğruyu görebilmek için yanlışa düşmek gerekir.",
		author: "Ege Bilecen"
	},
	{
		text: "Başkasının sözünün yolcusu olmayın, bütün sözleri kendi akıl süzgecinizden geçirin.",
		author: "Ege Bilecen"
	},
	{
		text: "Onlar ki, sözü dinler ve en güzeline uyarlar. İşte onlar Allah'ın doğru yola ulaştırdığı kişilerdir. Öz akıl sahipleri de işte sadece onlardır.",
		author: "Kur'an, 39:18"
	},
	{
		text: "Hakkında bilgi sahibi olmadığın şeyin peşine düşme! Kuşkusuz kulak, göz ve beyin bunların hepsi ondan sorumludur.",
		author: "Kur'an, 17:36"
	},
	{
		text: "Ant olsun biz, Kur'an'ı öğüt alınsın diye kolaylaştırdık. Var mı öğüt alıp düşünen?",
		author: "Kur'an, 54:17"
	},
	{
		text: "İyilikle kötülük bir değildir. Kötülüğü iyilikle sav. Bir de bakmışsın ki seninle arasında düşmanlık olan kişi, en iyi dostun oluverir.",
		author: "Kur'an, 41:34"
	},
	{
		text: "De ki: \"İster Allah diye çağırın ister Rahman diye çağırın. Hangisiyle çağırırsanız çağırın en iyi isimler O'nundur.\" (…)",
		author: "Kur'an, 17:110"
	},
	{
		text: "Kim bir kötülük yaparsa veya kendisine haksızlık eder de sonra Allah'tan bağışlanma dilerse, Allah'ı çok bağışlayıcı, çok merhametli bulur.",
		author: "Kur'an, 4:110"
	},
	{
		text: "Ondan (Kur’an’dan) yüz çeviren kişi, kıyamet günü içinde ebedî kalacakları ağır bir günah yükünü yüklenecektir. Bu, onlar için kıyamet gününde ne kötü bir yüktür!",
		author: "Kur'an, 20:100-101"
	},
	{
		text: "İnsan hayra dua eder gibi, şerre dua ediyor. İnsan çok acelecidir.",
		author: "Kur'an, 17:11"
	},
	{
		text: "İnsana bir zarar dokunduğu zaman bize yalvarır. Sonra, kendisine tarafımızdan bir nimet verdiğimizde \"Bu, bana ancak bilgim sayesinde verilmiştir\" der. Hayır! O bir imtihandır fakat çoğu bilmez.",
		author: "Kur'an, 39:49"
	},
	{
		text: "İnsana bir sıkıntı dokunduğu zaman, yan yatarak, oturarak veya ayakta durarak bize dua eder. Fakat ondan sıkıntısını kaldırınca, sanki kendisine dokunan bir sıkıntı yüzünden bize yalvarmamış gibi geçip gider. İşte böylece yapmakta oldukları şeyler haddi aşanlara güzel gösterilmiştir.",
		author: "Kur'an, 10:12"
	},
	{
		text: "İnsana tarafımızdan bir rahmet tattırır da sonra bunu ondan çekip alırsak, şüphesiz ki o tamamen ümitsiz, nankör olur. Kendisine dokunan bir zarardan sonra ona bir nimet tattırırsak, elbette \"Kötülükler benden gitti.\" der. Şüphesiz ki o, çok şımarıktır, çok kibirlidir. Ancak sabredip güzel işler yapanlar başka. İşte onlar için bağışlanma ve büyük bir ödül vardır.",
		author: "Kur'an, 11:9-11"
	},
	{
		text: "Hayır! Şüphesiz ki insan, kendini zengin (ihtiyaçsız) gördüğü için azar.",
		author: "Kur'an, 96:6-7"
	},
	{
		text: "Aldatıp oyaladı o çokluk yarışı sizleri.",
		author: "Kur'an, 102:1"
	},
	{
		text: "Hoşlarına gitmeyen şeyleri Allah'a mal ediyorlar. En güzel şeylerin de kendilerine ait olduğunu söylüyorlar. Şüphesiz, onlara ateş vardır ve onlar ateşte terk edileceklerdir.",
		author: "Kur'an, 16:62"
	},
	{
		text: "Kendisine Rabbinin ayetleri hatırlatıldıktan sonra onlardan yüz çevirenden daha zalim kim olabilir ki! Şüphesiz ki biz suçlulardan intikam alıcılarız.",
		author: "Kur'an, 32:22"
	},
	{
		text: "Şimdi siz bu sözü mü tuhaf buluyorsunuz! Gülüyorsunuz; ağlamıyorsunuz. Siz oyalanıyorsunuz!",
		author: "Kur'an, 53:59-61"
	},
	{
		text: "Allah sizin tövbenizi kabul etmek istiyor; şehvetlerine uyanlar ise büyük bir sapkınlığa sapmanızı (tamamen yoldan çıkmanızı) istiyorlar.",
		author: "Kur'an, 4:27"
	},
	{
		text: "Onlara verdiğimiz servet ve çocuklar ile kendilerine iyilik noktasında yardım ettiğimizi mi sanıyorlar! Hayır! Onlar (işin) farkına varamıyorlar.",
		author: "Kur'an, 23:55-56"
	},
	{
		text: "Yeryüzünde bulunanların çoğuna uyacak olursan, seni Allah'ın yolundan saptırırlar. Onlar, zandan başka bir şeye uymuyorlar ve onlar yalandan başka bir şey söylemiyorlar.",
		author: "Kur'an, 6:116"
	},
	{
		text: "Ne oluyor size? Nasıl (böyle) hükmediyorsunuz? Yoksa bir kitabınız var da onu mu okuyup duruyorsunuz? Ve içinde her dilediğinizi bulabiliyorsunuz?",
		author: "Kur'an, 68:36-38"
	},
	{
		text: "Bundan (Kur'an'dan) sonra artık hangi söze inanacaklar ki!",
		author: "Kur'an, 77:50"
	},
	{
		text: "(…) Akıl edesiniz diye ayetleri size elbette açıkladık.",
		author: "Kur'an, 57:17"
	},
	{
		text: "Bu, hikmet sahibi, her şeyden haberdar olan tarafından, ayetleri sağlamlaştırılmış ve ayrıntılı olarak açıklanmış bir kitaptır.",
		author: "Kur'an, 11:1"
	},
	{
		text: "De ki: \"Kendisinden yüz çevirip durduğunuz bu (Kur'an), büyük bir haberdir.\"",
		author: "Kur'an, 38:67-68"
	}
]
