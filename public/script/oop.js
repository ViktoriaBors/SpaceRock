export class Sample {
    constructor(name,type, description, minerals,SiO, AlO, MgO,CaO,NaO,FeO, density, porosity, uploadedBy, url){
        this.name = name,
        this.type = type,
        this.description = description,
        this.minerals = minerals,
        this.SiO2 = SiO  == "" || isNaN(SiO) ? this.SiO2 = "N/A" : this.SiO2 = SiO,
        this.Al2O3 = AlO == "" || isNaN(AlO) ? this.Al2O3 = "N/A" : this.Al2O3 = AlO,
        this.MgO = MgO == ""  || isNaN(MgO) ? this.MgO = "N/A" : this.MgO =  MgO,
        this.CaO = CaO == ""  || isNaN(CaO) ? this.CaO = "N/A" : this.CaO =  CaO,
        this.Na2O3 = NaO == ""  || isNaN(NaO)  ? this.Na2O3 = "N/A" : this.Na2O3 =  NaO,
        this.Fe2O3 = FeO == "" || isNaN(FeO)  ? this.Fe2O3 = "N/A" : this.Fe2O3 =  FeO,
        this.density = density == "" || isNaN(density) ? this.density = "N/A" : this.density =  density,
        this.porosity = porosity == "" || isNaN(porosity)  ? this.porosity = "N/A" : this.porosity =  density,
        this.uploadedBy = uploadedBy,
        this.url = url == undefined ? this.url = "../img/samples/noImg.png" : this.url = url,
        this.updatedLast = Date.now()
        this.status = this.type == "analogue" ? this.status = "approved" : this.status = "pending"
    }
}

export class User {
    constructor(firstName, lastName, email, pass){
        this.firstName = firstName,
        this.lastName = lastName,
        this.email = email,
        this.password = pass
    }
}

// Analogue sample set
const basaltAT1 = new Sample("Basalt-AT-1","analogue","Strong,dark grey coloured rocks with fine-grained matrix.","plagioclase, olivin, pyroxene, clay",47,15,7,8,3,18, 3150,3, "admin", "./public/img/samples/basalt-AT-1.jpg")
const gabbroAT1 = new Sample("Gabbro-AT-1","analogue","Light colored Mg-rich rocks.","pyroxene, plagioclase, olivine, quartz",52,16,9,13,2,6, 3150, 8, "admin", "./public/img/samples/lunargabbro-AT-1.jpg")
const impactMeltAT1 = new Sample("Impact-Melt-AT-1","analogue","Consist of different fragments in an impact-melt glass matrix. The glassy matrix has not crystallized because of the rapid cooling. Mineral and chemical composition highly depends on the fragments.","volcanic glass, different fragments",49,32,4,17,0,5,2650,6, "admin","./public/img/samples/impactmelt-AT-1.jpg")
const brecciaAT1 = new Sample("Breccia-AT-1","analogue","Complexed materials,composed of different rocks, mineral and glass fragments set in a fine-grained matrix. Mineral and chemical composition highly depends on the fragments.","plagioclase, olivine, pyroxene",48,25,10,13, 0,10, 2500, 10, "admin", "./public/img/samples/fragmentalBreccia-AT-1.jpg")
const anorthositeAT1 = new Sample("Anorthosite-AT-1","analogue","Light colored rocks rich in Ca and Al.", "plagioclase, pyroxene, olivin",48,25,2,12,4,4,2150,8,"admin", "./public/img/samples/anorthosite-AT-1.jpg")

const analougeSamplesData = [basaltAT1,gabbroAT1,impactMeltAT1,brecciaAT1,anorthositeAT1]
const JsonDataAnalouge = JSON.stringify(analougeSamplesData)
//console.log(JsonDataAnalouge)


// Simulants
const basaltST1 = new Sample("Basalt-ST-1","simulant","Strong,dark grey coloured rocks with fragments of minerals in a fine-grained matrix.","plagioclase, olivin, pyroxene, clay",45,13,6,9,4,19, 3050,3, "admin", "./public/img/samples/basalt-ST-1.jpg")
const basaltST2 = new Sample("Basalt-ST-2","simulant","Light and dark grey coloured, angular and subangular coarse gravel. The gravel is aphyric basalt.","plagioclase, olivin, pyroxene",40,15,6,9,3,20, 1650,43, "admin", "./public/img/samples/basalt-ST-2.jpg")
const basaltST3 = new Sample("Basalt-ST-3","simulant","Dark grey very angular and subangular, well graded sand. The sand is fine grained aphyric basalt.","plagioclase, olivin, pyroxene, clay",43,13,7,8,4,18, 1950,35, "admin", "./public/img/samples/basalt-ST-3.jpg")
const bentoniteST1 = new Sample("Bentonite-ST-1","simulant","Beige gravelly silty rounded to very rounded, well graded sand and gravel. Sand and gravel is a bentonite clay.","clay minerals (smectite), quartz, mica", 60,25,2,3,3,0, 1250,56, "admin", "./public/img/samples/bentonite-ST-1.jpg")
const doleriteST1 = new Sample("Dolerite-ST-1","simulant","Dark and light brown coloured rock with mineral fragments.","plagioclase, pyroxene, olivin",52,15,8,11,2,10, 2650,1, "admin", "./public/img/samples/dolerite-ST-1.jpg")
const doleriteST2 = new Sample("Dolerite-ST-2","simulant","Light brown coloured rock with mineral fragments.","plagioclase, pyroxene, olivin",51,18,6,13,4,10, 2050,1, "admin", "./public/img/samples/dolerite-ST-2.jpg")
const brecciaST1 = new Sample("Breccia-ST-1","simulant","Light grey coloured rock with different size of gabbroic rock fragments.","plagioclase, pyroxene, olivin",52,15,8,11,2,10, 2050,2, "admin", "./public/img/samples/gabbroicbreccia-ST-1.jpg")
const gabbroST1 = new Sample("Gabbro-ST-1","simulant","Dark and light brown coloured rock with black veins.","plagioclase, pyroxene",52,17,6,9,3,15, 2850,2, "admin", "./public/img/samples/lunarGabbro-ST-1.jpg")
const impactmeltST1 = new Sample("Impact-Melt-ST-1","simulant","Dark grey and black rokc with glassy matrix and fragments.","plagioclase, pyroxene, olivin",66,14,2,2,3,2, 2650,1, "admin", "./public/img/samples/meltbreccia-ST-1.jpg")

const simulantSamplesData = [basaltST1,basaltST2,basaltST3, bentoniteST1, doleriteST1, doleriteST2,brecciaST1, gabbroST1, impactmeltST1]
const JsonDataSimulant = JSON.stringify(simulantSamplesData)
//console.log(JsonDataSimulant)

const admin = new User("Space", "Rock", "spacerock@spacerock.com", "admin")
//console.log(JSON.stringify(admin))