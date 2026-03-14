// ===================================================
// MINITOOLS — app.js
// ===================================================


// ===================================================
// NAVIGATION
// ===================================================

let lastFilter = 'all';

function showHome() {
  document.getElementById('homeView').style.display = 'block';
  document.querySelectorAll('.tool-page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-pill').forEach(p => p.classList.remove('active'));

  document.querySelectorAll('.card').forEach(c => {
    c.style.display = (lastFilter === 'all' || c.dataset.cat === lastFilter) ? 'block' : 'none';
  });
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === lastFilter);
  });

  window.scrollTo(0, 0);
}

function openTool(id) {
  const activeTab = document.querySelector('.tab.active');
  if (activeTab) lastFilter = activeTab.dataset.cat || 'all';

  document.getElementById('homeView').style.display = 'none';
  document.querySelectorAll('.tool-page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('tool-' + id);
  if (el) el.classList.add('active');
  window.scrollTo(0, 0);
}

function filterCards(cat, btn, fromNav) {
  lastFilter = cat;
  if (fromNav) {
    document.getElementById('homeView').style.display = 'block';
    document.querySelectorAll('.tool-page').forEach(p => p.classList.remove('active'));
  }
  document.querySelectorAll('.card').forEach(c => {
    c.style.display = (cat === 'all' || c.dataset.cat === cat) ? 'block' : 'none';
  });
  if (btn) {
    if (fromNav) {
      document.querySelectorAll('.nav-pill').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab').forEach(t => {
        if (t.dataset.cat === cat) t.classList.add('active');
      });
    } else {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.nav-pill').forEach(t => t.classList.remove('active'));
    }
  }
  window.scrollTo(0, 0);
}


// ===================================================
// NAME DATA — 100 names per subcategory
// ===================================================

