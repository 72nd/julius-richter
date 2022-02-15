function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5, description, year, url) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.description = description;
	this.year = year;
	this.url = url;
	this.landcount = 0;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	// document.getElementById("cell1name").textContent = "Mediter-ranean Avenue";

	// Add images to enlarges.
	document.getElementById("enlarge5token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge15token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge25token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge35token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge12token").innerHTML += '<img src="images/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge28token").innerHTML += '<img src="images/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;Wenn der.die Spieler.in eine Versorgungswerk besitz, ist als Miete das Vierfache des gewürfelten Werts zu zahlen.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;Besitzt eine Person beide Versorgungswerke, so ist das Zehnfache des gewürfelten Werts zu entrichten.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Miete<span style="float: right;">€25.</span><br />Bei zwei Bahnhöfen im Besitz<span style="float: right;">50.</span><br />Wenn drei &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />Wenn vier &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
}

function luxurytax() {
	addAlert(player[turn].name + " zahlte €100 Zusatzsteuer.");
	player[turn].pay(100, 0);

	$("#landed").show().text("Du bist auf dem Zusatzsteuerfeld gelandet. Zahle €100.");
}

function citytax() {
	addAlert(player[turn].name + " zahlte €200 Einkommens—steuer.");
	player[turn].pay(200, 0);

	$("#landed").show().text("Du bist auf dem Einkommenssteuerfeld gelandet. Zahle €200.");
}

var square = [];

