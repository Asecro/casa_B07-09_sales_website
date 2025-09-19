import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Star, MapPin, Building2, Shield, TrendingUp, Home, Users, Bath, Car, Wifi, Dumbbell, Waves, Instagram, MessageCircle, Bot, ExternalLink, Moon, Sun, Play, Languages } from "lucide-react";
import { useState, useEffect } from "react";
import exampleImageFloorPlan from 'figma:asset/a3be524d052f28c17e76976f60809c68b74e0cc0.png';
import exampleImagePool from 'figma:asset/7f429cc1b40e3f3a608e8f43d4cfe8ed885da04d.png';
import exampleImageView from 'figma:asset/a8635bfcd30d4a1f0a61a07a577a90c720ab351c.png';
import exampleImageNightView from 'figma:asset/4bc67d527031ed66574730e1ef8ff2309fd09c4d.png';
import exampleImageEntrance from 'figma:asset/5bed71969709d83b751edd0b7149c88420eb45fe.png';
import exampleImageGym from 'figma:asset/e21aa74dfd2190f8b91fbe27785917615481a037.png';

const translations = {
  ja: {
    investmentProperty: "投資物件",
    roomUnit: "B07_09号室",
    subtitle: "都心の豪華2ベッドルーム・賃貸済み投資物件",
    yieldGuarantee: "利回り保証",
    guaranteePeriod: "保証期間",
    tenantOccupied: "賃貸済",
    immediateIncome: "即収益開始",
    downloadMaterials: "詳細資料をダウンロード",
    aboutCasa: "CASA BY MERIDIAN について",
    aboutSubtitle: "ダイアモンドアイランドの最高級レジデンス",
    projectOverview: "プロジェクト概要",
    companyCredentials: "開発会社の実績",
    stunningViews: "息をのむような眺望",
    stunningViewsSubtitle: "室内から望む都心のパノラマビュー",
    dayView: "昼間の眺望 - 都心のスカイラインを一望",
    nightView: "夜景の眺望 - 煌めく都市の灯りが美しい",
    propertyDetails: "プロパティ詳細",
    propertyDetailsSubtitle: "都心立地の豪華2ベッドルーム",
    floorPlan: "フロアプラン",
    floorPlanSubtitle: "効率的で機能的な2ベッドルーム設計",
    investmentHighlights: "投資ハイライト",
    investmentHighlightsSubtitle: "安定した収益性と確実なリターン",
    premiumGallery: "プレミアム施設ギャラリー",
    premiumGallerySubtitle: "豪華な設備と上質な空間",
    amenities: "豪華設備・アメニティ",
    amenitiesSubtitle: "リゾート感覚で過ごせる充実の共用施設",
    location: "ロケーション",
    locationSubtitle: "プノンペン中心部の一等地に位置",
    contact: "お問い合わせ",
    contactSubtitle: "多言語対応の専門スタッフがサポートいたします",
    investmentSummary: "投資サマリー",
    watchVideo: "物件紹介動画を見る"
  },
  en: {
    investmentProperty: "Investment Property",
    roomUnit: "Unit B07_09",
    subtitle: "Luxury 2-Bedroom Investment Property in Central Location - Tenant Occupied",
    yieldGuarantee: "Yield Guarantee",
    guaranteePeriod: "Guarantee Period",
    tenantOccupied: "Tenant Occupied",
    immediateIncome: "Immediate Income",
    downloadMaterials: "Download Detailed Materials",
    aboutCasa: "About CASA BY MERIDIAN",
    aboutSubtitle: "Premium Residence at Diamond Island",
    projectOverview: "Project Overview",
    companyCredentials: "Developer Credentials",
    stunningViews: "Stunning Views",
    stunningViewsSubtitle: "Panoramic City Views from Your Room",
    dayView: "Daytime View - Overlooking the City Skyline",
    nightView: "Night View - Beautiful Sparkling City Lights",
    propertyDetails: "Property Details",
    propertyDetailsSubtitle: "Luxury 2-Bedroom in Prime Central Location",
    floorPlan: "Floor Plan",
    floorPlanSubtitle: "Efficient and Functional 2-Bedroom Design",
    investmentHighlights: "Investment Highlights",
    investmentHighlightsSubtitle: "Stable Profitability and Guaranteed Returns",
    premiumGallery: "Premium Facilities Gallery",
    premiumGallerySubtitle: "Luxurious Amenities and Premium Spaces",
    amenities: "Luxury Amenities",
    amenitiesSubtitle: "Resort-Style Living with Comprehensive Facilities",
    location: "Location",
    locationSubtitle: "Prime Location in Central Phnom Penh",
    contact: "Contact Us",
    contactSubtitle: "Multilingual Support Staff Ready to Assist",
    investmentSummary: "Investment Summary",
    watchVideo: "Watch Property Video"
  }
};

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<'ja' | 'en'>('ja');

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('ja')) {
      setLanguage('ja');
    } else {
      setLanguage('en');
    }

    // Check for saved dark mode preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ja' ? 'en' : 'ja');
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Controls */}
      <div className="fixed top-4 right-4 z-50 flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={toggleLanguage}
          className="bg-background/80 backdrop-blur-sm"
        >
          <Languages className="w-4 h-4 mr-1" />
          {language === 'ja' ? 'EN' : 'JA'}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={toggleDarkMode}
          className="bg-background/80 backdrop-blur-sm"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${exampleImagePool})`
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <Badge className="mb-4 bg-amber-500 text-black px-4 py-2">
            <TrendingUp className="w-4 h-4 mr-2" />
            {t.investmentProperty}
          </Badge>
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
            CASA BY MERIDIAN
          </h1>
          <p className="text-xl md:text-2xl mb-2">{t.roomUnit}</p>
          <p className="text-lg mb-8 opacity-90">{t.subtitle}</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">{language === 'ja' ? '年6%' : '6% p.a.'}</div>
              <div className="text-sm">{t.yieldGuarantee}</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">{language === 'ja' ? '2年間' : '2 Years'}</div>
              <div className="text-sm">{t.guaranteePeriod}</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">{t.tenantOccupied}</div>
              <div className="text-sm">{t.immediateIncome}</div>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
            onClick={() => window.open('https://vt.tiktok.com/ZSDyGsvP6/', '_blank')}
          >
            <Play className="w-5 h-5 mr-2" />
            {t.watchVideo}
          </Button>
        </div>
      </section>

      {/* About Casa by Meridian */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">{t.aboutCasa}</h2>
            <p className="text-xl text-muted-foreground">{t.aboutSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={exampleImageEntrance} 
                alt="Casa by Meridian外観" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl mb-4">{t.projectOverview}</h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'ja' 
                    ? 'Casa by Meridianは、豪華なコンドミニアムや滞在先をお求めの方に、この名高い地区に位置する羨望の的となる住宅コレクションを提供しています。'
                    : 'Casa by Meridian offers an outstanding collection of enviable residences for lease to those seeking luxurious condominiums or places to stay, all located in this prestigious district.'
                  }
                </p>
                <p className="text-muted-foreground mb-4">
                  {language === 'ja'
                    ? 'プノンペン市の中心部であるダイアモンドアイランドに位置し、イオンモールの近くにあります。このプロジェクトは、30年以上前に繊維・衣料品業界で設立され、最近では事業の多様化を通じて不動産開発に参入したマルチグローバル企業群で構成される進歩的な国際企業、Meridian Internationalの下で運営されています。'
                    : "It's located in Diamond Island, the center of Phnom Penh city, near Aeon Mall. This project is under Meridian International, a progressive international corporation comprising multi-global companies established over 3 decades ago from textiles and garments, recently expanding into property development through business diversification."
                  }
                </p>
              </div>
              
              <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg">
                <h4 className="text-xl mb-3">{t.companyCredentials}</h4>
                <p className="text-muted-foreground">
                  {language === 'ja'
                    ? 'Meridian Internationalの不動産開発チームは、印象的な実績と経験を持っています。社内の建設、測量、エンジニア、プロジェクト管理、サポートチームは、高品質な開発を生み出す完璧な実績を持つ経験豊富なリーダーによって率いられています。'
                    : "Meridian International's property development team comes with impressive credentials and experience. Its in-house construction, surveyors, engineers, project management and support teams are led by experienced leaders with an immaculate track record of producing high-quality developments."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stunning Views Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">{t.stunningViews}</h2>
            <p className="text-xl text-muted-foreground">{t.stunningViewsSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <img 
                src={exampleImageView} 
                alt="部屋からの都心眺望（昼間）" 
                className="w-full h-80 object-cover rounded-lg shadow-lg mb-4"
              />
              <p className="text-center text-muted-foreground">{t.dayView}</p>
            </div>
            <div>
              <img 
                src={exampleImageNightView} 
                alt="部屋からの都心眺望（夜景）" 
                className="w-full h-80 object-cover rounded-lg shadow-lg mb-4"
              />
              <p className="text-center text-muted-foreground">{t.nightView}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Overview */}
      <section className="py-20 bg-muted/50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">{t.propertyDetails}</h2>
            <p className="text-xl text-muted-foreground">{t.propertyDetailsSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Building2 className="w-6 h-6 text-amber-500" />
                <span className="text-lg">{language === 'ja' ? 'タイプ: 2F / 2H (2ベッドルーム)' : 'Type: 2F / 2H (2 Bedrooms)'}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Home className="w-6 h-6 text-amber-500" />
                <span className="text-lg">{language === 'ja' ? '総面積: 97.33㎡' : 'Total Area: 97.33㎡'}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-amber-500" />
                <span className="text-lg">{language === 'ja' ? '実面積: 73.00㎡' : 'Living Area: 73.00㎡'}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-amber-500" />
                <span className="text-lg">{language === 'ja' ? 'フロア: 6-23階' : 'Floor: 6-23F'}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-amber-500" />
                <span className="text-lg">{language === 'ja' ? 'セキュリティ: 24時間警備' : 'Security: 24-hour Guard'}</span>
              </div>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl mb-4">{language === 'ja' ? '立地の魅力' : 'Location Appeal'}</h3>
              <p className="text-muted-foreground mb-4">
                {language === 'ja'
                  ? 'B07_09号室は高層階に位置し、都心の美しいスカイラインを365日お楽しみいただけます。朝は清々しい青空、夜は煌めく夜景と、時間帯によって異なる表情を見せる眺望が魅力です。'
                  : 'Unit B07_09 is located on a high floor, offering beautiful city skyline views 365 days a year. From refreshing blue skies in the morning to sparkling night views, the scenery changes throughout the day.'
                }
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>{language === 'ja' ? '180度パノラマビュー' : '180-degree panoramic view'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>{language === 'ja' ? '都心主要エリアが一望' : 'Overlooks main city areas'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>{language === 'ja' ? '夜景の美しさが格別' : 'Exceptional night view beauty'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plan */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">{t.floorPlan}</h2>
            <p className="text-xl text-muted-foreground">{t.floorPlanSubtitle}</p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <img 
              src={exampleImageFloorPlan} 
              alt="Floor Plan" 
              className="w-full max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 bg-muted/50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">{t.investmentHighlights}</h2>
            <p className="text-xl text-muted-foreground">{t.investmentHighlightsSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <TrendingUp className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-2xl mb-4">{language === 'ja' ? '年利回り6%' : '6% Annual Yield'}</h3>
                <p className="text-muted-foreground">{language === 'ja' ? '2年間の利回り保証付き。安定した収益を確保。' : '2-year yield guarantee. Secure stable returns.'}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-2xl mb-4">{t.tenantOccupied}</h3>
                <p className="text-muted-foreground">{language === 'ja' ? '既に入居者がいるため、購入後すぐに収益開始。' : 'Tenants already in place, income starts immediately after purchase.'}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Building2 className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-2xl mb-4">{language === 'ja' ? '都心立地' : 'Prime Location'}</h3>
                <p className="text-muted-foreground">{language === 'ja' ? 'アクセス良好な都心部で資産価値の向上が期待。' : 'Excellent access in city center with expected asset value appreciation.'}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Premium Gallery */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">{t.premiumGallery}</h2>
            <p className="text-xl text-muted-foreground">{t.premiumGallerySubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={exampleImageEntrance} 
                  alt="豪華なエントランス" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl mb-2">{language === 'ja' ? 'グランドエントランス' : 'Grand Entrance'}</h3>
                  <p className="text-muted-foreground">{language === 'ja' ? '5つ星ホテルのような豪華なエントランスデザイン。24時間コンシェルジュサービスも完備。' : 'Luxurious entrance design like a 5-star hotel. 24-hour concierge service available.'}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={exampleImageGym} 
                  alt="最新設備のフィットネスジム" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl mb-2">{language === 'ja' ? 'フィットネスジム' : 'Fitness Gym'}</h3>
                  <p className="text-muted-foreground">{language === 'ja' ? '最新のトレーニング機器を完備。大きな窓からは自然光が差し込む開放的な空間。' : 'Equipped with latest training equipment. Open space with natural light from large windows.'}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-muted/50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">{t.amenities}</h2>
            <p className="text-xl text-muted-foreground">{t.amenitiesSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={exampleImagePool} 
                alt="Rooftop Pool" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl mb-6">{language === 'ja' ? '屋上インフィニティプール' : 'Rooftop Infinity Pool'}</h3>
              <p className="text-lg text-muted-foreground mb-6">
                {language === 'ja' 
                  ? '都市のスカイラインを一望できる屋上プールで、夕暮れ時には息をのむような景色をお楽しみいただけます。'
                  : 'Rooftop pool overlooking city skyline, offering breathtaking views at sunset.'
                }
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Waves className="w-5 h-5 text-blue-500" />
                  <span>{language === 'ja' ? 'インフィニティプール' : 'Infinity Pool'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Dumbbell className="w-5 h-5 text-blue-500" />
                  <span>{language === 'ja' ? 'フィットネスジム' : 'Fitness Gym'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Car className="w-5 h-5 text-blue-500" />
                  <span>{language === 'ja' ? '駐車場完備' : 'Parking Available'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wifi className="w-5 h-5 text-blue-500" />
                  <span>{language === 'ja' ? '高速Wi-Fi' : 'High-speed Wi-Fi'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Address */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">{t.location}</h2>
            <p className="text-xl text-muted-foreground">{t.locationSubtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl mb-6 flex items-center">
                  <MapPin className="w-6 h-6 text-amber-500 mr-3" />
                  {language === 'ja' ? '住所・アクセス' : 'Address & Access'}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-muted-foreground mb-1">{language === 'ja' ? '住所' : 'Address'}</p>
                    <p className="text-lg">No. 1, Harvard Street, Diamond Island, Sangkat Tonle Bassac, Khan Chamkar Morn, 12301 Phnom Penh, Cambodia</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">{language === 'ja' ? 'エリア' : 'Area'}</p>
                    <p className="text-lg">{language === 'ja' ? 'ダイアモンドアイランド' : 'Diamond Island'}</p>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.open('https://maps.app.goo.gl/cH6yyPHvzkTtQ1P36', '_blank')}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  {language === 'ja' ? 'Google マップで確認' : 'View on Google Maps'}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-8 rounded-lg">
                <h3 className="text-2xl mb-6">{t.investmentSummary}</h3>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">6%</div>
                    <div>{language === 'ja' ? '年間利回り' : 'Annual Yield'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{language === 'ja' ? '2年' : '2 Years'}</div>
                    <div>{t.guaranteePeriod}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{t.tenantOccupied}</div>
                    <div>{t.immediateIncome}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{language === 'ja' ? '都心' : 'Prime'}</div>
                    <div>{language === 'ja' ? 'プライム立地' : 'Location'}</div>
                  </div>
                </div>
                <p className="text-lg opacity-90">
                  {language === 'ja'
                    ? '都心の一等地に位置する豪華な2ベッドルーム投資物件。年6%の安定した利回りと2年間の保証により、確実な投資リターンを実現。'
                    : 'Luxury 2-bedroom investment property in prime city location. Secure investment returns with stable 6% annual yield and 2-year guarantee.'
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Instagram Section */}
          <div className="text-center">
            <Button 
              variant="outline" 
              className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-6 py-3"
              onClick={() => window.open('https://www.instagram.com/casa_b0709_showhouse/?igsh=amYycHMxZmtsa2hr&utm_source=qr#', '_blank')}
            >
              <Instagram className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">{t.contact}</h2>
            <p className="text-xl mb-8">
              {t.contactSubtitle}
            </p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-12">
            {/* Mr Okuizumi - WhatsApp */}
            <div className="text-center">
              <Button 
                className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full p-0 mb-2"
                onClick={() => window.open('https://api.whatsapp.com/qr/N2YGW4MGDYEYC1?autoload=1&app_absent=0', '_blank')}
              >
                <MessageCircle className="w-8 h-8" />
              </Button>
              <p className="text-sm text-muted-foreground">Mr. Okuizumi</p>
              <p className="text-xs text-muted-foreground">{language === 'ja' ? '日本語・英語' : 'Japanese・English'}</p>
            </div>

            {/* Ms LinLin - Telegram */}
            <div className="text-center">
              <Button 
                className="w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-0 mb-2"
                onClick={() => window.open('https://t.me/+85592866068', '_blank')}
              >
                <MessageCircle className="w-8 h-8" />
              </Button>
              <p className="text-sm text-muted-foreground">Ms. LinLin</p>
              <p className="text-xs text-muted-foreground">{language === 'ja' ? 'クメール語・中国語・英語' : 'Khmer・Chinese・English'}</p>
            </div>

            {/* AI Sales Chat */}
            <div className="text-center">
              <Button 
                className="w-16 h-16 bg-purple-500 hover:bg-purple-600 text-white rounded-full p-0 mb-2"
                onClick={() => window.open('https://telet.ai/casa-login.html', '_blank')}
              >
                <Bot className="w-8 h-8" />
              </Button>
              <p className="text-sm text-muted-foreground">AI Sales Chat</p>
              <p className="text-xs text-muted-foreground">{language === 'ja' ? '24時間対応' : '24/7 Available'}</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {language === 'ja' 
                ? '※投資にはリスクが伴います。詳細な条件については資料をご確認ください。'
                : '※ Investment involves risks. Please review the materials for detailed terms and conditions.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl mb-4">CASA BY MERIDIAN</h3>
          <p className="text-muted-foreground">
            {language === 'ja' 
              ? 'Meridian International Holding による豪華不動産投資プロジェクト'
              : 'Luxury Real Estate Investment Project by Meridian International Holding'
            }
          </p>
        </div>
      </footer>
    </div>
  );
}