const nameData = {
  tech: {
    ia: [
      'NexaMind','NeuraSync','VoxAI','CortexLab','PulseAI','DeepNova','OmniPath','ZenithAI','QuantaCore','LuminaAI',
      'AxisMind','NeuralPeak','CogniForge','SynthIQ','OrbitAI','MindLayer','VectorAI','NovaBrain','SignalAI','DeepAxis',
      'ProximAI','ArcaMind','NexaBrain','CerebroAI','QuantumPath','SynapseAI','CortexFlow','DeepPulse','NeuralNova','IntelliCore',
      'ThinkForge','MindSync','CogniCore','DeepMind Lab','VoxCore','SynthPath','QuantaAI','LuminaCore','OrbitCore','MindNova',
      'NeuralForge','CogniNova','SynthCore','VectorCore','NovaMind','SignalCore','DeepForge','ArcaAI','CortexNova','IntelliAI',
      'ThinkCore','MindForge','CogniPath','VoxForge','SynthBase','LuminaPath','NovaForge','SignalPath','CerebroPath','SynapseNova',
      'NeuralBase','IntelliPath','NeuraPath','DeepBase','QuantaPath','OrbitMind','MindBase','VectorPath','DeepPath','CortexBase',
      'ArcaCore','QuantumCore','ThinkNova','MindPath','VoxNova','SynthForge','QuantaNova','LuminaNova','AxisNova','CogniFlow',
      'NexaFlow','PulseForge','CortexPulse','NeuraFlow','SynthMind','QuantaMind','VoxMind','OrbitNova','DeepSynth','CerebroSync',
      'IntelliFlow','ThinkFlow','MindFlow','CogniSync','VoxSync','LuminaForge','NeuraCore','AxisFlow','OrbitFlow','PulseSync'
    ],
    saas: [
      'FlowStack','Stackify','CloudPulse','DataForge','Corelink','Launchify','GridSync','Stackora','VaultHub','PivotStack',
      'Launchpad','AppForge','CloudNova','SyncBase','CoreDash','BuildStack','DeployKit','LaunchCore','SaaSNova','FlowForge',
      'CloudGrid','CoreCloud','StackDash','BuildNova','LaunchSync','GridForge','AppSync','CloudForge','CoreForge','DeployNova',
      'LaunchNova','GridNova','PivotNova','CloudDeploy','BuildForge','DeployCloud','LaunchForge','GridDeploy','AppNova','CloudLaunch',
      'DataDash','BuildDash','DeployDash','LaunchDash','GridDash','PivotDash','FlowDash','CloudDash','DataLaunch','CoreLaunch',
      'BuildLaunch','DeployLaunch','LaunchKit','GridLaunch','AppLaunch','CloudKit','CoreKit','BuildKit','GridKit','SaaSKit',
      'PivotCloud','FlowCloud','StackCloud','AppCloud','PivotKit','FlowKit','StackKit','AppKit','PivotLaunch','FlowLaunch',
      'StackLaunch','AppLaunch','PivotDeploy','FlowDeploy','StackDeploy','AppDeploy','PivotBuild','FlowBuild','StackBuild','AppBuild',
      'Shipyard','Deployly','Gridify','Launchly','Buildly','Syncify','Stackly','Cloudify','Coreify','Flowify',
      'Launchr','Deployr','Buildr','Syncr','Stackr','Cloudr','Corer','Flowr','Kitr','Gridr'
    ],
    fintech: [
      'PayNova','VaultPay','TrustFlow','ClearLedger','FinSync','PulseBank','CoreFin','SwiftVault','PeakPay','GridFin',
      'FlowPay','PayGrid','FinCore','TrustPay','ClearPay','VaultSync','SwiftPay','FinNova','PayForge','FinPulse',
      'TrustNova','SwiftFin','VaultNova','NexaLedger','ClearVault','FinVault','SwiftLedger','FinForge','TrustVault','ClearFlow',
      'PayFlow','FinGrid','TrustGrid','SwiftGrid','PayVault','VaultGrid','ClearBank','PayBank','FinBank','TrustBank',
      'SwiftBank','BankNova','VaultBank','SyncPay','VaultFlow','ClearCore','SwiftCore','CorePay','ClearPulse','PayPulse',
      'TrustPulse','SwiftPulse','PulseFin','ClearSwift','PaySwift','FinSwift','TrustSwift','Moneda','Ledgrly','Coinage',
      'Credify','Wealthr','Fundly','Bankist','Coinvault','Finramp','Payrail','Trustly','Clearco','Vaultify',
      'Remitly','Lendio','Paytrace','Coinflo','Wealthio','Fundrise','Bankable','Coinbase','Fintech','Paywire',
      'Trustpilot','Clearbit','Vaultex','Moneybird','Ledgerx','Coinpath','Wealthpath','Fundpath','Bankpath','Paypath',
      'Trustpath','Clearpath','Vaultpath','Moneypath','Ledgerpath','Coinramp','Wealthramp','Fundramp','Bankramp','Payramp'
    ],
    seguridad: [
      'ShieldCore','VaultGuard','CyberNova','TrustLayer','LockForge','GridGuard','PulseShield','IronSync','CoreVault','SentryAI',
      'FortNova','CyberShield','IronCore','SafeLayer','CyberForge','ShieldSync','IronGuard','SafeNova','FortLayer','GuardSync',
      'ShieldLab','IronLayer','SafeForge','CyberCore','ShieldNova','VaultSentry','CyberGuard','LockGuard','GridShield','PulseLock',
      'IronShield','CoreGuard','SentryCore','FortGuard','CyberLock','GuardNova','IronLock','SafeGuard','CyberSentry','ShieldForge',
      'VaultLock','SafeLock','CyberFort','FortCore','GuardForge','ShieldBase','IronBase','SafeBase','TrustFort','LockFort',
      'GridFort','PulseFort','IronFort','CoreFort','SentryFort','FortBase','CyberLayer','ShieldLayer','VaultLayer','SafeLayer',
      'FortLayer','GuardLayer','SafeSync','CyberSync','FortSync','GuardSync','IronSentry','SafeSentry','ZeroTrust','Darkshield',
      'Encryptly','Proxywall','Cipherlock','Sentinelo','Fortifai','Guardiant','Ironclad','Safepoint','Watchdog','Lockstep',
      'Vaultwall','Cipherwall','Shieldly','Sentrify','Fortwall','Guardwall','Ironwall','Safewall','Trustwall','Lockwall',
      'Vaultlock','Cipherlock','Shieldlock','Sentrilock','Fortlock','Guardlock','Ironlock','Safelock','Trustlock','Lockguard'
    ],
    datos: [
      'DataNova','InsightForge','PulseData','CoreMetrics','GridSense','FlowData','QuantaStats','PeakInsight','SyncMetrics','LuminaStats',
      'DataGrid','InsightCore','MetricFlow','PulseMetrics','DataSync','InsightNova','CoreData','MetricForge','DataLab','InsightGrid',
      'PulseCore','InsightSync','MetricNova','DataPulse','InsightLab','DataCore','InsightBase','MetricBase','DataInsight','CoreInsight',
      'MetricSync','DataFlow','InsightFlow','PulseFlow','CoreFlow','PulseSync','CoreSync','InsightSense','PulseSense','CoreSense',
      'MetricSense','PulseGrid','CoreGrid','MetricGrid','PulseNova','CoreNova','PulseLab','CoreLab','MetricLab','DataSense',
      'Tableau','Looker','Datadog','Segment','Mixpanel','Amplitude','Domo','Sisense','Metabase','Superset',
      'Databricks','Snowflake','Redshift','BigQuery','Fivetran','Airbyte','dbt','Prefect','Dagster','Astronomer',
      'Datahub','Atlan','Collibra','Alation','Monte Carlo','Great Expectations','Evidently','Grafana','Prometheus','Kibana',
      'Dataiku','RapidMiner','Knime','Alteryx','Talend','Informatica','MuleSoft','Boomi','Stitch','Matillion',
      'Statsig','LaunchDarkly','Split.io','Optimizely','VWO','Heap','FullStory','Hotjar','Contentsquare','Quantum Metric'
    ],
    general: [
      'Nexify','CoreSync','LaunchGrid','PulseBase','VaultCore','SwiftNova','GridFlow','PeakSync','FlowLab','StackNova',
      'PulseLab','CoreNova','LaunchBase','SwiftGrid','PeakCore','FlowSync','StackLab','PulseGrid','CoreLab','LaunchSync',
      'SwiftBase','PeakNova','FlowCore','StackSync','PulseNova','CoreFlow','LaunchLab','SwiftCore','PeakBase','FlowNova',
      'StackBase','FlowGrid','CoreGrid','LaunchGrid','SwiftGrid','PeakGrid','PulseForge','CoreForge','LaunchForge','SwiftForge',
      'PeakForge','FlowForge','StackForge','PulseDeploy','CoreDeploy','LaunchDeploy','SwiftDeploy','PeakDeploy','FlowDeploy','StackDeploy',
      'Nexora','Zyncly','Orbitly','Waverly','Prismly','Crystalio','Luminary','Vortexly','Eclipsio','Aurorae',
      'Meridian','Solstice','Equinox','Apogee','Perihelion','Nadirio','Zenithly','Horizonly','Culminate','Vertexly',
      'Crestify','Summitly','Peakward','Apexify','Acmely','Topmost','Pinnacle','Capstone','Keystone','Cornerstone',
      'Bedrock','Foundry','Forgepoint','Hammerhead','Anvilio','Kiln','Crucible','Smelter','Casterly','Molder',
      'Shapely','Craftly','Makerly','Buildly','Creately','Formly','Moldly','Shapify','Craftify','Makeify'
    ],
    ecommerce: [
      'CartNova','ShopVault','TradePulse','MarketFlow','NexaSell','SnapShop','GridMart','SwiftCart','MindCommerce','LaunchStore',
      'PeakShop','FlowCart','ShopGrid','CartSync','MarketNova','TradeBase','StoreForge','QuickCart','NexaStore','ShopCore',
      'CartFlow','MarketSync','SellNova','StoreGrid','TradeLab','CartBase','ShopPulse','NexaCart','StoreSync','MarketCore',
      'CartGrid','ShopSync','TradeSync','MarketBase','NexaMarket','StoreBase','SellBase','CartCore','ShopBase','TradeNova',
      'MarketLab','NexaShop','StoreLab','SellCore','CartLab','ShopLab','TradePost','MarketGrid','NexaMart','StorePost',
      'SellGrid','CartVault','ShopNova','TradeForge','MarketForge','NexaVend','StoreVend','SellForge','CartForge','ShopForge',
      'TradeGrid','MarketPost','NexaSpark','StoreSell','SellSync','CartRail','ShopRail','TradeRail','MarketRail','NexaRail',
      'StoreRail','SellRail','CartPulse','ShopWave','TradeWave','MarketPulse','NexaWave','StorePulse','SellPulse','CartHub',
      'ShopHub','TradeHub','MarketHub','NexaHub','StoreHub','SellHub','CartCore','ShopCore','TradeCore','MarketCore',
      'NexaVault','StoreCore','SellVault','CartStream','ShopFlow','TradeFlow','MarketStream','NexaStream','StoreFlow','SellFlow'
    ]
  },

  restaurant: {
    italiana: [
      'La Stanza','Il Forno Vivo','Pasta Nova','La Cucina di Marco','Terra e Sale','Vino e Fuoco','Il Boschetto','La Piazza Grande','Cielo Aperto','Nido Romano',
      "Sapori d'Italia",'Forno Maestro','La Trattoria','Il Cortile','Osteria Bella','La Vigna','Tavola Calda','Il Porto','Casa Mia Ristorante','La Dolce Cucina',
      'Al Dente','La Cantina Italiana','Il Sole','Pane e Vino','La Famiglia','Sotto il Cielo','Il Mercato','La Terrazza','Buona Forchetta','La Buca',
      'Il Giardino','La Finestra','Trattoria del Borgo','Il Campanile','La Piazzetta','Osteria del Vino','La Cucina Aperta','Il Rifugio','La Fonte','Sapori Autentici',
      'La Locanda','Il Tavolino','Cucina Verace','La Cantinella','Il Focolare','La Taverna','Osteria Nuova','Il Palato','La Vigilia','Antico Forno',
      'La Casetta','Il Vicoletto','Cucina di Casa','La Pergola','Il Roseto','La Loggia','Osteria del Borgo','Il Chiostro','La Pioggia','Sapori del Sud',
      'La Finestra sul Mare','Il Portico','Cucina Toscana','La Scaletta','Il Pozzo','La Terrazza sul Lago','Osteria Toscana','Il Tramonto','La Brezza','Sapori Toscani',
      'La Casina','Il Giardinetto','Cucina Siciliana','La Balconata','Il Ruscello','La Vista','Osteria Siciliana','Il Chiaro di Luna','La Quiete','Sapori Siciliani',
      'La Villetta','Il Patio','Cucina Romana','La Loggiata','Il Belvedere','La Corte','Osteria Romana','Il Panorama','La Dolce Vita','Sapori Romani',
      'La Cascina','Il Pergolato','Cucina Napoletana','La Verandina','Il Mosaico','La Caletta','Osteria Napoletana','Il Golfo','La Baia','Sapori Napoletani'
    ],
    mexicana: [
      'La Milpa','El Metate','Comal & Fuego','La Hacienda Vieja','Sabor de Raiz','El Fogon','Casa Oaxaca','La Tequileria','Tierra Caliente','Tlaloc',
      'Raices Mx','El Molcajete','La Tortilleria','El Huarache','Casa Tlaxcala','La Palapa','El Nopal','Sabor Mexicano','La Carnita','El Maiz',
      'Casa Tacos','La Pozoleria','El Chilaquil','La Birria','Casa Talavera','El Cocinero','La Taquiza','Sabor del Campo','El Mercadito','La Enchilada',
      'Casa Puebla','El Tlacoyo','La Quesadilleria','El Mole','Casa Veracruz','La Memela','El Tamale','Sabor de Michoacan','El Atole','La Sopa Azteca',
      'Casa Guerrero','El Sope','La Chaluperia','El Carnitas','Casa Jalisco','La Menuderia','El Barbacoa','Sabor de Oaxaca','El Tejate','La Tlayuda',
      'Casa Morelos','El Tostada','La Gordita','El Aguachile','Casa Sinaloa','La Cevicheria','El Pescado','Sabor del Mar','El Caldo','La Calderia',
      'Casa Sonora','El Machaca','La Chicharroneria','El Asado','Casa Chihuahua','La Discada','El Cabrito','Sabor del Norte','El Buche','La Menudo',
      'Casa Nuevo Leon','El Tripas','La Riquisima','El Guisado','Casa Tamaulipas','La Fritanga','El Puchero','Sabor del Centro','El Estofado','La Cazuelita',
      'Casa Hidalgo','El Asado Norteño','La Pancita','El Consomme','Casa Queretaro','La Canasta','El Mercado','Sabor de la Tierra','El Campestre','La Fonda Mexicana',
      'Casa Michoacan','El Carnero','La Sopita','El Pozol','Casa Tabasco','La Petenera','El Pochitoque','Sabor Tropical','El Platano','La Cocina de Abuela'
    ],
    asiatica: [
      'Umami House','The Wok Lab','Nori & Co.','Sakura Draft','Dragon Bowl','The Pho Lab','Zen Kitchen','Bamboo Street','Miso & More','Ramen District',
      'The Dim Sum Co.','Wasabi Lab','Chopstick House','The Sushi Bar','Tokyo Bowl','Seoul Kitchen','Taipei Street Food','The Dumpling Shop','Bao House','Kimchi & Co.',
      'The Noodle Lab','Shanghai Bistro','The Thai Table','Indo Kitchen','Curry District','The Bento Co.','Matcha House','The Izakaya','Bowl & Broth','Sesame Kitchen',
      'The Ramen Room','Gyoza House','The Yakitori Bar','Tonkotsu Lab','The Wagyu Room','Soba & Co.','The Tempura Bar','Udon District','The Donburi Shop','Okonomiyaki House',
      'The Takoyaki Stand','Teppanyaki Lab','The Shabu Shabu','Yakiniku District','The Kaiseki Room','Teriyaki House','The Katsu Bar','Yakisoba Co.','The Karaage Shop','Edamame House',
      'The Pad Thai Lab','Green Curry Co.','The Tom Yum Bar','Massaman District','The Satay Shop','Larb House','The Som Tum Bar','Khao Man District','The Mango Sticky Rice','Coconut Kitchen',
      'The Bibimbap Lab','Japchae House','The Bulgogi Bar','Doenjang District','The Sundubu Shop','Galbi House','The Ddeok Bar','Jajangmyeon Co.','The Haemul Shop','Samgyeopsal House',
      'The Dim Sum Lab','Char Siu Co.','The Peking Duck','Hoisin District','The Mapo Tofu','Xiaolongbao House','The Kung Pao Bar','Szechuan Co.','The Dan Dan Noodle','Congee House',
      'The Pho Room','Bun Bo Co.','The Banh Mi Bar','Com Tam District','The Goi Cuon Shop','Hu Tieu House','The Bun Cha Bar','Canh Chua Co.','The Cha Ca Shop','Xoi House',
      'The Laksa Lab','Nasi Lemak Co.','The Rendang Bar','Satay District','The Gado Gado','Rijsttafel House','The Nasi Goreng','Mie Goreng Co.','The Babi Guling','Soto House'
    ],
    parrilla: [
      'La Brasa Viva','Hierro y Fuego','The Smokehouse','Parrilla & Co.','El Carbon','Cut & Fire','Wagyu District','Prime Cuts','La Parrilla Maestra','Smoke & Oak',
      'The Grill Co.','Hierro Forjado','La Lena','El Asador','Brasa & More','The Pit Master','La Parrillada','Carbon & Sal','Smoke & Bone','The Butcher Grill',
      'La Barbacoa','El Fogon Grande','Brasa Viva','The Brisket Co.','La Patagonia','Fuego & Sal','El Ranchero','The Grill House','La Churrasqueria','Brasas del Norte',
      'The Smokery','El Asador Real','La Parrilla Argentina','Carbon Vivo','Smoke & Fire','The Churrasco','La Lena Viva','El Gran Asado','Brasa Real','The Pit Room',
      'La Parrilla Gaucha','Carbon & Fuego','Smoke & Salt','The Brisket Lab','La Parrilla del Chef','Fuego Vivo','El Maestro Asador','The Grill Lab','La Churrasqueria Real','Brasas Vivas',
      'The Smoker Co.','El Asador del Norte','La Parrilla Colombiana','Carbon Real','Smoke & Herbs','The Churrasco Real','La Lena Real','El Gran Fuego','Brasa & Sal','The Pit Lab',
      'La Parrilla Peruana','Carbon & Herbs','Smoke & Wood','The Brisket Room','La Parrilla Brasilena','Fuego Real','El Asador Colombiano','The Grill Room','La Churrasqueria Pro','Brasas Reales',
      'The Smoker Lab','El Asador del Sur','La Parrilla Venezolana','Carbon & Wood','Smoke & Spice','The Churrasco Lab','La Lena Lab','El Gran Carbon','Brasa & Wood','The Pit Co.',
      'La Parrilla Chilena','Carbon & Spice','Smoke & Ember','The Brisket Bar','La Parrilla Uruguaya','Fuego & Wood','El Asador Gaucho','The Grill Bar','La Churrasqueria Real','Brasas Ardientes',
      'The Smoker Room','La Parrilla Master','Carbon & Ember','Smoke & Pit','The Churrasco Room','La Lena Room','El Gran Humo','Brasa & Ember','The Pit Master','El Fogon Real'
    ],
    saludable: [
      'Green Lab','The Bowl Co.','Raiz & Verde','Clean & Eat','Verdura','The Seed Kitchen','Fresh District','NutriHaus','Bloom Kitchen','Green District',
      'The Plate Lab','Zen Bowl','The Green Table','Fresh & Co.','Roots Kitchen','The Wellness Bowl','Plant District','Green Fork','The Clean Plate','Nourish & Co.',
      'The Sprout','Fresh Roots','The Veggie Lab','Clean Greens','The Harvest Bowl','Living Kitchen','The Raw Bar','Fresh Bloom','The Veggie District','Pure Kitchen',
      'The Green Bowl','Clean & Fresh','Root & Leaf','The Plant Lab','Nourish Kitchen','The Wellness Table','Green Bloom','Clean Roots','The Pure Kitchen','Fresh District2',
      'The Living Bowl','Root Kitchen','Leaf & More','The Clean Kitchen','Nourish District','The Wellness Lab','Green Roots','Clean Bloom','The Pure Bowl','The Fresh Lab',
      'The Living Kitchen','Root & More','Leaf Kitchen','Nourish Lab','The Wellness Kitchen','The Green Kitchen','Clean Kitchen','The Pure Lab','Fresh Kitchen','The Root Bowl',
      'Leaf Lab','The Clean Lab','Nourish Bowl','The Wellness Bowl','Green Kitchen','The Pure Kitchen','The Fresh Bowl','The Root Kitchen','Leaf Bowl','The Clean Bowl',
      'The Root Table','Leaf Table','The Clean Table','Nourish Table','The Wellness Table','The Green Table','Clean Table','The Pure Table','The Fresh Table','Root Nourish',
      'Leaf District','The Clean District','The Wellness Room','The Green Room','Clean Room','The Pure District','The Fresh District','Root Room','Leaf Room','The Clean Room',
      'Nourish Room','The Wellness Bar','The Green Bar','Clean Bar','The Pure Room','The Fresh Room','Root Bar','Leaf Bar','Nourish Bar','The Wellness Garden'
    ],
    mariscos: [
      'La Barra del Mar','Marea Viva','The Fish Lab','Sal y Mar','Puerto Fresco','La Ola','Coral Kitchen','Mar & Mas','The Ceviche Co.','Ancla & Fuego',
      'Costa Brava','Marea Alta','El Puerto','La Red','Brisa del Mar','The Oyster Bar','La Marisqueria','Sal & Limon','The Fish & Co.','Oceano',
      'La Lonja','El Muelle','The Seafood Lab','Agua & Sal','La Bahia','Marisco Prime','El Coral','The Shore Kitchen','La Pescaderia','Brisa Marina',
      'El Mar Azul','La Playa','The Seafood Room','Agua Viva','La Ensenada','Marisco Fresco','El Arrecife','The Fish Room','La Costa','Brisa del Norte',
      'El Cabo','La Cala','The Seafood Bar','Agua & Fuego','La Punta','Marisco Vivo','El Islote','The Fish Bar','La Ribera','Brisa del Sur',
      'El Faro','La Rada','The Seafood Kitchen','Agua Salada','La Caleta','Marisco del Mar','El Peñon','The Fish Kitchen','La Marina','Brisa del Este',
      'El Anchote','La Crique','The Seafood District','Agua Clara','La Poza','Marisco & Mas','El Fondeadero','The Fish District','La Atunara','Brisa del Oeste',
      'El Espigon','La Ensenada Azul','The Seafood Co.','Agua & Limon','La Playa Secreta','Marisco Real','El Amarradero','The Fish House','La Pescadora','Brisa Real',
      'El Morche','La Angostura','The Seafood Table','Agua Viva','La Cala Azul','Marisco Lab','El Puerto Nuevo','The Fish Room','La Pesqueria','Brisa Viva',
      'El Varadero','La Salina','The Seafood Kitchen','Agua Marina','La Playa Azul','Marisco Fresco','El Puerto Viejo','The Fish Kitchen','La Pesca del Dia','Brisa Marina'
    ],
    general: [
      'La Mesa Grande','The Local Table','Fogon & Co.','El Patio','Casa & Cocina','The Kitchen Lab','Savor District','La Cantina','Common Table','The Fork Co.',
      'Mesa Fresca','Barrio Kitchen','The Dining Room','La Cocina','The Corner Table','Plato & Co.','The Neighborhood','La Barra','The Local Kitchen','Casa de Comidas',
      'The Daily Table','El Comedor','The Bistro','La Fonda','The Gathering','Casa Buena','The Open Kitchen','La Terraza','The Eatery','Mesa & Co.',
      'The Local Bistro','El Rincon','The Corner Kitchen','La Cocina de Casa','The Daily Bistro','Plato Real','The Barrio Kitchen','La Mesa','The Local Eatery','Casa Real',
      'The Daily Kitchen','El Comedor Viejo','The Cozy Bistro','La Fonda Real','The Social Table','Casa & Mesa','The Open Table','La Terraza Real','The Local Spot','Mesa Fresca',
      'The Neighborhood Kitchen','El Patio Bonito','The Corner Spot','La Cocina Abierta','The Daily Spot','Plato Lab','The Barrio Table','La Mesa Buena','The Local Table','Casa Bonita',
      'The Daily Table','El Comedor Grande','The Cozy Kitchen','La Fonda Vieja','The Social Kitchen','Casa & Plato','The Open Bistro','La Terraza Linda','The Local Kitchen','Mesa Linda',
      'The Neighborhood Table','El Patio Lindo','The Corner Bistro','La Cocina Bonita','The Daily Bistro','Plato Nova','The Barrio Bistro','La Mesa Caliente','The Local Bistro','Casa Nova',
      'The Daily Diner','El Comedor Popular','The Cozy Table','La Fonda Popular','The Social Bistro','Casa & Cocina','The Open Kitchen','La Terraza Popular','The Corner Diner','Mesa Popular',
      'The Neighborhood Bistro','El Patio Popular','The Corner Kitchen','La Cocina Popular','The Daily Hub','Plato Lleno','The Barrio Spot','La Mesa Popular','The Corner Eatery','Casa Popular'
    ]
  },

  barberia: {
    clasica: [
      'El Barbero Mayor','The Classic Cut','La Navaja de Oro','Old School Cuts','The Straight Razor','El Gran Barbero','The Barbers Chair','La Antigua Navaja','Heritage Cuts','El Maestro',
      'The Old Barber Co.','La Catedra','The Shaving Room','El Clasico','The Barber Pole','Old Town Cuts','The Tradition','La Vieja Navaja','The Legacy Barber','El Oficio',
      'The Craftsman Cut','La Barberia Antigua','The Heritage Shop','El Clasico Corte','The Old Fashioned','La Tradicion','The Timeless Cut','El Barbero Clasico','The Original Cut','La Navaja Clasica',
      'El Sabio Barbero','The Classic Razor','La Barberia de Don','Old Guard Cuts','The Vintage Blade','El Barbero de Antano','The Antique Cut','La Navaja del Tiempo','Heritage Barber Co.','El Gran Maestro',
      'The Old World Cut','La Barberia Clasica','The Timeless Blade','El Corte Clasico','The Heritage Razor','La Navaja Antigua','Old Style Cuts','The Barbershop Classic','El Arte del Afeitado','The Classic Fade',
      'La Barberia del Maestro','The Old School Blade','El Barbero Antiguo','Heritage Style Cuts','The Vintage Barber','La Navaja Dorada','Old Fashion Cuts','The Classic Barber','El Corte Antiguo','The Antique Barber',
      'La Barberia Vintage','The Old Blade Co.','El Gran Clasico','Heritage Barber Lab','The Vintage Cut','La Navaja Real','Old Style Barber','The Classic Shop','El Corte Real','The Antique Shop',
      'La Barberia Real','The Old Craft','El Maestro Barbero','Heritage Cut Co.','The Vintage Razor','La Navaja del Maestro','Old Craft Cuts','The Classic Craft','El Corte de Oro','The Antique Craft',
      'La Barberia de Oro','The Old Tradition','El Gran Corte','Heritage Barber Room','The Vintage Shop','La Navaja del Arte','Old Tradition Cuts','The Classic Room','El Corte del Arte','The Antique Room',
      'La Barberia del Arte','The Old Room','El Barbero Real','Heritage Barber Base','The Vintage Room','La Navaja Noble','Old Noble Cuts','The Classic Base','El Corte Noble','The Noble Barber'
    ],
    moderna: [
      'Cut District','The Fade Lab','Blade & Co.','Sharp Cuts','The Barber Lab','Urban Fade','The Shape Co.','Blade District','Fresh Cut Co.','The Trim Lab',
      'Modern Cut','Edge & Co.','The Fade Room','Clean Cut Co.','The Line Up','Sharp District','The Cut Lab','Blade Base','Fresh Fade','The Modern Blade',
      'Urban Cut','The Edge Lab','Clean District','Sharp Base','The New Cut','Blade Lab','Fresh District','The Urban Fade','Clean Lab','Sharp Line',
      'The Modern Cut','Urban Blade','The Edge Cut','Clean Cut','Sharp Fade','The Cut Room','Blade Room','Fresh Room','The Urban Cut','Clean Room',
      'Sharp Room','The Modern Fade','Urban Room','The Edge Room','Clean Blade','Sharp Blade','The Cut Base','Blade District','Fresh Base','The Urban Blade',
      'Clean Base','Sharp Edge','The Modern Blade','Urban Base','The Edge Base','Clean Fade','Sharp Cut','The Cut Grid','Blade Grid','Fresh Grid',
      'The Urban Grid','Clean Grid','Sharp Grid','The Modern Grid','Urban Grid','The Edge Grid','Clean Corner','Sharp Corner','The Cut Nova','Blade Nova',
      'Fresh Nova','The Urban Nova','Clean Nova','Sharp Nova','The Modern Nova','Urban Nova','The Edge Nova','Clean Street','Sharp Street','The Cut Lab',
      'Blade Lab','Fresh Lab','The Urban Lab','Clean Lab','Sharp Lab','The Modern Lab','Urban Lab','The Edge Lab','Clean Floor','Sharp Floor',
      'The Cut Sync','Blade Sync','Fresh Sync','The Urban Sync','Clean Sync','Sharp Sync','The Modern Sync','Urban Sync','The Edge Sync','Clean Wave'
    ],
    premium: [
      'The Gentlemans Cut','Gold Blade Studio','Luxe Barber Co.','The Signature Cut','Premier Cuts','The Craft Barber','Black Label Cuts','The Elite Blade','Gold Standard Cuts','The Art of Shave',
      'Prestige Cuts','The Distinguished','Noir Barber','The Fine Cut','The Black Chair','Bespoke Cuts','The Refined Blade','Gold Class Barber','The Tailored Cut','Luxe & Co.',
      'The Polished Blade','Black Gold Cuts','The Premium Fade','First Class Cuts','The Sharp Gentleman','Velvet Blade','The Executive Cut','Gold Finish Barber','The Curated Cut','Opulent Cuts',
      'The Luxury Cut','Gold Prestige Studio','Bespoke Blade Co.','The Premier Barber','Elite Cuts','The Master Barber','Platinum Cuts','The Distinguished Blade','Gold Elite Cuts','The Fine Art Barber',
      'Prestige Studio','The Noir Blade','Black Label Studio','The Signature Blade','Premier Studio','The Craft Blade','Black Label Barber','The Elite Barber','Gold Standard Studio','The Artisan Shave',
      'Prestige Barber','The Distinguished Cut','Noir Studio','The Fine Blade','The Black Label','Bespoke Studio','The Refined Cut','Gold Class Studio','The Tailored Blade','Luxe Studio',
      'The Polished Cut','Black Gold Studio','The Premium Cut','First Class Studio','The Sharp Blade','Velvet Studio','The Executive Blade','Gold Finish Studio','The Curated Blade','Opulent Studio',
      'The Luxury Blade','Gold Prestige Barber','Bespoke Artisan','The Premier Blade','Elite Studio','The Master Blade','Platinum Studio','The Distinguished Studio','Gold Elite Studio','The Fine Art Studio',
      'Prestige Room','The Noir Room','Black Label Room','The Signature Room','Premier Room','The Craft Room','The Grand Label','The Elite Room','Gold Standard Room','The Artisan Room',
      'Prestige Lab','The Noir Lab','Black Label Lab','The Signature Lab','Premier Lab','The Craft Lab','The Obsidian Lab','The Elite Lab','Gold Standard Lab','The Artisan Lab'
    ],
    hipster: [
      'The Beard & Blade','Wild Cut Co.','The Wax & Fade','Rough Cut Studio','The Craft Cut','Lumber & Fade','The Artisan Blade','Wild Fade Co.','The Rugged Cut','Grain & Blade',
      'The Local Fade','Roots & Razor','The Wax Room','Wild Grain Cuts','The Rustic Blade','Beard & Grain','The Handmade Cut','Craft Fade Co.','The Workshop Barber','Wild Roots Cuts',
      'The Timber Cut','Grain & Fade','The Artisan Fade','Wild Craft Barber','The Mason Cut','Lumber & Grain','The Brewers Cut','Wild Workshop','The Folk Barber','Grain & Groom',
      'The Rugged Fade','Wild Timber Cuts','The Craft Fade','Beard & Lumber','The Handmade Fade','Craft Blade Co.','The Workshop Cut','Wild Artisan Barber','The Rustic Cut','Grain & Craft',
      'The Local Cut','Roots & Grain','The Wax Lab','Wild Grain Fade','The Rustic Fade','Beard & Craft','The Handmade Blade','Craft Cut Co.','The Workshop Fade','Wild Roots Fade',
      'The Timber Fade','Grain & Lumber','The Artisan Cut','Wild Craft Cut','The Mason Fade','Lumber & Craft','The Brewers Fade','Beard & Grain','The Folk Cut','Grain & Roots',
      'The Rugged Lab','Wild Timber Fade','The Crafted Beard','Beard & Roots','The Handmade Lab','Craft Roots Co.','The Workshop Lab','Wild Artisan Cut','The Rustic Lab','Grain & Wild',
      'The Local Lab','Roots & Lumber','The Wax Room','Wild Grain Lab','The Rustic Den','Beard & Wild','The Handmade Wild','Craft Wild Co.','The Workshop Wild','Wild Roots Lab',
      'The Timber Lab','Grain & Soil','The Artisan Den','Wild Craft Lab','The Mason Lab','Lumber & Wild','The Brewers Lab','Wild Workshop','The Folk Lab','Grain & Groom',
      'The Rugged Den','Wild Timber Lab','The Craft Den','Beard & Groom','The Handmade Groom','Craft Groom Co.','The Workshop Groom','Wild Artisan Fade','The Rustic Groom','The Wild Barber'
    ],
    latina: [
      'El Barrio Cuts','La Raza Barberia','El Bloque','Urban Roots Cuts','La Calle Cuts','El Baron','La Barberia del Barrio','Street Level Cuts','El Campeon','La Esquina',
      'Norte Cuts','La Neta Barber','El Chingon Cuts','La Colonia','El Primo','Barrio Fade Co.','La Barberia Latina','El Carnal','Street Roots','La Vecindad Cuts',
      'El Pelon','La Barberia Norte','El Cuate','Street Classic Cuts','La Raza Fade','El Compa Barber','La Barda Cuts','El Sazon','Street Arte Barber','La Banda Cuts',
      'El Barrio Real','La Raza Real','El Bloque Real','Urban Cuts Real','La Calle Real','El Baron Real','La Barberia Real','Street Cuts Real','El Campeon Real','La Esquina Real',
      'Norte Real','La Neta Real','El Chingon Barber','La Colonia Real','El Primo Real','Barrio Real Co.','La Barberia del Norte','El Carnal Barber','Street Classic','La Vecindad Real',
      'El Pelon Barber','La Barberia del Sur','El Cuate Barber','Street Classic Fade','La Raza Barber','El Compa Cortes','La Barda Cuts','El Sazon Fade','Street Arte Barber','La Banda Cuts',
      'El Barrio Lab','La Raza Lab','El Bloque Lab','Urban Cuts Lab','La Calle Lab','El Baron Lab','La Barberia Lab','Street Cuts Lab','El Campeon Lab','La Esquina Lab',
      'Norte Lab','La Neta Lab','El Chingon Lab','La Colonia Lab','El Primo Lab','Barrio Lab Co.','La Barberia Este','El Carnal Lab','Street Lab','La Vecindad Lab',
      'El Pelon Studio','La Barberia Oeste','El Cuate Studio','Street Fade Studio','La Raza Studio','El Compa Studio','La Barda Studio','El Sazon Studio','Street Arte Studio','La Banda Studio',
      'El Barrio Nova','La Raza Nova','El Bloque Nova','Urban Cuts Nova','La Calle Nova','El Baron Nova','La Barberia Nova','Street Cuts Nova','El Campeon Nova','La Esquina Nova'
    ]
  },

  moda: {
    streetwear: {
      femenino: [
        'Calle Nueve','La Urbana','Barrio Chic','Callejera','La Banda Wear','Sin Reglas','Zona Libre','Bloque Sur','La Trama Urbana','La Vibe',
        'Calle Arriba','Sin Permiso','La Energía','Barrio Alto','La Onda Urbana','La Base','Zona Chica','La Gráfica','Calle Sur','Sin Límites',
        'BLVCK Ella','Street Femenina','Urban Girl','Raw Cut Femenino','District Wear She','Concrete Ella','Avenue Label She','The Alley Girl','Street Pulse Femenino','Urban Thread She',
        'Pinta Libre','La Esquina','La Marca','Callejera Studio','La Caña','Sin Fronteras','La Onda','Bruta Studio','La Firma','Zona Femenina',
        'La Cadena','La Señal Urbana','Sin Nombre','La Base Urbana','Zona Sur','Raw Femenina','Street She','Urban Ella','Block Girl','Concrete She'
      ],
      masculino: [
        'Bloque Crew','El Barrio','Calle Dura','Sin Cuartel','La Firma Urbana','Zona Cruda','El Bloque','Calle Pesada','Sin Pausa','La Calle Manda',
        'El Gráfico','Barrio Bajo','Zona Bruta','El Corte Urbano','Calle Fría','La Marca Urbana','Bloque Sólido','El Circuito','El Movimiento','Calle Real',
        'BLVCK Label','Urban Grain Co.','Street Pulse','Raw Cut Co.','Concrete Label','Block Theory','The Alley Brand','Avenue Label','Raw District','District Label',
        'El Muro','Callejero Studio','La Caña Urbana','Bloque Oscuro','La Onda Cruda','Bruta Wear','La Firma Sólida','La Red','El Gráfico Crew','Calle Oscura',
        'El Barrio Alto','Callejero Crew','Pinta Sólida','La Señal Fuerte','La Base Fuerte','Zona Norte','Urban Block','Street Block','Raw Thread','Block Wear'
      ],
      unisex: [
        'La Trama','Bloque Colectivo','Sin Género','Zona Neutral','La Pinta Libre','Calle Libre','La Base Común','Barrio Abierto','El Colectivo','La Onda Libre',
        'Sin Reglas','La Base Libre','Barrio Colectivo','Libre Studio','La Firma Colectiva','Zona Libre','El Mural','La Caña Libre','Bloque Neutro','Sin Fronteras',
        'BLVCK Colectivo','Urban Neutral','Street Libre','Raw Neutral','District Neutro','Concrete Neutral','Block Libre','The Alley Neutral','Avenue Libre','Urban Thread Libre',
        'La Gráfica Libre','Calle Abierta','Zona Abierta','La Marca Libre','Bloque Libre','La Señal Libre','Barrio Libre','El Circuito Libre','La Onda Colectiva','Sin Etiqueta',
        'Pinta Colectiva','La Señal Colectiva','La Base Colectiva','Zona Colectiva','Calles Colectivas','La Onda Colectiva','Urban Colectivo','Street Colectivo','Raw Libre','Block Neutral'
      ]
    },
    lujo: {
      femenino: [
        'Casa Valeria','La Élite','Señora de Seda','La Condesa','Fina & Co.','La Selecta','Casa de Ensueño','La Diva','La Nobleza','La Distinción',
        'La Perla Fina','Seda Pura','La Duquesa','La Refinada','Señorita Luxe','La Baronesa','Maison Sofía','Maison Lucía','Casa Alejandra','Casa Valentina',
        'Velvet She','Maison Femme','La Belle','Lumiere She','Eclat Femenino','Aurum Ella','Soie & Co.','Le Tissu Ella','Velours Femenino','Aurore Ella',
        'La Aristocrata','Fina Maison','La Exclusiva','Fémina Couture','Casa Eterna','La Joya','Seda & Sueño','La Cima Femenina','La Cumbre Ella','La Perla Studio',
        'Velvet Maison She','La Belle Maison','Maison Doree She','The Ivory Label','Soie Studio She','Velours Maison She','Eclat Studio She','Aurum Studio She','Lumiere Studio She','Fina Studio Luxe'
      ],
      masculino: [
        'Casa Moreno','El Caballero','Don Exclusivo','El Señor de la Moda','La Firma Élite','Sartorial','El Noble','Don Refinado','El Aristocrata','El Selecto',
        'Seda y Lino','El Distinguido','Don Clásico','La Exclusividad','El Duque','Casa Rodrigo','El Refinado','Don Alejandro','El Barón','Casa Valentino',
        'Aurum Homme','Maison Homme','Le Tissu Homme','Velvet Homme','The Gold Label','Soie Homme','Velours Homme','Eclat Homme','Lumiere Homme','Fino Studio',
        'Don Perfecto','La Nobleza Masculina','Casa Clásica','El Perlo Studio','Lino Studio','El Dandy','Casa del Hombre','Don Rodrigo','El Barón Luxe','Fino Luxe',
        'Aurum House','The House of Noir','Silk District','Le Tissu','The Gold Room','The Luxe House','The Noir House','Maison Doree','Velvet Studio','Opulent'
      ],
      unisex: [
        'Casa Élite','La Cúspide','Alta Distinción','La Cima','Fino & Co.','La Cumbre','Casa Suprema','El Pináculo','La Nobleza','La Distinción',
        'Couture Suprema','Casa Atemporal','La Joya','Seda & Lino','La Aristocracia','Fino Maison','La Exclusividad','La Cumbre Luxe','Casa Serena','La Refinada',
        'Maison Alta','Velvet & Co.','The House of Noir','Silk District','Opulent','Aurore Maison','Velours','Eclat Label','Lumiere Co.','La Maison Rare',
        'Maison Doree','Or & Soie','The Luxe House','Velvet Maison','La Haute','Maison Eclat','The Luxe Maison','Aurum Studio','The Noir Studio','Silk Studio',
        'La Belle Studio','The Ivory Studio','Maison Blanche','Fino Studio Luxe','La Exclusividad Collection','La Joya Studio','Seda Studio','La Baronía Luxe','Fino Luxe','Élite Luxe'
      ]
    },
    casual: {
      femenino: [
        'La Cómoda','De Diario','Lo de Siempre','Cotidiana','La Sencilla','Sin Complicar','La Básica','Fácil & Chic','La Informal','De Todos los Días',
        'La Tranquila','Sin Esfuerzo','La Relajada','Fácil Moda','La Cotidiana','Chic Sin Estrés','La Normal','La Descomplicada','Sin Pretensiones','La Ligera',
        'Everyday She','Plain & Simple She','The Basics She','Good Wear She','Easy Label She','The Casual Co. She','Common Thread She','Daily Cuts She','Standard She','Simple District She',
        'La Cómoda Mujer','Ropa de Ella','De Casa','La Diaria','Chic Simple','Ropa Casual Ella','La Semana','La Ligera Mujer','Moda Fácil','Sin Estrés Ella',
        'Everyday Co.','Plain & Simple','The Basics Lab','Common Thread','Good Wear','Daily Cuts','Easy Label','The Casual Co.','Plain District','The Normal Brand'
      ],
      masculino: [
        'Lo de Siempre','El Diario','Sin Vuelta','El Básico','De Andar','Cómodo & Punto','El Casual','Sin Pretensiones','El Informal','De Todos los Días',
        'El Tranquilo','Sin Esfuerzo','El Relajado','Moda Sin Estrés','El Cotidiano','El Normal','El Descomplicado','Sin Complicar','El Ligero','Moda Fácil Hombre',
        'Everyday Him','Plain & Simple Him','The Basics Him','Good Wear Him','Easy Label Him','The Casual Co. Him','Common Thread Him','Daily Cuts Him','Standard Him','Simple District Him',
        'El Cómodo','De Diario Él','Lo de Siempre Hombre','El Sencillo','De Casa Hombre','El Básico Hombre','Fácil & Cool','Ropa del Tipo','Del Barrio','Sin Estrés Él',
        'Everyday Co.','Plain & Simple','Common Thread','Good Wear','Daily Cuts','Easy Label','Plain District','The Normal Brand','The Casual Co.','Standard Issue'
      ],
      unisex: [
        'Lo de Todos los Días','Sin Etiqueta','De Andar','Ropa Libre','La Comodidad','Neutro & Cómodo','El Básico Libre','Sin Pretensiones','De Cada Día','Sin Complicar',
        'Lo Relajado','Moda Sin Estrés Neutro','Lo Cotidiano','Simple & Punto','Lo Normal','Lo Descomplicado','De Siempre','Lo Ligero','Lo Diario','Chic & Simple',
        'Everyday Co.','Plain & Simple','The Basics Lab','Common Thread','Good Wear','Daily Cuts','Standard Issue','Easy Label','The Casual Co.','Plain District',
        'The Sunday Co.','Flat & Easy','Common Wear','The Good Label','Simple District','Daily Thread','The Easy Brand','Plain Basics','Common Style','The Flat Label',
        'Simple Wear','Daily Basics','The Common Co.','Plain Thread','Easy District','Daily Style','The Simple Brand','Common Basics','The Easy Wear','Laidback Wear'
      ]
    },
    deportiva: {
      femenino: [
        'Activa','La Potencia','Mujer en Movimiento','Fuerza Femenina','La Atleta','Fuerte & Bella','Activa Sport','La Campeona','Poder Femenino','La Corredora',
        'En Movimiento','La Ganadora','Fuerza & Gracia','Activa Mujer','La Deportista','La Resistencia','Mujer Activa','La Velocidad','Ella Corre','Fuerza Total',
        'Motion She','Pulse Active She','SwiftWear She','MoveFit She','Active She','Flow Sports She','Core Active She','Peak Wear She','Drive She','Sprint She',
        'La Fitness','Activa Flow','La Maratonista','Sport & Gracia','La Potencia Femenina','Activa Studio','La Campeona Sport','Poder Sport','Sport Ella','Entrena Ella',
        'Motion Lab','Pulse Active','SwiftWear','The Athletic Co.','Active District','Kinetic Wear','The Movement Co.','Core Active','Peak Wear','Drive Athletics'
      ],
      masculino: [
        'El Atleta','Fuerza Total','Rendimiento','Sin Límites Sport','El Campeón','Potencia Mx','Activo Pro','El Corredor','Fuerza Bruta','El Deportista',
        'En Forma','El Ganador','Fuerza & Velocidad','Activo Hombre','El Maratonista','La Resistencia Hombre','Hombre Activo','El Fitness Hombre','Activo Flow','El Corre',
        'Motion Him','Pulse Active Him','SwiftWear Him','MoveFit Him','Active Him','Flow Sports Him','Core Active Him','Peak Wear Him','Drive Him','Sprint Him',
        'La Potencia Masculina','Activo Studio','El Campeón Sport','Poder Sport Hombre','El Corredor Elite','Él Entrena','Sport Masculino','El Atleta Pro','Sin Pausa Sport','Bruta Fuerza',
        'Motion Lab','Sprint Lab','Active Nova','The Performance Co.','Motion Base','Pulse Wear','Swift Active','The Athlete Label','Move District','Active Flow'
      ],
      unisex: [
        'En Movimiento','La Energía','Sin Límites','Fuerza Colectiva','El Rendimiento','Potencia','La Resistencia','Sin Fronteras Sport','El Atletismo','La Velocidad Neutra',
        'En Forma Neutro','Fuerza & Velocidad Neutra','El Maratonista Neutro','Sport Neutro','La Resistencia Neutra','Activo Colectivo','Fuerza Total Neutra','El Fitness Neutro','Activo Flow Neutro','La Potencia Neutra',
        'Motion Lab','Pulse Active','SwiftWear','The Athletic Co.','MoveFit','Active District','Kinetic Wear','Flow Sports','The Movement Co.','Core Active',
        'Peak Wear','Drive Athletics','Sprint Lab','Active Nova','The Performance Co.','Motion Base','Pulse Wear','Swift Active','The Athlete Label','Move District',
        'Active Flow','Kinetic Lab','The Sprint Brand','Core Wear','Peak Active','Drive Wear','Motion Active','Pulse Lab','Swift District','The Core Brand'
      ]
    },
    sostenible: {
      femenino: [
        'La Consciente','Tierra & Ella','Raíces Verdes','Moda Honesta','La Natural','Verde Mujer','Eco Ella','La Sostenible','Con Conciencia','Fibra Natural',
        'La Orgánica','Raíces & Fibra','Moda Limpia','La Pura','Eco Femenino','La Ecológica','Con Propósito','Fibra Pura','La Verde','Ella Natural',
        'Earth Thread She','Green Stitch She','The Eco Label She','Nature Wear She','Roots & Fiber She','Terra Wear She','EcoThread She','Green Grain She','Verdant She','Pure Thread She',
        'Fibra Honesta','Verde Flow','La Orgánica Natural','Eco & Gracia','Ella Consciente','La Natural Femenina','Eco Studio Mujer','La Consciente Mujer','Tierra Verde Ella','Raíces Mujer',
        'Earth Thread','Green Stitch','The Eco Label','Nature Wear','Roots & Fiber','Terra Wear','EcoThread Co.','The Conscious Cloth','Green Grain','Verdant Label'
      ],
      masculino: [
        'El Consciente','Tierra & Él','Raíces Verdes Hombre','Moda Honesta Hombre','El Natural','Verde Hombre','Eco Él','El Sostenible','Con Conciencia Hombre','Fibra Natural Hombre',
        'El Orgánico','Raíces & Fibra Hombre','Moda Limpia Hombre','El Puro','Eco Masculino','El Ecológico','Con Propósito Hombre','Fibra Pura Hombre','El Verde','Él Natural',
        'Earth Thread Him','Green Stitch Him','The Eco Label Him','Nature Wear Him','Roots & Fiber Him','Terra Wear Him','EcoThread Him','Green Grain Him','Verdant Him','Pure Thread Him',
        'Fibra Honesta Hombre','Verde Flow Hombre','El Orgánico Natural','Eco & Fuerza','Él Consciente','El Natural Masculino','Eco Studio Hombre','El Consciente Hombre','Tierra Verde Él','Raíces Hombre',
        'Earth Thread','Green Stitch','The Eco Label','Nature Wear','Roots & Fiber','Terra Wear','EcoThread Co.','The Conscious Cloth','Green Grain','Verdant Label'
      ],
      unisex: [
        'La Conciencia','Tierra & Moda','Raíces Verdes Neutro','Moda Honesta Neutra','Lo Natural','Verde Neutro','Eco Neutro','Lo Sostenible','Con Conciencia Neutra','Fibra Natural Neutra',
        'Lo Orgánico','Raíces & Fibra Neutra','Moda Limpia Neutra','Lo Puro','Eco Neutro Studio','Lo Ecológico','Con Propósito Neutro','Fibra Pura Neutra','Lo Verde','Neutro Natural',
        'Earth Thread','Green Stitch','The Eco Label','Nature Wear','Roots & Fiber','Terra Wear','EcoThread Co.','The Conscious Cloth','Green Grain','Verdant Label',
        'Pure Thread','The Earth Co.','Green Roots','Natural Stitch','Eco Grain','The Verdant Brand','Terra Thread','Green Fiber','The Pure Label','Earth Stitch',
        'Natural Wear','Eco Roots','The Green Cloth','Terra Label','Green Thread','Natural Grain','Eco Cloth','The Earth Brand','Verdant Wear','The Eco Wear'
      ]
    },
    infantil: {
      femenino: [
        'La Pequeña','Mini Ella','Chiquita Moda','Niñas & Co.','La Princesita','Pequeña Diva','Mini Chic','La Nena','Pequeña Reina','La Muñequita',
        'Mini Flores','Chiquita Chic','Niñas Felices','Pequeña Flor','La Pequeña Diva','Colorines Ella','La Pequeña Estrella','Mini Ella Chic','Chiquita Bonita','La Nena Chic',
        'Little She','Tiny Girl','Mini Girl','The Kids Girl','Junior Girl','Fun She','Little Diva','Tiny Diva','Mini Diva','The Mini She',
        'La Princesa Pequeña','Mini Reina','Chiquita Reina','Niñas Reinas','Pequeña Mariposa','La Pequeña Mariposa','Mini Mariposa','La Nena Mariposa','Colorines Mariposa','Pequeña Estrella Flores',
        'Little Wear She','Tiny Lab She','Mini Lab She','The Kids Brand She','Junior Brand She','Peques Wear She','Little Lab She','Fun Wear Lab She','Tiny Wear She','The Mini Wear She'
      ],
      masculino: [
        'El Pequeño','Mini Él','Chiquito Moda','Niños & Co.','El Principito','Pequeño Crack','Mini Cool','El Nene','Pequeño Rey','El Muñequito',
        'Mini Carros','Chiquito Cool','Niños Felices','Pequeño León','El Pequeño Crack','Colorines Él','El Pequeño Campeón','Mini Él Cool','Chiquito Bacán','El Nene Cool',
        'Little Him','Tiny Boy','Mini Boy','The Kids Boy','Junior Boy','Fun Him','Little Crack','Tiny Crack','Mini Crack','The Mini Him',
        'El Príncipe Pequeño','Mini Rey','Chiquito Rey','Niños Reyes','Pequeño Tiburón','El Pequeño Tiburón','Mini Tiburón','El Nene Tiburón','Colorines Tiburón','Pequeño Campeón Carros',
        'Little Wear Him','Tiny Lab Him','Mini Lab Him','The Kids Brand Him','Junior Brand Him','Peques Wear Him','Little Lab Him','Fun Wear Lab Him','Tiny Wear Him','The Mini Wear Him'
      ],
      unisex: [
        'Los Pequeños','Mini Todos','Chiquitos Moda','Niños & Niñas','Los Principitos','Pequeños & Co.','Mini Colores','Los Nenes','Colorines','Pequeños Reyes',
        'Los Muñequitos','Mini Juegos','Chiquitos Colores','Niños Felices Neutro','Pequeños Colores','Mini Todos Studio','Los Nenes Colores','Colorines Neutro','Pequeños Campeones','La Pequeña Pandilla',
        'Little Wear','Tiny Lab','Mini Lab','The Kids Brand','Junior Brand','Peques Wear','Little Lab','Fun Wear Lab','Tiny Wear','The Mini Wear',
        'Junior Wear','Peques Lab','The Little Wear','Tiny Wardrobe','Mini Wardrobe','The Kids Wear','Junior Wardrobe','Peques Wardrobe','Little Threads','Fun Lab',
        'Tiny Style','The Mini Style','Junior Style','Peques Style','The Little Style','Tiny Label','Mini Label','Kids Label','The Junior Label','Little Label'
      ]
    }
  },

  cafe: {
    specialty: [
      'Brew Lab','The Roast Co.','Origin Coffee','Bean District','Single Source','The Grind Lab','Brew District','Craft & Cup','Black Brew Co.','Third Wave Coffee',
      'The Roaster Co.','Bean & Bloom','The Origin Cup','Roast District','Single Origin Co.','The Craft Roast','Bean Lab','Brew & Bloom','The Grind Co.','Origin Roast',
      'The Single Cup','Bean Craft','Brew Base','The Roast Lab','Origin District','Single Brew','The Bean Co.','Roast & Bloom','The Craft Cup','Bean Origin',
      'The Specialty Roast','Origin Lab','Bean Nova','Brew Nova','The Roast Nova','Origin Nova','Single Nova','The Bean Nova','Roast Nova','The Craft Nova',
      'Bean Base','Brew Craft','The Roast Base','Origin Base','Single Base','The Bean Base','Roast Base','The Craft Base','Bean Sync','Brew Sync',
      'The Roast Sync','Origin Sync','Single Sync','The Bean Sync','Roast Sync','The Craft Sync','Bean Grid','Brew Grid','The Roast Grid','Origin Grid',
      'Single Grid','The Bean Grid','Roast Grid','The Craft Grid','Bean Flow','Brew Flow','The Roast Flow','Origin Flow','Single Flow','The Bean Flow',
      'Roast Flow','The Craft Flow','Bean Room','Brew Room','The Roast Room','Origin Room','Single Room','The Bean Room','Roast Room','The Craft Room',
      'Bean Atelier','Brew Atelier','The Roast Atelier','Origin Atelier','Single Origin Bar','The Bean Atelier','Roast Atelier','The Craft Atelier','Bean Shop','Brew Shop',
      'The Roast Shop','Origin Shop','Single Shop','The Bean Shop','Roast Shop','The Craft Shop','Bean Bar','Brew Bar','The Roast Bar','Origin Bar'
    ],
    bookstore: [
      'Paginas & Cafe','The Book & Brew','Read & Sip','Cafe Literario','Coffee & Pages','The Reading Room','Ink & Espresso','Libro & Latte','Chapter One Coffee','The Novel Cup',
      'Pages & Pours','Words & Waves','The Literary Brew','Coffee & Words','Read & Roast','The Page Turner','Ink & Brew','Libro Cafe','Chapter & Cup','The Story Brew',
      'Words & Coffee','Read District','The Bookish Cup','Ink & Latte','Coffee Chapter','The Novel Brew','Pages & Blend','Words & Roast','The Reading Cup','Ink District',
      'The Literary Cup','Book & Roast','Read & Blend','Cafe del Libro','Coffee & Pages2','The Reading Roast','Ink & Blend','Libro & Brew','Chapter Coffee','The Novel Roast',
      'Pages & Coffee','Words & Brew','The Literary Roast','Coffee & Ink','Read & Brew','The Page Cup','Ink & Coffee','Libro & Blend','Chapter Blend','The Story Cup',
      'Words & Blend','Read Lab','The Bookish Brew','Ink & Cup','Coffee & Books','The Novel Lab','Pages & Lab','Words & Lab','The Reading Lab','Ink Lab',
      'The Literary Lab','Book & Blend','Read & Cup','Cafe & Paginas','Coffee & Letras','The Reading Blend','Ink & Roast','Libro & Cup','Chapter Roast','The Novel Blend',
      'Pages & Roast','Words & Cup','The Literary Blend','Coffee & Blend','Read & Roast2','The Page Blend','Ink & Roast2','Libro & Roast','Chapter Cup','The Story Blend',
      'Words & Roast2','Read Blend','The Bookish Blend','Ink & Blend2','Coffee & Blend2','The Novel Cup2','Pages & Cup','Words & Cup2','The Reading Cup2','Ink Cup',
      'The Literary Cup2','Book & Cup','Read & Cup2','Cafe Paginas','Coffee Letras','The Bibliocafe','Ink & Pages','Libro & Pages','Chapter Pages','The Story Pages'
    ],
    work: [
      'The Work Cup','Brew & Do','Focus Coffee Co.','The Desk & Brew','Work Grounds','The Hub Coffee','Plug & Pour','Connect Coffee','The Focus Lab','Daily Grind Co.',
      'Grid Coffee','Flow & Brew','The Work Brew','Focus & Flow','The Desk Cup','Work & Roast','The Hub Brew','Connect & Sip','The Flow Cup','Daily Brew Co.',
      'Grid & Grind','The Work Lab','Focus District','The Grind Hub','Work & Blend','The Desk Roast','Hub & Grind','Connect Brew','The Focus Cup','Daily Hub Coffee',
      'The Work Room','Focus Room','The Hub Room','Connect Room','The Desk Room','Workspace Cafe','Grid Room','Flow Room','The Focus Room','Daily Room',
      'The Work Base','Focus Base','The Hub Base','Connect Base','The Desk Base','The Cowork Cafe','Grid Base','Flow Base','The Focus Base','Daily Base',
      'The Work Nova','Focus Nova','The Hub Nova','Connect Nova','The Desk Nova','The Plug Cafe','Grid Nova','Flow Nova','The Focus Nova','Daily Nova',
      'The Work Lab','Focus Lab','The Hub Lab','Connect Lab','The Desk Lab','Work Lab','Grid Lab','Flow Lab','The Focus Lab','Daily Lab',
      'The Work Grid','Focus Grid','The Hub Grid','Connect Grid','The Desk Grid','Work Grid','The Grid Cafe','Flow Grid','The Focus Grid','Daily Grid',
      'The Work Blend','Focus Blend','The Hub Blend','Connect Blend','The Desk Blend','Work Blend','Grid Blend','Flow Blend','The Focus Blend','Daily Blend',
      'The Work Bar','Focus Bar','The Hub Bar','Connect Bar','The Desk Bar','Work Bar','Grid Bar','Flow Bar','The Focus Bar','Daily Bar'
    ],
    vintage: [
      'La Vieja Taza','Retro Brew Co.','The Antique Cup','Vintage Grounds','The Old Pour','Nostalgia Coffee','Ye Olde Brew','The Timeless Cup','Retro & Roast','The Classic Pour',
      'Old World Coffee','La Taza del Tiempo','The Vintage Roast','Retro District','The Old Grind','Nostalgia Brew','The Antique Roast','Vintage Cup Co.','The Retro Blend','Old School Coffee',
      'The Heritage Cup','Retro Grounds','The Classic Brew','Vintage Blend Co.','The Old Cafe','Nostalgia Roast','Antique Grounds','The Retro Cup','Vintage Roast Co.','The Classic Grind',
      'Old Fashioned Coffee','La Taza Antigua','The Vintage Blend','Retro Cafe','The Old Roast','Nostalgia Grounds','The Antique Blend','Vintage Grounds','The Retro Roast','Old Time Coffee',
      'The Heritage Brew','Retro Lab','The Classic Lab','Vintage District','The Old Lab','Nostalgia Lab','The Antique Lab','Vintage Studio','The Retro Lab','Old Craft Coffee',
      'The Heritage Lab','Retro Nova','The Classic Nova','Vintage Nova','The Old Nova','Nostalgia Nova','The Antique Nova','Vintage Bar','The Retro Nova','Old Style Coffee',
      'The Heritage Nova','Retro Base','The Classic Base','Vintage Base','The Old Base','Nostalgia Base','The Antique Base','Vintage Room','The Retro Base','Old Pour Coffee',
      'The Heritage Base','Retro Room','The Classic Room','Vintage Room','The Old Room','Nostalgia Room','The Antique Room','Vintage Grid','The Retro Room','Old Brew Coffee',
      'The Heritage Room','Retro Grid','The Classic Grid','Vintage Grid','The Old Grid','Nostalgia Grid','The Antique Grid','Vintage Flow','The Retro Grid','Old Grind Coffee',
      'The Heritage Grid','Retro Flow','The Classic Flow','Vintage Flow','The Old Flow','Nostalgia Flow','The Antique Flow','Vintage Atelier','The Retro Flow','Old Blend Coffee'
    ],
    moderno: [
      'Minimal Cup','The Clean Brew','White Space Coffee','Pure Ground','The Quiet Cup','Still Coffee Co.','Form & Filter','The Modern Pour','Simple Grounds','The Clear Cup',
      'Void Coffee','Clean Pour Co.','The Pure Roast','Minimal Brew','The Simple Cup','Clean District','White Cup Co.','The Form Brew','Pure Blend','Minimal Roast',
      'The Clean Cup','White Grounds','Still Roast','The Pure Blend','Minimal District','Clean Blend Co.','The Simple Roast','White Filter','Pure Cup Co.','The Minimal Grind',
      'The Modern Cup','Clean Lab','White Lab','Pure Lab','The Quiet Lab','Still Lab','Form Lab','The Modern Lab','Simple Lab','The Clear Lab',
      'Void Lab','Clean Lab','The Pure Lab','Minimal Lab','The Simple Lab','Form Lab','White Lab','The Form Lab','Pure Lab','The Minimal Lab',
      'The Modern Nova','Clean Nova','White Nova','Pure Nova','The Quiet Nova','Still Nova','Form Nova','The Form Nova','Simple Nova','The Clear Nova',
      'Void Nova','The Pure Nova','Minimal Nova','The Simple Nova','White Nova','The Form Room','Pure Room','Minimal Nova','The Simple Room','Clear Room',
      'The Modern Base','Clean Base','White Base','Pure Base','The Quiet Base','Still Base','Form Base','The Form Base','Simple Base','The Clear Base',
      'Void Base','The Pure Base','Minimal Base','The Simple Base','White Base','The Form Strip','Pure Strip','Minimal Strip','The Simple Strip','Clear Strip',
      'The Modern Room','Clean Room','White Room','Pure Room','The Quiet Room','Still Room','Form Room','The Form Studio','Simple Room','The Clear Room'
    ],
    familiar: [
      'Casa & Cafe','El Rincon','La Esquina del Cafe','Home Brew Co.','La Sala','El Nido','Casa Caliente','El Hogar','Barrio Cafe','La Vecindad',
      'El Patio','Casa de Cafe','La Casita','El Fogon Cafe','Casa Buena Coffee','La Tertulia','El Zaguan','Casa Familiar Cafe','La Porcion','El Corredor',
      'Casa Abierta','La Reunion','El Buen Cafe','Casa de Todos','La Calidez','El Cafecito','Casa Dulce','La Sobremesa','El Refugio','Casa Calor',
      'El Rinconcito','La Casona','Casa & Taza','El Patio Cafe','La Sala de Cafe','El Nidito','Casa Abuela','El Hogar Cafe','Barrio Caliente','La Vecindad Cafe',
      'El Patiecito','Casa del Barrio','La Casita Cafe','El Fogoncito','Casa Buena','La Tertulia Cafe','El Zaguan Cafe','Casa Familiar','La Porcion Cafe','El Corredor Cafe',
      'Casa Abierta','La Reunion Cafe','El Buen Cafe','Casa de Todos','La Calidez Cafe','El Cafecito','Casa Dulce','La Sobremesa Cafe','El Refugio Cafe','Casa Calor',
      'El Rinconcito','La Casona','Casa & Taza','El Patio Bonito','La Sala Bonita','El Nidito','Casa Abuela','El Hogar Bonito','Barrio Caliente','La Vecindad Bonita',
      'El Patio Chico','Casa del Barrio Nuevo','La Casita Linda','El Fogon Familiar','Casa Buena Vista','La Tertulia Linda','El Zaguan Lindo','Casa Linda','La Porcion Linda','El Corredor Lindo',
      'Casa Abierta Linda','La Reunion Linda','El Buen Sabor','Casa de Familia','La Calidez Linda','El Cafecito Lindo','Casa Dulce Linda','La Sobremesa Linda','El Refugio Lindo','Casa Caliente',
      'El Rinconcito Lindo','La Casona Linda','Casa & Taza Linda','El Patio Nuevo','La Sala Nueva','El Nidito Nuevo','Casa Abuela Nueva','El Hogar Nuevo','Barrio Nuevo','La Vecindad Nueva'
    ]
  }
};