square[0] = new Square("LOS", "DU BEKOMMST 200€", "#FFFFFF");
square[1] = new Square(
	"Kleutsch",
	"€60",
	"#8B4513",
	60, 3, 2, 10, 30, 90, 160, 250,
	"Geburt 8. April 1883",
	1883,
	"http://localhost:8000/stationen/#8-april-1883"
);
square[2] = new Square("Gemeinschafts-\nfeld", "FOLGE DEN ANWEISUNGEN DER KARTE", "#FFFFFF");
square[3] = new Square(
	"Dessau",
	"€60",
	"#8B4513",
	60, 3, 4, 20, 60, 180, 320, 450,
	"Ausbildung zum Dekorationsmaler an der Kunstgewerbeschule Dessau.",
	"1901 bis 1903",
	"http://localhost:8000/stationen/#1901-1903-ausbildung-zum-dekorationsmaler-kunstgewerbeschule-dessau"
);
square[4] = new Square("Einkommens-\nsteuer", "Zahle €200", "#FFFFFF");
square[5] = new Square("Vereinigte Privatbahnen", "€200", "#FFFFFF", 200, 1);
square[6] = new Square(
	"Bleicherode",
	"€100",
	"#87CEEB",
	100, 4, 6, 30, 90, 270, 400, 550,
	"Bleicherode, Schmalkalden, Sömmerda",
	"1903",
	"http://localhost:8000/stationen/#1903-bleicherode-schmalkalden-sommerda",
);
square[7] = new Square("Ereignisfeld", "FOLGE DEN ANWEISUNGEN DER KARTE", "#FFFFFF");
square[8] = new Square(
	"Tivoli Theater",
	"€100",
	"#87CEEB",
	100, 4, 6, 30, 90, 270, 400, 550,
	"Dessau, Direktor Otto Sturm",
	"1904 bis 1906",
	"http://localhost:8000/stationen/#1904-1906-tivoli-theater-dessau",
);
square[9] = new Square(
	"Spremberg",
	"€120",
	"#87CEEB",
	120, 4, 8, 40, 100, 300, 450, 600,
	"Direktion Ernst Jmmisch",
	"1904 bis 1905",
	"http://localhost:8000/stationen/#1904-1905-forst-spremberg-landsberg",
);
square[10] = new Square("Nur zu Besuch", "", "#FFFFFF");
square[11] = new Square(
	"Sommertheater Küstrin",
	"€140",
	"#FF0080",
	140, 5, 10, 50, 150, 450, 625, 750,
	"Direktion Ernst Assmy",
	"1905",
	"http://localhost:8000/stationen/#1905-sommertheater-kustrin"
);
square[12] = new Square("Elektrizitätswerk", "€150", "#FFFFFF", 150, 2);
square[13] = new Square(
	"Residenztheater Hanover",
	"€140",
	"#FF0080",
	140, 5, 10, 50, 150, 450, 625, 750,
	"Direktor Julius Rudolph",
	"1906 bis 1910",
	"http://localhost:8000/stationen/#1906-1910-residenztheater-hannover"
);
square[14] = new Square(
	"Deutsches Theater Hannover",
	"€160",
	"#FF0080",
	160, 5, 12, 60, 180, 500, 700, 900,
	"Direktor Dr. George Altman",
	"1910 bis 1913",
	"http://localhost:8000/stationen/#1910-1913-deutsches-theater-hannover"
);
square[15] = new Square(
	"Vereinigte Bergbahnen",
	"€200",
	"#FFFFFF",
	200, 1,
);
square[16] = new Square(
	"Filmfabrik Afgha",
	"€180",
	"#FFA500",
	180, 6, 14, 70, 200, 550, 750, 950,
	"",
	"",
	"http://localhost:8000/stationen/#kurze-tatigkeit-bei-der-filmfabrik-afgha"
);
square[17] = new Square("Gemeinschaftsfeld", "FOLGE DEN ANWEISUNGEN DER KARTE", "#FFFFFF");
square[18] = new Square(
	"Stadttheater Stettin",
	"€180",
	"#FFA500",
	180, 6, 14, 70, 200, 550, 750, 950,
	"Intendant Arthur Jlling",
	"1914",
	"http://localhost:8000/stationen/#1914-stadttheater-stettin"
);
square[19] = new Square(
	"Kleines Theater Berlin",
	"€200",
	"#FFA500",
	200, 6, 16, 80, 220, 600, 800, 1000,
	"Direktor Dr. George Altman",
	"1915 bis 1916",
	"http://localhost:8000/stationen/#1914-stadttheater-stettin"
);
square[20] = new Square("Free Parking", "", "#FFFFFF");
square[21] = new Square(
	"Frankreich",
	"€220",
	"#FF0000",
	220, 7, 18, 90, 250, 700, 875, 1050,
	"Kriegseinsatz",
	"1917",
	"http://localhost:8000/stationen/#1917-kriegseinsatz-in-frankreich"
);
square[22] = new Square("Ereignisfeld", "FOLGE DEN ANWEISUNGEN DER KARTE", "#FFFFFF");
square[23] = new Square(
	"Handforth Camp ⭐",
	"€220",
	"#FF0000",
	220, 7, 18, 90, 250, 700, 875, 1050,
	"Technische Leitung des Kriegsgefangenen-Theaters in England",
	"1917 bis 1919",
	"http://localhost:8000/stationen/#1917-1919-handforth-camp-theatre"
);
square[24] = new Square(
	"Kleines Theater Berlin",
	"€240",
	"#FF0000",
	240, 7, 20, 100, 300, 750, 925, 1100,
	"Direktor Dr. George Altman",
	"1920 bis 1921",
	"http://localhost:8000/stationen/#1920-1921-kleines-theater-berlin"
);
square[25] = new Square("Überland-\nbahnen", "€200", "#FFFFFF", 200, 1);
square[26] = new Square(
	"Rotter-Bühnen Berlin",
	"€260",
	"#FFFF00",
	260, 8, 22, 110, 330, 800, 975, 1150,
	"Metropoltheater, Residenztheater, Trianontheater, Kleines Theater und Lessingtheater.",
	"1921 bis 1925",
	"http://localhost:8000/stationen/#1921-1925-rotter-buhnen-berlin"
);
square[27] = new Square(
	"Barnowsky-Bühnen Berlin",
	"€260",
	"#FFFF00",
	260, 8, 22, 110, 330, 800, 975, 1150,
	"Komödienhaus, Theater in der Saarlandstraße unter der Direktion Barnowsky",
	"1926 bis 1927",
	"http://localhost:8000/stationen/#1926-1927-barnowsky-buhnen-berlin",
);
square[28] = new Square(
	"Wasserwerk",
	"€150",
	"#FFFFFF",
	150, 2,
);
square[29] = new Square(
	"Piscatorbühnen ⭐",
	"€280",
	"#FFFF00",
	280, 8, 24, 120, 360, 850, 1025, 1200,
	"Theater am Nollendorffplatz und Lessing-Theater, Berlin unter der Direktion Erwin Piskator",
	"1927 bis 1928",
	"http://localhost:8000/stationen/#1927-1928-piscatorbuhnen"
);
square[30] = new Square("Gehe ins Gefängnis", "Gehe direkt ins Gefängnis. Du gehtst dabei nicht über LOS und bekommst auch kein Geld.", "#FFFFFF");
square[31] = new Square(
	"Hessisches Landestheater Darmstadt ⭐",
	"€300",
	"#008000",
	300, 9, 26, 130, 390, 900, 1100, 1275,
	"Unter der Intendanz Prof. Carl Ebert (1929 bis 1931), Hartung (1931 bis 1933) und Franz Ehwert (1933 bis 1936)",
	"1929 bis 1936",
	"http://localhost:8000/stationen/#1929-1936-hessisches-landestheater-darmstadt",
);
square[32] = new Square(
	"Städtische Bühnen Düsseldorf",
	"€300",
	"#008000",
	300, 9, 26, 130, 390, 900, 1100, 1275,
	"Unter der Intendanz Bruno Jltz (1936 bis 1937) und Otto Krauss (1937 bis 1939)",
	"1936 bis 1939",
	"http://localhost:8000/stationen/#1939-1944-theater-des-volkes"
);
square[33] = new Square("Gemeinschaftsfeld", "FOLGE DEN ANWEISUNGEN DER KARTE", "#FFFFFF");
square[34] = new Square(
	"Theater des Volkes ⭐",
	"€320",
	"#008000",
	320, 9, 28, 150, 450, 1000, 1200, 1400,
	"Unter der Intendanz von Rudolf Zindler",
	"1939 bis 1944",
	"http://localhost:8000/stationen/#1939-1944-theater-des-volkes"
);
square[35] = new Square(
	"Anhalter Bahnhof",
	"€200",
	"#FFFFFF",
	200, 1,
);
square[36] = new Square("Ereignisfeld", "FOLGE DEN ANWEISUNGEN DER KARTE", "#FFFFFF");
square[37] = new Square(
	"Schlosspark-Theater Berlin ⭐",
	"€350",
	"#0000FF",
	350, 10, 35, 175, 500, 1100, 1300, 1500,
	"Intendant Boleslaw Barlog",
	"1945 bis 1959",
	"http://localhost:8000/stationen/#1945-1959-schlosspark-theater-berlin"
);
square[38] = new Square("Zusatzsteuer", "Zahle €100", "#FFFFFF");
square[39] = new Square(
	"Berlin",
	"€400",
	"#0000FF",
	400, 10, 50, 200, 600, 1400, 1700, 2000,
	"Julius Richter stirbt 4. Juni 1965 in Berlin.",
	"1965",
	"http://localhost:8000/stationen/#4-juni-1965"
);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("Freiheitskarte. Kostenlos aus dem Gefängnis. Diese Karte kann auch verkauft werden.", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("Du hast €10 au der Staße gefunden.", function() { addamount(10, 'Community Chest');});
communityChestCards[2] = new Card("Du hast mit dem Verkauf von Restmaterial €50 verdient.", function() { addamount(50, 'Community Chest');});
communityChestCards[3] = new Card("Du hast ein paar Skizzen von dir verkauft und erhälst 100€.", function() { addamount(100, 'Community Chest');});
communityChestCards[4] = new Card("Du bekommst 20€ vom Steueramt zurück	.", function() { addamount(20, 'Community Chest');});
communityChestCards[5] = new Card("Weihnachtsgeld! 100€.", function() { addamount(100, 'Community Chest');});
communityChestCards[6] = new Card("Deine frühere Schauspiellehrerin vererbt dir €100.", function() { addamount(100, 'Community Chest');});
communityChestCards[7] = new Card("Du bekommst 25€ für deine Beratungstätigkeiten.", function() { addamount(25, 'Community Chest');});
communityChestCards[8] = new Card("Krankenkassenrechnung über €100.", function() { subtractamount(100, 'Community Chest');});
communityChestCards[9] = new Card("Du hast den Bühnenbildpreis von Nachtkritik.de dotiert mit €200 gewonnen.", function() { addamount(200, 'Community Chest');});
communityChestCards[10] = new Card("Du hast das Produktionsbudget überzogen, €50.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[11] = new Card("Doctor's fee. Pay €50.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[12] = new Card("It is your birthday. Collect €10 from every player.", function() { collectfromeachplayer(10, 'Community Chest');});
communityChestCards[13] = new Card("Gehe zu \"LOS\" und bekomme 200€.", function() { advance(0);});
communityChestCards[14] = new Card("Du musst die Straßen vor deinen Gebäuden reparieren. €40 pro Haus, €115 pro Hotel.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Gehe direkt ins Gefängnis. Du gehtst dabei nicht über LOS und bekommst auch kein Geld.", function() { gotojail();});


chanceCards[0] = new Card("Freiheitskarte. Kostenlos aus dem Gefängnis. Diese Karte kann auch verkauft werden.", function(p) { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("Es ist an der Zeit, deine Gebäude zu renovieren. Zahle pro 25€ pro Haus und 100€ pro Hotel.", function() { streetrepairs(25, 100);});
chanceCards[2] = new Card("Park €15.", function() { subtractamount(15, 'Chance');});
chanceCards[3] = new Card("You have been elected chairman of the board. Pay each player €50.", function() { payeachplayer(50, 'Chance');});
chanceCards[4] = new Card("Go back three spaces.", function() { gobackthreespaces();});
chanceCards[5] = new Card("ADVANCE TO THE NEAREST UTILITY. IF UNOWNED, you may buy it from the Bank. IF OWNED, throw dice and pay owner a total ten times the amount thrown.", function() { advanceToNearestUtility();});
chanceCards[6] = new Card("Bank pays you dividend of €50.", function() { addamount(50, 'Chance');});
chanceCards[7] = new Card("ADVANCE TO THE NEAREST RAILROAD. If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", function() { advanceToNearestRailroad();});
chanceCards[8] = new Card("Pay poor tax of €15.", function() { subtractamount(15, 'Chance');});
chanceCards[9] = new Card("Take a trip to Reading Rail Road. If you pass \"GO\" collect €200.", function() { advance(5);});
chanceCards[10] = new Card("ADVANCE to Boardwalk.", function() { advance(39);});
chanceCards[11] = new Card("ADVANCE to Illinois Avenue. If you pass \"GO\" collect €200.", function() { advance(24);});
chanceCards[12] = new Card("Your building loan matures. Collect €150.", function() { addamount(150, 'Chance');});
chanceCards[13] = new Card("ADVANCE TO THE NEAREST RAILROAD. If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", function() { advanceToNearestRailroad();});
chanceCards[14] = new Card("ADVANCE to St. Charles Place. If you pass \"GO\" collect €200.", function() { advance(11);});
chanceCards[15] = new Card("Go to Jail. Go Directly to Jail. Do not pass \"GO\". Do not collect €200.", function() { gotojail();});
