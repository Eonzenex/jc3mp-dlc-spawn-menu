;(function($, document, window, undefined) {
    $(function() {

        // testing compact / extended mode
        $('#toggle-compact').click(function() {
            $('#vehicle-menu').toggleClass('compact').toggleClass('extended');
            return false;
        });

        let vehicles = [
            /*
			//Land Starts Here
			//Sport Cars Start Here
			//Sport Cars Start Here*/
			{
                "name": "THE ROCKET",
                "model_name": "v0866_car_na_ladbil_civilian_01",
                "hash": 1999738350,
                "type": "land",
                "class": "sports",
                "dlc": null
            },
			{
                "name": "WINDHUND 4",
                "model_name": "v0003_car_autostraad_racinghothatch_civilian_01",
                "hash": 1222118188,
                "type": "land",
                "class": "sports",
                "dlc": null
            },
			{
                "name": "MUGELLO RAFFINATI VITESSE",
                "model_name": "v0400_car_mugello_vintagesports_civilian_01",
                "hash": 3203194893,
                "type": "land",
                "class": "sports",
                "dlc": null
            },
			{
                "name": "MUGELLO QUIPOZZA F",
                "model_name": "v0402_car_mugello_vintagesuper_civilian_01",
                "hash": 4286768685,
                "type": "land",
                "class": "sports",
                "dlc": null
            },
			{
                "name": "KERNER SERPENTE R",
                "model_name": "v0300_car_kensington_sportsmuscle_civilian_01",
                "hash": 3535039305,
                "type": "land",
                "class": "sports",
                "dlc": null
            },
			{
                "name": "MUGELLO VISTOSA",
                "model_name": "v0401_car_mugello_racingsupercar_civilian_01",
                "hash": 1192327012,
                "type": "land",
                "class": "sports",
                "dlc": null
            },
            {
                "name": "MUGELLO FARINA DUO",
                "model_name": "v0405_car_mugello_moderncircuitracer_civilian_01",
                "hash": 2336539742,
                "type": "land",
                "class": "sports",
                "dlc": null
            },
            {
                "name": "VERDELEON 3",
                "model_name": "v0403_car_mugello_modernecosuper_civilian_01",
                "hash": 4225384683,
                "type": "land",
                "class": "sports",
                "dlc": null
            },
			//Sport Cars Ends Here
			//Sport Cars Ends Here
			//Offroad Starts Here
			//Offroad Starts Here
			{
                "name": "URGA OGAR 7 V8 REBEL",
                "model_name": "v0604_car_urga_buggy_rebel_01",
                "hash": 669313043,
                "type": "land",
                "class": "offroad",
                "dlc": null
            },
			{
                "name": "URGA OGAR 7 V8 MILITARY",
                "model_name": "v0604_car_urga_buggy_military_01",
                "hash": 2913800493,
                "type": "land",
                "class": "offroad",
                "dlc": null
			},
			{
                "name": "WEIMARANER W3",
                "model_name": "v0000_car_autostraad_oldjeep_civilian_01",
                "hash": 1684130889,
                "type": "land",
                "class": "offroad",
                "dlc": null
            },
			{
                "name": "WEIMARANER W3 REBEL",
                "model_name": "v0000_car_autostraad_oldjeep_rebel_01",
                "hash": 274180142,
                "type": "land",
                "class": "offroad",
                "dlc": null
            },
			{
                "name": "WEIMARANER W3 MILITARY",
                "model_name": "v0000_car_autostraad_oldjeep_military_01",
                "hash": 1535405532,
                "type": "land",
                "class": "offroad",
                "dlc": null
            },
			{
                "name": "STRIA FACOCERO REBEL",
                "model_name": "v0504_car_solar_technicaljeep_rebel_01",
                "hash": 3145488079,
                "type": "land",
                "class": "offroad",
                "dlc": null
            },
			{
                "name": "STRIA FACOCERO MILITARY",
                "model_name": "v0504_car_solar_technicaljeep_militia_01",
                "hash": 1344393073,
                "type": "land",
                "class": "offroad",
                "dlc": null
            },
			//Offroad Ends Here
			//Offroad Ends Here
			//Heavy Starts Here
			//Heavy Starts Here
			{
                "name": "STRIA RUSTICO",
                "model_name": "v0506_car_solar_oldtractor_civilian_01",
                "hash": 943568602,
                "type": "land",
                "class": "heavy",
                "dlc": null
            },
			{
                "name": "STRIA SWITZO",
                "model_name": "v0501_car_solar_smallvan_commercial_01",
                "hash": 1642334787,
                "type": "land",
                "class": "heavy",
                "dlc": null
            },
			{
                "name": "STRIA SWITZO AMBULANCE",
                "model_name": "v0501_car_solar_smallvan_civic_ambulance_01",
                "hash": 2030470101,
                "type": "land",
                "class": "heavy",
                "dlc": null
            },
			{
                "name": "PROPAGANDA VAN",
                "model_name": "v0501_car_solar_smallvan_propaganda_01",
                "hash": 3174928626,
                "type": "land",
                "class": "heavy",
                "dlc": null
            },
			{
                "name": "STADT TRESOR ST 8530",
                "model_name": "v0001_car_autostraad_armoredtruck_commercial_01",
                "hash": 484034449,
                "type": "land",
                "class": "heavy",
                "dlc": null
            },
			{
                "name": "URGA SZTURM 63A REBEL",
                "model_name": "v0600_car_urga_armoredjeep_rebel_01",
                "hash": 2020191645,
                "type": "land",
                "class": "heavy",
                "dlc": null
            },
            {
                "name": "URGA SZTURM 63A MILITARY",
                "model_name": "v0600_car_urga_armoredjeep_military_01",
                "hash": 2713830733,
                "type": "land",
                "class": "heavy",
                "dlc": null
            },
			{
                "name": "STRIA OBRERO",
                "model_name": "v0505_car_solar_oldtruck_commercial_01",
                "hash": 2627875542,
                "type": "land",
                "class": "heavy",
                "dlc": null
			},
			{
                "name": "STRIA OBRERO BARRELS",
                "model_name": "v0505_car_solar_oldtruck_commercial_cargo_barrel",
                "hash": 0x43043322,
                "type": "land",
                "class": "heavy",
                "dlc": null
			},
			{
                "name": "STRIA OBRERO WINE BARRELS",
                "model_name": "v0505_car_solar_oldtruck_commercial_cargo_wine",
                "hash": 0x72C843E5,
                "type": "land",
                "class": "heavy",
                "dlc": null
			},
			{
                "name": "STRIA OBRERO RANDOM",
                "model_name": "v0505_car_solar_oldtruck_commercial_cargo_random",
                "hash": 0x418A36A2,
                "type": "land",
                "class": "heavy",
                "dlc": null
			},
			{
                "name": "STRIA OBRERO EMP",
                "model_name": "v0505_car_solar_oldtruck_rebel_emp_01",
                "hash": 0x8DB779BA,
                "type": "land",
                "class": "heavy",
                "dlc": null
			},
			{
                "name": "STRIA OBRERO REBEL",
                "model_name": "v0505_car_solar_oldtruck_rebel_01",
                "hash": 3910701466,
                "type": "land",
                "class": "heavy",
                "dlc": null
            },
			{
                "name": "STRIA OBRERO MILITARY",
                "model_name": "v0505_car_solar_oldtruck_military_01",
                "hash": 3874188721,
                "type": "land",
                "class": "heavy",
                "dlc": null
            },
			{
                "name": "URGA FURA 570 REBEL",
                "model_name": "v0602_car_urga_armoredtransport_rebel_01",
                "hash": 2079723022,
                "type": "land",
                "class": "heavy",
                "dlc": null
            },
            {
                "name": "URGA FURA 570 MILITARY",
                "model_name": "v0602_car_urga_armoredtransport_military_01",
                "hash": 2781420465,
                "type": "land",
                "class": "heavy",
                "dlc": null
            },
			{
                "name": "STRIA CAMPANIA 115",
                "model_name": "v0507_car_solar_oldbus_commercial_01",
                "hash": 709014260,
                "type": "land",
                "class": "heavy",
                "dlc": null
            },
			{
                "name": "CITISPEED ECO 75",
                "model_name": "v0006_car_autostraad_modernbus_commercial_01",
                "hash": 719430386,
                "type": "land",
                "class": "heavy",
                "dlc": null
            },
			{
                "name": "AUTOSTRAAD REISENDER 7",
                "model_name": "v0011_car_autostraad_articulatedtruck_commercial_01",
                "hash": 4200435076,
                "type": "land",
                "class": "heavy",
                "dlc": null
            },
			{
                "name": "INCENDIARIO MONSTER TRUCK",
                "model_name": "v0803_car_na_monstertruck_civilian_01",
                "hash": 4129388734,
                "type": "land",
                "class": "heavy",
                "dlc": null
            },
			{
                "name": "NASHORN 6100",
                "model_name": "v0005_car_autostraad_minetruck_commercial_01",
                "hash": 776016794,
                "type": "land",
                "class": "heavy",
                "dlc": null
            },
			//Heavy Ends Here
			//Heavy Ends Here
			//Modern Starts Here
			//Modern Starts Here
			{
                "name": "STRIA GIOCO",
                "model_name": "v0509_car_solar_modernmini_civilian_01",
                "hash": 2455749603,
                "type": "land",
                "class": "modern",
                "dlc": null
            },
			{
                "name": "STRIA GHEPARDO 3S",
                "model_name": "v0510_car_solar_modernroadster_civilian_01",
                "hash": 160481253,
                "type": "land",
                "class": "modern",
                "dlc": null
            },
			{
                "name": "STRIA KAVALA",
                "model_name": "v0503_car_solar_modernsuv_civilian_01",
                "hash": 2662510920,
                "type": "land",
                "class": "modern",
                "dlc": null
            },
			{
                "name": "STRIA JOIA",
                "model_name": "v0502_car_solar_modernsedan_civic_police_01",
                "hash": 4044104901,
                "type": "land",
                "class": "modern",
                "dlc": null
            },
			{
                "name": "AUTOSTRAAD D700",
                "model_name": "v0008_car_autostraad_modernsportssaloon_civilian_01",
                "hash": 1683768425,
                "type": "land",
                "class": "modern",
                "dlc": null
            },
			{
                "name": "STRIA TORO",
                "model_name": "v0514_car_solar_modernpickup_civilian_01",
                "hash": 1733269748,
                "type": "land",
                "class": "modern",
                "dlc": null
            },
			{
                "name": "AUTOSTRAAD D90",
                "model_name": "v0009_car_autostraad_modernsaloon_civilian_01",
                "hash": 3843099743,
                "type": "land",
                "class": "modern",
                "dlc": null
            },
			{
                "name": "'13 VIGUEUR",
                "model_name": "v0305_car_kensington_moderngrandtourer_civilian_01",
                "hash": 3080666513,
                "type": "land",
                "class": "modern",
                "dlc": null
            },
			{
                "name": "'05 CHARMANT",
                "model_name": "v0302_car_kensington_modernlimo_civilian_01",
                "hash": 911076462,
                "type": "land",
                "class": "modern",
                "dlc": null
            },
			//Modern Ends Here
			//Modern Ends Here
			//Old Starts Here
			//Old Starts Here
			{
                "name": "STRIA CUCCIOLA",
                "model_name": "v0500_car_solar_oldmini_civilian_01",
                "hash": 857303830,
                "type": "land",
                "class": "old",
                "dlc": null
            },
			{
                "name": "STRIA CARERA STANDARD",
                "model_name": "v0512_car_solar_oldtwodoorhatch_civilian_01",
                "hash": 3844689418,
                "type": "land",
                "class": "old",
                "dlc": null
            },
			{
                "name": "STRIA CARERA G",
                "model_name": "v0513_car_solar_oldfourdoorhatch_civilian_01",
                "hash": 1629307753,
                "type": "land",
                "class": "old",
                "dlc": null
            },
			{
                "name": "STRIA INFIMO S",
                "model_name": "v0508_car_solar_oldcompact_civilian_01",
                "hash": 695483605,
                "type": "land",
                "class": "old",
                "dlc": null
            },
			{
                "name": "'63 AUTOSTRAAD WELTBUS",
                "model_name": "v0002_car_autostraad_oldcampervan_civilian_01",
                "hash": 1567828325,
                "type": "land",
                "class": "old",
                "dlc": null
            },
			/*Old Ends Here
			//Old Ends Here
			//Land Ends Here
			//Sky Starts Here
			//Planes Starts Here
			//Planes Starts Here*/
			{
                "name": "STRIA GHIBLI 3",
                "model_name": "v4500_plane_solar_smallfloatprop_civilian_01",
                "hash": 2647868720,
                "type": "sky",
                "class": "planes",
                "dlc": null
            },
            {
                "name": "URGA U17 AKROBAT",
                "model_name": "v4600_plane_urga_privatepropeller_civilian_01",
                "hash": 596249749,
                "type": "sky",
                "class": "planes",
                "dlc": null
            },
			{
                "name": "CARMEN ALBATROSS REBEL",
                "model_name": "v4800_plane_brothers_vintagefighter_rebel_01",
                "hash": 448735752,
                "type": "sky",
                "class": "planes",
                "dlc": null
            },
			{
                "name": "CS7 THUNDERHAWK REBEL",
                "model_name": "v4202_plane_capstone_fighterjet_rebel_01",
                "hash": 1350246166,
                "type": "sky",
                "class": "planes",
                "dlc": null
            },
			{
                "name": "CS7 THUNDERHAWK MILITARY",
                "model_name": "v4202_plane_capstone_fighterjet_military_01",
                "hash": 1951838228,
                "type": "sky",
                "class": "planes",
                "dlc": null
            },
			{
                "name": "U-7 DRAVEC REBEL",
                "model_name": "v4602_plane_urga_fighterbomber_rebel_01",
                "hash": 2491278791,
                "type": "sky",
                "class": "planes",
                "dlc": null
            },
			{
                "name": "U-7 DRAVEC MILITARY",
                "model_name": "v4602_plane_urga_fighterbomber_military_01",
                "hash": 1643964103,
                "type": "sky",
                "class": "planes",
                "dlc": null
            },
            {
                "name": "U41 PTAKOJESTER REBEL",
                "model_name": "v4603_plane_urga_cargotransport_rebel_01",
                "hash": 1181146141,
                "type": "sky",
                "class": "planes",
                "dlc": null
            },
			{
                "name": "U41 PTAKOJESTER MILITARY",
                "model_name": "v4603_plane_urga_cargotransport_military_01",
                "hash": 2204830311,
                "type": "sky",
                "class": "planes",
                "dlc": null
            },
			//Planes End Here
			//Planes End Here
			//Helicopters Start Here
			//Helicopters Start Here
			{
                "name": "URGA RACEK REBEL",
                "model_name": "v2603_helicopter_urga_seascout_rebel_01",
                "hash": 1632385059,
                "type": "sky",
                "class": "helicopter",
                "dlc": null
            },
			{
                "name": "URGA RACEK MILITARY",
                "model_name": "v2603_helicopter_urga_seascout_military_01",
                "hash": 788638133,
                "type": "sky",
                "class": "helicopter",
                "dlc": null
            },
			{
                "name": "EUBUS EAGLE",
                "model_name": "v2102_helicopter_eubus_utility_civilian_01",
                "hash": 1493705456,
                "type": "sky",
                "class": "helicopter",
                "dlc": null
            },
			{
                "name": "NEWS CHOPPER",
                "model_name": "v2102_helicopter_eubus_utility_commercial_news",
                "hash": 3619392854,
                "type": "sky",
                "class": "helicopter",
                "dlc": null
            },
			{
                "name": "URGA POSTOLKA REBEL",
                "model_name": "v2602_helicopter_urga_lightassault_rebel_01",
                "hash": 506564449,
                "type": "sky",
                "class": "helicopter",
                "dlc": null
            },
			{
                "name": "URGA POSTOLKA MILITARY",
                "model_name": "v2602_helicopter_urga_lightassault_military_01",
                "hash": 936369891,
                "type": "sky",
                "class": "helicopter",
                "dlc": null
            },
			{
                "name": "CS NAVAJO REBEL",
                "model_name": "v2200_helicopter_capstone_assault_rebel_01",
                "hash": 4029907821,
                "type": "sky",
                "class": "helicopter",
                "dlc": null
            },
			{
                "name": "CS NAVAJO MILITARY",
                "model_name": "v2200_helicopter_capstone_assault_military_01",
                "hash": 4145800282,
                "type": "sky",
                "class": "helicopter",
                "dlc": null
            },
			{
                "name": "CS COMET REBEL",
                "model_name": "v2201_helicopter_capstone_heavytroop_rebel_01",
                "hash": 249846758,
                "type": "sky",
                "class": "helicopter",
                "dlc": null
            },
			{
                "name": "CS COMET MILITARY",
                "model_name": "v2201_helicopter_capstone_heavytroop_military_01",
                "hash": 2671062828,
                "type": "sky",
                "class": "helicopter",
                "dlc": null
            },
            {
                "name": "URGA HROM D REBEL",
                "model_name": "v2601_helicopter_urga_heavyassault_rebel_01",
                "hash": 1955404280,
                "type": "sky",
                "class": "helicopter",
                "dlc": null
            },
            {
                "name": "URGA HROM D MILITARY",
                "model_name": "v2601_helicopter_urga_heavyassault_military_01",
                "hash": 1412710783,
                "type": "sky",
                "class": "helicopter",
                "dlc": null
            },
			{
                "name": "URGA MSTITEL REBEL",
                "model_name": "v2604_helicopter_urga_advancedassault_rebel_01",
                "hash": 3947727649,
                "type": "sky",
                "class": "helicopter",
                "dlc": null
            },
            {
                "name": "URGA MSTITEL MILITARY",
                "model_name": "v2604_helicopter_urga_advancedassault_military_01",
                "hash": 2834809898,
                "type": "sky",
                "class": "helicopter",
                "dlc": null
            },
			{
                "name": "GOLDEN URGA MSTITEL",
                "model_name": "v2604_helicopter_urga_advancedassault_signature_shielded",
                "hash": 1182346887,
                "type": "sky",
                "class": "helicopter",
                "dlc": null
            },
			/*Helicopters End Here
			//Helicopters End Here
			//Sky Ends Here
			//Sea Starts Here
			//Boats Starts Here
			//Boats Starts Here*/
			{
                "name": "RUBBER DUCKY",
                "model_name": "v1717_boat_na_duck_civilian_01",
                "hash": 3998318206,
                "type": "sea",
                "class": null,
                "dlc": null
            },
			{
                "name": "STRIA PW 220 R-GT",
                "model_name": "v1500_boat_solar_jetski_civilian_01",
                "hash": 867451438,
                "type": "sea",
                "class": null,
                "dlc": null
            },
			{
                "name": "CUSTODE 29 REBEL",
                "model_name": "v1704_boat_na_lightpatrol_rebel_01",
                "hash": 1634346906,
                "type": "sea",
                "class": null,
                "dlc": null
            },
			{
                "name": "CUSTODE 29 MILITARY",
                "model_name": "v1704_boat_na_lightpatrol_military_01",
                "hash": 3672040481,
                "type": "sea",
                "class": null,
                "dlc": null
            },
			{
                "name": "MINNOW FISHING BOAT",
                "model_name": "v1701_boat_na_smalloldfishing_civilian_01",
                "hash": 2580011165,
                "type": "sea",
                "class": null,
                "dlc": null
            },
			{
                "name": "BRISE 32",
                "model_name": "v1302_boat_kensington_sailboat_civilian_01",
                "hash": 530733049,
                "type": "sea",
                "class": null,
                "dlc": null
            },
			{
                "name": "DAME DE LA MER 99",
                "model_name": "v1300_boat_kensington_motoryacht_civilian_01",
                "hash": 3332358986,
                "type": "sea",
                "class": null,
                "dlc": null
            },
			{
                "name": "PESCESPADA SS",
                "model_name": "v1401_boat_mugello_racingboat_civilian_01",
                "hash": 1734594165,
                "type": "sea",
                "class": null,
                "dlc": null
            },
			{
                "name": "SQUALO X7",
                "model_name": "v1400_boat_mugello_spyspeedboat_civilian_01",
                "hash": 1442821020,
                "type": "sea",
                "class": null,
                "dlc": null
            },
            {
                "name": "CS POWERRUN 77 REBEL",
                "model_name": "v1200_boat_capstone_heavypatrol_rebel_01",
                "hash": 660992745,
                "type": "sea",
                "class": null,
                "dlc": null
            },
			{
                "name": "CS POWERRUN 77 MILITARY",
                "model_name": "v1200_boat_capstone_heavypatrol_military_01",
                "hash": 954310635,
                "type": "sea",
                "class": null,
                "dlc": null
            },
			{
                "name": "WHALESHARK",
                "model_name": "v1705_boat_na_mediumoldfishing_civilian_01",
                "hash": 1967374600,
                "type": "sea",
                "class": null,
                "dlc": null
            },
			{
                "name": "URGA HROCH REBEL",
                "model_name": "v1602_boat_urga_transport_rebel_01",
                "hash": 557972553,
                "type": "sea",
                "class": null,
                "dlc": null
            },
			{
                "name": "REBEL CORVETTE",
                "model_name": "v1202_boat_capstone_corvette_rebel_01",
                "hash": 2474676614,
                "type": "sea",
                "class": null,
                "dlc": null
            },
            {
                "name": "MILITARY CORVETTE",
                "model_name": "v1202_boat_capstone_corvette_military_01",
                "hash": 3794198039,
                "type": "sea",
                "class": null,
                "dlc": null
            },
			//Boats End Here
			//Boats End Here
			//Sea Ends Here
			//Misc Starts Here
			//Extra Vehicles Start Here
			//Extra Vehicles Start Here
			/*
			These are commented out because they don't spawn, as of 1.0.3
			{
                "name": "SPECIAL MODERN SALOON",
                "model_name": "v0009_car_autostraad_modernsaloon_premium_01",
                "hash": 0xEFAF7F08,
                "type": "misc",
                "class": "Extra Vehicles",
                "dlc": null
            },
			{
                "name": "SPECIAL BUGGY",
                "model_name": "v0604_car_urga_buggy_premium_01",
                "hash": 0x558E5D98,
                "type": "misc",
                "class": "Extra Vehicles",
                "dlc": null
            },
			{
                "name": "SPECIAL VISTOSA",
                "model_name": "v0401_car_mugello_racingsupercar_premium_01",
                "hash": 0x830EBDD7,
                "type": "misc",
                "class": "Extra Vehicles",
                "dlc": null
            },
			{
                "name": "SPECIAL OLD MINI",
                "model_name": "v0500_car_solar_oldmini_signature_01",
                "hash": 0xF07C91F6,
                "type": "misc",
                "class": "Extra Vehicles",
                "dlc": null
            },
			{
                "name": "SPECIAL VINTAGE SPORTS",
                "model_name": "v0400_car_mugello_vintagesports_signature_01",
                "hash": 0xC720B2E1,
                "type": "misc",
                "class": "Extra Vehicles",
                "dlc": null
            },
			{
                "name": "DLC TESTCAR - PINK FLAMINGO",
                "model_name": "v9999_car_mugello_dlctestcar_generated",
                "hash": 0x590A084A,
                "type": "misc",
                "class": "Extra Vehicles",
                "dlc": null
            },
			{
                "name": "DEBUG OLD JEEP",
                "model_name": "v0000_car_autostraad_oldjeep_debug",
                "hash": 0x3AC55AD1,
                "type": "misc",
                "class": "Extra Vehicles",
                "dlc": null
            },
			These are commented out because they don't spawn, as of 1.0.3
			*/
			//Extra Vehicles End Here
			//Extra Vehicles End Here
			//Bomb Cars Start Here
			//Bomb Cars Start Here
			{
                "name": "AUTOSTRAAD KLETTERER 300 Z80",
                "model_name": "v0012_car_autostraad_atv_civilian_01_z80",
                "hash": 510797552,
                "type": "misc",
                "class": "Bomb Cars",
                "dlc": null
            },
			{
                "name": "STRIA RUSTICO Z80",
                "model_name": "v0506_car_solar_oldtractor_civilian_z80",
                "hash": 3100982204,
                "type": "misc",
                "class": "Bomb Cars",
                "dlc": null
            },
			{
                "name": "WINDHUND 4 Z80",
                "model_name": "v0003_car_autostraad_racinghothatch_civilian_z80",
                "hash": 3406930663,
                "type": "misc",
                "class": "Bomb Cars",
                "dlc": null
            },
			{
                "name": "URGA OGAR 7 V8 MILITARY Z80",
                "model_name": "v0604_car_urga_buggy_military_z80",
                "hash": 28454791,
                "type": "misc",
                "class": "Bomb Cars",
                "dlc": null
            },
			{
                "name": "MUGELLO RAFFINATI VITESSE Z80",
                "model_name": "v0400_car_mugello_vintagesports_civilian_z80",
                "hash": 369388473,
                "type": "misc",
                "class": "Bomb Cars",
                "dlc": null
            },
			{
                "name": "MUGELLO QUIPOZZA F Z80",
                "model_name": "v0402_car_mugello_vintagesuper_civilian_z80_01",
                "hash": 7144193,
                "type": "misc",
                "class": "Bomb Cars",
                "dlc": null
            },
			{
                "name": "STRIA TORO Z80",
                "model_name": "v0514_car_solar_modernpickup_civilian_z80",
                "hash": 480691323,
                "type": "misc",
                "class": "Bomb Cars",
                "dlc": null
            },
			{
                "name": "WEIMARANER CIVILIAN Z80",
                "model_name": "v0000_car_autostraad_oldjeep_civilian_z80",
                "hash": 2887741045,
                "type": "misc",
                "class": "Bomb Cars",
                "dlc": null
            },
			{
                "name": "WEIMARANER MILITARY Z80",
                "model_name": "v0000_car_autostraad_oldjeep_military_z80",
                "hash": 0x073a12e2,
                "type": "misc",
                "class": "Bomb Cars",
                "dlc": null
            },
			{
                "name": "CAMPERVAN Z80",
                "model_name": "v0002_car_autostraad_oldcampervan_civilian_z80",
                "hash": 0x5c6ab3ea,
                "type": "misc",
                "class": "Bomb Cars",
                "dlc": null
            },
			{
                "name": "STRIA CAMPANIA 115 Z80",
                "model_name": "v0507_car_solar_oldbus_commercial_z80",
                "hash": 3760096448,
                "type": "misc",
                "class": "Bomb Cars",
                "dlc": null
            },
			{
                "name": "INCENDIARIO MONSTER TRUCK Z80",
                "model_name": "v0803_car_na_monstertruck_civilian_01_z80",
                "hash": 3678661493,
                "type": "misc",
                "class": "Bomb Cars",
                "dlc": null
            },
			//Bomb Cars End Here
			//Bomb Cars End Here
			//Tanks Start Here
			//Tanks Start Here
			{
                "name": "URGA BKOLOS 2100 REBEL",
                "model_name": "v0603_car_urga_smalltank_rebel_01",
                "hash": 4038562464,
                "type": "misc",
                "class": "tank",
                "dlc": null
            },
			{
                "name": "URGA BKOLOS 2100 MILITARY",
                "model_name": "v0603_car_urga_smalltank_military_01",
                "hash": 970032925,
                "type": "misc",
                "class": "tank",
                "dlc": null
            },
			{
                "name": "CS BALTDJUR REBEL",
                "model_name": "v0200_car_capstone_apc_rebel_01",
                "hash": 1332328959,
                "type": "misc",
                "class": "tank",
                "dlc": null
            },
			{
                "name": "CS BALTDJUR MILITARY",
                "model_name": "v0200_car_capstone_apc_military_01",
                "hash": 2631053328,
                "type": "misc",
                "class": "tank",
                "dlc": null
            },
			{
                "name": "CS ODJUR REBEL",
                "model_name": "v0201_car_capstone_mediumtank_rebel_01",
                "hash": 2758160814,
                "type": "misc",
                "class": "tank",
                "dlc": null
            },
			{
                "name": "CS ODJUR MILITARY",
                "model_name": "v0201_car_capstone_mediumtank_military_01",
                "hash": 2840535164,
                "type": "misc",
                "class": "tank",
                "dlc": null
            },
			{
                "name": "IMPERATOR BAVARIUM TANK REBEL",
                "model_name": "v0202_car_capstone_bavariumtank_rebel_01",
                "hash": 1207218883,
                "type": "misc",
                "class": "tank",
                "dlc": null
            },
			{
                "name": "IMPERATOR BAVARIUM TANK MILITARY",
                "model_name": "v0202_car_capstone_bavariumtank_military_01",
                "hash": 3735240277,
                "type": "misc",
                "class": "tank",
                "dlc": null
            },
			//Tanks Ends Here
			//Tanks Ends Here
			//Motorbikes Start Here
			//Motorbikes Start Here
			{
                "name": "'69 STRIA SUSSURRO",
                "model_name": "v3500_bike_solar_oldmoped_civilian_01",
                "hash": 1671177981,
                "type": "misc",
                "class": "motorbike",
                "dlc": null
            },
            {
                "name": "AUTOSTRAAD KLETTERER 300",
                "model_name": "v0012_car_autostraad_atv_civilian_01",
                "hash": 1863812216,
                "type": "misc",
                "class": "motorbike",
                "dlc": null
            },
			{
                "name": "CUSTOM KLETTERER 300",
                "model_name": "v0012_car_autostraad_atv_signature_01",
                "hash": 4216479759,
                "type": "misc",
                "class": "motorbike",
                "dlc": null
            },
			{
                "name": "STRIA RISATA",
                "model_name": "v3501_bike_solar_modernmoped_civilian_01",
                "hash": 2395818479,
                "type": "misc",
                "class": "motorbike",
                "dlc": null
            },
			{
                "name": "GESCHWIND V3000",
                "model_name": "v3000_bike_autostraad_trials_civilian_01",
                "hash": 2160521137,
                "type": "misc",
                "class": "motorbike",
                "dlc": null
            },
			{
                "name": "CUSTOM GESCHWIND",
                "model_name": "v3000_bike_autostraad_trials_signature_01",
                "hash": 2966292608,
                "type": "misc",
                "class": "motorbike",
                "dlc": null
            },
			{
                "name": "VINTAGE STRIA M7",
                "model_name": "v3503_bike_solar_oldroad_civilian_01",
                "hash": 3300933530,
                "type": "misc",
                "class": "motorbike",
                "dlc": null
            },
			{
                "name": "PAVOUK U-15 REBEL",
                "model_name": "v3600_bike_urga_combatdirt_rebel_01",
                "hash": 2718282527,
                "type": "misc",
                "class": "motorbike",
                "dlc": null
            },
            {
                "name": "PAVOUK U-15 MILITARY",
                "model_name": "v3600_bike_urga_combatdirt_military_01",
                "hash": 300281319,
                "type": "misc",
                "class": "motorbike",
                "dlc": null
            },
            {
                "name": "MUGELLO FURIA MS-316",
                "model_name": "v3401_bike_mugello_modernsport_civilian_01",
                "hash": 2865733197,
                "type": "misc",
                "class": "motorbike",
                "dlc": null
            },
            {
                "name": "STRIA GIOVANNI",
                "model_name": "v3502_bike_solar_modernroad_civilian_01",
                "hash": 717463248,
                "type": "misc",
                "class": "motorbike",
                "dlc": null
            },
			{
                "name": "MV402",
                "model_name": "v3402_bike_mugello_modernsuper_civilian_01",
                "hash": 3510706963,
                "type": "misc",
                "class": "motorbike",
                "dlc": null
            },
			//Motorbikes Ends Here
			//Motorbikes Ends Here
			//Misc Ends Here
			//DLC Starts Here
			//Weaponised Vehicles Start Here
			//Weaponised Vehicles Start Here
			{
				"name": "KERNER SERPENTE R WEAPONISED",
				"model_name": "v0300_car_kensington_sportsmuscle_signature_preorder",
				"hash": 0xb388732f,
				"type": "dlc",
				"class": "Weaponised",
				"dlc": 388292
			},
			{
                "name": "URGA OGAR 7 V8 WEAPONISED",
                "model_name": "v0604_car_urga_buggy_signature_preorder",
                "hash": 0x5855d9c7,
                "type": "dlc",
                "class": "Weaponised",
                "dlc": 388290
            },
			{
                "name": "PESCESPADA SS WEAPONISED",
                "model_name": "v1401_boat_mugello_racingboat_signature_preorder",
                "hash": 0xc9122dc8,
                "type": "dlc",
                "class": "Weaponised",
                "dlc": 388291
            },
			//Weaponised Vehicles Ends Here
			//Weaponised Vehicles Ends Here
			//Reaper Missile Mech Starts Here
			//Reaper Missile Mech Starts Here
			{
                "name": "REAPER MISSILE MECH",
                "model_name": "v0806_car_na_sportmech",
                "hash": 0x5B44FF6B,
                "type": "dlc",
                "class": "Sports Mech",
                "dlc": 442052
            },
			//Reaper Missile Mech Ends Here
			//Reaper Missile Mech Ends Here
			//Mech Starts Here
			//Mech Starts Here
			{
                "name": "CIVILIAN MECH",
                "model_name": "v0805_car_na_mech_civilian",
                "hash": 580295852,
                "type": "dlc",
                "class": "Land DLC",
                "dlc": 400490
            },
			{
                "name": "BLACKHAND AUTOCANNON MECH",
                "model_name": "v0805_car_na_mech_cannon",
                "hash": 634092196,
                "type": "dlc",
                "class": "Land DLC",
                "dlc": 400490
            },
			{
                "name": "REBEL AUTOCANNON MECH",
                "model_name": "v0805_car_na_mech_rebel_cannon",
                "hash": 4270166538,
                "type": "dlc",
                "class": "Land DLC",
                "dlc": 400490
            },
			{
                "name": "BLACKHAND SPLITTER MECH",
                "model_name": "v0805_car_na_mech_minigun",
                "hash": 0xdb36b162,
                "type": "dlc",
                "class": "Land DLC",
                "dlc": 400490
            },
			{
                "name": "REBEL SPLITTER MECH",
                "model_name": "v0805_car_na_mech_rebel_minigun",
                "hash": 3677794658,
                "type": "dlc",
                "class": "Land DLC",
                "dlc": 400490
            },
			{
                "name": "PAVOUK U-15 BLACKHAND",
                "model_name": "v3600_bike_urga_combatdirt_blackhand_01",
                "hash": 2235620315,
                "type": "dlc",
                "class": "Land DLC",
                "dlc": 400490
            },
			{
                "name": "WEIMARANER PRISONER",
                "model_name": "v0000_car_autostraad_oldjeep_prisoner_01",
                "hash": 1304657539,
                "type": "dlc",
                "class": "Land DLC",
                "dlc": 400490
            },
			{
                "name": "WEIMARANER BLACKHAND",
                "model_name": "v0000_car_autostraad_oldjeep_blackhand_01",
                "hash": 2804044667,
                "type": "dlc",
                "class": "Land DLC",
                "dlc": 400490
            },
			{
                "name": "URGA SZTURM 63A BLACKHAND",
                "model_name": "v0600_car_urga_armoredjeep_blackhand_01",
                "hash": 3777100791,
                "type": "dlc",
                "class": "Land DLC",
                "dlc": 400490
            },
			{
                "name": "CS ODJUR BLACKHAND",
                "model_name": "v0201_car_capstone_mediumtank_blackhand_01",
                "hash": 3447816560,
                "type": "dlc",
                "class": "Land DLC",
                "dlc": 400490
            },
			{
                "name": "STRIA CAMPANIA 115 BLACKHAND",
                "model_name": "v0507_car_solar_oldbus_blackhand_01",
                "hash": 0x5bc45410,
                "type": "dlc",
                "class": "Land DLC",
                "dlc": 400490
            },
			{
                "name": "CUSTODE 29 BLACKHAND",
                "model_name": "v1704_boat_na_lightpatrol_blackhand_01",
                "hash": 0x643bb60d,
                "type": "dlc",
                "class": "Land DLC",
                "dlc": 400490
			},
			{
                "name": "CS POWERRUN 77 BLACKHAND",
                "model_name": "v1200_boat_capstone_heavypatrol_blackhand_01",
                "hash": 0x8ad5f671,
                "type": "dlc",
                "class": "Land DLC",
                "dlc": 400490
            },
			{
                "name": "URGA HROCH BLACKHAND",
                "model_name": "v1602_boat_urga_transport_blackhand_01",
                "hash": 0x4a92eb05,
                "type": "dlc",
                "class": "Land DLC",
                "dlc": 400490
			},
			{
                "name": "CORVETTE BLACKHAND",
                "model_name": "v1202_boat_capstone_corvette_blackhand_01",
                "hash": 0x9d01cebf,
                "type": "dlc",
                "class": "Land DLC",
                "dlc": 400490
            },
			{
                "name": "URGA POSTOLKA BLACKHAND",
                "model_name": "v2602_helicopter_urga_lightassault_blackhand_01",
                "hash": 0xcf58993a,
                "type": "dlc",
                "class": "Land DLC",
                "dlc": 400490
			},
			{
                "name": "CS NAVAJO BLACKHAND",
                "model_name": "v2200_helicopter_capstone_assault_blackhand_01",
                "hash": 0xf5aa8c7d,
                "type": "dlc",
                "class": "Land DLC",
                "dlc": 400490
			},
			{
                "name": "U41 PTAKOJESTER BLACKHAND",
                "model_name": "v4603_plane_urga_cargotransport_blackhand_01",
                "hash": 0xc9d2d5ef,
                "type": "dlc",
                "class": "Land DLC",
                "dlc": 400490
			},
			//Mech Ends Here
			//Mech Ends Here
			//Sea Heist Starts Here
			//Sea Heist Starts Here
			{
                "name": "LOOCHADOR (ROCKET BOAT)",
                "model_name": "v1706_boat_na_rocketboat_01",
                "hash": 0x3bac432f,
                "type": "dlc",
                "class": "Sea DLC",
                "dlc": 442051
			},
			{
                "name": "UNARMED LOOCHADOR (ROCKET BOAT)",
                "model_name": "v1706_boat_na_rocketboat_unarmed",
                "hash": 0xE0D10CF2,
                "type": "dlc",
                "class": "Sea DLC",
                "dlc": 442051
			},
			{
                "name": "WEIMARANER BLACKHAND",
                "model_name": "v0000_car_autostraad_oldjeep_blackhand_01",
                "hash": 0xa722537b,
                "type": "dlc",
                "class": "Sea DLC",
                "dlc": 442051
			},
			{
                "name": "URGA SZTURM 63A BLACKHAND",
                "model_name": "v0600_car_urga_armoredjeep_blackhand_01",
                "hash": 0xe121fbf7,
                "type": "dlc",
                "class": "Sea DLC",
                "dlc": 442051
			},
			{
                "name": "CUSTODE 29 BLACKHAND",
                "model_name": "v1704_boat_na_lightpatrol_blackhand_01",
                "hash": 0x643bb60d,
                "type": "dlc",
                "class": "Sea DLC",
                "dlc": 442051
			},
			{
                "name": "CS POWERRUN 77 BLACKHAND",
                "model_name": "v1200_boat_capstone_heavypatrol_blackhand_01",
                "hash": 0x8ad5f671,
                "type": "dlc",
                "class": "Sea DLC",
                "dlc": 442051
			},
			{
                "name": "URGA HROCH BLACKHAND",
                "model_name": "v1602_boat_urga_transport_blackhand_01",
                "hash": 0x4a92eb05,
                "type": "dlc",
                "class": "Sea DLC",
                "dlc": 442051
			},
			{
                "name": "CORVETTE BLACKHAND",
                "model_name": "v1202_boat_capstone_corvette_blackhand_01",
                "hash": 0x9d01cebf,
                "type": "dlc",
                "class": "Sea DLC",
                "dlc": 442051
			},
			{
                "name": "CS NAVAJO BLACKHAND",
                "model_name": "v2200_helicopter_capstone_assault_blackhand_01",
                "hash": 0xf5aa8c7d,
                "type": "dlc",
                "class": "Sea DLC",
                "dlc": 442051
			},
			{
                "name": "URGA HROM D REBEL",
                "model_name": "v2601_helicopter_urga_heavyassault_rebel_02",
                "hash": 0x99b3975e,
                "type": "dlc",
                "class": "Sea DLC",
                "dlc": 442051
			},
			{
                "name": "URGA U17 AKROBAT",
                "model_name": "v4600_plane_urga_privatepropeller_civilian_02",
                "hash": 0xdc35ca34,
                "type": "dlc",
                "class": "Sea DLC",
                "dlc": 442051
			},
			{
                "name": "U41 PTAKOJESTER BLACKHAND",
                "model_name": "v4603_plane_urga_cargotransport_blackhand_01",
                "hash": 0xc9d2d5ef,
                "type": "dlc",
                "class": "Sea DLC",
                "dlc": 442051
			},
			//Sea Heist Ends Here
			//Sea Heist Ends Here
			//Sky Fortress Starts Here
			//Sky Fortress Starts Here
			//Sky Fortress Ends Here
			//Sky Fortress Ends Here
			//DLC Ends Here
        ];

        var weapons = [
			//Pistols Start Here
			//Pistols Start Here
			{
            	"name": "U-55S Pozhar",
            	"model_name": "w011_pistol_u_pozhar_98",
            	"hash": 0xf0d3387a,
            	"class": "pistols",
            	"dlc": null
            },
            {
                "name": "CS44 Peacebringer",
            	"model_name": "w021_handgun_peacekeeper",
            	"hash": 2144721124,
            	"class": "pistols",
            	"dlc": null
            },
            {
            	"name": "CS Spectre Mark V",
            	"model_name": "w012_pistol_cs_spectre_mark_v",
            	"hash": 0xeb1944c9,
            	"class": "pistols",
            	"dlc": null
            },
            {
            	"name": "The Little General",
            	"model_name": "w014_handgun_little_general",
            	"hash": 0xc50781e6,
            	"class": "pistols",
            	"dlc": null
            },
			{
            	"name": "DK Pistol",
            	"model_name": "w013_pistol_balloon_head",
            	"hash": 0xc4bd763f,
            	"class": "pistols",
            	"dlc": null
            },
			//Pistols End Here
			//Pistols End Here
			//SMGs Start Here
			//SMGs Start Here
            {
            	"name": "Prizrak U4",
            	"model_name": "w031_smg_prizrak_u4",
            	"hash": 0x65ddc79a,
            	"class": "submachine_guns",
            	"dlc": null
            },
            {
            	"name": "CS Wraith 225R",
            	"model_name": "w032_smg_cs_wraith_2000",
            	"hash": 0x5544c1a,
            	"class": "submachine_guns",
            	"dlc": null
            },
            {
            	"name": "CS9 PDW-K",
            	"model_name": "w033_smg_cs_9",
            	"hash": 0x9346a13a,
            	"class": "submachine_guns",
            	"dlc": null
            },
			//SMGs End Here
			//SMGs End Here
			//Assault Rifles Start Here
			//Assault Rifles Start Here
			{
            	"name": "U-39 Plechovka",
            	"model_name": "w111_assault_rifle_up_39",
            	"hash": 0x898c930f,
            	"class": "assault_rifles",
            	"dlc": null
            },
			{
            	"name": "CS Predator",
            	"model_name": "w112_assault_rifle_cs_predator",
            	"hash": 0x9c3bb243,
            	"class": "assault_rifles",
            	"dlc": null
            },
            {
            	"name": "CS27 Misfortune",
            	"model_name": "w117_assault_rifle_csv",
            	"hash": 0x5320785c,
            	"class": "assault_rifles",
            	"dlc": null
            },
            {
            	"name": "UPM61",
            	"model_name": "w118_assault_rifle_up_61",
            	"hash": 0xdb6ddf82,
            	"class": "assault_rifles",
            	"dlc": null
            },
			//Assault Rifles End Here
			//Assault Rifles End Here
			//Shotguns Start Here
			//Shotguns Start Here
			{
            	"name": "U-24 Zabijak",
            	"model_name": "w155_shotgun_u_rys_12",
            	"hash": 0x8448d1d8,
            	"class": "shotguns",
            	"dlc": null
            },
			{
            	"name": "U-96 Kladivo",
            	"model_name": "w151_shotgun_u_rys_96",
            	"hash": 0xf3d98bdc,
            	"class": "shotguns",
            	"dlc": null
            },
            {
            	"name": "Automat U12",
            	"model_name": "w153_shotgun_automat_12",
            	"hash": 0x5c5622b7,
            	"class": "shotguns",
            	"dlc": null
            },
			//Shotguns End Here
			//Shotguns End Here
			//Sniper Rifles Start Here
			//Sniper Rifles Start Here
            {
            	"name": "CS110 Archangel",
            	"model_name": "w162_sniper_rifle_cs111_archangel",
            	"hash": 0x2352ea5,
            	"class": "sniper_rifles",
            	"dlc": null
            },
            {
            	"name": "USV 45 Sokol",
            	"model_name": "w161_sniper_rifle_u_sv_45",
            	"hash": 0xe9e19ed4,
            	"class": "sniper_rifles",
            	"dlc": null
            },
			//Sniper Rifles End Here
			//Sniper Rifles End Here
			//Heavy Weapons Start Here
			//Heavy Weapons Start Here
            {
            	"name": "Urga Vdova 89",
            	"model_name": "w131_machine_gun_urga_vdova_89",
            	"hash": 0xcb75ff26,
            	"class": "heavy_weapons",
            	"dlc": null
            },
			//Heavy Weapons End Here
			//Heavy Weapons End Here
			//Rocket Launchers Start Here
			//Rocket Launchers Start Here
			{
            	"name": "CS Negotiator",
            	"model_name": "w121_grenade_launcher_cs_bildt_negotiator",
            	"hash": 0x79bcea20,
            	"class": "rocket_launchers",
            	"dlc": null
            },
            {
            	"name": "Urga Stupka-210",
            	"model_name": "w176_stupka_210",
            	"hash": 0x55dc0e15,
            	"class": "rocket_launchers",
            	"dlc": null
            },
            {
            	"name": "UVK-13",
            	"model_name": "w141_rpg_uvk_13",
            	"hash": 0xe9499532,
            	"class": "rocket_launchers",
            	"dlc": null
            },
            {
            	"name": "UVK-13 (MM110)",
            	"model_name": "w141_rpg_uvk_13_mm110",
            	"hash": 0xa24bd342,
            	"class": "rocket_launchers",
            	"dlc": null
            },
			{
            	"name": "UPU 210",
            	"model_name": "w123_grenade_launcher_upu_210",
            	"hash": 0xe00f0b63,
            	"class": "rocket_launchers",
            	"dlc": null
            },
			{
            	"name": "Fire Leach",
            	"model_name": "w143_rpg_fire_leach",
            	"hash": 0x4100a5d,
            	"class": "rocket_launchers",
            	"dlc": null
            },
			{
            	"name": "Capstone Hydra",
            	"model_name": "w144_rpg_capstone_hydra",
            	"hash": 0xb7090d07,
            	"class": "rocket_launchers",
            	"dlc": null
            },
			//Rocket Launchers Ends Here
			//Rocket Launchers Ends Here
			//Special Start Here
			//Special Start Here
			{
            	"name": "C4",
            	"model_name": "w401_explosives_c4",
            	"hash": 0x06fd4e2a,
            	"class": "special",
            	"dlc": null
            },
			{
            	"name": "The Thunderbird (EMP)",
            	"model_name": "w702_emp",
            	"hash": 0x71e379ee,
            	"class": "special",
            	"dlc": null
            },
			{
            	"name": "GuitaRPG",
            	"model_name": "w147_rpg_guitar_case",
            	"hash": 0xbe34dffc,
            	"class": "special",
            	"dlc": null
            },
			{
            	"name": "M488",
            	"model_name": "w704_m488",
            	"hash": 0x3f7731aa,
            	"class": "special",
            	"dlc": null
            },
			//Special Ends Here
			//Special Ends Here
			//Weapon DLC Start Here
			//Weapon DLC Start Here
			{
            	"name": "Final Argument",
            	"model_name": "w163_sniper_rifle_final_argument",
            	"hash": 0xe6f5c896,
            	"class": "sniper_rifles",
            	"dlc": 488293
            },
			{
            	"name": "Capstone Bloodhound",
            	"model_name": "w142_rpg_capstone_bloodhound",
            	"hash": 0xafafb019,
            	"class": "rocket_launchers",
            	"dlc": 388294
            },
			{
            	"name": "Kousava Rifle",
            	"model_name": "w901_scorpiongun",
            	"hash": 0x5658b7ab,
            	"class": "heavy_weapons",
            	"dlc": 442050
            },
			//Weapon DLC Ends Here
			//Weapon DLC Ends Here
			//Sky Fortress Starts Here
			//Sky Fortress Starts Here
			{
            	"name": "[SKY] Bavarium Splitter",
            	"model_name": "w119_molten_bavarium_spitter",
            	"hash": 0xa99dfdca,
            	"class": "assault_rifles",
            	"dlc": 400551
            },
			//Sky Fortress Ends Here
			//Sky Fortress Ends Here
			//Mech Starts Here
			//Mech Starts Here
			{
            	"name": "[LAND] Bavarium Splitter",
            	"model_name": "w119_molten_bavarium_spitter",
            	"hash": 0xa99dfdca,
            	"class": "assault_rifles",
            	"dlc": 400490
            },
			{
            	"name": "[LAND] Powercore",
            	"model_name": "w210_powercore",
            	"hash": 0x6A812C99,
            	"class": "special",
            	"dlc": 400490
            },
			{
            	"name": "[LAND] Powercore Infinite Ammo",
            	"model_name": "w210_powercore_infinite_ammo",
            	"hash": 0xdf07fc7d,
            	"class": "special",
            	"dlc": 400490
            },
			//Mech Ends Here
			//Mech Ends Here
			//Sea Heist Starts Here
			//Sea Heist Starts Here
			{
            	"name": "[SEA] eDEN Spark",
            	"model_name": "w180_lightning_gun",
            	"hash": 0xc1aa311f,
            	"class": "special",
            	"dlc": 442051
            },
			//Sea Heist Ends Here
			//Sea Heist Ends Here
			//Bullet Vehicle Weapons Starts Here
			//Bullet Vehicle Weapons Starts Here
			{
            	"name": "Buggy Machine Gun",
            	"model_name": "w619_buggy_mgun",
            	"hash": 0x552D6EF2,
            	"class": "Bullet Vehicle Weapons",
            	"dlc": null
            },
			{
            	"name": "Racing Boat Machine Gun",
            	"model_name": "w620_racingboat_mgun",
            	"hash": 0x7864C677,
            	"class": "Bullet Vehicle Weapons",
            	"dlc": null
            },
			/*
			{
            	"name": "Medium Tank Machine Gun",
            	"model_name": "w603_mediumtank_mgun",
            	"hash": 0x1DF2A3D2,
            	"class": "Bullet Vehicle Weapons",
            	"dlc": null
            },
			{
            	"name": "Helicopter Machine Gun",
            	"model_name": "w604_helicopter_mgun",
            	"hash": 0xA6CF06A4,
            	"class": "Bullet Vehicle Weapons",
            	"dlc": null
            },
			*/
			{
            	"name": "Fighterjet Machine Gun",
            	"model_name": "w610_fighterjet_mgun",
            	"hash": 0x626C3991,
            	"class": "Bullet Vehicle Weapons",
            	"dlc": null
            },
			{
            	"name": "Vintagefighter Machine Gun",
            	"model_name": "w617_vintagefighter_mgun",
            	"hash": 0x2C76D0E8,
            	"class": "Bullet Vehicle Weapons",
            	"dlc": null
            },
			{
            	"name": "Advanced Helicopter Machine Gun",
            	"model_name": "w622_advancedhelicopter_mgun",
            	"hash": 0xBA39D425,
            	"class": "Bullet Vehicle Weapons",
            	"dlc": null
            },
			//Bullet Vehicle Weapons Ends Here
			//Bullet Vehicle Weapons Ends Here
			//Explosive Vehicle Weapons Starts Here
			//Explosive Vehicle Weapons Starts Here
			/*
			{
            	"name": "Small Tank Cannon",
            	"model_name": "w605_smalltank_canon",
            	"hash": 0x0936800B,
            	"class": "Explosive Vehicle Weapons",
            	"dlc": null
            },
			{
            	"name": "Medium Tank Cannon",
            	"model_name": "w602_mediumtank_canon",
            	"hash": 0x3F0F4C61,
            	"class": "Explosive Vehicle Weapons",
            	"dlc": null
            },
			{
            	"name": "Helicopter Missile",
            	"model_name": "w601_helicopter_missile",
            	"hash": 0x2D5ED155,
            	"class": "Explosive Vehicle Weapons",
            	"dlc": null
            },
			*/
			{
            	"name": "Muscle Sports Car Missile",
            	"model_name": "w618_sportsmuscle_missile",
            	"hash": 0xCB1EEDEC,
            	"class": "Explosive Vehicle Weapons",
            	"dlc": null
            },
			{
            	"name": "Fighterjet Missile",
            	"model_name": "w608_fighterjet_missile",
            	"hash": 0xFD0DA5B6,
            	"class": "Explosive Vehicle Weapons",
            	"dlc": null
            },
			{
            	"name": "Fighterbomber Missile",
            	"model_name": "w611_fighterbomber_missile",
            	"hash": 0x5041E01B,
            	"class": "Explosive Vehicle Weapons",
            	"dlc": null
            },
			/*
			{
            	"name": "Heavy Helicopter Missile",
            	"model_name": "w606_heavyhelicopter_missile",
            	"hash": 0x28ABEB31,
            	"class": "Explosive Vehicle Weapons",
            	"dlc": null
            },
			*/
			{
            	"name": "Helicopter Heavy Missile",
            	"model_name": "w615_helicopter_heavy_missile",
            	"hash": 0x33925624,
            	"class": "Explosive Vehicle Weapons",
            	"dlc": null
            },
			{
            	"name": "Corvette Cannon",
            	"model_name": "w616_corvette_canon",
            	"hash": 0x8E665ECC,
            	"class": "Explosive Vehicle Weapons",
            	"dlc": null
            },
			{
            	"name": "Fighterbomber Bombs",
            	"model_name": "w613_fighterbomber_missile_ground_lockon",
            	"hash": 0x4BF42942,
            	"class": "Explosive Vehicle Weapons",
            	"dlc": null
            },
			{
            	"name": "Advanced Helicopter Missile",
            	"model_name": "w621_advancedhelicopter_missile",
            	"hash": 0xFFA5DA8C,
            	"class": "Explosive Vehicle Weapons",
            	"dlc": null
            },
			//Explosive Vehicle Weapons End Here
			//Explosive Vehicle Weapons End Here
			//Mounted Start Here
			//Mounted Start Here
			{
            	"name": "Ugra Uzhas 14.5",
            	"model_name": "w205_mounted_urga_uzhas_120",
            	"hash": 0x3DF113E8,
            	"class": "Mounted",
            	"dlc": null
            },
			{
            	"name": "Capstone M2HM",
            	"model_name": "w206_mounted_capstone_m2hm",
            	"hash": 0x410CAE89,
            	"class": "Mounted",
            	"dlc": null
            },
			{
            	"name": "Capstone FH155 (AA Gun)",
            	"model_name": "w502_turret_aa_gun",
            	"hash": 0xCF1199F8,
            	"class": "Mounted",
            	"dlc": null
            },
			{
            	"name": "[TURRET] EMP",
            	"model_name": "w503_turret_emp",
            	"hash": 0x4993F675,
            	"class": "Mounted",
            	"dlc": null
            },
			{
            	"name": "[TURRET] M488",
            	"model_name": "w504_turret_m488",
            	"hash": 0xC3131CC4,
            	"class": "Mounted",
            	"dlc": null
            },
			{
                "name": "[SKY] eDEN Airship SAM Inverted",
                "model_name": "w504_sam_eden_fdc_inverted",
                "hash": 0xE2FB3969,
                "class": "Mounted",
                "dlc": 400551
			},
			/*
			{
                "name": "[SKY] eDEN Airship Flak Cannon",
                "model_name": "w504_sam_eden_fdc_flak",
                "hash": 0x3D7F553F,
                "class": "Mounted",
                "dlc": 400551
			},
			*/
			{
                "name": "[SKY] eDEN Heavy Control Drone",
                "model_name": "w505_sam_eden_heavycontroldrone",
                "hash": 0x20ED2B45,
                "class": "Mounted",
                "dlc": 400551
			},
			{
                "name": "[SKY] eDEN Heavy Control Boss Drone",
                "model_name": "w505_sam_eden_heavycontroldrone_boss",
                "hash": 0x55D94FED,
                "class": "Mounted",
                "dlc": 400551
			},
			{
                "name": "[SKY] eDEN Heavy Control Boss Drone No Rockets",
                "model_name": "w505_sam_eden_heavycontroldrone_norockets",
                "hash": 0xC6D225D8,
                "class": "Mounted",
                "dlc": 400551
			},
			{
                "name": "[LAND] eDEN Heavy Control Drone",
                "model_name": "w505_sam_eden_heavycontroldrone",
                "hash": 0x20ED2B45,
                "class": "Mounted",
                "dlc": 400490
			},
			{
                "name": "[LAND] Blackhand Heavy Control Drone",
                "model_name": "w506_sam_blackhand_heavycontroldrone",
                "hash": 0xCEE00F01,
                "class": "Mounted",
                "dlc": 400490
			},
			{
                "name": "[LAND] Blackhand Control Drone 01",
                "model_name": "dlc2_sam_bh_controldrone_01",
                "hash": 0x81F5209F,
                "class": "Mounted",
                "dlc": 400490
			},
			{
                "name": "[LAND] Blackhand Control Drone 02",
                "model_name": "dlc2_sam_bh_controldrone_02",
                "hash": 0xEACC319C,
                "class": "Mounted",
                "dlc": 400490
			},
			{
                "name": "[LAND] Blackhand Control Drone 03",
                "model_name": "dlc2_sam_bh_controldrone_03",
                "hash": 0xE999DA3E,
                "class": "Mounted",
                "dlc": 400490
			},
			{
                "name": "[LAND] Blackhand Control Drone 04",
                "model_name": "dlc2_sam_bh_controldrone_04",
                "hash": 0x4BA89A36,
                "class": "Mounted",
                "dlc": 400490
			},
			{
                "name": "[LAND] Blackhand Control Drone 05",
                "model_name": "dlc2_sam_bh_controldrone_05",
                "hash": 0xC6712224,
                "class": "Mounted",
                "dlc": 400490
			},
			//Mounted End Here
			//Mounted End Here
			//WIP Start Here
			//WIP Start Here
			{
            	"name": "Typhoon Gun",
            	"model_name": "w177_typhoon",
            	"hash": 0x550D799B,
            	"class": "WIP",
            	"dlc": null
            },
			{
            	"name": "Ugra Vulkan",
            	"model_name": "w201_minigun",
            	"hash": 0x98B68414,
            	"class": "WIP",
            	"dlc": null
            },
			{
            	"name": "Dionysus PLDS-H (Missile Strike)",
            	"model_name": "w701_missile_strike",
            	"hash": 0x50D0B709,
            	"class": "WIP",
            	"dlc": null
            },
			{
            	"name": "Dionysus PLDS-H (Missile Strike AI)",
            	"model_name": "w701_missile_strike_ai",
            	"hash": 0xD4C75FF7,
            	"class": "WIP",
            	"dlc": null
            },
			{
            	"name": "[LAND] Mech Magnet",
            	"model_name": "w629_mech_magnet",
            	"hash": 0x19436690,
            	"class": "WIP",
            	"dlc": 400490
            },
			{
            	"name": "[LAND] Mech Cannon",
            	"model_name": "w631_mech_cannon",
            	"hash": 0x44E441A4,
            	"class": "WIP",
            	"dlc": 400490
            },
			{
            	"name": "[LAND] Mech Bavarium Splitter",
            	"model_name": "w630_mech_mgun",
            	"hash": 0xD944FEA0,
            	"class": "WIP",
            	"dlc": 400490
            },
			//WIP End Here
			//WIP End Here
        ];
		
		
		
        let vehicle_menu = $('#vehicle-menu'),
            weapon_menu = $('#weapon-menu'),
            chat_input_state = false,
            current_visible_menu = null;

        vehicle_menu.spawnMenu({
            tabs: ['Land','Sea','Sky','Misc','DLC'],
            iconBasePath: 'icons/vehicles',
            dataCallback: function() {
                // DLC Vehicles enabled
                return vehicles.filter(vehicle => {
                    return vehicles;
                });
            },
            itemClickCallback: function(el) {
                jcmp.CallEvent('spawnmenu/ui/spawnVehicle', el.data('hash'));
            }
        });

        weapon_menu.spawnMenu({
            title: 'Weapons',
            //iconBasePath: 'icons/weapons',
            dataCallback: function() {
                return weapons;
            },
            itemClickCallback: function(el) {
                jcmp.CallEvent('spawnmenu/ui/spawnWeapon', el.data('hash'));
            }
        });

        // so we can actually test in a browser..
        if (typeof jcmp !== 'undefined') {
            /* TODO: move into the actual menu things */
            $('.checkboxes input[type=checkbox]').change(function() {
    			var that = $(this),
    				name = that.attr('name'),
    				checked = that.is(':checked');

    			jcmp.CallEvent('spawnmenu/ui/toggleAttr', name, checked);
    		});

            // load the settings
            jcmp.AddEvent('spawnmenu/settings', function(nitrousEnabled, turboJumpEnabled, vehicleMenuCompactMode) {
                if (nitrousEnabled)
                    $('#toggleNitrous').attr('checked', 'checked');

                if (turboJumpEnabled)
                    $('#toggleTurboJump').attr('checked', 'checked');
            });

            // wait for load first
            jcmp.CallEvent('spawnmenu/ready');

            // chat input state
            jcmp.AddEvent('chat_input_state', function(state) {
                chat_input_state = state;
            });

            function toggleMenu(m) {
                if (typeof m === 'undefined')
                    return;

                const menu = m.data('plugin_spawnmenu');

                if (current_visible_menu) {
                    const current_menu = current_visible_menu.data('plugin_spawnmenu');

                    if (current_menu.isVisible()) {
                        current_menu.setVisible(false);
                        jcmp.HideCursor();
                    }

                    if (current_visible_menu.is(m)) {
                        current_visible_menu = null;
                        jcmp.CallEvent('spawnmenu/ui/toggleMenu', false);
                        return;
                    }
                }

                menu.setVisible(!menu.isVisible());
                menu.isVisible() ? jcmp.ShowCursor() : jcmp.HideCursor();

                jcmp.CallEvent('spawnmenu/ui/toggleMenu', menu.isVisible());
                current_visible_menu = m;
            }

            $(window).keyup(function(event) {
                if (chat_input_state)
                    return false;

                const key = event.which;
                if (key === 77) {
                    toggleMenu(weapon_menu);
                } else if (key === 86) {
                    toggleMenu(vehicle_menu);
                }
            });
        }

    });
})(jQuery, document, window);