// ===================================================
// EXTRA NAME DATA — podcasts, tattoos (100 each)
// ===================================================

const extraNameData = {
  podcast: {
    negocios: [
      'El Tablero','Pitch & Go','La Sala de Juntas','Modo Fundador','Cero a Uno','El Metodo','Sin Filtro Empresarial','La Startup','Construye Grande','El Ciclo',
      'Pivote','Founders Talk','El Deal','La Reunion de Socios','Norte Empresarial','El Playbook','La Junta','Modo CEO','El Pitch','La Traccion',
      'Escala','El Inversor','La Ronda','Modo Startup','El KPI','La Vision','Negocios Sin Filtro','El Ecosistema','La Estrategia','El Fundador',
      'El Venture','La Aceleradora','Modo Unicornio','El Bootstrap','La Incubadora','Norte Emprendedor','El Angel','La Serie A','Modo Pivot','El Producto',
      'La Iteracion','El Growth','La Conversion','Modo Scale','El Churn','La Retencion','Norte Digital','El Funnel','La Adquisicion','Modo Lean',
      'El Sprint Bizz','La Retrospectiva','Modo Agile','El Roadmap','La Monetizacion','Norte Fintech','El Revenue','La Valuacion','Modo Exit','El Due Diligence',
      'La Cap Table','Norte Venture','El Term Sheet','La Dilution','Modo Founder','El Cofounder','La Cultura Startup','Norte Cultura','El Onboarding','La Fidelizacion',
      'Modo Remoto','El Equipo','La Contratacion','Norte Talento','El Performance','La Review','Modo OKR','El Quarter','La Meta','Norte Meta',
      'El Resultado','La Medicion','Modo Data','El Dashboard','La Metrica','Norte Metrica','El Benchmark','La Comparacion','Modo Competencia','El Mercado',
      'La Oportunidad','Norte Oportunidad','El Timing','La Ejecucion','Modo Ejecutar','El Lanzamiento','La Traccion2','Norte Traccion','El Momentum','La Escalabilidad'
    ],
    tecnologia: [
      'El Bit','Codigo Abierto','The Tech Lab','Debugger','La IA Explica','Circuit Break','Root Access','The Dev Loop','Kernel Panic','Tech Decoded',
      'Zero Day','The Stack','Commit','The API','Deploy Friday','Bug Report','The Terminal','Push to Main','The Sandbox','Stack Overflow Talk',
      'The Pipeline','Code Review','The Repository','Fork & Merge','The Compiler','Runtime','The Debug Session','Open Source Talk','The Algorithm','Binary Talk',
      'The Pull Request','Merge Conflict','The Branch','Git Push','The Docker','Kubernetes Talk','The Cloud Native','Serverless Talk','The Microservice','API First',
      'The Dev Ops','CI CD Talk','The Automation','Infrastructure Talk','The Platform','SRE Talk','The Observability','Monitoring Talk','The Security','Zero Trust Talk',
      'The Blockchain','Web3 Decoded','The NFT Lab','DeFi Talk','The Metaverse','AR VR Lab','The Quantum','Quantum Talk','The Edge Computing','IoT Talk',
      'The Machine Learning','Deep Learning Talk','The Neural Net','AI First','The Data Science','Analytics Talk','The Big Data','Data Lake Talk','The Feature Store','MLOps Talk',
      'The Product Tech','Tech PM Talk','The Design System','UX Engineering','The Frontend','React Talk','The Backend','Node Talk','The Full Stack','DevX Talk',
      'The Mobile Dev','App Talk','The Game Dev','Unity Talk','The Embedded','Hardware Talk','The Networking','Protocol Talk','The Database','SQL NoSQL Talk',
      'The Testing','QA Talk','The Refactor','Clean Code Talk','The Architecture','System Design','The Scalability','Performance Talk','The Reliability','Uptime Talk'
    ],
    lifestyle: [
      'Vivir Bien','La Rutina Perfecta','Modo Slow','El Equilibrio','Vive con Intencion','Tu Mejor Version','La Pausa','Ritual Diario','Flujo Natural','Brujula Vital',
      'El Ritmo','Modo On','La Practica','El Proceso','Vivir Pleno','La Consciencia','Modo Presente','El Habito','La Claridad','Vida Disenada',
      'El Enfoque','La Pauta','Modo Calma','El Proposito','La Frecuencia','Vida Intencionada','El Ancla','La Practica Diaria','Modo Vital','El Sentido',
      'La Mindfullness','Modo Zen','El Bienestar','La Plenitud','Vivir Mejor','El Descanso','La Energia','Modo Recarga','El Movimiento','La Nutricion',
      'Modo Salud','El Cuerpo','La Mente','Modo Mental','El Alma','La Espiritualidad','Modo Espiritual','El Proposito2','La Mision','Modo Mision',
      'El Legado','La Huella','Modo Legado','El Impacto','La Diferencia','Modo Diferente','El Camino','La Ruta','Modo Ruta','El Destino',
      'La Meta2','Modo Meta','El Sueno','La Vision2','Modo Vision','El Objetivo','La Intencion','Modo Intencion','El Foco','La Atencion',
      'Modo Atencion','El Presente','La Consciencia2','Modo Consciente','El Ahora','La Gratitud','Modo Gratitud','El Amor Propio','La Autoestima','Modo Autoestima',
      'El Crecimiento','La Evolucion','Modo Evolucion','El Aprendizaje2','La Mejora','Modo Mejora','El Progreso','La Transformacion','Modo Transformacion','El Cambio',
      'La Aceptacion','Modo Aceptar','El Perdon','La Liberacion','Modo Libre','El Flujo','La Abundancia','Modo Abundancia','El Exito','La Felicidad'
    ],
    entretenimiento: [
      'Sin Guion','Off the Record','Caos Controlado','El Chisme Fino','La Cabina','Modo Libre','Randoms','El Recreo','Sin Censura','El Loop',
      'Onda Libre','Modo Random','La Tertulia','El Show','Fuera de Contexto','La Broma','Modo Podcast','El Descontrol','La Risa','Sin Protocolo',
      'El Ruido','La Antena','Modo Caos','El Sketch','Fuera del Aire','La Pausa Comercial','Sin Editar','El Microfono Libre','La Comedia','Modo Off',
      'El Chascarrillo','La Carcajada','Modo Humor','El Chiste','La Broma Pesada','Sin Filtros','El Despapaye','La Locura','Modo Loco','El Desmadre',
      'La Fiesta','Modo Fiesta','El Cotorreo','La Pachanga','Sin Formalidades','El Reventón','La Chupe','Modo Festejo','El Pedo','La Peda',
      'El Choro','La Plática','Modo Plática','El Cotilleo','La Habladera','Sin Verguenza','El Mitote','La Chismografia','Modo Gossip','El Escandalo',
      'La Novela','Modo Novela','El Drama','La Telenovela','Sin Drama','El Cuento','La Historia','Modo Historia','El Relato','La Anecdota',
      'Modo Anecdota','El Recuerdo','La Nostalgia','Modo Nostalgia','El Clasico','La Memoria','Modo Retro','El Pasado','La Decada','Modo Decada',
      'El Trend','La Tendencia','Modo Trend','El Viral','La Cultura Pop','Modo Pop','El Meme','La Internet','Modo Internet','El TikTok',
      'La Reaccion','Modo Reaccion','El Review','La Opinion','Modo Opinion','El Debate','La Discusion','Modo Debate','El Argumento','La Postura'
    ],
    educacion: [
      'Aprende y Listo','La Clase Magistral','Mente Activa','El Saber No Ocupa','Curiosidad Infinita','La Conferencia','Datos Duros','El Ensayo',
      'Archivo Abierto','La Fuente','Capsula Cultural','Mente Expandida','El Conocimiento','La Pregunta','Aprende Mas','El Concepto',
      'La Leccion','Datos & Contexto','El Aprendizaje','La Investigacion','Mente Critica','El Documento','La Biblioteca','Datos en Vivo','El Analisis',
      'La Cita','Saber Popular','El Teorema','La Evidencia','Mente Abierta',
      'El Aula','La Pedagogia','Modo Educar','El Tutor','La Ensenanza','Sin Limites Edu','El Seminario','La Disertacion','Modo Aprender','El Estudio',
      'La Tesis','Modo Tesis','El Ensayo2','La Monografia','Sin Tarea','El Proyecto','La Investigacion2','Modo Investigar','El Experimento','La Hipotesis',
      'Modo Hipotesis','El Descubrimiento','La Innovacion','Modo Innovar','El Avance','La Ciencia','Modo Ciencia','El Lab Edu','La Tecnologia Edu','Modo STEM',
      'El Codigo Edu','La Matematica','Modo Matematica','El Algebra','La Geometria','Sin Formulas','El Calculo','La Fisica','Modo Fisica','El Universo',
      'La Quimica','Modo Quimica','El Elemento','La Biologia','Modo Biologia','El Gen','La Celula','Sin Microscopio','El ADN','La Evolucion Edu',
      'Modo Evolucion Edu','El Darwin','La Historia Edu','Modo Historia','El Pasado Edu','La Civilizacion','Sin Fronteras Edu','El Arte Edu','La Musica Edu','Modo Arte'
    ],
    deportes: [
      'El Vestuario','Modo Atleta','La Cancha','Zona de Entrenamiento','Full Gas','Sin Excusas','El Sprint','Cuerpo y Mente','La Resistencia','Ritmo Cardiaco',
      'Peak Performance','El Partido','La Marca Personal','Zona de Juego','El Record','La Tactica','Modo Competicion','El Entrenador','La Jugada','Full Court',
      'El Podio','La Remontada','Modo Pro','El Maraton','La Final','Zona de Goles','El Entrenamiento','La Carrera','Modo Campeon','El Juego',
      'La Semifinal','El Clasico Deportivo','Modo Liga','El Campeonato','La Temporada','Sin Lesiones','El Musculo','La Fuerza','Modo Fuerza','El Peso',
      'La Resistencia2','Modo Resistencia','El Cardio','La Velocidad','Modo Velocidad','El Tiempo','La Marca','Sin Limite','El Maximo','La Cumbre',
      'Modo Cumbre','El Ascenso','La Cima','Sin Techo','El Limite','La Superacion','Modo Superar','El Reto','La Prueba','Modo Prueba',
      'El Desafio','La Competencia','Modo Competir','El Rival','La Victoria','Sin Derrota','El Triunfo','La Medalla','Modo Medalla','El Oro',
      'La Plata','Modo Bronce','El Podio2','La Clasificacion','Sin Eliminacion','El Torneo','La Liga','Modo Liga2','El Equipo2','La Alineacion',
      'Modo Alineacion','El Tecnico','La Estrategia2','Sin Plan B','El Sistema','La Formacion','Modo Formacion','El Posicionamiento','La Presion','Modo Presion',
      'El Futbol','La NBA','Modo NFL','El Beisbol','La F1','Sin Limite2','El Boxeo','La MMA','Modo UFC','El Atletismo'
    ],
    'true-crime': [
      'Caso Abierto','La Escena','Crimen y Silencio','Sin Resolver','El Expediente','Bajo Sospecha','La Pista Fria','Archivo Criminal','El Testigo','Sombras',
      'La Ultima Llamada','En la Oscuridad','El Sospechoso','La Evidencia','Caso Cerrado','La Autopsia','El Detective','Sin Coartada','La Confesion','El Archivo Secreto',
      'La Victima','Bajo la Superficie','El Culpable','La Investigacion','Sin Huellas','El Movil','La Escena del Crimen','Caso Sin Resolver','El Perfil','La Trampa',
      'El Forense','La Pericia','Sin Rastro','El Cadaver','La Morgue','Sin Testigos','El Juicio','La Sentencia','Modo Culpable','El Veredicto',
      'La Apelacion','Sin Apelacion','El Abogado','La Fiscalia','Modo Fiscal','El Defensor','La Corte','Sin Jurado','El Carcelero','La Prision',
      'Modo Libre','El Fugitivo','La Busqueda','Sin Captura','El Prófugo','La Caceria','Modo Caceria','El Perseguidor','La Persecucion','Sin Escape',
      'El Encubrimiento','La Conspiracion','Sin Verdad','El Secreto','La Mentira','Modo Mentira','El Engano','La Manipulacion','Sin Piedad','El Monstruo',
      'La Maldad','Modo Oscuro','El Perfil Criminal','La Psicologia','Sin Empatia','El Sociópata','La Psicopatia','Modo Criminal','El Asesino','La Victima2',
      'Bajo Cero','El Caso Frio','La Pista Caliente','Sin Descanso','El Interrogatorio','La Presion2','Modo Presion2','El Crack del Caso','La Revelacion','Sin Salida',
      'El Final','La Verdad','Modo Verdad','El Cierre','La Justicia','Sin Justicia','El Sistema','La Falla','Modo Sistema','El Caso'
    ],
    finanzas: [
      'Tu Dinero Trabaja','Inversion 101','El Portafolio','Finanzas Sin Drama','Dinero Inteligente','El Interes','La Hoja de Ruta','Money Talk',
      'Cero Deudas','El Activo','Flujo de Caja','La Renta','El Rendimiento','La Tasa','Finanzas Reales','El Dividendo',
      'La Liquidez','Modo Inversion','El Capital','La Plusvalia','Finanzas al Dia','El Presupuesto','La Cartera','Modo FIRE','El Ahorro',
      'La Inflacion','Dinero Real','El Fondo','La Estrategia Financiera','El Patrimonio',
      'El Pasivo','La Amortizacion','Modo Deuda','El Credito','La Hipoteca','Sin Hipoteca','El Prestamo','La Tasa del Dinero','Modo Tasa','El Interes Compuesto',
      'La Comision','Sin Comision','El Banco','La Cuenta','Modo Banco','El Ahorro Inteligente','La Meta Financiera','Sin Meta','El Objetivo Financiero','La Planificacion',
      'Modo Planificar','El Retiro','La Jubilacion','Sin Trabajo','El FIRE','La Independencia','Modo Independiente','El Ingreso Pasivo','La Renta Pasiva','Sin Jefe',
      'El ETF','La Bolsa','Modo Bolsa','El Indice','La Accion','Sin Fees','El Bono','La Renta Fija','Modo Fijo','El Crypto',
      'La Bitcoin','Modo Crypto','El Blockchain','La DeFi','Sin Banco','El Staking','La Yield','Modo Yield','El APY','La Liquidez2',
      'El NFT Fin','La Tokenizacion','Modo Token','El Inmueble','La Renta Inmobiliaria','Sin Deuda','El Equity','La Valuacion2','Modo Valuacion','El Multiplo'
    ]
  },

  tattoo: {
    tradicional: [
      'Iron & Ink','Old Guard Tattoo','The Traditional Shop','Sailors Mark','Classic Iron','Red Flash Studio','Anchor & Dagger','The Flash Shop','Iron Classic','Bold Line Tattoo',
      'Heritage Ink','The Anchor Studio','Old Needle Co.','Flash & Dagger','The Iron Rose','Sailor Inspired Ink','Bold Flash Studio','The Old Guard','Iron Tradition','Classic Flash',
      'The Dagger & Rose','Old School Needle','Flash Classic','The Tradition Shop','Iron Rose Studio','Old Guard Ink','The Flash Room','Bold Tradition','Classic Anchor','Iron Heritage',
      'The Old Flash','Anchor Ink Studio','Bold Anchor','Iron & Dagger','The Classic Needle','Old Anchor Ink','Flash Iron Studio','Anchor Classic','Bold Iron','The Heritage Needle',
      'Old Flash Ink','Iron Anchor','The Classic Flash','Bold Heritage','Anchor Heritage','Iron Classic Shop','The Old Anchor','Flash Heritage','Bold Classic','The Iron Heritage',
      'Old Iron Ink','Anchor Flash','The Heritage Flash','Bold Flash Parlor','Iron Flash Studio','The Classic Anchor','Old Heritage Ink','Flash Anchor Studio','Bold Anchor Parlor','The Iron Flash',
      'Old Classic Needle','Anchor Iron Shop','The Heritage Anchor','Bold Iron Parlor','Iron Heritage Parlor','The Classic Iron','Old Bold Ink','Flash Classic Shop','Bold Heritage Parlor','Anchor Classic Shop',
      'The Iron Anchor','Old Needle Ink','Flash Bold Studio','Anchor Bold Studio','Iron Bold Studio','The Classic Bold','Old Flash Studio','Flash Iron Shop','Bold Iron Shop','The Heritage Iron',
      'Old Iron Studio','Anchor Iron Shop','Heritage Flash Parlor','Bold Flash Shop','Iron Classic Parlor','The Classic Heritage','Old Anchor Studio','Flash Classic Parlor','Bold Classic Shop','The Iron Classic',
      'Old Heritage Studio','Flash Iron Parlor','Anchor Heritage Shop','Iron Heritage Shop','The Heritage Classic','Old Classic Studio','Flash Heritage Shop','Bold Heritage Shop','Anchor Classic Parlor','Iron Bold Shop'
    ],
    realismo: [
      'Skin Canvas','True Skin Studio','The Realism Lab','Flesh & Art','Pixel Tattoo','The Detail Studio','Life Like Ink','Shadow & Light Tattoo','Hyper Ink','Fine Line Co.',
      'The Shading Room','Depth Studio','True Detail Ink','The Realism Room','Skin & Art','Hyper Detail Studio','The Fine Work','Life Like Studio','Shadow Realism','The Depth Room',
      'True Skin Lab','Fine Detail Co.','The Hyper Studio','Realism & Art','Skin Detail Ink','The True Work','Fine Shadow Studio','Hyper Skin','Detail & Art','The Realism Co.',
      'Flesh Studio','The Photo Realism','True Art Studio','Hyper Real Ink','The Skin Lab','Shadow Art Studio','Fine Art Ink','Life Like Co.','The Depth Studio','Realism Nova',
      'Skin Nova','True Nova','The Realism Nova','Flesh Nova','Hyper Nova','Shadow Nova','Fine Nova','Life Nova','Depth Nova','Detail Nova',
      'Skin House','True House','The Realism House','Flesh House','Hyper House','Shadow House','Fine House','Life House','Depth House','Detail House',
      'Skin Studio','True Studio','The Realism Studio','Flesh Studio','Hyper Studio','Shadow Studio','Fine Studio','Life Studio','Depth Studio','Detail Studio',
      'Skin Gallery','True Gallery','The Realism Gallery','Flesh Gallery','Hyper Gallery','Shadow Gallery','Fine Gallery','Life Gallery','Depth Gallery','Detail Gallery',
      'Skin Lab','True Lab','The Realism Lab','Flesh Lab','Hyper Lab','Shadow Lab','Fine Lab','Life Lab','Depth Lab','Detail Lab',
      'Skin Atelier','True Atelier','The Realism Atelier','Flesh Atelier','Hyper Atelier','Shadow Atelier','Fine Atelier','Life Atelier','Depth Atelier','Detail Atelier'
    ],
    japones: [
      'Irezumi Studio','The Dragon Scroll','Hori Studio','Koi & Wave','The Eastern Needle','Samurai Ink','Lotus Tattoo Co.','The Crane Studio','Oni Tattoo','Hannya Studio',
      'The Koi Room','Eastern Skin','The Dragon Room','Irezumi Co.','Hori Art Studio','The Wave Needle','Sakura Ink','The Samurai Room','Lotus & Dragon','The Eastern Art',
      'Oni & Hannya','The Koi Studio','Eastern Needle Co.','The Dragon Tattoo','Irezumi Art','Hori & Co.','The Lotus Room','Samurai Art Studio','The Eastern Wave','Koi & Crane',
      'The Oni Den','Hannya Art','Irezumi Lab','Hori Lab','The Koi Garden','Eastern Lab','The Dragon Den','Samurai Lab','Lotus Lab','The Wave Lab',
      'Oni Den','Hannya Lab','Irezumi Studio','Hori Studio','The Koi Studio','Eastern Studio','The Dragon Studio','Samurai Studio','Lotus Studio','The Wave Studio',
      'Oni Studio','Hannya Studio','Irezumi House','Hori House','The Koi House','Eastern House','The Dragon House','Samurai House','Lotus House','The Wave House',
      'Oni House','Hannya House','Irezumi Gallery','Hori Gallery','The Koi Gallery','Eastern Gallery','The Dragon Gallery','Samurai Gallery','Lotus Gallery','The Wave Gallery',
      'Oni Gallery','Hannya Gallery','Irezumi Atelier','Hori Atelier','The Koi Atelier','Eastern Atelier','The Dragon Atelier','Samurai Atelier','Lotus Atelier','The Wave Atelier',
      'Oni Atelier','Hannya Atelier','Irezumi Parlor','Hori Parlor','The Koi Parlor','Eastern Parlor','The Dragon Parlor','Samurai Parlor','Lotus Parlor','The Wave Parlor',
      'Oni Parlor','Hannya Parlor','Irezumi Ink','Hori Ink','The Koi Ink','Eastern Ink','The Dragon Ink','Samurai Ink','Lotus Ink','The Wave Ink'
    ],
    blackwork: [
      'Void Tattoo','The Black Room','Obsidian Ink','Dark Geometry','Blackout Studio','The Dotwork Lab','Negative Space Tattoo','Sacred Geometry','The Black Collective','Ink & Shadow',
      'Dark Matter Tattoo','The Void','Black Lines Studio','The Dot Room','Obsidian Art','Dark Pattern Ink','The Geometry Room','Blackwork Co.','Sacred Lines','The Black Lab',
      'Void & Lines','Dark Dot Studio','The Obsidian Room','Black Pattern Ink','Sacred Dot','The Dark Room','Void Lines Studio','Black Geometry','The Blackout Co.','Dark Sacred Ink',
      'The Void Lab','Obsidian Lab','Dark Lab','Black Lines Lab','Sacred Lab','Dot Lab','Geometry Lab','Negative Lab','Dark Matter Lab','Blackout Lab',
      'The Void Studio','Obsidian Studio','Dark Studio','Black Studio','Sacred Studio','Dot Studio','Geometry Studio','Negative Studio','Dark Matter Studio','Blackout Studio',
      'The Void House','Obsidian House','Dark House','Black House','Sacred House','Dot House','Geometry House','Negative House','Dark Matter House','Blackout House',
      'The Void Gallery','Obsidian Gallery','Dark Gallery','Black Gallery','Sacred Gallery','Dot Gallery','Geometry Gallery','Negative Gallery','Dark Matter Gallery','Blackout Gallery',
      'The Void Atelier','Obsidian Atelier','Dark Atelier','Black Atelier','Sacred Atelier','Dot Atelier','Geometry Atelier','Negative Atelier','Dark Matter Atelier','Blackout Atelier',
      'The Void Parlor','Obsidian Parlor','Dark Parlor','Black Parlor','Sacred Parlor','Dot Parlor','Geometry Parlor','Negative Parlor','Dark Matter Parlor','Blackout Parlor',
      'The Void Ink','Obsidian Ink','Dark Ink','Black Ink','Sacred Ink','Dot Ink','Geometry Ink','Negative Ink','Dark Matter Ink','Blackout Ink'
    ],
    neotradicional: [
      'The Illustrated Skin','Bold & Beautiful Tattoo','Neo Canvas','The Art Nouveau Studio','Illustrated Body','Bold Colors Co.','The New Classic','Neo Folk Tattoo',
      'The Storybook Tattoo','Vivid Ink Studio','The Gallery Tattoo','Neo Art Co.','The Bold Studio','Illustrated Classic','Neo & Bold','The New Tradition',
      'Vivid Color Studio','The Neo Classic','Bold Illustration','The Art Studio','Neo Tradition Ink','Vivid Folk Tattoo','The Bold Canvas','Illustrated Neo',
      'The Color Room','Neo Art Studio','Bold Neo Ink','The Vivid Studio','Illustrated Folk','Neo Classic Co.',
      'The Neo Lab','Vivid Lab','Bold Lab','Illustrated Lab','The Classic Lab','Neo Lab','Bold Colors Lab','The New Lab','Folk Lab','Color Lab',
      'The Neo Studio','Vivid Studio','Bold Studio','Illustrated Studio','The Classic Studio','Neo Studio','Bold Colors Studio','The New Studio','Folk Studio','Color Studio',
      'The Neo House','Vivid House','Bold House','Illustrated House','The Classic House','Neo House','Bold Colors House','The New House','Folk House','Color House',
      'The Neo Gallery','Vivid Gallery','Bold Gallery','Illustrated Gallery','The Classic Gallery','Neo Gallery','Bold Colors Gallery','The New Gallery','Folk Gallery','Color Gallery',
      'The Neo Atelier','Vivid Atelier','Bold Atelier','Illustrated Atelier','The Classic Atelier','Neo Atelier','Bold Colors Atelier','The New Atelier','Folk Atelier','Color Atelier',
      'The Neo Parlor','Vivid Parlor','Bold Parlor','Illustrated Parlor','The Classic Parlor','Neo Parlor','Bold Colors Parlor','The New Parlor','Folk Parlor','Color Parlor',
      'The Neo Ink','Vivid Ink','Bold Ink','Illustrated Ink','The Classic Ink','Neo Ink','Bold Colors Ink','The New Ink','Folk Ink','Color Ink'
    ],
    minimalista: [
      'The Thin Line','Minimal Marks','Fine & Delicate Tattoo','Less is More Ink','The Small Studio','Subtle Tattoo Co.','Clean Lines Studio','Micro Ink',
      'The Quiet Needle','Whisper Tattoo','Feather & Ink','Bare Skin Studio','The Fine Studio','Minimal Needle','The Delicate Room','Subtle Lines Co.',
      'Clean & Fine','The Micro Studio','Minimal Art Ink','The Fine Room','Subtle Marks','The Clean Needle','Minimal Fine Ink','The Whisper Studio',
      'Fine Marks Co.','The Subtle Room','Minimal Clean Ink','The Fine Line Studio','Subtle & Fine','Clean Marks Studio',
      'The Thin Lab','Minimal Lab','Fine Lab','Micro Lab','The Quiet Lab','Whisper Lab','Feather Lab','Bare Lab','Subtle Lab','Clean Lab',
      'The Thin Studio','Minimal Studio','Fine Studio','Micro Studio','The Quiet Studio','Whisper Studio','Feather Studio','Bare Studio','Subtle Studio','Clean Studio',
      'The Thin House','Minimal House','Fine House','Micro House','The Quiet House','Whisper House','Feather House','Bare House','Subtle House','Clean House',
      'The Thin Gallery','Minimal Gallery','Fine Gallery','Micro Gallery','The Quiet Gallery','Whisper Gallery','Feather Gallery','Bare Gallery','Subtle Gallery','Clean Gallery',
      'The Thin Atelier','Minimal Atelier','Fine Atelier','Micro Atelier','The Quiet Atelier','Whisper Atelier','Feather Atelier','Bare Atelier','Subtle Atelier','Clean Atelier',
      'The Thin Parlor','Minimal Parlor','Fine Parlor','Micro Parlor','The Quiet Parlor','Whisper Parlor','Feather Parlor','Bare Parlor','Subtle Parlor','Clean Parlor'
    ]
  }
};

// ===================================================
// PET NAME DATA — 100 names per animal + style combo
// ===================================================

const petNameData = {
  perro: {
    tiernos: [
      'Bolita','Mochi','Nube','Pompom','Coco','Canela','Mantequilla','Galleta','Brownie','Churro',
      'Caramelo','Azucar','Palomita','Bombom','Flan','Merengue','Natilla','Turrón','Mazapan','Tapioca',
      'Buñuelo','Miel','Dulzura','Pastelito','Cremita','Vainilla','Macaron','Soufflé','Creme','Brioche',
      'Croissant','Wafle','Pancake','Cookie','Cupcake','Muffin','Donut','Biscuit','Scone','Pretzel',
      'Cotton','Fluffy','Puffy','Snuggles','Cuddles','Bubbles','Doodle','Wiggles','Noodle','Giggles',
      'Squish','Bomboncito','Pebble','Button','Dimple','Pudding','Dumpling','Boba','Taro','Matcha',
      'Piña','Coquito','Maracuya','Naranjita','Limonada','Fresa','Durazno','Cereza','Ciruela','Guayaba',
      'Mamey','Tamarindo','Guanabana','Caimito','Pitahaya','Carambola','Rambutan','Lichi','Zapote','Nispero',
      'Frambuesa','Mora','Arandano','Uva','Pera','Manzana','Platano','Sandia','Melon','Papaya',
      'Chabacano','Higo','Datil','Granada','Kiwi','Mango','Cacahuate','Guanábana','Nance','Naranja'
    ],
    modernos: [
      'Nova','Kai','Luna','Zara','Remi','Sage','Finn','Blue','Ivy','Rio',
      'Neo','Axel','Zoe','Ash','Sky','Milo','Aria','Cruz','Levi','Nyx',
      'Orion','Vega','Atlas','Lyra','Cleo','Rex','Max','Leo','Ace','Beau',
      'Chase','Drake','Echo','Flynn','Grey','Hugo','Iggy','Jett','Knox','Lux',
      'Mack','Nash','Onyx','Penn','Quinn','Reef','Slate','Teal','Uma','Volt',
      'Wade','Xero','York','Zane','Blaze','Cade','Dash','Earl','Fern','Gage',
      'Halo','Indie','Jazz','Keen','Lane','Mesh','Nero','Opal','Pike','Quill',
      'Rave','Sable','Tide','Ursa','Vale','Wren','Xenon','Yule','Zen','Byte',
      'Cache','Dex','Flux','Grid','Hash','Icon','Java','Koda','Loop','Meta',
      'Node','Pixel','Query','Root','Sync','Tag','Unix','Vim','Web','Xhtml'
    ],
    clasicos: [
      'Max','Rex','Rocky','Toby','Charlie','Buddy','Jack','Cooper','Bear','Duke',
      'Tucker','Oliver','Leo','Louie','Bentley','Milo','Buster','Cody','Murphy','Oscar',
      'Sammy','Winston','Archie','Bailey','Sam','Theo','Jake','Hank','Zeus','Thor',
      'Apollo','Caesar','Diesel','Elvis','Frankie','Gordo','Harley','Ivan','Jasper','King',
      'Luca','Marco','Nero','Otto','Pedro','Quique','Romeo','Santiago','Tomas','Ulises',
      'Victor','Walter','Xavier','Yago','Zorro','Arturo','Beto','Carlos','Diego','Eduardo',
      'Fido','Gordito','Hector','Ignacio','Jorge','Kiko','Lorenzo','Manuel','Nicolas','Pablo',
      'Raul','Sebastian','Tito','Ubaldo','Vicente','William','Xolo','Yepes','Zapata','Alonso',
      'Bruno','Cesar','David','Ernesto','Felipe','Gustavo','Hernan','Ismael','Julio','Kevin',
      'Luis','Miguel','Nestor','Orlando','Patricio','Ramon','Salvador','Tadeo','Uriel','Valentin'
    ],
    mitologicos: [
      'Zeus','Ares','Apollo','Hermes','Poseidon','Hades','Hefesto','Dionisio','Cronos','Atlas',
      'Orion','Hercules','Aquiles','Ulises','Teseo','Perseus','Jason','Eneas','Hector','Paris',
      'Odin','Thor','Loki','Freyr','Tyr','Baldur','Heimdal','Fenrir','Jormungand','Sleipnir',
      'Ra','Osiris','Anubis','Horus','Seth','Thoth','Ptah','Amon','Sobek','Bastet',
      'Quetzal','Tlaloc','Tezcatlipoca','Huitzilopochtli','Coatlicue','Xipe','Tonatiuh','Chalchiuh','Itzamna','Kukulcan',
      'Wotan','Marduk','Enlil','Enkidu','Gilgamesh','Shamash','Sin','Ishtar','Nergal','Tiamat',
      'Indra','Vishnu','Shiva','Brahma','Ganesh','Kali','Rama','Krishna','Arjuna','Hanuman',
      'Susanoo','Amaterasu','Tsukuyomi','Izanagi','Izanami','Fujin','Raijin','Ryujin','Inari','Tengu',
      'Cernunnos','Lugh','Dagda','Morrigan','Brigid','Cuchulain','Balor','Nuada','Angus','Danu',
      'Conan','Cuchulainn','Fionn','Bran','Merlin','Arturo','Lancelot','Percival','Galahad','Mordred'
    ],
    gastronomicos: [
      'Churro','Taco','Nacho','Chilaquil','Tamale','Pozol','Mole','Atole','Champurrado','Tepache',
      'Mezcal','Pulque','Sotol','Raicilla','Bacanora','Tequila','Horchata','Jamaica','Tamarindito','Chico',
      'Waffle','Hotcake','Bagel','Brioche','Bretzel','Cupcake','Sconey','Biscotto','Crepe','Briochón',
      'Espresso','Latte','Cappuccino','Macchiato','Americano','Affogato','Mocha','Frapuccino','Hojicha','Chai',
      'Ramen','Udon','Soba','Pho','Bibimbap','Dashi','Teriyaki','Gyoza','Tempura','Onigiri',
      'Pizza','Pasta','Risotto','Gnocchi','Ravioli','Lasagna','Carpaccio','Bruschetta','Tiramisu','Cannoli',
      'Sushi','Nigiri','Maki','Temaki','Uramaki','Inari','Temari','Edamame','Takoyaki','Okonomiyaki',
      'Baklava','Hummus','Falafel','Shawarma','Kebab','Tagine','Couscous','Harissa','Tahini','Zaatar',
      'Brisket','Pastrami','Corned','Knish','Rugalach','Babka','Challah','Matzo','Kugel','Latke',
      'Wonton','Xiaolongbao','Char Siu','Peking','Mantou','Congee','Hotpot','Mapo','Tangbao','Tanghulu'
    ],
    naturaleza: [
      'Roble','Sauce','Pino','Cedro','Alamo','Encino','Caoba','Teca','Ebano','Nogal',
      'Laurel','Menta','Albahaca','Romero','Tomillo','Salvia','Cúrcuma','Cardamomo','Jengibre','Azafran',
      'Roca','Piedra','Arena','Tierra','Lodo','Coral','Obsidiana','Cuarzo','Jaspe','Ónix',
      'Lore','Lago','Mar','Oceano','Arroyo','Cascada','Laguna','Bahia','Cabo','Isla',
      'Monte','Sierra','Cerro','Colina','Valle','Llanura','Meseta','Desierto','Tundra','Taiga',
      'Nieve','Hielo','Frost','Blizzard','Sleet','Hail','Rain','Storm','Cloud','Thunder',
      'Sol','Selene','Estrella','Cometa','Meteor','Nebula','Galaxy','Cosmos','Astro','Quasar',
      'Viento','Brisa','Ventisca','Tifon','Huracan','Tornado','Ciclon','Monsoon','Simun','Tramontana',
      'Amanecer','Atardecer','Mediodia','Crepusculo','Aurora','Penumbra','Sombra','Eclipse','Solsticio','Equinoccio',
      'Bosque','Selva','Jungla','Pradera','Pampa','Estepa','Sabana','Manigua','Ciénaga','Pantano'
    ]
  },

  gato: {
    tiernos: [
      'Miau','Ronron','Pelusa','Michifus','Gatita','Minina','Pompona','Coqueta','Mimosa','Ternura',
      'Bichito','Bolilla','Suavecita','Sedita','Terciopelo','Algodoncita','Nubecita','Estrellita','Lunita','Solcito',
      'Whiskers','Mittens','Paws','Fluffito','Snuggly','Cuddly','Bubbly','Patches','Dottie','Freckles',
      'Blossom','Daisy','Lily','Violet','Rose','Iris','Tulip','Jasmine','Lavender','Poppy',
      'Honey','Sugar','Candy','Cream','Butter','Caramelo','Toffee','Fudge','Truffle','Bonbon',
      'Masala','Cortado','Mocchino','Cocoa','Ristretto','Pannacotta','Chantilly','Sorbet','Gelato','Panna',
      'Wagashi','Dango','Anmitsu','Wagashi','Daifuku','Dorayaki','Manjū','Namagashi','Yokan','Ame',
      'Cariño','Ternurita','Amorcito','Besito','Abrazo','Caricia','Mimito','Dulzón','Sonrisa','Alegria',
      'Chispita','Centellita','Brillito','Lucecita','Llamita','Chispas','Rayito','Destello','Fulgor','Resplandor',
      'Pompita','Bolilla','Motita','Gotita','Burbujita','Goteron','Rocio','Neblina','Bruma','Niebla'
    ],
    modernos: [
      'Luna','Nova','Zara','Aria','Cleo','Lyra','Vega','Nyx','Orion','Atlas',
      'Kira','Mila','Sasha','Lena','Nora','Mia','Ava','Zoé','Ivie','Skye',
      'Loki','Odin','Thore','Fenrir','Baldur','Tyre','Freyre','Heimdale','Vidar','Ullr',
      'Neón','Byto','Caché','Dexter','Fluxi','Grido','Hasho','Icono','Javita','Kodak',
      'Pixel','Querido','Rooty','Synco','Taggy','Unixo','Vimeo','Webby','Xenio','Zero',
      'Axelo','Blake','Cole','Drew','Eden','Faye','Gray','Haze','Jace','Kale',
      'Lane','Mare','Nate','Olive','Page','Reid','Shay','Tate','Umah','Valeo',
      'Wadeo','Xen','Yale','Zest','Bliss','Cove','Dawn','Elm','Fernie','Glen',
      'Holt','Isle','Jade','Keeno','Lake','Muse','Noon','Oak','Pine','Quillo',
      'Reef','Sage','Teal','Umber','Veil','Wave','Xray','Yarn','Zinc','Zest'
    ],
    clasicos: [
      'Misi','Misifus','Gatito','Kitty','Felix','Tom','Salem','Garfield','Sylvester','Heathcliff',
      'Figaro','Oliver','Berlioz','Toulouse','Duchess','Marie','Thomas','Tigre','León','Pantera',
      'Simba','Nala','Kiara','Kovu','Vitani','Scar','Mufasa','Rafiki','Timon','Pumba',
      'Whiskey','Brandy','Vodka','Gin','Rum','Sake','Tequila','Mezcal','Pisco','Cachaca',
      'Persia','Angora','Siames','Bengala','Maine','Ragdoll','Abisinio','Burmés','Manx','Máximo',
      'Blanca','Negra','Rubia','Morena','Roja','Gris','Dorada','Plateada','Bronceada','Cobriza',
      'Manchas','Puntos','Rayas','Lunares','Pecas','Pintas','Salpicadas','Moteada','Jaspeada','Abigarrada',
      'Princesa','Duquesa','Baronesa','Condesa','Marquesa','Emperatriz','Reina','Infanta','Dama','Lady',
      'Sir','Lord','Duke','Mace','Baron','Count','Prince','King','Emperor','Marquis',
      'Sombra','Fantasma','Espectro','Espiritu','Alma','Sombrita','Crepúsculo','Oscuridad','Noche','Medianoche'
    ],
    mitologicos: [
      'Bastet','Sekhmet','Mafdet','Pakhet','Tefnut','Mut','Neith','Hathor','Isis','Nephthys',
      'Freya','Frigg','Sif','Idun','Skadi','Ran','Hel','Norn','Valkyrie','Disir',
      'Artemis','Athena','Aphrodite','Hera','Demeter','Persephone','Hecate','Nike','Iris','Eos',
      'Kali','Durga','Lakshmi','Saraswati','Parvati','Sati','Radha','Sita','Draupadi','Shakti',
      'Amaterasu','Izanami','Benzaiten','Kannon','Inari','Uzume','Ame','Tamamo','Nue','Nekomata',
      'Morgan','Nimue','Viviane','Lady','Guinevere','Isolde','Elaine','Lynette','Enid','Lunet',
      'Morrigan','Brigid','Danu','Boann','Flidais','Airmid','Medb','Etain','Niamh','Cliodhna',
      'Ix Chel','Xquic','Ixkik','Hunahpu','Ixbalanque','Vucub','Camazotz','Zipacna','Vucub Hunahpu','Hun Hunahpu',
      'Coatlicue','Coyolxauhqui','Xochiquetzal','Toci','Chicomecóatl','Tlazolteotl','Cihuacoatl','Tonantzin','Mayahuel','Xilonen',
      'Sedna','Nanabozho','Coyote','Raven','Thunderbird','Windigo','Manitou','Wakan','Skinwalker','Kachina'
    ],
    gastronomicos: [
      'Sushi','Dorayaki','Ramen','Tempura','Matcha','Wasabi','Gyoza','Bao','Dango','Onigiri',
      'Brie','Camembert','Gouda','Edam','Manchego','Parmesano','Gruyere','Emmental','Cheddar','Mozzarella',
      'Crepe','Eclair','Madeleine','Choux','Profiterole','Chouquette','Palmier','Napoleon','Millefeuille','Baba',
      'Latte','Cappuccino','Macchiato','Affogato','Ristretto','Lungo','Cortado','Flat White','Galao','Bicerin',
      'Tiramisu','Panna Cotta','Zabaione','Granita','Semifreddo','Spumoni','Cassata','Cannolo','Sfogliatella','Crostata',
      'Mamón','Pawpaw','Guava','Passion','Lychee','Lanzón','Jackfruit','Durian','Starfruit','Dragonfruit',
      'Churro','Porras','Buñuelo','Sopapilla','Polveron','Polvoron','Mantecado','Turron','Mazapan','Alfajor',
      'Oreo','Brownie','Cheesecake','Cupcake','Macaron','Whoopie','Galleta','Nougat','Praline','Dragee',
      'Boba','Malanga','Ube','Pandan','Cendol','Rojak','Laksa','Rendang','Satay','Nasi',
      'Falafel','Hummus','Tahini','Zaatar','Halva','Baklava','Knafeh','Maamoul','Qatayef','Luqaimat'
    ],
    naturaleza: [
      'Aurora','Nebula','Nebulosa','Universo','Pulsar','Pulsar','Magnetar','Supernova','Neutron','Darkmatter',
      'Arboleda','Manglar','Maleza','Pastizal','Pampa','Estepa','Chaparral','Manglar','Palustre','Ribera',
      'Topacio','Zafiro','Esmeralda','Rubi','Diamante','Perla','Ambar','Coralillo','Jadeíta','Turquesa',
      'Aguila','Halcon','Gavilán','Buho','Lechuza','Condor','Pelicano','Flamenco','Garza','Cigüeña',
      'Tigre','Leon','Leopardo','Jaguar','Puma','Lince','Ocelote','Serval','Margay','Caracal',
      'Azul','Verde','Rojo','Amarillo','Mandarina','Morado','Violeta','Rosa','Turquesa','Celeste',
      'Trueno','Relampago','Tormenta','Vendaval','Ciclón','Tromba','Torbellino','Airecillo','Ventarrón','Rafaga',
      'Alameda','Saucedal','Robledal','Pinal','Cedral','Alcornoque','Arce','Abedul','Fresno','Olmo',
      'Lirio','Clavel','Azalea','Begonia','Camelia','Dalia','Hortensia','Jazmín','Gardenia','Magnolia',
      'Marino','Oceánico','Costero','Litoral','Maritimo','Portuario','Isleño','Archipiélago','Atolon','Arrecife'
    ]
  },

  conejo: {
    tiernos: [
      'Pompón','Algodón','Nubecita','Conejín','Suavecito','Pelusita','Blandito','Terciopelo','Sedoso','Esponjoso',
      'Snowball','Fluffy','Cotton','Puffball','Dusty','Snowy','Cloudy','Misty','Frosty','Creamy',
      'Zanahoria','Berberecho','Trébol','Hierba','Prado','Camomila','Manzanilla','Verbena','Melisa','Valeriana',
      'Biscuit','Scone','Bizcochito','Cracker','Pretzel','Muffin','Donut','Bagel','Croissant','Brioche',
      'Cariñoso','Mimoso','Tiernito','Dulcito','Suavito','Blandón','Amoroso','Cariñito','Queridito','Amadito',
      'Conejito','Liebre','Gazapo','Conilito','Lagomorf','Lepus','Orycto','Cuniculus','Sylvilago','Lepori',
      'Mazapancito','Toffee','Fudge','Truffle','Praline','Nougat','Marzipan','Dragee','Fondant','Ganache',
      'Margarita','Rosita','Violeto','Lirio Blanco','Clavellina','Azaleita','Begonieta','Camelio','Dahlia','Magnolita',
      'Telita','Motita','Lunarcito','Burbuja','Nevitica','Lluvia','Rociada','Neblina','Bruma','Niebla',
      'Amor','Ternura','Mimicón','Cariñoso','Caricia','Abrazo','Besito','Dulzura','Sonrisa','Alegria'
    ],
    modernos: [
      'Rove','Eli','Tova','Cori','Mave','Cam','Dune','Fawn','Arroyo','Brix',
      'Rook','Pemi','Cael','Devi','Elio','Faye','Gael','Hale','Iris','Orión',
      'Jade','Kael','Lane','Earl','Neve','Orin','Penn','Quay','Reid','Shae',
      'Tove','Ulva','Vail','Wren','Xael','Yael','Zuri','Aero','Bale','Cole',
      'Dale','Emre','Fife','Gale','Haze','Ilex','Jibe','Kale','Lace','Mire',
      'Noel','Oaks','Pace','Quil','Rafe','Sael','Tael','Uael','Vael','Wael',
      'Xale','Yale','Zale','Aile','Bile','Trno','Zero','Oryn','Pyro','Rylo',
      'Sylo','Tyro','Uylo','Vylo','Wylo','Xylo','Ylo','Zylo','Aelo','Belo',
      'Celo','Delo','Eelo','Felo','Gelo','Helo','Ielo','Jelo','Kelo','Lelo'
    ],
    clasicos: [
      'Thumper','Bugs','Roger','Peter','Benjamin','Flopsy','Mopsy','Cottontail','Hazel','Fiver',
      'Bigwig','Pipkin','Bluebell','Dandelion','Blackberry','Pimpernel','Clover','Strawberry','Bluebell','Speedwell',
      'Conejo','Liebre','Gazapo','Peludo','Orejas','Saltarin','Brincador','Trotamundos','Veloz','Rapido',
      'Blanco','Negro','Grisón','Beige','Crema','Marron','Canelita','Dorado','Plateado','Bronceado',
      'Maximo','Pepito','Tomate','Pimienta','Gengibre','Canelón','Azafranito','Curry','Paprika','Oregano',
      'Tobby','Bobby','Jimmy','Timmy','Tommy','Billy','Willy','Nilly','Filly','Dilly',
      'Hop','Skip','Jump','Bounce','Sprint','Dash','Race','Run','Leap','Bound',
      'Cottony','Wooly','Silky','Velvet','Plush','Velvety','Fuzzy','Downy','Feathery','Wispy',
      'Meadow','Prairie','Garden','Field','Grove','Glade','Glen','Dale','Fen','Moor',
      'Short','Tiny','Minino','Small','Little','Wee','Teeny','Itsy','Bitsy','Petite'
    ],
    mitologicos: [
      'Eostre','Ostara','Eostra','Nanabozho','Amoraq','Kaltes','Melaphaunt','Lepus','Lapin','Jangpeurikami',
      'Inaba','Tsuki','Usagi','Kaguya','Izanagi-no-Mikoto','Benten','Kitsune','Tanuki','Nekomata','Tengu',
      'Hermeias','Eros','Cupido','Psyche','Hecate','Artemis','Selene','Endymion','Acteon','Callisto',
      'Odin','Frigg','Freyr','Freya','Loki','Thor','Baldur','Tyr','Heimdal','Vidar',
      'Isis','Osiris','Heru','Anubis','Djehuty','Ra-Horakhty','Sobekhotep','Bastet','Sekhmet','Tefnut',
      'Quetzal','Tlalocan','Tezcatlipoca','Mexitli','Xipe','Tonatiuh','Cihuacoatl','Xochiquetzal','Mayahuel','Tlazolteotl',
      'Indra','Vishnu','Shiva','Ganesha','Durga','Durga','Lakshmi','Saraswati','Parvati','Brahma',
      'Cernunnos','Lugh','Dagda','Nemain','Áine','Boann','Nuada','Angus','Etain','Niamh',
      'Zeus','Ares','Cyllenius','Poseidon','Hades','Apollo','Hefesto','Dionisio','Athena','Aphrodite',
      'Amun-Ra','Amun','Ptah','Min','Khnum','Satis','Anuket','Nekhbet','Wadjet','Khonsu'
    ],
    gastronomicos: [
      'Zanahoria','Lechuga','Espinaca','Acelga','Brocoli','Coliflor','Repollo','Kale','Rucula','Berro',
      'Apio','Perejil','Cilantro','Albahaquita','Romerito','Tomillito','Orégano','Mentita','Hierbabuena','Estragon',
      'Betabel','Rabano','Nabo','Chiriva','Pastinaca','Esparago','Alcachofa','Palmito','Bambu','Brote',
      'Calabaza','Zucchini','Pepino','Chayote','Jicama','Camote','Yuca','Malanga','Ñame','Ñame',
      'Granola','Avena','Quinoa','Amaranto','Chia','Linaza','Ajonjoli','Girasol','Pipas','Nuez',
      'Almendra','Castaña','Piñon','Avellana','Pistacho','Macadamia','Cacahuate','Maní','Garbanzo','Lenteja',
      'Fresita','Frambueso','Zarzamora','Arándano','Morita','Cerezo','Ciruelo','Higuera','Granadito','Caqui',
      'Melon','Sandia','Pina','Jobo','Fruta bomba','Guayabito','Níspola','Mameyón','Zapotillo','Nance',
      'Kion','Curcuma','Cardamomito','Canelero','Clavo','Pimentón','Anís','Culantro','Comino','Safran',
      'Maple','Agave','Néctar','Panela','Piloncillo','Mascabado','Cane','Stevia','Xilitol','Eritritol'
    ],
    naturaleza: [
      'Vega','Pradera','Campo','Campiña','Vega','Ribera','Orilla','Margen','Borde','Linde',
      'Trébol','Hierba','Cesped','Musgo','Liquen','Helecho','Ortiga','Bardana','Diente','Acedera',
      'Luna','Solito','Estrella','Cometa','Meteor','Nebula','Cúmulo','Pleamar','Magnetar','Borealis',
      'Nevada','Hielo','Frost','Glaciar','Tempano','Cristal','Escarcha','Sereno','Llovizna','Aguanieve',
      'Encina','Sauce Llorón','Pinheiro','Cedro Rojo','Chopo','Quercus','Arce','Abedul','Fresno','Olmo',
      'Margarita','Rosita','Lila','Lirio Azul','Clavelito','Rododendro','Impatiens','Kamelita','Georgina','Magnolio',
      'Iael','Lago','Mar','Pelago','Arroyo','Cascada','Laguna','Bahia','Cabo','Isla',
      'Monte','Sierra','Cerro','Colina','Valle','Llanura','Meseta','Yermo','Permafrost','Boreal',
      'Peñasco','Peñón','Arenal','Terral','Cieno','Arrecife','Pedernal','Cuarzo','Jaspe','Onyx',
      'Céfiro','Céfiro','Ventisca','Borrasca','Tormenta','Manga','Remolino','Monzón','Simun','Tramontana'
    ]
  },

  pajaro: {
    tiernos: [
      'Pío','Chipi','Gorjeo','Trino','Canto','Melodia','Sonoro','Alegre','Saltarín','Brinquito',
      'Tweety','Tweetie','Peep','Chirp','Tweet','Squeak','Pip','Cheep','Coo','Trill',
      'Plumita','Alita','Colita','Patita','Piquito','Ojito','Copete','Crestita','Brillito','Colorido',
      'Cariñín','Mimín','Dulcete','Tiernín','Suavito','Esponjoso','Amorosito','Cariñito','Queridín','Amadillo',
      'Cielo','Nubecita','Estrellín','Lunera','Solcillo','Amanecer','Atardecer','Crepusculo','Australis','Oscuridad',
      'Chip','Dale','Alvin','Simon','Theodore','Huey','Dewey','Louie','Tic','Tac',
      'Whistler','Singer','Chorister','Crooner','Warbler','Triller','Hummer','Buzzer','Whirrer','Flutterer',
      'Sunbeam','Moonbeam','Starbeam','Snowflake','Raindrop','Dewdrop','Sunshine','Moonshine','Stardust','Moondust',
      'Peanut','Hazel','Almond','Cashew','Pecan','Walnut','Pistachio','Chestnut','Brazil','Macadamio',
      'Berry','Cherry','Plum','Peach','Apricot','Nectarine','Zapotillo','Lechosa','Guavita','Lychee'
    ],
    modernos: [
      'Arlo','Bale','Coen','Dael','Elan','Fale','Gale','Hael','Riachuelo','Jael',
      'Kale','Lael','Mael','Nael','Oael','Pael','Qael','Rael','Sael','Betelgeuse',
      'Tael','Uael','Vael','Wael','Xael','Yael','Zael','Arel','Brel','Crel',
      'Drel','Erel','Frel','Grel','Hrel','Irel','Jrel','Krel','Lrel','Mrel',
      'Nrel','Orel','Prel','Qrel','Rrel','Srel','Trel','Urel','Vrel','Wrel',
      'Xrel','Yrel','Zrel','Arko','Brko','Crko','Drko','Erko','Frko','Grko',
      'Hrko','Irko','Jrko','Krko','Lrko','Mrko','Nrko','Orko','Prko','Qrko',
      'Rrko','Srko','Trko','Urko','Vrko','Wrko','Xrko','Yrko','Zrko','Arno',
      'Brno','Crno','Drno','Erno','Frno','Grno','Hrno','Irno','Jrno','Krno',
      'Lrno','Mrno','Nrno','Orno','Prno','Qrno','Rrno','Srno','Xhtml','Urno'
    ],
    clasicos: [
      'Loro','Perico','Periquito','Cotorra','Guacamayo','Cacatua','Ninfas','Agapornis','Canario','Cardenal',
      'Jilguero','Pinzon','Gorrion','Estornino','Mirlo','Tordo','Zorzal','Ruiseñor','Alondra','Calandria',
      'Polly','Coco','Rico','Pepe','Paco','Manolo','Pedrín','Pedrito','Luisito','Carlitos',
      'Pretty Bird','Pretty Polly','Hello','Goodbye','Yes','No','Thank You','Please','Welcome','Hello',
      'Azulejo','Verderon','Ocre','Naranjado','Bermejo','Escarlata','Carmesi','Granate','Purpura','Magenta',
      'Twitterer','Twitterpated','Chirper','Peeper','Coo','Dove','Pigeon','Finch','Sparrow','Robin',
      'Blue Jay','Cardinal','Mockingbird','Nightingale','Lark','Thrush','Starling','Blackbird','Wren','Swallow',
      'Eagle','Falcon','Hawk','Kite','Harrier','Osprey','Buzzard','Vulture','Cóndor','Albatross',
      'Flamingo','Pelican','Heron','Egret','Stork','Crane','Ibis','Spoonbill','Avocet','Curlew',
      'Toucan','Hornbill','Kingfisher','Hummingbird','Sunbird','Honeyeater','Lorikeet','Cockatoo','Macaw','Parrot'
    ],
    mitologicos: [
      'Fenix','Garuda','Roc','Thunderbird','Simurgh','Ziz','Anzu','Imdugud','Alcyone','Ceyx',
      'Alcyon','Halcyon','Nisus','Picus','Philomela','Procne','Aedon','Tereus','Iridis','Nike',
      'Herukhuti','Hermes Trismegistus','Ibis','Bennu','Benu','Ba','Ka','Akh','Sah','Sopdet',
      'Garudas','Hamsa','Kamadhenu','Jatayu','Sampati','Shyena','Vainateya','Suparni','Pakshiraj','Vayuputra',
      'Yatagarasu','Karasu Tengu','Houou','Suzaku','Seiryu','Byakko','Genbu','Kirin','Baku','Raiju',
      'Huginn','Muninn','Vedrfolnir','Hraesvelgr','Geri','Freki','Sleipnir','Fenrir','Midgard Serpent','Nidhogg',
      'Alkonost','Gamayun','Sirin','Zhar Ptitsa','Zmajevit','Pozhar','Stribog','Veles','Perun','Mokosh',
      'Quetzalcoatl','Tetzahuitl','Xiuhtecuhtli','Chantico','Tlahuizcalpantecuhtli','Nanahuatzin','Tecuciztecatl','Tlaltecuhtli','Cipactli','Chalchiuh',
      'Itzam-Yeh','Vucub Caquix','Hunahpu','Ixbalanque','Camazotz','Zipacna','Seven Macaw','Principal Bird','Itzam Cab','Ah Mun',
      'Rarog','Alkonost','Gamayun','Sirin','Fawkes','Caladrius','Cinnamon Bird','Stymphalian','Alerion','Pterippi'
    ],
    gastronomicos: [
      'Semilla','Mijo','Alpiste','Girasol','Calabaza','Sesamo','Amapola','Lino','Canamo','Chia',
      'Frutas','Bayas','Moras','Fresas','Arandanos','Frambuesas','Cerezas','Higos','Datiles','Ciruelas',
      'Jocote','Mamona','Guayabo','Lóngan','Salak','Granadilla','Pitajaya','Tamarillo','Mamey Zapote','Nísperín',
      'Nuez','Almendra','Avellana','Piñon','Castaña','Pistacho','Macada','Pacana','Nogal','Brazil',
      'Maiz','Trigo','Cebada','Avena','Centeno','Espelta','Kamut','Amaranto','Quinoa','Teff',
      'Origanum','Basilio','Rosmarino','Thymus','Mentiña','Hierbabuena','Coriandro','Perejil','Estragon','Cebollino',
      'Cassia','Vainilla','Elettaria','Clavo','Nuez Moscada','Cayena','Zenzero','Curcuma','Zafferano','Pimenton',
      'Panal','Agavito','Maple','Panela','Stevia','Polen','Propolis','Jalea Real','Cera','Nektar',
      'Pera','Manzana','Platano','Cítrico','Limon','Toronja','Mandarina','Pomelo','Bergamota','Cidra',
      'Melocoton','Albaricoque','Nectarina','Guinda','Claudia','Sicómoro','Tamarisco','Granadina','Morado','Himbeere'
    ],
    naturaleza: [
      'Cielo','Aire','Vendaval','Ventolina','Rafaga','Vendaval','Tifón','Trombón','Espiral','Turbión',
      'Nubarrón','Nimbo','Cumulo','Estrato','Cirro','Altocumulo','Altoestrato','Cumulonimbo','Estratocumulo','Nimboestrato',
      'Aguacero','Llovizna','Aguacero','Chaparron','Tormenta','Granizo','Nevado','Aguanieve','Escarcha','Rocín',
      'Arcoiris','Arco Iris','Espectro','Prisma','Halon','Parhelio','Paraselenio','Corona','Gloria','Brocken',
      'Aguila','Halcon','Gavilan','Buho','Lechuza','Quebrantahuesos','Pelicano','Flamenco','Garza','Ciguena',
      'Floresta','Espesura','Fronda','Campiña','Herbazal','Campo','Matorral','Steppe','Tundral','Taigar',
      'Tropico','Subtropico','Templado','Polar','Continental','Abismo','Mediterraneo','Lluvedora','Semiárido','Árido',
      'Primavera','Verano','Otoño','Invierno','Solsticio','Equinoccio','Perihelio','Afelio','Zenith','Nadir',
      'Norte','Sur','Este','Oeste','Noreste','Noroeste','Sureste','Suroeste','Meridional','Septentrional',
      'Horizonte','Zenith','Nadir','Meridiano','Paralelo','Ecuador','Tropico','Polari','Artico','Antartico'
    ]
  },

  reptil: {
    tiernos: [
      'Escamita','Colita','Lengüita','Ojitos','Patitas','Garrita','Pequeñin','Chiquitin','Diminuto','Minúsculo',
      'Gummy','Jelly','Squishy','Wobbly','Wiggly','Slippery','Slithery','Slidey','Glidy','Crawly',
      'Lime','Emerald','Nefrita','Forest','Fern','Leaf','Moss','Lichen','Ivy','Vine',
      'Pebble','Stone','Rock','Gravel','Sand','Dust','Grit','Clay','Mud','Loam',
      'Sunny','Warm','Cozy','Snug','Toasty','Balmy','Mild','Gentle','Soft','Smooth',
      'Pequeño','Chico','Nano','Micro','Minín','Miniatura','Diminutivo','Enano','Pigmeo','Liliputiense',
      'Gecko','Gekko','Geckito','Gekkito','Geckocito','Geckoling','Gecklet','Gekklet','Geckster','Gekkster',
      'Crestita','Crestón','Crestudo','Crestero','Copete','Copetón','Copetudo','Penachito','Penachón','Penachudo',
      'Mullido','Suavecito','Tiernote','Dulcecito','Cariñoso','Mimoso','Amorón','Quericito','Amadiño','Lindito',
      'Helio','Lúnula','Lucecita','Nubecita','Brisita','Airecito','Vientecito','Rociecito','Lluviecita','Nevadita'
    ],
    modernos: [
      'Draco','Ryker','Zephyr','Onyx','Kairo','Vex','Axel','Nyx','Orion','Slate',
      'Cinder','Ember','Flint','Grim','Haze','Ignis','Jett','Knox','Lava','Mace',
      'Nox','Obsid','Pyro','Quill','Raze','Sable','Talon','Umbra','Viper','Wrath',
      'Xeno','Yael','Zion','Ash','Blaze','Crest','Dusk','Eclipse','Frost','Gloom',
      'Hex','Ink','Jade','Krait','Loch','Murk','Noir','Orca','Pyre','Quirk',
      'Rift','Smog','Thorn','Ultor','Void','Wraith','Xenon','Yore','Zeal','Abyss',
      'Bane','Crux','Dread','Ebon','Fang','Gale','Husk','Iron','Jag','Keel',
      'Lance','Mire','Nadir','Ozone','Peak','Quartz','Raze','Shard','Tide','Umber',
      'Vane','Wisp','Xis','Yaw','Zest','Aeon','Bolt','Coil','Dart','Edge',
      'Flux','Grit','Holt','Inky','Jinx','Knot','Lurk','Meld','Null','Oxide'
    ],
    clasicos: [
      'Iguana','Gekko','Geckito','Camaleón','Dragon','Lagarto','Salamandra','Cocodrilo','Tortuga','Serpiente',
      'Titan','Dino','Saurus','Raptor','Trex','Veloci','Stego','Brachio','Tricera','Ptero',
      'Spike','Spiky','Scales','Slither','Hiss','Rattle','Coil','Curl','Twist','Wind',
      'Verde','Azafrán','Negro','Rojo','Naranjado','Azul','Plomizo','Cafe','Marron','Beige',
      'Comodo','Monitor','Varan','Varan','Basilisco','Frilled','Moloch','Gila','Heloderma','Bipes',
      'Agama','Anolis','Chameleon','Skink','Tegus','Tegu','Alligator','Caiman','Croc','Gharial',
      'Python','Boa','Anaconda','Viper','Cobra','Mamba','Racer','Rat Snake','King Snake','Milk Snake',
      'Tortoise','Terrapin','Box','Slider','Map','Painted','Snapper','Soft Shell','Mata Mata','Leatherback',
      'Gecky','Day Gecko','Tokay','Leaf Tail','Cat Gecko','Crested','Gargoyle','Giant','Golden','Mourning',
      'Chameleon','Veiled','Panther','Jackson','Parsons','Mellers','Flap Neck','Oustalets','Rudis','Namaqua'
    ],
    mitologicos: [
      'Leviatan','Behemot','Dragon','Hidra','Basilisco','Cocatriz','Quimera','Salamandra','Naga','Nagin',
      'Typhon','Echidna','Scylla','Charybdis','Cetus','Ladon','Pytho','Campe','Drakon','Ophion',
      'Apophis','Sobekneferu','Nehebkau','Wadjet','Meretseger','Renenutet','Netjer','Uraeus','Sata','Mehen',
      'Vritra','Kaliya','Vasuki','Shesha','Ananta','Mucalinda','Nagini','Nagini','Takshaka','Karkotaka',
      'Orochi','Yamata','Uwabami','Tsuchinoko','Nure-onna','Yamawaro','Kappa','Mizuchi','Wani','Tatsu',
      'Fafnir','Nidhogg','Ouroboros','Lindworm','Stoor Worm','Knucker','Wyvern','Worm','Worm','Wyrm',
      'Cipactli','Xiuhcoatl','Quetzalcoatl','Tlazolteotl','Mixcoatl','Xiuhtecuhtli','Chalchiuhtlicue','Tlaltecuhtli','Tlaloque','Chalchiuh',
      'Veles','Zmiy','Zagon','Basilisk','Lindwurm','Tatzelwurm','Lindorm','Stoorworm','Wyverne','Amphithere',
      'Ryujin','Fujin','Raijin','Kunitokotachi','Izanagi','Susanoo','Tsukuyomi','Tsukuyomi','Benzaiten','Sarasvati',
      'Kukulcan','Itzamna','Ixchel','Ah Puch','Chaac','Ik','Yum Caax','Ix Tab','Ixquic','Hunab Ku'
    ],
    gastronomicos: [
      'Nance','Papaw','Psidium','Curuba','Dragonfruit','Pitomba','Langsat','Litchi','Chico Zapote','Níspola',
      'Meloja','Ixtli','Polen','Propolis','Nectar','Royal Jelly','Cera','Jalea','Mead','Hydromel',
      'Insecto','Grillo','Chapulin','Gusano','Larva','Pupa','Crysalis','Cocoon','Silk','Chitin',
      'Ratón','Pinkie','Fuzzy','Hopper','Crawler','Mealworm','Waxworm','Hornworm','Silkworm','Superworm',
      'Fruta','Baya','Morera','Frutilla','Mirtilo','Raspberry','Picota','Carico','Dátil Real','Granado',
      'Verde','Fresco','Natural','Organico','Biologico','Silvestre','Salvaje','Primario','Primitivo','Ancestral',
      'Cactus','Nopal','Maguey','Pita','Quiote','Sisal','Henequen','Ixtle','Lechuguilla','Yuca',
      'Aloe','Sabila','Aloe Vera','Pitaya','Pitayita','Dragon Fruit','Star Fruit','Passion Fruit','Guavón','Sapote',
      'Tamarindo','Tejocote','Xoconostle','Tuna','Acitrón','Biznaga','Garambullo','Jiotilla','Pitaya','Cardón',
      'Lima','Limon','Azahar','Toronja','Bergamota','Cidra','Kumquat','Pomelo','Calamondin','Yuzu'
    ],
    naturaleza: [
      'Pedregal','Pedernal','Dunas','Barro','Légamo','Barro','Arcilla','Caliza','Granito','Basalto',
      'Yermo','Árido','Seco','Xerofilo','Cactaceo','Suculento','Espinoso','Resiliente','Adaptado','Sobreviviente',
      'Solecito','Calor','Temperatura','Termico','Infrarrojo','Radiante','Brillante','Luminoso','Ardiente','Incandescente',
      'Escama','Placa','Escudo','Coraza','Caparazon','Armadura','Blindaje','Proteccion','Defensa','Fortaleza',
      'Médano','Dunas','Erg','Reg','Hammada','Hamada','Serir','Kum','Taklamakan','Gobi',
      'Tropical','Subtropical','Ecuatorial','Monzon','Savanna','Chaparral','Matorral','Scrubland','Bushland','Heathland',
      'Caliza','Carstico','Calcareo','Dolomitico','Marmol','Travertino','Estalagmita','Estalactita','Gruta','Caverna',
      'Termita','Hormiga','Escarabajo','Ciempies','Milpies','Aracnido','Escorpion','Tarante','Viuda','Violin',
      'Lava','Basalto','Sílex','Pumita','Ceniza','Fumarola','Geyser','Caldera','Crater','Volcan',
      'Serpentina','Peridotita','Dunita','Harzburgita','Lherzolita','Wehrlita','Piroxenita','Hornblendita','Gabro','Diorita'
    ]
  }
};

// ===================================================
// NAME GENERATOR — shows 6 random from pool of 100
// ===================================================

function generateNames(tool) {
  let pool = [];

  if (tool === 'podcast') {
    const tipo = document.getElementById('pod-tipo').value;
    pool = extraNameData.podcast[tipo] || extraNameData.podcast.negocios;

  } else if (tool === 'tattoo') {
    const tipo = document.getElementById('tat-tipo').value;
    pool = extraNameData.tattoo[tipo] || extraNameData.tattoo.tradicional;

  } else if (tool === 'mascota') {
    const animal = document.getElementById('pet-animal').value;
    const estilo = document.getElementById('pet-estilo').value;
    pool = petNameData[animal]?.[estilo] || petNameData.perro.tiernos;

  } else if (tool === 'tech') {
    const tipo = document.getElementById('tech-tipo').value;
    pool = nameData.tech[tipo] || nameData.tech.general;

  } else if (tool === 'restaurant') {
    const tipo = document.getElementById('rest-tipo').value;
    pool = nameData.restaurant[tipo] || nameData.restaurant.general;

  } else if (tool === 'barberia') {
    const tipo = document.getElementById('barb-tipo').value;
    const ciudad = document.getElementById('barb-ciudad').value.trim();
    pool = [...(nameData.barberia[tipo] || nameData.barberia.moderna)];
    if (ciudad) {
      const c = ciudad.charAt(0).toUpperCase() + ciudad.slice(1);
      pool.push(c + ' Cuts', c + ' Barber Co.', c + ' Fade Studio', c + ' Barbershop');
    }

  } else if (tool === 'moda') {
    const tipo = document.getElementById('moda-tipo').value;
    const genero = document.getElementById('moda-genero').value;
    pool = nameData.moda[tipo]?.[genero] || nameData.moda[tipo]?.unisex || nameData.moda.casual.unisex;

  } else if (tool === 'cafe') {
    const tipo = document.getElementById('cafe-tipo').value;
    const keyword = document.getElementById('cafe-keyword').value.trim();
    pool = [...(nameData.cafe[tipo] || nameData.cafe.moderno)];
    if (keyword) {
      const kw = keyword.charAt(0).toUpperCase() + keyword.slice(1).toLowerCase();
      pool.push('Cafe ' + kw, kw + ' Coffee Co.', kw + ' Brew', 'Casa ' + kw);
    }

  } else if (tool === 'tiendaropa') {
    const tipo = document.getElementById('tr-tipo')?.value || 'boutique';
    const ambiente = document.getElementById('tr-ambiente')?.value || 'moderno';
    pool = tiendaRopaData[tipo]?.[ambiente] || tiendaRopaData.boutique.moderno;
  }

  const names = shuffle(pool).slice(0, 6);

  const container = document.getElementById('names-' + tool);
  container.innerHTML = names.map(n => `
    <div class="name-item" onclick="copyText('${n.replace(/'/g, "\\'")}')">
      <span>${n}</span>
      <span class="copy-icon">copiar</span>
    </div>
  `).join('');

  document.getElementById('results-' + tool).classList.add('show');
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}


// ===================================================
// INCOME CALCULATORS
// ===================================================

function fmt(n) {
  return '$' + Math.round(n).toLocaleString('es-MX');
}

function calcIncome(platform) {
  let total = 0, b1 = 0, b2 = 0, b3 = 0;

  if (platform === 'tiktok') {
    const views      = +document.getElementById('tt-views').value;
    const posts      = +document.getElementById('tt-posts').value;
    const subs       = +document.getElementById('tt-subs').value;
    const nicho      = +document.getElementById('tt-nicho').value;
    const region     = +document.getElementById('tt-region').value;
    const engagement = +document.getElementById('tt-engagement').value;
    b1 = views * posts * 0.002 * nicho * region;
    b2 = subs > 10000 ? (subs / 100000) * 150 * nicho * region * engagement : 0;
    b3 = subs > 10000 ? (subs / 100000) * 200 * nicho * region * engagement : 0;
    total = b1 + b2 + b3;
    document.getElementById('tt-fund').textContent  = fmt(b1);
    document.getElementById('tt-live').textContent  = fmt(b2);
    document.getElementById('tt-brand').textContent = fmt(b3);
    document.getElementById('income-tiktok-total').textContent = fmt(total);
  }

  if (platform === 'youtube') {
    const views      = +document.getElementById('yt-views').value;
    const subs       = +document.getElementById('yt-subs').value;
    const idiomaMult = +document.getElementById('yt-idioma').value;
    const catMult    = +document.getElementById('yt-cat').value;
    const cpm = 2.5 * idiomaMult * catMult;
    b1 = (views / 1000) * cpm * 0.55;
    b2 = subs > 30000 ? (subs / 1000) * 0.04 : 0;
    b3 = views * 0.0001;
    total = b1 + b2 + b3;
    document.getElementById('yt-adsense').textContent = fmt(b1);
    document.getElementById('yt-memb').textContent    = fmt(b2);
    document.getElementById('yt-super').textContent   = fmt(b3);
    document.getElementById('income-youtube-total').textContent = fmt(total);
  }

  if (platform === 'facebook') {
    const views      = +document.getElementById('fb-views').value;
    const subs       = +document.getElementById('fb-subs').value;
    const tipMult    = +document.getElementById('fb-tipo').value;
    const region     = +document.getElementById('fb-region').value;
    const nicho      = +document.getElementById('fb-nicho').value;
    const engagement = +document.getElementById('fb-engagement').value;
    b1 = (views / 1000) * 1.5 * tipMult * region * nicho;
    b2 = tipMult === 1.5 ? (views / 1000) * 0.8 * region * engagement : 0;
    b3 = subs > 10000 ? subs * 0.0002 * region * engagement : 0;
    total = b1 + b2 + b3;
    document.getElementById('fb-ads').textContent   = fmt(b1);
    document.getElementById('fb-reels').textContent = fmt(b2);
    document.getElementById('fb-stars').textContent = fmt(b3);
    document.getElementById('income-facebook-total').textContent = fmt(total);
  }

  if (platform === 'instagram') {
    const subs       = +document.getElementById('ig-subs').value;
    const eng        = +document.getElementById('ig-eng').value / 100;
    const nichoMult  = +document.getElementById('ig-nicho').value;
    const posts      = +document.getElementById('ig-posts').value * 4;
    const ratePerPost = (subs / 10000) * 100 * (eng * 10) * nichoMult;
    const sponsoredPosts = Math.min(Math.floor(posts * 0.2), 4);
    b1 = ratePerPost * sponsoredPosts;
    b2 = subs > 10000 ? (subs / 1000) * 0.05 : 0;
    b3 = b1 * 0.15;
    total = b1 + b2 + b3;
    document.getElementById('ig-posts-inc').textContent = fmt(b1);
    document.getElementById('ig-reels').textContent     = fmt(b2);
    document.getElementById('ig-aff').textContent       = fmt(b3);
    document.getElementById('income-instagram-total').textContent = fmt(total);
  }

  document.getElementById('results-' + platform).classList.add('show');
}

function calcFreelancer() {
  const meta     = +document.getElementById('fl-meta').value || 3000;
  const horasSem = +document.getElementById('fl-horas').value;
  const billPct  = +document.getElementById('fl-bill').value / 100;
  const mult     = +document.getElementById('fl-tipo').value;
  const horasMes = horasSem * 4.3 * billPct;
  const tarifaSug = (meta / horasMes) * mult;
  document.getElementById('fl-rate').textContent    = '$' + tarifaSug.toFixed(0) + '/hr';
  document.getElementById('fl-monthly').textContent = fmt(meta);
  document.getElementById('fl-hours-m').textContent = Math.round(horasMes) + ' hrs';
  document.getElementById('fl-annual').textContent  = fmt(meta * 12);
  document.getElementById('results-freelancer').classList.add('show');
}

function calcEcommerce() {
  const visits   = +document.getElementById('ec-visits').value;
  const conv     = +document.getElementById('ec-conv').value / 100;
  const ticket   = +document.getElementById('ec-ticket').value || 45;
  const platMult = +document.getElementById('ec-plat').value;
  const orders   = Math.round(visits * conv);
  const gross    = orders * ticket;
  const net      = gross * platMult;
  document.getElementById('ec-orders').textContent = orders.toLocaleString();
  document.getElementById('ec-gross').textContent  = fmt(gross);
  document.getElementById('ec-total').textContent  = fmt(net);
  document.getElementById('ec-annual').textContent = fmt(net * 12);
  document.getElementById('results-ecommerce').classList.add('show');
}

function calcSpotify() {
  const plays    = +document.getElementById('sp-plays').value;
  const tierPct  = +document.getElementById('sp-tier').value / 100;
  const distMult = +document.getElementById('sp-dist').value;
  const avgRate  = 0.002 + (tierPct * 0.004);
  const b1 = plays * avgRate * distMult;
  const b2 = plays * 0.2 * avgRate * 2 * distMult;
  const b3 = plays * 0.1 * avgRate * distMult;
  document.getElementById('sp-spotify').textContent = fmt(b1);
  document.getElementById('sp-apple').textContent   = fmt(b2);
  document.getElementById('sp-other').textContent   = fmt(b3);
  document.getElementById('sp-total').textContent   = fmt(b1 + b2 + b3);
  document.getElementById('results-spotify').classList.add('show');
}

function calcHandmade() {
  const materiales = +document.getElementById('hm-materiales').value || 0;
  const tiempoMin  = +document.getElementById('hm-tiempo').value;
  const valorHora  = +document.getElementById('hm-hora').value || 15;
  const margenPct  = +document.getElementById('hm-margen').value / 100;
  const canalFee   = +document.getElementById('hm-canal').value / 100;
  const costoBase  = materiales + (tiempoMin / 60) * valorHora;
  const precioFinal = (costoBase * (1 + margenPct)) / (1 - canalFee);
  const ganancia   = precioFinal - costoBase - (precioFinal * canalFee);
  document.getElementById('hm-costo').textContent       = fmt(costoBase);
  document.getElementById('hm-ganancia').textContent    = fmt(ganancia);
  document.getElementById('hm-precio').textContent      = fmt(precioFinal);
  document.getElementById('hm-margen-real').textContent = (ganancia / precioFinal * 100).toFixed(1) + '%';
  document.getElementById('results-handmade').classList.add('show');
}

function calcROI() {
  const inversion = +document.getElementById('roi-inversion').value || 500;
  const ctr       = +document.getElementById('roi-ctr').value / 100;
  const convRate  = +document.getElementById('roi-conv').value / 100;
  const valor     = +document.getElementById('roi-valor').value || 80;
  const cpm       = +document.getElementById('roi-plat').value;
  const impresiones = (inversion / cpm) * 1000;
  const clientes  = Math.round(impresiones * ctr * convRate);
  const ingresos  = clientes * valor;
  const neta      = ingresos - inversion;
  const roi       = ((neta / inversion) * 100).toFixed(1);
  document.getElementById('roi-imp').textContent      = Math.round(impresiones).toLocaleString();
  document.getElementById('roi-clientes').textContent = clientes.toLocaleString();
  document.getElementById('roi-ingresos').textContent = fmt(ingresos);
  document.getElementById('roi-neta').textContent     = fmt(neta);
  document.getElementById('roi-cpa').textContent      = clientes > 0 ? '$' + (inversion / clientes).toFixed(2) : 'N/A';
  const roiEl = document.getElementById('roi-result');
  roiEl.textContent = roi + '%';
  roiEl.style.background = neta >= 0
    ? 'linear-gradient(135deg, #5cfc9a, var(--accent3))'
    : 'linear-gradient(135deg, var(--accent2), #fc8c5c)';
  roiEl.style.webkitBackgroundClip = 'text';
  roiEl.style.backgroundClip = 'text';
  roiEl.style.webkitTextFillColor = 'transparent';
  document.getElementById('results-roi').classList.add('show');
}


// ===================================================
// BIO GENERATOR
// ===================================================

const bioTemplates = {
  instagram: {
    profesional: (n, p, v) => [
      `${p} 📌\n${v}\n💼 DM para colaboraciones\n👇 Últimos proyectos`,
      `✦ ${p}\n${v}\n→ Trabajemos juntos`
    ],
    casual: (n, p, v) => [
      `hola! soy ${p} 👋\n${v}\nsiempre aprendiendo algo nuevo ✨`,
      `${p} por aquí 🙌\n${v}\nDM abierto siempre 💬`
    ],
    creativo: (n, p, v) => [
      `${p} que se niega a ser aburrido ✦\n${v}\n∞ creando siempre`,
      `[ ${p} ]\n${v}\narte > algoritmo 🎨`
    ],
    motivacional: (n, p, v) => [
      `${p} | ${v} 🚀\nCada día es una oportunidad\n↓ Únete al camino`,
      `✦ ${p}\n${v}\nTu momento es AHORA 🔥`
    ]
  },
  linkedin: {
    profesional: (n, p, v) => [
      `${p} | ${v}. Apasionado por crear soluciones que generan impacto real. Abierto a nuevas oportunidades y colaboraciones estratégicas.`,
      `${p} especializado en ${v}. Con enfoque en resultados medibles y crecimiento sostenible. Conectemos para explorar sinergias.`
    ],
    casual: (n, p, v) => [
      `Soy ${p} y me dedico a ${v}. Me apasiona aprender, colaborar y construir cosas que importan. ¡Hablemos!`,
      `${p} | ${v}. Creo que los mejores proyectos nacen de conversaciones honestas. ¿Conectamos?`
    ],
    creativo: (n, p, v) => [
      `${p}: parte ${v}, parte explorador de ideas. Aquí para romper moldes y crear con propósito.`,
      `No soy solo ${p}. Soy ${v} con la misión de dejar huella. Hablemos de lo que te quita el sueño.`
    ],
    motivacional: (n, p, v) => [
      `${p} | ${v}. Creo firmemente que el éxito es colectivo. Comparto aprendizajes, fracasos y victorias.`,
      `${p}: ${v}. El camino no es fácil, pero vale cada paso. Aquí comparto lo que nadie te enseña en la escuela.`
    ]
  },
  tiktok: {
    profesional: (n, p, v) => [
      `${p} 🎯\n${v}\nContenido que aporta valor ✅`,
      `${p} | ${v} 💡\nAprende algo nuevo cada día`
    ],
    casual: (n, p, v) => [
      `soy ${p} y hago ${v} 😂\n¡sígueme para más!`,
      `${p} aquí 👀\n${v}\nseamos amigos 🫶`
    ],
    creativo: (n, p, v) => [
      `${p} ∞ ${v}\ncontenido diferente para gente diferente ✦`,
      `${p} que hace ${v}\ny a veces sale bien 🎲`
    ],
    motivacional: (n, p, v) => [
      `${p} 🔥\n${v}\nCada video = una lección de vida`,
      `${p} | ${v}\nSi yo pude, tú puedes 💪`
    ]
  },
  twitter: {
    profesional: (n, p, v) => [
      `${p}. ${v}. Tweets sobre lo que aprendo y lo que me falla.`,
      `${p} | ${v}. Comparto ideas, no opiniones prestadas.`
    ],
    casual: (n, p, v) => [
      `${p} • ${v} • tuiteando sin filtro`,
      `soy ${p}, hago ${v} y me pierdo en internet`
    ],
    creativo: (n, p, v) => [
      `${p} | ${v} | palabras que no caben en LinkedIn`,
      `${p}. ${v}. Esto es básicamente mi cuaderno de notas.`
    ],
    motivacional: (n, p, v) => [
      `${p} | ${v} | aquí para recordarte que sí se puede`,
      `${p}. ${v}. Twiteando el camino hacia adelante.`
    ]
  }
};

function generateBio() {
  const nombre    = document.getElementById('bio-nombre').value.trim() || 'Tu Nombre';
  const profesion = document.getElementById('bio-profesion').value.trim() || 'Profesional';
  const valor     = document.getElementById('bio-valor').value.trim() || 'Creando valor cada día';
  const red       = document.getElementById('bio-red').value;
  const tono      = document.getElementById('bio-tono').value;
  const templates = bioTemplates[red][tono](nombre, profesion, valor);
  const container = document.getElementById('bio-results');
  container.innerHTML = templates.map((bio, i) => `
    <div class="bio-card" onclick="copyText(\`${bio.replace(/`/g, '\\`')}\`)"
      onmouseover="this.style.borderColor='var(--accent)'"
      onmouseout="this.style.borderColor='var(--border)'">
      <div class="bio-label">Opción ${i + 1} · haz clic para copiar</div>
      <pre class="bio-text">${bio}</pre>
    </div>
  `).join('');
  document.getElementById('results-bio').classList.add('show');
}


// ===================================================
// HASHTAG GENERATOR
// ===================================================

const hashtagData = {
  emprendimiento: {
    es: {
      alto:  ['#emprendimiento','#negocios','#entrepreneur','#startup','#emprender'],
      medio: ['#emprendedorlatino','#negociosdigitales','#emprendedores','#marketingdigital','#pymeslatam'],
      bajo:  ['#emprendedoresmexicanos','#negociosonline2026','#startupmexico','#emprendedorescolombia','#pymes2026']
    },
    en: {
      alto:  ['#entrepreneur','#business','#startup','#success','#motivation'],
      medio: ['#businessowner','#smallbusiness','#entrepreneurship','#sidehustle','#growthhacking'],
      bajo:  ['#startupfounder','#businesstips2026','#entrepreneurmindset','#b2bmarketing','#founderlife']
    }
  },
  moda: {
    es: {
      alto:  ['#moda','#fashion','#style','#outfit','#ootd'],
      medio: ['#modaespanola','#estilolatino','#outfitdeldia','#streetstyle','#modamujer'],
      bajo:  ['#modamexicana','#outfitinspo2026','#estilopropio','#capsulewardrobe','#modaconsciente']
    },
    en: {
      alto:  ['#fashion','#style','#ootd','#outfitoftheday','#fashionblogger'],
      medio: ['#fashioninspo','#styletips','#wiwt','#fashionista','#streetwear'],
      bajo:  ['#sustainablefashion','#fashioncommunity','#capsulewardrobe2026','#slowfashion','#personalstyle']
    }
  },
  fitness: {
    es: {
      alto:  ['#fitness','#gym','#ejercicio','#salud','#workout'],
      medio: ['#vidaactiva','#entrena','#nutricion','#fitnessmotivacion','#gymlife'],
      bajo:  ['#fitnessmotivacion2026','#entrenamientofuncional','#vidasaludable2026','#rutinagym','#cuerposano']
    },
    en: {
      alto:  ['#fitness','#gym','#workout','#health','#fitnessmotivation'],
      medio: ['#gymlife','#fitfam','#healthylifestyle','#gains','#personaltrainer'],
      bajo:  ['#workoutroutine2026','#strengthtraining','#fitnessjourney','#musclebuilding','#cardioworkout']
    }
  },
  gastronomia: {
    es: {
      alto:  ['#comida','#foodie','#gastronomia','#recetas','#cocina'],
      medio: ['#recetasfaciles','#comidacasera','#foodphotography','#gastronomialatina','#cocinamexicana'],
      bajo:  ['#recetasmexicanas','#comidacasera2026','#cocinafacil','#recetasaludable','#foodblogger']
    },
    en: {
      alto:  ['#food','#foodie','#foodphotography','#recipe','#cooking'],
      medio: ['#homecooking','#foodlover','#instafood','#cheflife','#easyrecipes'],
      bajo:  ['#mealprep2026','#homechef','#foodstyling','#cookingathome','#recipeshare']
    }
  },
  viajes: {
    es: {
      alto:  ['#viajes','#travel','#turismo','#viajero','#aventura'],
      medio: ['#viajaporlatam','#turismomexico','#travelblogger','#viajarmola','#destinoslatam'],
      bajo:  ['#viajesbaratos','#turismocolombiano','#mochileroslatam','#viajandosolo','#turismosustentable']
    },
    en: {
      alto:  ['#travel','#wanderlust','#travelphotography','#explore','#adventure'],
      medio: ['#travelgram','#travelblogger','#solotravel','#backpacker','#travellife'],
      bajo:  ['#budgettravel2026','#digitalnomad','#traveltips','#offthebeatenpath','#travelhacks']
    }
  },
  tecnologia: {
    es: {
      alto:  ['#tecnologia','#tech','#programacion','#ia','#software'],
      medio: ['#desarrolloweb','#inteligenciaartificial','#programadores','#startupmexico','#devlatam'],
      bajo:  ['#codigolatino','#programadoreslatinos','#desarrolladorweb','#machinelearning','#webdev2026']
    },
    en: {
      alto:  ['#tech','#technology','#programming','#ai','#software'],
      medio: ['#developer','#coding','#webdeveloper','#artificialintelligence','#startup'],
      bajo:  ['#devlife','#100daysofcode','#techjobs','#openai','#machinelearning2026']
    }
  },
  arte: {
    es: {
      alto:  ['#arte','#diseno','#ilustracion','#creatividad','#artista'],
      medio: ['#artelatino','#disenografico','#ilustraciondigital','#artedigital','#artistaslatinos'],
      bajo:  ['#ilustradoreslatinos','#disenobranding','#arteabstracto','#procreate2026','#artedigital2026']
    },
    en: {
      alto:  ['#art','#design','#illustration','#creative','#artist'],
      medio: ['#digitalart','#graphicdesign','#artoftheday','#illustrator','#procreate'],
      bajo:  ['#artprocess','#conceptart','#characterdesign','#digitalillustration','#artcommunity2026']
    }
  },
  musica: {
    es: {
      alto:  ['#musica','#music','#artista','#nuevamusica','#cancion'],
      medio: ['#musicalatina','#artistaindependiente','#produccionmusical','#musicaenespanol','#nuevotalento'],
      bajo:  ['#artistasemergentes','#musicaunderground','#produccionmusical2026','#musicaindependiente','#artistanuevo']
    },
    en: {
      alto:  ['#music','#newmusic','#artist','#song','#musician'],
      medio: ['#indieartist','#musicproducer','#newrelease','#unsignedartist','#musiclife'],
      bajo:  ['#indiemusic2026','#musicianlife','#songwritersofinstagram','#beatmaker','#independentartist']
    }
  },
  finanzas: {
    es: {
      alto:  ['#finanzas','#inversion','#dinero','#finanzaspersonales','#ahorro'],
      medio: ['#libertadfinanciera','#inversionistas','#criptografia','#finanzaslatam','#educacionfinanciera'],
      bajo:  ['#invertirjoven','#finanzas2026','#independenciafinanciera','#ahorrolatino','#bolsadevalores']
    },
    en: {
      alto:  ['#finance','#investing','#money','#personalfinance','#wealth'],
      medio: ['#financialfreedom','#investor','#stockmarket','#budgeting','#moneymindset'],
      bajo:  ['#financetips2026','#wealthbuilding','#passiveincome','#dividendinvesting','#financialindependence']
    }
  },
  belleza: {
    es: {
      alto:  ['#belleza','#makeup','#skincare','#beauty','#maquillaje'],
      medio: ['#rutinaskincare','#makeuptutorial','#bellezalatina','#cuidadopersonal','#maquillajenatural'],
      bajo:  ['#skincarelatina','#bellezanatural2026','#makeupinspo','#rutinabelleza','#maquillajelatino']
    },
    en: {
      alto:  ['#beauty','#makeup','#skincare','#makeuptutorial','#cosmetics'],
      medio: ['#beautytips','#skincareRoutine','#makeuplook','#naturalmakeup','#beautyblogger'],
      bajo:  ['#skincaregoals','#cleanbeauty2026','#makeupinspo','#beautycommunity','#dewyglam']
    }
  }
};

function generateHashtags() {
  const nicho  = document.getElementById('ht-nicho').value;
  const idioma = document.getElementById('ht-idioma').value;
  const red    = document.getElementById('ht-red').value;
  const getData = lang => hashtagData[nicho]?.[lang] || hashtagData.emprendimiento[lang];
  let alto, medio, bajo;
  if (idioma === 'mixto') {
    const es = getData('es'), en = getData('en');
    alto  = [...es.alto.slice(0,3),  ...en.alto.slice(0,2)];
    medio = [...es.medio.slice(0,3), ...en.medio.slice(0,2)];
    bajo  = [...es.bajo.slice(0,3),  ...en.bajo.slice(0,2)];
  } else {
    const d = getData(idioma);
    alto = d.alto; medio = d.medio; bajo = d.bajo;
  }
  let all;
  if (red === 'instagram')   all = [...alto, ...medio, ...bajo].slice(0, 30);
  else if (red === 'tiktok') all = [...alto.slice(0,2), ...medio.slice(0,3), ...bajo.slice(0,2)];
  else                        all = [...alto.slice(0,1), ...medio.slice(0,2), ...bajo.slice(0,1)];

  const fullText = all.join(' ');
  const container = document.getElementById('ht-results');
  container.innerHTML = `
    <div class="ht-badges">
      <span class="ht-badge alta">🔴 Alta: ${alto.slice(0, red==='linkedin'?1:red==='tiktok'?2:5).length}</span>
      <span class="ht-badge media">🟡 Media: ${medio.slice(0, red==='linkedin'?2:red==='tiktok'?3:5).length}</span>
      <span class="ht-badge baja">🟢 Baja: ${bajo.slice(0, red==='linkedin'?1:red==='tiktok'?2:5).length}</span>
    </div>
    <div class="ht-block" onclick="copyText('${fullText}')"
      onmouseover="this.style.borderColor='var(--accent)'"
      onmouseout="this.style.borderColor='var(--border)'">
      <div class="ht-block-label">${all.length} hashtags · haz clic para copiar todo</div>
      <div class="ht-tags">
        ${all.map((h, i) => {
          const cls = i < alto.length ? 'tag-alta' : i < alto.length + medio.length ? 'tag-media' : 'tag-baja';
          return `<span class="ht-tag ${cls}">${h}</span>`;
        }).join('')}
      </div>
    </div>
  `;
  document.getElementById('results-hashtags').classList.add('show');
}


// ===================================================
// COPY TO CLIPBOARD
// ===================================================

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    const t = document.getElementById('toast');
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2000);
  });
}

// ===================================================
// NUEVA HERRAMIENTA: TIENDA DE ROPA
// ===================================================

const tiendaRopaData = {
  boutique: {
    moderno: ['Maison Éclat','The White Label','Atelier Fino','Studio Blanc','Velvet & Thread','The Boutique Edit','Silk Room','Petal & Lace','Ivory Studio','The Refined Rack','Blanche Mode','Studio Ivoire','The Lux Edit','Cream Label','Satin & Co.','The Closet Studio','Mode Blanche','The Fine Rack','Ivory Thread','Studio Fine'],
    calido: ['La Boutique de Ana','Casa de Modas','El Ropero Bonito','La Tienda Querida','Closet Feliz','La Modista','El Guardarropa','Ropa con Alma','La Tienda Linda','El Vestidor Familiar','Casa Moda','La Boutique del Barrio','El Ropero Lindo','Modas con Cariño','La Tiendita de Moda','Vestidos y Más','El Rincón de Moda','La Casita de Ropa','Modas Queridas','El Armario Amigo'],
    premium: ['Maison Prestige','The Couture Room','Élite Boutique','La Haute Boutique','The Signature Closet','Prestige Mode','The Luxury Edit','Couture & Co.','The Premier Boutique','La Mode Exclusive','The Gold Label','Élite Thread','Prestige Rack','The Fine Boutique','La Maison Mode','Gold Thread Studio','The Exclusive Edit','Premier Mode','La Boutique Gold','The Couture Label'],
    divertido: ['Closet Pop','Ropa Chida','La Tienda Fun','The Happy Rack','Moda Loca','La Boutique Cool','Happy Clothes','Fun & Fab','La Tienda Chula','Rack Attack','Moda Fiesta','The Funky Closet','La Boutique Feliz','Happy Rack','Moda Pop','The Colorful Closet','La Tienda Trendy','Fun Mode','The Pop Boutique','Moda Alegre']
  },
  casual: {
    moderno: ['Everyday Edit','The Casual Studio','Basic & Co.','The Daily Rack','Common Wear','The Wardrobe Edit','Plain Studio','The Simple Rack','Neutral Closet','The Basic Edit','Wardrobe Lab','Casual Studio','The Everyday Rack','Simple Mode','The Daily Edit','Basic Studio','Neutral Rack','The Plain Closet','Common Studio','The Wardrobe Lab'],
    calido: ['Ropa del Día','La Tienda Casual','El Closet Amigo','Ropa Cómoda','La Boutique Diaria','El Vestidor Casual','Moda Cotidiana','La Tienda Comfy','El Ropero Casual','Ropa para Todos','El Armario Comfy','La Moda del Día','Closet Everyday','Ropa con Estilo','La Tienda de Todos','El Guardarropa Casual','Moda Simple','La Boutique Comfy','El Ropero del Día','Ropa Fácil'],
    premium: ['The Polished Casual','Refined Basics','The Smart Casual','Elevated Basics','The Premium Rack','Polished Wardrobe','Smart Casual Studio','The Refined Edit','Elevated Thread','The Casual Luxe','Premium Basics Co.','The Polished Rack','Smart Edit','The Elevated Closet','Refined Casual','The Luxe Basic','Polished Thread','Smart Wardrobe','The Elevated Rack','Refined Mode'],
    divertido: ['Fun Basics','The Happy Casual','Comfy & Cool','The Chill Rack','Easy Wear Co.','The Laid Back Edit','Chill Mode','Fun Wardrobe','The Easy Closet','Happy Basics','Chill Wear','The Fun Rack','Easy Mode','The Comfy Edit','Laid Back Studio','Fun Thread','The Chill Closet','Easy Wardrobe','The Happy Rack','Comfy Mode']
  },
  urbana: {
    moderno: ['Urban Drops','Street Edit','The Block','Concrete Label','Asphalt Brand','Urban Thread','Street Studio','The Grid Rack','Block Edit','Concrete Mode','Urban Lab','Street Label','The Block Brand','Asphalt Thread','Urban Edit','Street Mode','The Grid Label','Block Studio','Concrete Rack','Urban Brand'],
    calido: ['La Tienda Urbana','El Closet Callejero','Moda Urbana','La Calle Style','El Barrio Moda','Ropa de Calle','La Tienda del Barrio','El Ropero Urbano','Moda Barrial','La Boutique Urbana','El Armario Callejero','Ropa Urbana','La Tienda de la Calle','El Closet del Barrio','Moda Callejera','La Boutique del Barrio','El Guardarropa Urbano','Ropa de Barrio','La Tienda Callejera','El Vestidor Urbano'],
    premium: ['The Urban Luxe','Street Premium','The Block Premium','Urban Prestige','Street Couture','The Grid Premium','Block Prestige','Urban Couture','Street Elite','The Block Couture','Urban Premium Co.','Street Prestige','The Grid Couture','Block Premium','Urban Elite','Street Luxe','The Block Elite','Urban Mode Premium','Street Mode Elite','The Grid Elite'],
    divertido: ['Drip Zone','The Drop Shop','Fresh Fits','Drip Lab','The Fit Check','Fresh Drop','Drip Edit','The Zone','Fresh Fits Co.','Drip Mode','The Drop Zone','Fresh Label','Drip & Co.','The Fit Zone','Fresh Mode','Drip Studio','The Drop Lab','Fresh Edit','Drip Brand','The Fit Drop']
  },
  vintage: {
    moderno: ['The Vintage Edit','Second Bloom','Retro Rack','Thrift & Thread','The Pre-Loved Closet','Vintage Loop','Second Story','Retro Mode','The Thrift Edit','Pre-Loved Studio','Vintage Thread','Second Chance Mode','Retro Closet','Thrift Studio','The Vintage Loop','Second Edit','Retro Lab','Thrift Mode','The Pre-Loved Edit','Vintage Studio'],
    calido: ['La Tienda de Segunda','El Ropero Vintage','Ropa con Historia','La Boutique Retro','El Closet del Pasado','Moda Vintage','La Tienda Retro','El Guardarropa Antiguo','Ropa de Otra Época','La Boutique de Segunda','El Armario Retro','Moda con Memoria','La Tiendita Vintage','El Ropero Retro','Ropa Segunda Mano','La Boutique Nostálgica','El Closet Vintage','Moda Retro','La Tienda Nostálgica','El Vestidor Retro'],
    premium: ['The Curated Vintage','Preloved Prestige','The Vintage Boutique','Curated Retro','The Pre-Loved Premium','Vintage Couture','Preloved Edit Premium','The Curated Rack','Retro Prestige','The Vintage Couture','Curated Second','Preloved Luxury','The Vintage Premium','Curated Mode','Retro Premium Co.','The Pre-Loved Boutique','Vintage Prestige','Curated Edit','Retro Luxury','The Vintage Prestige'],
    divertido: ['Thrift Queen','The Treasure Rack','Funky Finds','Thrift Vibes','The Quirky Closet','Fun Thrift','The Treasure Hunt','Funky Mode','Thrift & Find','The Quirky Rack','Fun Finds','Thrift Funk','The Treasure Mode','Funky Thrift','Thrift Joy','The Quirky Hunt','Fun Treasure','Thrift Play','The Funky Find','Quirky Thread']
  },
  infantil: {
    moderno: ['Mini Drops','Little Edit','The Kids Rack','Mini Mode','Little Studio','The Junior Edit','Mini Thread','Little Label','The Kids Studio','Mini Lab','Little Rack','The Junior Rack','Mini Edit','Little Mode','The Kids Label','Mini Studio','Little Thread','The Junior Studio','Mini Brand','Little Lab'],
    calido: ['La Ropita','El Closet de los Niños','Ropa para Chiquitos','La Boutique Infantil','El Guardarropa Infantil','Moda Infantil','La Tiendita de los Niños','El Ropero Infantil','Ropa Chiquita','La Boutique de los Peques','El Armario Infantil','Moda para Niños','La Tienda Infantil','El Closet Infantil','Ropa de Niños','La Boutique Infantil','El Vestidor Infantil','Moda Chiquita','La Tiendita Infantil','Ropa para Niños'],
    premium: ['Little Luxe','The Premium Kids','Mini Prestige','Little Elite','The Kids Boutique','Mini Couture','Little Premium','The Junior Boutique','Mini Elite','Little Couture','The Premium Junior','Mini Luxe','Little Prestige','The Kids Couture','Mini Boutique','Little Luxe Studio','The Junior Prestige','Mini Prestige Studio','Little Elite Studio','The Kids Luxe'],
    divertido: ['Kiddos','The Fun Kids','Little Wild','Happy Kids Mode','The Colorful Kids','Fun Little','Kiddos Mode','The Playful Rack','Little Fun','Happy Little','Colorful Kids','The Fun Rack','Little Play','Happy Mode Kids','The Playful Kids','Fun Kiddos','Little Happy','Colorful Thread','The Playful Mode','Fun Kids Studio']
  },
  deportiva: {
    moderno: ['Active Lab','The Performance Edit','Sport Studio','Motion Brand','Active Thread','The Gym Edit','Sport Lab','Motion Studio','Active Brand','The Performance Studio','Gym Lab','Sport Edit','Motion Lab','Active Studio','The Gym Studio','Sport Brand','Motion Edit','Active Edit','The Performance Brand','Gym Studio'],
    calido: ['Ropa Deportiva','La Tienda del Deporte','El Gym Store','Moda Activa','La Boutique Deportiva','El Closet Activo','Ropa para Entrenar','La Tienda Activa','El Ropero Deportivo','Moda Fit','La Boutique Activa','El Armario Fit','Ropa Sport','La Tienda Fit','El Guardarropa Deportivo','Moda Deportiva','La Boutique Fit','El Closet Sport','Ropa Fitness','La Tienda Sport'],
    premium: ['The Athletic Luxe','Performance Prestige','The Sport Elite','Active Couture','The Gym Premium','Performance Elite','Sport Prestige','The Athletic Premium','Active Prestige','The Gym Elite','Performance Couture','Sport Elite Studio','The Athletic Studio','Active Elite','The Gym Prestige','Performance Studio','Sport Couture','Athletic Prestige','Active Luxe','The Gym Couture'],
    divertido: ['Sweat & Slay','The Hustle Rack','Gains Mode','Fit & Fun','The Active Pop','Sweat Mode','The Hustle Edit','Gains Studio','Fit Fun Co.','Active Vibes','Sweat Lab','The Hustle Mode','Gains Brand','Fit Vibes','Active Fun','Sweat & Style','The Hustle Brand','Gains Edit','Fit Mode','Active Slay']
  }
};




// ===================================================
// NUEVA HERRAMIENTA: GENERADOR DE IDEAS DE CONTENIDO
// ===================================================

const ideasData = {
  emprendimiento: {
    instagram: {
      video_corto: ['3 errores que cometí al lanzar mi primer negocio','Cómo conseguí mis primeros 10 clientes sin pagar publicidad','Día en la vida de un emprendedor honesto (sin filtros)','Lo que nadie te dice sobre emprender con poco dinero','Cuánto gano realmente con mi negocio (cifras reales)','Por qué casi cierro mi negocio y lo que aprendí','Lo que aprendí en mi primer año como emprendedor','Cómo poner precio a tus servicios sin miedo','5 apps que uso para manejar mi negocio desde el celular','Reaccionando a mis primeros intentos de vender'],
      carrusel: ['10 lecciones de negocios que aprendí de mis fracasos','Cómo estructurar un plan de negocios en una página','Los 7 tipos de clientes y cómo tratar a cada uno','Checklist para lanzar tu negocio este mes','Cómo calcular el precio de tus productos (con fórmula)','5 modelos de negocio que puedes empezar sin inversión','Cómo conseguir clientes con Instagram orgánico en 2026','Las 8 métricas que todo negocio debería medir','Errores financieros que arruinan pequeños negocios','Diferencias entre emprendedor exitoso y promedio'],
      foto: ['La oficina desde donde construyo mi negocio','Mi primer pedido vs. el pedido de hoy','La herramienta que cambió mi forma de trabajar','Cita que me cambió la mentalidad emprendedora','Lo que cargaba en mi bolsa cuando empecé vs. ahora'],
      video_largo: ['Cómo monté mi negocio desde cero con $500 dólares','La historia completa de cómo crecí de 0 a 100 clientes','Análisis de negocios exitosos en redes sociales','Masterclass gratis: cómo vender en Instagram sin anuncios','Un año emprendiendo: resultados, fracasos y aprendizajes'],
      texto: ['Hilo: Los 10 principios de negocio que me tomó años aprender','Thread: Un día resolviendo una crisis en mi empresa','Mi historia: del trabajo de oficina a emprender con miedo','Reflexión: Por qué la mayoría de negocios fracasan en el primer año','Consejo del día: la regla de las 2 horas para emprendedores'],
      stories: ['¿Cuánto llevas emprendiendo? Encuesta','El mayor reto de tu negocio este mes','Detrás de cámaras: así es un día real en mi negocio','Pregúntame lo que quieras sobre emprendimiento','Mito o realidad: emprender es solo para los que tienen dinero']
    },
    tiktok: {
      video_corto: ['El error de negocio que me costó $3,000 (storytime)','POV: tu cliente te dice que eres muy caro','Cómo respondo a clientes difíciles (role play)','Red flag de un mal socio de negocios','Cuánto gané en mi primer mes de negocio (honesto)','Lo que pasa realmente detrás de un "negocio exitoso"','3 formas de conseguir clientes sin pagar un peso','El día que casi quiebro y lo que hice','Tipos de clientes que todo emprendedor conoce','Esto pasa cuando pones demasiado bajo tu precio'],
      carrusel: ['Errores del emprendedor novato','Cómo validar tu idea en 48 horas','Lo que nadie te dice sobre tener un negocio','Plan de negocio en una diapositiva','Negocios que puedes empezar desde tu celular'],
      foto: ['Mi setup de trabajo hoy','El momento que cambió mi negocio','Primera venta vs. última venta','Herramientas que uso cada día','Motivación del emprendedor: esta semana'],
      video_largo: ['Cómo empecé mi negocio desde cero sin dinero','Un día en la vida de un emprendedor real','Lo que nadie te dice sobre trabajar para ti mismo','Análisis: negocios que funcionan en redes sociales','Mis primeros 6 meses como emprendedor: cifras reales'],
      texto: ['POV: tu cliente te pide descuento y no sabe cuánto trabajas','Señales de que tu negocio está creciendo (aunque no lo sientas)','La conversación más difícil con un cliente','Por qué cobrar barato te está costando clientes','El momento exacto en que supe que iba a funcionar'],
      stories: ['¿Tienes negocio propio? Sí o no','Tu mayor miedo al emprender (encuesta)','Detrás de cámaras: mi oficina hoy','Tip emprendedor del día','Pregúntame cualquier cosa sobre mi negocio']
    },
    youtube: {
      video_largo: ['De empleado a emprendedor: mi historia completa','Cómo crear un negocio digital desde cero en 2026','Los 10 libros de negocios que realmente me ayudaron','Construí un negocio de $10K al mes — así lo hice','Análisis: por qué fracasan el 90% de los negocios nuevos'],
      video_corto: ['El error que casi quiebra tu negocio','Tip de ventas en 60 segundos','¿Cómo conseguir tu primer cliente?','La herramienta de negocio más subestimada','Por qué el precio más bajo no siempre gana']
    },
    linkedin: {
      texto: ['Reflexión: Lo que 5 años emprendiendo me enseñaron','Los 3 contratos que casi arruinan mi empresa','Cómo perdí mi mayor cliente y lo que cambié','La habilidad de negocios que más dinero me ha generado','Diferencia entre emprendedor y empresario'],
      carrusel: ['Cómo construir una red de contactos que realmente funcione','Los errores que cometen los emprendedores nuevos','Habilidades blandas que nadie enseña en la universidad','Cómo presentar tu negocio en 30 segundos','El pitch perfecto para conseguir inversión']
    },
    twitter: {
      texto: ['Hilo: 10 verdades del emprendimiento que nadie cuenta','Thread: Cómo validé mi idea de negocio en 48 horas','Lista: Recursos gratuitos para emprendedores que ojalá hubiera conocido antes','Reflexión: El momento exacto en que supe que iba a funcionar','Consejo rápido: La regla de oro para fijar precios']
    }
  },
  moda: {
    instagram: {
      video_corto: ['Cómo combinar prendas básicas de 5 formas diferentes','Lo que nadie te dice sobre comprar en Shein','Mi armario cápsula completo (menos de 30 prendas)','Outfits para toda la semana sin repetir ropa','Cómo saber tu silueta y qué ponerte','3 errores de moda que te hacen ver desaliñado','Haul de ropa de segunda mano (lo que encontré)','De informal a formal con los mismos pantalones','Los básicos de closet que toda mujer necesita','Cómo lavar ropa oscura sin que se decolore'],
      carrusel: ['Armario cápsula por temporada: guía completa','Cómo combinar el color naranja sin verte raro','10 formas de usar una camisa blanca','Los colores que van con todo (y cómo combinarlos)','Guía de tallas: cómo comprar ropa online sin errores','Qué ropa usar según tu silueta (guía visual)','Tendencias de moda 2026 que sí o sí debes tener','Cómo hacer un armario sostenible paso a paso','Los 10 accesorios que elevan cualquier outfit','Mini guía de estilo para cada tipo de evento'],
      foto: ['Outfit del día: el básico que más llevo puesto','Antes/después: cómo el styling cambia todo','El look que más me han comentado este mes','Thrift flip: así quedó la prenda que transformé','Inspiración de outfit para esta semana'],
      video_largo: ['Mi historia en la moda: de compradora compulsiva a estilista','Cómo construí mi marca de ropa desde cero','Los 10 errores de moda que todos cometemos','Guía completa de tendencias del año','Armario cápsula completo: haul y lookbook'],
      texto: ['Hilo: Por qué la moda rápida está destruyendo el planeta','Thread: Cómo encontré mi estilo propio después de años de confusión','Reflexión: Lo que la moda me enseñó sobre autoestima','Lista: 10 prendas que nunca pasan de moda','Debate: ¿Vale la pena invertir en ropa cara?'],
      stories: ['¿Qué estás usando hoy? Muéstrame tu outfit','¿Fast fashion o slow fashion? Vota','Desliza para ver mi transformación de outfit','Pregúntame lo que quieras sobre moda','Este o este: ¿cuál look prefieres?']
    },
    tiktok: {
      video_corto: ['Transformación de outfit: de básico a chic en 30 seg','Lo que compré vs. lo que llegó (Shein honesto)','Cómo doblar ropa para que quepa más en la maleta','Outfits que te hacen ver más alto/delgado','Rating outfits de celebridades (sin filtros)','Cómo saber si una prenda vale su precio','Recicla este outfit de 2015 con estas piezas nuevas','Prueba de outfits de TikTok (¿funcionan en la vida real?)','La regla de los 30 usos para comprar ropa','POV: tu amiga te pide consejo de moda'],
      carrusel: ['10 looks con solo 5 prendas','Outfits aesthetic por menos de $50','Cómo vestir bien con poco dinero','Los básicos que toda chica necesita','Moda sostenible: marcas que valen la pena'],
      foto: ['El outfit más comentado de mi semana','Look del día: minimalista total','Mi compra favorita del mes','Inspiración outfit: este o este','Thrift flip revelado'],
      video_largo: ['Haul completo de ropa de temporada','Mi proceso para crear looks únicos','Revisando mi closet: qué me quedo y qué boto','Cómo hacer compras inteligentes de ropa','Historia de mi estilo: cómo evolucioné'],
      texto: ['POV: llevas 30 min eligiendo qué ponerte','Señales de que tu armario necesita un detox','El outfit que siempre funciona cuando no sabes qué ponerte','Moda tip del día: la regla del tercer elemento','Por qué los básicos nunca fallan'],
      stories: ['Vota: ¿cuál outfit me pongo hoy?','Lo que llevaría a este evento (encuesta)','Rating de mi compra nueva','¿Qué prendas extrañas más?','Este o este: ayúdame a elegir']
    },
    youtube: {
      video_largo: ['Armario cápsula completo: haul + lookbook de 30 días','Cómo construí mi estilo personal desde cero','Los errores de moda que todos cometemos (y cómo evitarlos)','Revisión honesta de Shein, Zara y H&M: ¿vale la pena?','Cómo vestirse bien con presupuesto bajo: guía completa'],
      video_corto: ['Outfit check: básico pero elegante','3 formas de usar un blazer','La prenda más versátil de mi closet','Tip de moda express','Combinación que nunca falla']
    },
    linkedin: {
      texto: ['Reflexión: lo que la industria de la moda me enseñó sobre marca personal','Cómo el estilo impacta tu percepción profesional','La sostenibilidad en la moda: tendencia o responsabilidad','Lo que aprendí construyendo una marca de ropa independiente','Vestimenta y liderazgo: ¿importa cómo te vistes en el trabajo?'],
      carrusel: ['Cómo vestirse para diferentes entornos profesionales','Personal branding a través de tu estilo','Cómo iniciar una marca de moda en 2026','Tendencias en la industria de la moda sostenible','Lo que los reclutadores notan de tu imagen profesional']
    },
    twitter: {
      texto: ['Hilo: por qué la moda rápida es un problema que todos ignoramos','Thread: cómo construí mi armario cápsula con menos de $300','Lista: marcas de moda sostenible que realmente cumplen','Debate: ¿es posible vestirse bien con poco dinero?','Tip del día: la prenda que más ROI te da en tu armario']
    }
  },
  fitness: {
    instagram: {
      video_corto: ['Rutina de 10 minutos en casa sin equipo','Lo que como en un día (dieta real, no perfecta)','Por qué dejé de hacer cardio y qué pasó','3 ejercicios que transformaron mi espalda','Cómo empecé a ir al gym sin saber nada','Mitos del fitness que te están frenando','Mi progreso de 6 meses (foto honesta)','Lo que nadie te dice sobre perder peso','Cómo entrenar con poco tiempo y muchos resultados','El suplemento que realmente vale la pena'],
      carrusel: ['Plan de entrenamiento para principiantes (descargable)','Los 10 mejores ejercicios para glúteos en casa','Cómo calcular tus calorías sin obsesionarte','Guía de proteínas: cuánta necesitas realmente','Errores comunes en sentadillas (y cómo corregirlos)','Plan de comidas saludable para la semana','Los mejores ejercicios según tu objetivo','Cómo crear hábitos de ejercicio que duren','Glosario de términos de gym para principiantes','Señales de que estás sobreentrenando'],
      foto: ['Progreso de hoy en el gym','La comida que preparé para toda la semana','Mi setup de entrenamiento en casa','Comparación de progreso: antes y ahora','El momento post-entreno que más disfruto'],
      video_largo: ['Mi transformación de 90 días: todo lo que hice','Guía completa de nutrición para principiantes','Cómo crear tu propio plan de entrenamiento','Los suplementos que realmente funcionan (con evidencia)','Un día en la vida de alguien que entrena 5 veces a la semana'],
      texto: ['Hilo: todo lo que aprendí en 2 años entrenando','Thread: por qué el cardio no es la solución para perder peso','Lista: mitos del fitness desmentidos por la ciencia','Reflexión: cómo el ejercicio cambió mi salud mental','Consejo del día: la regla más importante para ver resultados'],
      stories: ['¿Entrenaste hoy? Sí o no','Encuesta: ¿gym o casa?','Tip de nutrición del día','Vota: ¿cuál rutina quieres que grabe?','Pregúntame sobre fitness']
    },
    tiktok: {
      video_corto: ['Rutina que hago en el gym en 45 minutos','Lo que como antes y después de entrenar','Rating de dietas populares (keto, ayuno, vegana)','Motivación para ir al gym cuando no quieres','El error que te impide ver resultados en el gym','Cómo hacer ejercicio si odias el gym','Transformación de 30 días (honesta)','Por qué no estás perdiendo peso aunque te cuidas','Los mejores ejercicios para hacer en casa','POV: tu primer día en el gym'],
      carrusel: ['Los 5 errores que cometes en el gym','Rutina exprés de 15 minutos','Lo que como en un día fit','Ejercicios para cada parte del cuerpo','Guía de suplementos para principiantes'],
      foto: ['Progreso semanal','Meal prep del domingo','Mi look de gym favorito','Post-entreno feliz','El ejercicio más difícil que domino'],
      video_largo: ['Entreno contigo: sesión completa de 45 min','Mi dieta durante una semana (todo honesto)','Transformación real sin filtros ni edición','Cómo empezar a entrenar desde cero','Los mejores ejercicios para cada objetivo'],
      texto: ['POV: llevas 3 semanas sin ver resultados','Señales de que estás progresando (aunque no lo notes)','El error número 1 de los principiantes en el gym','Por qué la constancia importa más que la perfección','Fitness tip: la regla del 80/20 en nutrición'],
      stories: ['¿Qué entrenaste hoy?','Encuesta: ¿proteína antes o después?','Mi comida post-entreno de hoy','Vota: ¿cuál rutina quieres que grabe?','Tip de motivación del día']
    },
    youtube: {
      video_largo: ['Entrena conmigo: rutina completa de pecho y espalda','Mi dieta durante 30 días: resultados honestos','Guía definitiva para principiantes en el gym','Los 10 ejercicios más efectivos según la ciencia','Transformación de 6 meses: sin filtros, sin excusas'],
      video_corto: ['Ejercicio del día en 60 segundos','Tip de nutrición express','Error común en el gym','Motivación de lunes','El mejor ejercicio para glúteos']
    },
    linkedin: {
      texto: ['Cómo el ejercicio mejoró mi productividad laboral','Lo que el fitness me enseñó sobre disciplina profesional','Salud mental y ejercicio: la conexión que los líderes ignoran','Por qué las empresas deberían invertir en el bienestar físico de sus equipos','Hábitos de fitness de los ejecutivos más exitosos'],
      carrusel: ['5 hábitos de bienestar para profesionales ocupados','Cómo mantener una rutina de ejercicio con agenda llena','Beneficios del ejercicio en el rendimiento laboral','Wellness corporativo: por qué importa en 2026','Cómo construir hábitos saludables que duren']
    },
    twitter: {
      texto: ['Hilo: lo que cambió en mi vida cuando empecé a entrenar todos los días','Thread: guía de nutrición básica para personas ocupadas','Lista: apps de fitness que realmente uso y recomiendo','Mito desmentido: no necesitas 2 horas diarias para estar en forma','Consejo del día: el mejor ejercicio es el que sí haces']
    }
  },
  gastronomia: {
    instagram: {
      video_corto: ['Receta de 5 ingredientes que impresiona a cualquiera','Lo que como en un día (comida latina real)','Hack de cocina que me cambió la vida','Receta viral de TikTok: ¿vale la pena?','Cómo cocinar arroz perfecto siempre','3 salsas que hago con todo','La receta de mi abuela que nunca falla','Comida semanal en menos de 2 horas','Cómo hacer pasta sin que se pegue','Lo que come un chef en casa (sin cámaras)'],
      carrusel: ['10 recetas rápidas para la semana laboral','Cómo hacer meal prep en 2 horas','Los condimentos que siempre debes tener','Guía de sustitutos para recetas (sin ingredientes raros)','Recetas con sobras para no desperdiciar nada','Las 5 técnicas de cocina más útiles','Cómo hacer que cualquier comida sepa mejor','Guía de especias del mundo y cómo usarlas','Recetas económicas que no parecen económicas','Menú semanal vegetariano fácil'],
      foto: ['El plato que más orgulloso me tiene esta semana','Mise en place de hoy','Mi ingrediente secreto favorito','El desayuno que preparo cada mañana','Antes y después: el plato que perfeccioné'],
      video_largo: ['Cocino 20 recetas en un domingo (meal prep semanal completo)','Curso básico de cocina para principiantes absolutos','Los secretos de los chefs que puedes aplicar en casa','Cómo cocinar saludable sin gastar mucho dinero','Una semana cocinando recetas de distintos países'],
      texto: ['Hilo: los trucos de cocina que ojalá supiera antes','Thread: cómo hacer que cualquier receta simple sepa increíble','Lista: condimentos que transforman cualquier plato','Reflexión: por qué cocinar en casa cambió mi salud y mi bolsillo','Tip del día: el error más común al cocinar pollo'],
      stories: ['¿Qué estás cocinando hoy?','Encuesta: ¿dulce o salado?','Adivina el ingrediente secreto','¿Qué receta quieres que haga esta semana?','Lo que sobró del meal prep']
    },
    tiktok: {
      video_corto: ['Receta de TikTok que todos están haciendo','Lo que como cuando no quiero cocinar (honesto)','Hack de cocina que no puedo creer no conocía antes','Rating: probo recetas de 1 estrella vs. 5 estrellas','Cómo hacer tortillas perfectas (el secreto)','El platillo que hago cuando no hay nada en casa','Receta de mi abuela en 60 segundos','Por qué tu arroz siempre queda mal','Cómo cortar cebolla sin llorar (funciona)','Lo que pido en restaurantes vs. lo que llega'],
      carrusel: ['5 recetas con pollo que no son aburridas','Meal prep en 1 hora para toda la semana','Salsas que cambian cualquier plato','Recetas de menos de $10','Desayunos rápidos y ricos para la semana'],
      foto: ['La receta más pedida de mi perfil','Mi ingrediente favorito del momento','Plato perfecto para impresionar en 20 min','Antes y después: cómo emplatamos','El truco visual que hace tu plato más apetitoso'],
      video_largo: ['Cocino todo lo que hay en mi refrigerador','Un día en la cocina de un chef casero','Recetas de todo el mundo que puedes hacer en casa','Guía de cocina para solteros y principiantes','Probando recetas virales de cada país de Latam'],
      texto: ['POV: abres el refrigerador y no sabes qué cocinar','El truco que los chefs no quieren que sepas','Por qué tu sazón no es igual al de tu abuela (y cómo arreglarlo)','Ingrediente subestimado que transforma cualquier receta','La regla de oro de la cocina que nadie te enseña'],
      stories: ['¿Qué cocinas cuando no tienes ganas?','Encuesta: ¿salado o picante?','Adivina este plato','Mi snack favorito del momento','Receta exprés del día']
    },
    youtube: {
      video_largo: ['Cocino la comida de toda la semana en un solo día','Los secretos de la cocina latina que debes conocer','Aprende a cocinar 10 platillos básicos desde cero','Lo que aprendí trabajando en un restaurante profesional','Recetas de todo el mundo con ingredientes de supermercado'],
      video_corto: ['Receta de 5 minutos que salva el día','El truco para que el arroz quede perfecto','Sazón secreto revelado','Hack de cocina del día','La receta más fácil de tu vida']
    },
    linkedin: {
      texto: ['Lo que la gastronomía me enseñó sobre liderazgo y trabajo en equipo','Emprender en el sector food & beverage: lo que nadie te dice','Cómo la cultura gastronómica está cambiando el consumo en Latinoamérica','Del restaurante a la startup: lecciones de la industria culinaria','Tendencias gastronómicas que están redefiniendo los negocios en 2026'],
      carrusel: ['Cómo construir un negocio de comida exitoso','El modelo de negocio de los dark kitchens explicado','Marketing digital para restaurantes y negocios de comida','Emprender en gastronomía: lo que debes saber antes de empezar','Tendencias en la industria restaurantera para 2026']
    },
    twitter: {
      texto: ['Hilo: por qué los restaurantes fracasan en el primer año (y cómo evitarlo)','Thread: los mejores platillos callejeros de Latinoamérica rankeados','Lista: condimentos esenciales que todo cocinero debería tener','Debate: ¿la cocina de abuela o los restaurantes de moda?','Tip del día: el truco más simple para mejorar cualquier guiso']
    }
  },
  tecnologia: {
    instagram: {
      video_corto: ['5 extensiones de Chrome que uso todos los días','La IA que está reemplazando mi trabajo (de verdad)','Cómo uso ChatGPT para ser más productivo','El setup de trabajo que me cambió la vida','Apps que borré de mi celular (y por qué)','Cómo aprender programación gratis en 2026','Lo que la IA no puede hacer (todavía)','3 herramientas de productividad que uso a diario','Cómo proteger tu privacidad online en 5 pasos','El gadget que compré y cambió mi rutina'],
      carrusel: ['Las 10 mejores apps de productividad de 2026','Guía completa de ChatGPT para principiantes','Cómo empezar a programar desde cero (roadmap)','Herramientas de IA para cada tipo de trabajo','Cómo montar tu home office perfecto','Los mejores cursos online gratuitos de tecnología','Setup de trabajo remoto esencial por menos de $500','Tendencias tecnológicas que van a cambiar tu trabajo','Glosario de IA: términos que necesitas saber','Cómo hacer un backup completo de tu vida digital'],
      foto: ['Mi setup de trabajo de hoy','El gadget que más uso en el día','App abierta en mi pantalla ahora mismo','Antes y después de ordenar mi escritorio digital','La herramienta que siempre tengo abierta'],
      video_largo: ['Construí una app sin saber programar (con IA)','Cómo automaticé el 80% de mi trabajo con herramientas gratis','Revisión completa de los mejores gadgets del año','Guía definitiva: cómo aprender programación desde cero','Un día en la vida de un desarrollador remoto'],
      texto: ['Hilo: las herramientas de IA que uso cada día en mi trabajo','Thread: cómo aprendí a programar en 6 meses sin pagar un peso','Lista: recursos gratis de tecnología que ojalá hubiera conocido antes','Reflexión: lo que la IA cambiará en los próximos 2 años','Debate: ¿la IA nos va a quitar el trabajo?'],
      stories: ['¿Usas IA en tu trabajo? Sí o no','Tu app más usada del día (comparte)','Tip tech del día','Encuesta: ¿Mac, Windows o Linux?','Pregúntame sobre tecnología y productividad']
    },
    tiktok: {
      video_corto: ['Esta IA hace mi trabajo en 10 segundos','Hack de productividad que no puedo creer no conocía','La app que todos deberían tener en su celular','Por qué borré redes sociales por 30 días','Lo que pasa cuando le das acceso total a la IA','Pruebo el gadget más viral de Amazon','Cómo un programador usa ChatGPT (honesto)','El truco de Excel que no conocías','Cosas que puedes hacer con IA gratis','Lo que nadie te dice sobre aprender a programar'],
      carrusel: ['Apps que debes tener en 2026','Atajos de teclado que te ahorran horas','IA tools para cada tipo de trabajo','Cómo organizar tu vida digital','El setup perfecto para trabajar desde casa'],
      foto: ['Mi setup actual','La app que más uso','Pantalla de trabajo de hoy','Gadget favorito del momento','Escritorio digital organizado vs. desastre'],
      video_largo: ['Probé todas las IAs del mercado: esto encontré','Construí un negocio online solo con herramientas gratis','Cómo trabajo desde casa siendo desarrollador','Aprendí a programar en 30 días — esto pasó','Mi setup de trabajo completo: todo lo que uso'],
      texto: ['POV: tu jefe te pide hacer algo que la IA hace en 2 segundos','Señales de que eres adicto a la tecnología','El app que cambió cómo trabajo para siempre','Por qué sigo usando papel y lápiz aunque soy dev','Tech tip del día: el comando que nadie conoce'],
      stories: ['¿Usas ChatGPT en tu trabajo?','Tu herramienta favorita de productividad','Encuesta: ¿cuántas apps tienes instaladas?','Gadget que quieres que reseñe','Tip tech exprés del día']
    },
    youtube: {
      video_largo: ['Probé todas las herramientas de IA del mercado (revisión honesta)','Cómo construí una app desde cero sin saber programar','Mi setup de trabajo completo: todo lo que uso y por qué','Guía definitiva para aprender programación desde cero en 2026','Un año usando solo herramientas de IA: lo que aprendí'],
      video_corto: ['La herramienta de IA más útil del mes','Setup tour: mi escritorio en 60 seg','Tip de programación del día','El gadget que más recomiendo','Truco de productividad en 30 segundos']
    },
    linkedin: {
      texto: ['El impacto real de la IA en el mercado laboral: lo que los datos dicen','Cómo la automatización está redefiniendo los roles profesionales','Lo que los desarrolladores necesitan saber sobre IA en 2026','Por qué las empresas que no adopten IA van a quedarse atrás','Habilidades tech que todo profesional no técnico debería tener'],
      carrusel: ['Las herramientas de IA más útiles por industria','Cómo preparar tu carrera para el futuro tech','Skills digitales imprescindibles en 2026','Cómo la IA está cambiando cada industria','Transformación digital: por dónde empezar']
    },
    twitter: {
      texto: ['Hilo: las herramientas de IA que más me han ahorrado tiempo este mes','Thread: aprendí a programar con IA — esto fue lo que encontré','Lista: recursos gratuitos de programación que recomiendo sin dudar','Debate: ¿la IA es el fin de los empleos creativos?','Tip del día: el prompt que me ahorra 2 horas de trabajo']
    }
  },
  finanzas: {
    instagram: {
      video_corto: ['Cuánto dinero necesitas para retirarte (calculadora)','El error financiero que cometí a los 20 años','Cómo empezar a invertir con $100 al mes','Lo que nadie te enseña sobre el dinero en la escuela','Por qué el 90% no puede ahorrar (y la solución)','3 hábitos de personas ricas que puedes copiar','Cómo salí de deudas en 18 meses','Lo que hago con mi dinero cada mes (honesto)','Diferencia entre activo y pasivo en la vida real','Cómo negociar un aumento de sueldo sin miedo'],
      carrusel: ['Guía para empezar a invertir desde cero','Los 10 errores financieros más comunes antes de los 30','Cómo hacer un presupuesto que realmente funcione','Tipos de inversión y cuál es mejor para ti','Cómo salir de deudas con el método bola de nieve','Las reglas de oro del dinero personal','Cuánto deberías tener ahorrado según tu edad','Glosario de inversiones para principiantes','El plan financiero de 5 pasos para empezar hoy','Cómo construir un fondo de emergencia'],
      foto: ['El libro de finanzas que cambió mi forma de ver el dinero','Mi tracker de gastos del mes','El setup con el que manejo mis finanzas','Cita sobre dinero que me marcó','Primer dividendo recibido (screenshot sin números)'],
      video_largo: ['Cómo salí de $15,000 de deuda en 2 años','Guía completa de inversión para principiantes en Latinoamérica','Mi portafolio de inversiones revelado: qué tengo y por qué','Cómo construir patrimonio con sueldo promedio','Los errores financieros que te van a costar caro a los 30'],
      texto: ['Hilo: lo que ojalá supiera sobre dinero a los 22 años','Thread: cómo invertí mis primeros $1,000 y lo que aprendí','Lista: libros de finanzas personales que cambiaron mi vida','Reflexión: la diferencia entre ganar dinero y construir riqueza','Consejo del día: por qué debes separar el ahorro antes de gastar'],
      stories: ['¿Tienes fondo de emergencia? Sí o no','¿Inviertes actualmente? Encuesta','Tu mayor miedo financiero (vota)','Tip de ahorro del día','Pregúntame sobre finanzas personales']
    },
    tiktok: {
      video_corto: ['Cuánto cuesta en realidad vivir en [ciudad]','Lo que pasa si inviertes $100 al mes por 30 años','El truco del 50/30/20 para manejar tu dinero','Por qué tu banco no quiere que sepas esto','Cómo negocié mi sueldo (y lo subí 40%)','Lo que haría diferente con el dinero a los 20','La diferencia entre rico y con dinero','Cuánto dinero necesitas para no depender de un trabajo','El gasto que más dinero me estaba robando','Esto pasa cuando gastas más de lo que ganas (honesto)'],
      carrusel: ['Errores financieros antes de los 30','Cómo hacer tu primer presupuesto','Inversiones para principiantes en Latam','Deudas: cómo salir más rápido','Hábitos de personas que construyen riqueza'],
      foto: ['Mi tracker financiero del mes','El libro que cambió mi relación con el dinero','Primer dividendo: cómo se siente','Cita favorita sobre finanzas','Gráfica de mis gastos este mes (sin datos personales)'],
      video_largo: ['Todo lo que sé sobre invertir en Latinoamérica','Cómo manejar el dinero cuando ganas poco','Mi experiencia con deudas: cómo salí','Guía de inversión paso a paso para empezar hoy','Lo que los ricos hacen con su dinero que los demás no saben'],
      texto: ['POV: eres joven y nadie te enseñó sobre dinero','Señales de que tienes una relación tóxica con el dinero','El gasto hormiga que te está vaciando la cuenta','Por qué el crédito no es el enemigo (si lo usas bien)','Finanzas tip: la regla que los millonarios usan para ahorrar'],
      stories: ['¿Ahorras cada mes? Encuesta','Tu gasto más innecesario de la semana','Tip financiero del día','¿Inviertes o no? ¿Por qué?','Pregúntame sobre ahorro e inversión']
    },
    youtube: {
      video_largo: ['Cómo invertir en bolsa desde Latinoamérica: guía completa','Todo lo que necesitas saber sobre finanzas personales en 2026','Mi estrategia de inversión revelada: qué hago con mi dinero','Cómo salir de deudas rápido con cualquier salario','Los errores financieros que te van a costar la jubilación'],
      video_corto: ['El truco financiero más simple que nadie usa','Inversión del mes: qué hice','Error financiero del día','Cuánto necesitas ahorrar para jubilarte','El gasto que más dinero te roba sin que lo notes']
    },
    linkedin: {
      texto: ['La educación financiera que las empresas deberían dar a sus empleados','Libertad financiera vs. seguridad laboral: el dilema de los millennials','Lo que los CFOs hacen diferente con su dinero personal','Cómo la inteligencia financiera se convierte en ventaja profesional','Por qué las finanzas personales son la habilidad más subestimada del siglo XXI'],
      carrusel: ['Beneficios financieros que debes negociar en tu trabajo','Cómo planear tu retiro desde tu primer empleo','Educación financiera para profesionales jóvenes','Lo que tu empleador no te dice sobre tu compensación','Hábitos financieros de los ejecutivos más exitosos']
    },
    twitter: {
      texto: ['Hilo: lo que aprendí perdiendo dinero en inversiones (lecciones caras)','Thread: cómo construí mi fondo de emergencia desde cero','Lista: recursos gratuitos de educación financiera que realmente sirven','Debate: ¿mejor pagar deuda o invertir primero?','Tip del día: la regla del 1% para mejorar tus finanzas']
    }
  },
  viajes: {
    instagram: {
      video_corto: ['Lo que nadie te dice antes de ir a [destino]','Cómo viajé 2 semanas con solo carry-on','El spot que no aparece en Google Maps en [ciudad]','Comida que debes probar sí o sí en [destino]','Cuánto gasté realmente en mi viaje a [destino]','Cómo conseguir vuelos baratos (mis trucos)','Lo malo de [destino] que nadie muestra','Un día en [ciudad] con poco presupuesto','Los mejores hostels que he visitado','Lo que llevaría de vuelta en mi maleta'],
      carrusel: ['Guía completa para viajar a [destino] por primera vez','Cómo hacer el itinerario de viaje perfecto','Los mejores destinos económicos de Latinoamérica','Checklist de viaje: lo que nunca olvido empacar','Cómo ahorrar para viajar con sueldo normal','Los mejores apps para viajeros (todas gratis)','Cómo hacer amigos viajando solo','Destinos para viajar solo de forma segura','Cómo extender tu visado/estancia legalmente','Los errores más comunes al planear un viaje'],
      foto: ['Vista desde mi hotel favorito hasta ahora','El plato que más recuerdo de [destino]','El momento que más me impactó en este viaje','Mi maleta lista para el siguiente destino','Atardecer en [ciudad]: no hay filtro'],
      video_largo: ['Mi viaje completo a [destino]: itinerario, costos y tips','Cómo viajé 3 meses sin trabajo fijo: la verdad','Los destinos más infravalorados de Latinoamérica','Viaje en solitario a [país]: todo lo que necesitas saber','Cómo financio mis viajes: mis estrategias reales'],
      texto: ['Hilo: todo lo que aprendí viajando solo por primera vez','Thread: los destinos más baratos de Latam rankeados por experiencia','Lista: apps de viaje que no pueden faltar en tu celular','Reflexión: por qué viajar cambió mi forma de ver el mundo','Consejo del día: el error más caro que puedes cometer al planear un viaje'],
      stories: ['¿Cuál es tu destino soñado?','Encuesta: ¿playa o montaña?','El país que más quiero visitar (vota)','Tip de viaje del día','Pregúntame sobre [destino]']
    },
    tiktok: {
      video_corto: ['POV: llegué a [destino] sin hablar el idioma','Lo que costó mi viaje de 7 días a [destino]','El hostel más viral de [ciudad] (honesto)','Cosas que NO hacer en [destino]','Cómo me muevo por [ciudad] sin carro','El lugar que casi nadie visita en [país]','Cuánto dinero necesitas por día en [destino]','Rating: comparando los mejores destinos de Latam','Lo que me sorprendió de [país] al llegar','Viajando solo a [destino] por primera vez'],
      carrusel: ['Packing list para [tipo de viaje]','Los mejores destinos baratos del año','Cómo organizar un viaje en menos de 1 semana','Lo que no te dicen en los tours turísticos','Apps esenciales para viajeros'],
      foto: ['Mi lugar favorito de este viaje','La comida más rara que probé','Vista que no esperaba encontrar','El hostel más bonito que he visto','Antes del vuelo: lista para explorar'],
      video_largo: ['Viaje completo a [destino] con presupuesto real','Cómo trabajo mientras viajo (nomada digital)','Los mejores y peores destinos que he visitado','Cómo planear un viaje de mochilero desde cero','Todo lo que necesitas saber antes de viajar solo'],
      texto: ['POV: llevas 6 meses planeando el viaje y algo sale mal','Señales de que ya necesitas unas vacaciones','El consejo de viaje que más me ha servido','Por qué los viajes más cortos son a veces los mejores','Travel tip: la app que me ahorra dinero en cada viaje'],
      stories: ['¿Dónde estás viajando próximamente?','Tu destino favorito hasta ahora (vota)','Tip de viaje del día','Adivina en qué país estoy','¿Viajero solitario o con compañía?']
    },
    youtube: {
      video_largo: ['Viajé 30 días con $1,500: todo lo que hice','Los países más baratos para vivir como nómada digital','Mi viaje completo a [país]: itinerario día a día y costos reales','Cómo conseguir vuelos baratos siempre: mis estrategias','Los destinos más increíbles que he visitado rankeados'],
      video_corto: ['Tip de viaje en 60 segundos','El error que casi arruina mi viaje','Destino del mes: lo que debes saber','Cómo ahorrar en [destino]','La vista más impresionante que he visto']
    },
    linkedin: {
      texto: ['Lo que los viajes me enseñaron sobre liderazgo y adaptabilidad','Nómada digital: la nueva forma de trabajar que está cambiando empresas','Por qué las empresas deberían incentivar que sus empleados viajen','Inteligencia cultural: la habilidad que los viajes desarrollan mejor','Cómo el trabajo remoto está redefiniendo la industria del turismo'],
      carrusel: ['Cómo ser nómada digital sin sacrificar tu carrera','Beneficios del trabajo remoto para empresas y empleados','Cómo construir un equipo global que funcione','Destinos favoritos para trabajar en remoto en 2026','La nueva economía del turismo de negocios']
    },
    twitter: {
      texto: ['Hilo: cómo me convertí en nómada digital (el proceso real)','Thread: los mejores destinos para trabajar remoto rankeados','Lista: apps que no pueden faltar si viajas constantemente','Debate: ¿vale más viajar joven o cuando tienes más dinero?','Tip del día: la estrategia para encontrar vuelos baratos que siempre funciona']
    }
  },
  educacion: {
    instagram: {
      video_corto: ['Cómo aprendí [habilidad] en 30 días','El método de estudio que me cambió la vida','Libros que me formaron como profesional','Cómo tomar notas como un estudiante elite','Por qué la educación tradicional ya no alcanza','3 cursos online que vale la pena pagar','Cómo aprender cualquier cosa con YouTube gratis','Lo que nadie te dice antes de ir a la universidad','Cómo estudiar cuando no tienes motivación','El hábito de lectura que transformó mi carrera'],
      carrusel: ['Roadmap para aprender [habilidad] desde cero','Los mejores recursos gratuitos para aprender [tema]','Cómo construir un portfolio sin experiencia','La guía de certificaciones que valen la pena en 2026','Cómo aprender inglés sin tomar clases','Los 10 libros que recomiendo para [profesión]','Cómo crear un plan de aprendizaje efectivo','Diferencia entre estudiar y aprender (con estrategias)','Las plataformas de educación online más valoradas','Cómo conseguir trabajo sin título universitario'],
      foto: ['El libro que estoy leyendo esta semana','Mi setup de estudio/trabajo','La nota más importante de mi cuaderno','Certificado que me tomó meses conseguir','El momento que más aprendí este año'],
      video_largo: ['Cómo aprendí inglés de forma autodidacta sin pagar cursos','Guía completa para estudiar online y conseguir empleo','Los mejores recursos gratuitos para aprender programación','Cómo construí mi carrera sin ir a la universidad','Un año de aprendizaje autodidacta: lo que funcionó y lo que no'],
      texto: ['Hilo: los mejores recursos gratuitos para aprender cualquier cosa','Thread: cómo diseñé mi propio plan de estudios autodidacta','Lista: plataformas de cursos online comparadas honestamente','Reflexión: lo que la universidad no te puede enseñar','Consejo del día: la técnica de estudio más efectiva según la neurociencia'],
      stories: ['¿Qué estás aprendiendo ahora mismo?','Encuesta: ¿universidad o autodidacta?','Tip de estudio del día','Tu libro favorito del año (vota)','Pregúntame sobre aprendizaje']
    },
    tiktok: {
      video_corto: ['Aprendí [habilidad] en 30 días — así quedé','El video de YouTube que me cambió la carrera','Cómo estudiar sin procrastinar (técnica que funciona)','Rating de plataformas de cursos online (honesto)','Lo que aprendí pagando vs. aprendiendo gratis','El método de lectura que dobla tu velocidad','Por qué los mejores recursos son gratis','Cómo conseguí mi primer trabajo sin título','La habilidad más valorada del mercado laboral','Herramientas de IA para estudiar más rápido'],
      carrusel: ['Apps para aprender idiomas (rankeadas)','Libros que debes leer antes de los 30','Cursos online gratuitos que valen la pena','Técnicas de estudio que sí funcionan','Cómo crear hábitos de lectura que duren'],
      foto: ['Mi stack de libros del mes','Setup de estudio de hoy','La página que cambió mi perspectiva','Certificado conseguido (logro desbloqueado)','Mi método de notas en acción'],
      video_largo: ['Cómo estudiar y trabajar al mismo tiempo sin morir','Los mejores cursos gratuitos del año','Aprender inglés desde cero: mi método completo','Guía para cambiar de carrera sin experiencia previa','Un mes aprendiendo [habilidad]: resultados reales'],
      texto: ['POV: llevas años sin aprender algo nuevo','Señales de que eres un aprendiz de por vida','El hábito de estudio que más ha cambiado mi vida','Por qué leer 10 páginas al día es mejor que no leer nada','Educación tip: la regla del espacio repetido para memorizar mejor'],
      stories: ['¿Cuánto lees al mes?','Tu plataforma de cursos favorita','Tip de aprendizaje del día','Encuesta: ¿audiolibros o físico?','Lo que quieres aprender este año']
    },
    youtube: {
      video_largo: ['Aprendí a programar en 6 meses: mi método completo','Los mejores recursos educativos gratuitos de internet','Cómo estudiar de forma más inteligente según la ciencia','Guía para aprender inglés de 0 a conversacional','Mi rutina de aprendizaje autodidacta: todo lo que hago'],
      video_corto: ['Técnica de estudio que duplica tu retención','El recurso gratuito más subestimado','Tip de productividad para estudiantes','Cómo memorizar cualquier cosa','El error más común al estudiar']
    },
    linkedin: {
      texto: ['Por qué el aprendizaje continuo es la ventaja competitiva del siglo XXI','Lo que el sistema educativo no prepara para el mercado laboral actual','Cómo construí mis habilidades más valiosas de forma autodidacta','El futuro del trabajo y las habilidades que necesitarás','Por qué invierto el 10% de mis ingresos en educación personal'],
      carrusel: ['Las habilidades más demandadas en 2026 por industria','Cómo crear un plan de desarrollo profesional','Certificaciones que realmente importan en el mercado laboral','Cómo el aprendizaje continuo impacta tu salario','Plataformas de aprendizaje para profesionales que funcionan']
    },
    twitter: {
      texto: ['Hilo: los recursos de aprendizaje gratuitos que más he aprovechado','Thread: cómo diseñé mi propio MBA autodidacta','Lista: libros que todo profesional debería leer antes de los 30','Debate: ¿vale la pena un posgrado en 2026?','Tip del día: la técnica Feynman para aprender cualquier cosa en profundidad']
    }
  },
  arte: {
    instagram: {
      video_corto: ['Mi proceso creativo de inicio a fin','Lo que nadie te dice sobre vivir del arte','Cómo construí mi portafolio desde cero','Técnica que cambió mi trabajo para siempre','Mis herramientas de trabajo (setup completo)','Cómo consigo clientes como freelance creativo','Lo malo de ser artista/diseñador (honesto)','Evolución de mi trabajo en 3 años','Cómo poner precio a tu trabajo creativo','El proyecto del que más orgulloso estoy'],
      carrusel: ['Proceso completo de [tipo de proyecto] paso a paso','Las mejores herramientas para [disciplina] en 2026','Cómo crear un portafolio que consiga clientes','Los errores más comunes en diseño/ilustración','Cómo encontrar tu estilo artístico propio','Recursos gratuitos para artistas y diseñadores','Cómo cobrar lo que vales como creativo','Inspiración y referencias para [estilo artístico]','Cómo publicar tu trabajo en redes sin vergüenza','Los tipos de clientes creativos (y cómo trabajar con cada uno)'],
      foto: ['El proyecto en el que estoy trabajando ahora','Mi espacio de trabajo y herramientas','Detalle de mi proceso más reciente','Antes y después de un proyecto terminado','La pieza de la que más orgulloso estoy'],
      video_largo: ['Mi proceso creativo completo de inicio a entrega','Cómo construí una carrera freelance en diseño desde cero','Los mejores recursos para aprender diseño en 2026','Revisión honesta de herramientas: Figma, Adobe, Procreate','Un año como diseñador freelance: cifras y aprendizajes reales'],
      texto: ['Hilo: lo que nadie te dice sobre ser diseñador freelance','Thread: cómo construí mi portafolio sin experiencia previa','Lista: recursos gratuitos para diseñadores y artistas que uso cada día','Reflexión: por qué el arte más honesto siempre conecta más','Consejo del día: cómo recibir crítica constructiva sin perder motivación'],
      stories: ['¿En qué proyecto estás trabajando?','Encuesta: ¿digital o tradicional?','Tip creativo del día','Vota: ¿cuál diseño prefieres?','Pregúntame sobre el proceso creativo']
    },
    tiktok: {
      video_corto: ['Proceso de un proyecto completo en time-lapse','Cuánto cobro por un trabajo de diseño (honesto)','Lo que me pidió un cliente y lo que hice','Rating: arte generado por IA vs. arte humano','Errores que veo en portfolios de diseñadores nuevos','Cómo empecé a vender mi arte online','Mi día creativo (sin filtros)','La herramienta de diseño que uso más','Crítica constructiva a trabajos de diseño novato','Por qué algunos diseñadores cobran tanto'],
      carrusel: ['Herramientas de diseño para cada nivel','Tipografías que funcionan juntas','Paletas de colores para 2026','Errores de diseño que lo hacen ver amateur','Recursos gratuitos para aprender diseño'],
      foto: ['Work in progress de hoy','Detalle de mi proyecto más reciente','Mi espacio creativo','Herramienta favorita en acción','Comparación: boceto vs. resultado final'],
      video_largo: ['Mi proceso de diseño completo: de brief a entrega','Revisión de portafolios de diseño (crítica constructiva)','Cómo consigo clientes como diseñador freelance','Los mejores plugins y herramientas para diseñadores en 2026','Construí una marca completa en 24 horas'],
      texto: ['POV: tu cliente quiere que "lo hagas pop"','Señales de que eres un diseñador que está creciendo','Lo que diferencia el buen diseño del diseño promedio','Por qué no debes trabajar gratis (aunque sea tu primer cliente)','Design tip: la regla que siempre aplico antes de entregar'],
      stories: ['¿Cuál es tu herramienta favorita de diseño?','Vota: ¿cuál paleta de colores te gusta más?','Proceso del día en 15 seg','Tip creativo exprés','Encuesta: ¿freelance o agencia?']
    },
    youtube: {
      video_largo: ['Mi proceso de diseño completo: de la idea al producto final','Cómo construí un portafolio de diseño que consigue clientes','Los mejores recursos gratuitos para aprender diseño en 2026','Revisión honesta: las mejores herramientas para diseñadores','Un año como diseñador freelance: todo lo que aprendí'],
      video_corto: ['Tip de diseño del día','Proceso en time-lapse de 60 seg','La herramienta que más uso esta semana','Error de diseño común y cómo evitarlo','Recurso gratuito que debes conocer']
    },
    linkedin: {
      texto: ['Diseño y negocios: por qué el diseño es una inversión, no un gasto','Lo que aprendí haciendo branding para 50+ empresas','Cómo el diseño impacta directamente las métricas de negocio','El ROI del buen diseño: casos reales con números','Por qué las empresas que invierten en diseño crecen más rápido'],
      carrusel: ['Cómo el diseño mejora la conversión en tu negocio','Principios de diseño que todo marketer debería conocer','Cómo briefear correctamente a un diseñador','El impacto del diseño en la experiencia del cliente','Cómo construir una identidad visual coherente']
    },
    twitter: {
      texto: ['Hilo: lo que aprendí de mis primeros 100 clientes como diseñador','Thread: recursos gratuitos de diseño que uso cada semana','Lista: fuentes gratuitas que uso en todos mis proyectos','Debate: ¿IA vs. diseñador humano? Mi perspectiva honesta','Tip del día: el principio de diseño más subestimado']
    }
  },
  musica: {
    instagram: {
      video_corto: ['Cómo grabo música en casa con poco dinero','Lo que nadie te dice sobre la industria musical','Setup de producción con $500 o menos','Cómo conseguí mis primeras 1000 reproducciones','El proceso de hacer una canción en un día','Mis influencias musicales y cómo me formaron','Cómo distribuir tu música de forma independiente','Lo que aprendí de mi primer concierto','Cómo hacer beats desde cero (tutorial)','La realidad de ser músico independiente'],
      carrusel: ['Guía para distribuir tu música como independiente','Los mejores DAWs gratuitos para empezar','Cómo promocionar tu música en Spotify','Setup de home studio para principiantes','Los derechos musicales que todo artista debe conocer','Cómo conseguir playlist placements','Estrategia de redes sociales para músicos','Las mejores plataformas para subir música gratis','Cómo hacer networking en la industria musical','Glosario de producción musical para principiantes'],
      foto: ['Mi setup de producción de hoy','La canción en la que estoy trabajando (screenshot)','Mi instrumento favorito','El concierto que más recuerdo','Inspiración musical de esta semana'],
      video_largo: ['Cómo construí mi carrera musical de forma independiente','Guía completa de producción musical en casa','Los secretos de la industria musical que nadie cuenta','Cómo crecer en Spotify siendo artista independiente','Un año de música independiente: lo que aprendí (con cifras)'],
      texto: ['Hilo: lo que nadie te dice sobre la industria musical antes de entrar','Thread: cómo distribuí mi música y llegué a 100K reproducciones','Lista: plugins gratuitos que uso en todas mis producciones','Reflexión: por qué hacer música sin expectativas me liberó','Consejo del día: el error más común de los artistas nuevos en redes'],
      stories: ['¿Estás escuchando música ahora? ¿Qué?','Encuesta: ¿líricas o melodía primero?','Tip musical del día','Vota: ¿cuál canción quieres que estrene?','Pregúntame sobre producción musical']
    },
    tiktok: {
      video_corto: ['Hice una canción completa en 24 horas','Lo que gano con 100K reproducciones en Spotify','Mi proceso para hacer un beat desde cero','Cover de [canción viral] — versión propia','Rating de DAWs para producción musical','Cómo sonaba mi música hace 3 años vs. ahora','Lo que nadie te dice sobre Spotify','Proceso de mezcla y masterización en tiempo real','Reacción a mi primera canción publicada','El plugin de producción que cambió mi sonido'],
      carrusel: ['Equipos de grabación para cada presupuesto','Plugins esenciales para productores','Cómo mejorar tu mezcla con estos trucos','Las plataformas que mejor pagan a artistas','Tips para crecer en Spotify'],
      foto: ['Mi setup de estudio de hoy','La canción en la que estoy trabajando','Primer cheque de Spotify (sin números)','Mi instrumento favorito en acción','Inspiración del día para componer'],
      video_largo: ['Produzco una canción completa desde cero en tiempo real','Mi proceso creativo: de la idea a la canción terminada','Cómo distribuyo y promuevo mi música sin sello discográfico','Los mejores recursos para aprender producción musical gratis','Un año como músico independiente: cifras reales y aprendizajes'],
      texto: ['POV: llevas horas en el estudio y no sale nada','Señales de que tu producción musical está mejorando','El consejo que más me ha servido como músico independiente','Por qué los músicos independientes tienen más libertad que los firmados','Music tip: el proceso que uso para superar el bloqueo creativo'],
      stories: ['¿Cuál género escuchas más?','Vota: ¿cuál instrumental prefieres?','Proceso del día en el estudio','Tip de producción exprés','¿Quieres escuchar un adelanto?']
    },
    youtube: {
      video_largo: ['Cómo produje mi primer EP completo de forma independiente','Los secretos de la mezcla y masterización que nadie enseña','Cómo construir un home studio sin gastar una fortuna','Mi proceso creativo: cómo hago canciones desde cero','Un año como artista independiente: estadísticas y lecciones reales'],
      video_corto: ['Proceso de beat en 60 segundos','El plugin que más uso esta semana','Tip de mezcla express','Cómo suena antes y después del mastering','El error de producción más común']
    },
    linkedin: {
      texto: ['Lo que la industria musical me enseñó sobre emprendimiento creativo','Cómo los músicos independientes están redefiniendo el modelo de negocio musical','El ROI del contenido creativo: lecciones de la música aplicadas a los negocios','Por qué las habilidades de un músico son perfectas para el trabajo en equipo','Streaming, NFTs y el futuro de los derechos musicales: lo que viene'],
      carrusel: ['El negocio de la música independiente en 2026','Cómo monetizar tu música más allá del streaming','Estrategia de redes sociales para artistas musicales','Derechos musicales: lo que todo artista debe proteger','Cómo construir una comunidad de fans en redes sociales']
    },
    twitter: {
      texto: ['Hilo: lo que aprendí de mis primeros 1 millón de streams','Thread: cómo distribuyo y promuevo mi música sin sello','Lista: plugins gratuitos que uso en mi producción cada semana','Debate: ¿streaming le paga justo a los artistas?','Tip del día: la estrategia de lanzamiento que más me ha funcionado']
    }
  }
};

function generateIdeas() {
  const nicho = document.getElementById('ideas-nicho')?.value || 'emprendimiento';
  const plataforma = document.getElementById('ideas-plataforma')?.value || 'instagram';
  const formato = document.getElementById('ideas-formato')?.value || 'video_corto';

  const pool = ideasData[nicho]?.[plataforma]?.[formato]
    || ideasData[nicho]?.instagram?.video_corto
    || ideasData.emprendimiento.instagram.video_corto;

  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const ideas = shuffled.slice(0, 8);

  const container = document.getElementById('ideas-results');
  if (!container) return;

  container.innerHTML = ideas.map((idea, i) =>
    `<div class="idea-card" onclick="copyText('${idea.replace(/'/g, "\\'")}')">
      <span class="idea-num">${String(i + 1).padStart(2, '0')}</span>
      <span class="idea-text">${idea}</span>
      <span class="idea-copy">Copiar</span>
    </div>`
  ).join('');

  document.getElementById('results-ideas').classList.add('show');
}
