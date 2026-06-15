/**
 * URL Paths Configuration
 * Localized URL structure for SEO.
 */

export interface PagePaths {
  home: string;
  homeTitle: string;
  homeDescription: string;
  calculator: string;
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
}

export const PAGE_PATHS: Record<string, PagePaths> = {
  en: {
    home: '/',
    homeTitle: 'Salary to Hourly Calculator | Know Exactly What You Earn Per Hour',
    homeDescription:
      'Free salary to hourly calculator. Convert any wage into hourly, daily, weekly, biweekly, monthly, annual, per-minute and per-second pay in 50+ currencies.',
    calculator: '/',
    slug: 'salary-to-hourly-calculator',
    title: 'Salary to Hourly Calculator | Convert Annual Salary to Hourly Wage',
    metaDescription:
      'Free salary to hourly calculator. Convert annual, monthly, weekly, daily, biweekly, per-minute and per-second pay in 50+ currencies.',
    h1: 'Salary to Hourly Calculator',
  },
  es: {
    home: '/es/',
    homeTitle: 'Calculadora de Salario a Hora | Sepa exactamente cuánto gana por hora',
    homeDescription:
      'Calculadora gratuita de salario a hora. Convierte cualquier sueldo en pago por hora, diario, semanal, quincenal, mensual, anual, por minuto y por segundo.',
    calculator: '/es/calculadora-salario-a-hora/',
    slug: 'calculadora-salario-a-hora',
    title: 'Calculadora de Salario a Hora | Convierte Salario Anual a Tarifa Horaria',
    metaDescription:
      'Calculadora gratuita de salario a hora. Convierte pagos anuales, mensuales, semanales, diarios, quincenales, por minuto y por segundo.',
    h1: 'Calculadora de Salario a Hora',
  },
  pt: {
    home: '/pt/',
    homeTitle: 'Calculadora de Salário por Hora | Saiba exatamente quanto ganha por hora',
    homeDescription:
      'Calculadora gratuita de salário por hora. Converta qualquer salário em pagamento por hora, diário, semanal, quinzenal, mensal, anual, por minuto e por segundo.',
    calculator: '/pt/calculadora-salario-por-hora/',
    slug: 'calculadora-salario-por-hora',
    title: 'Calculadora de Salário por Hora | Converter Salário Anual em Valor Horário',
    metaDescription:
      'Calculadora gratuita de salário por hora. Converta pagamentos anuais, mensais, semanais, diários, quinzenais, por minuto e por segundo.',
    h1: 'Calculadora de Salário por Hora',
  },
  fr: {
    home: '/fr/',
    homeTitle: 'Calculateur Salaire Horaire | Sachez exactement ce que vous gagnez par heure',
    homeDescription:
      'Calculateur gratuit de salaire horaire. Convertissez n\'importe quel salaire en paiement à l\'heure, quotidien, hebdomadaire, bihebdomadaire, mensuel, annuel, à la minute et à la seconde.',
    calculator: '/fr/calculateur-salaire-horaire/',
    slug: 'calculateur-salaire-horaire',
    title: 'Calculateur Salaire Horaire | Convertir un Salaire Annuel en Taux Horaire',
    metaDescription:
      'Calculateur gratuit de salaire horaire. Convertissez les salaires annuels, mensuels, hebdomadaires, quotidiens, bihebdomadaires et plus.',
    h1: 'Calculateur Salaire Horaire',
  },
  de: {
    home: '/de/',
    homeTitle: 'Gehalt zu Stundenlohn Rechner | Erfahren Sie genau, was Sie pro Stunde verdienen',
    homeDescription:
      'Kostenloser Rechner für Gehalt zu Stundenlohn. Konvertieren Sie jedes Gehalt in Stundenlohn, Tageslohn, Wochenlohn, Zweiwochen-, Monats-, Jahres-, Pro-Minuten- und Pro-Sekunden-Zahlungen.',
    calculator: '/de/gehalt-zu-stundenlohn-rechner/',
    slug: 'gehalt-zu-stundenlohn-rechner',
    title: 'Gehalt zu Stundenlohn Rechner | Jahresgehalt in Stundenlohn umrechnen',
    metaDescription:
      'Kostenloser Rechner für Gehalt zu Stundenlohn. Rechnen Sie Jahres-, Monats-, Wochen-, Tages- und Zweiwochenlohn sofort um.',
    h1: 'Gehalt zu Stundenlohn Rechner',
  },
  ja: {
    home: '/ja/',
    homeTitle: '年収から時給計算機 | あなたが1時間でいくら稼いでいるか正確に知る',
    homeDescription:
      '無料の年収から時給計算機。年収、月給、週給、日給、隔週給、分単位、秒単位の賃金を変換できます。50以上の通貨に対応。',
    calculator: '/ja/salary-to-hourly-calculator/',
    slug: 'salary-to-hourly-calculator',
    title: '年収から時給計算機 | 年収を時給に換算',
    metaDescription:
      '無料の年収から時給計算機。年収、月給、週給、日給、隔週給、分単位、秒単位の賃金をすぐに換算できます。',
    h1: '年収から時給計算機',
  },
  zh: {
    home: '/zh/',
    homeTitle: '工资转时薪计算器 | 准确了解您每小时的收入',
    homeDescription:
      '免费工资转时薪计算器。将任何工资转换为每小时、每天、每周、每两周、每月、每年、每分钟和每秒的工资。支持50多种货币。',
    calculator: '/zh/salary-to-hourly-calculator/',
    slug: 'salary-to-hourly-calculator',
    title: '工资转时薪计算器 | 将年薪换算为时薪',
    metaDescription:
      '免费的工资转时薪计算器。即时换算年薪、月薪、周薪、日薪、双周薪、每分钟和每秒收入。',
    h1: '工资转时薪计算器',
  },
  id: {
    home: '/id/',
    homeTitle: 'Kalkulator Gaji ke Upah Per Jam | Ketahui dengan tepat berapa yang Anda hasilkan per jam',
    homeDescription:
      'Kalkulator gaji ke upah per jam gratis. Konversikan gaji apa pun menjadi pembayaran per jam, harian, mingguan, dua mingguan, bulanan, tahunan, per menit dan per detik.',
    calculator: '/id/kalkulator-gaji-ke-upah-per-jam/',
    slug: 'kalkulator-gaji-ke-upah-per-jam',
    title: 'Kalkulator Gaji ke Upah Per Jam | Konversi Gaji Tahunan ke Upah Per Jam',
    metaDescription:
      'Kalkulator gaji ke upah per jam gratis. Konversikan gaji tahunan, bulanan, mingguan, harian, dua mingguan, per menit dan per detik.',
    h1: 'Kalkulator Gaji ke Upah Per Jam',
  },
  tr: {
    home: '/tr/',
    homeTitle: 'Maaştan Saatlik Ücrete Hesaplayıcı | Saatte ne kadar kazandığınızı tam olarak bilin',
    homeDescription:
      'Ücretsiz maaştan saatlik ücrete hesaplayıcı. Herhangi bir maaşı saatlik, günlük, haftalık, iki haftalık, aylık, yıllık, dakika ve saniye ücretlerine dönüştürün.',
    calculator: '/tr/maastan-saatlik-ucrete-hesaplayici/',
    slug: 'maastan-saatlik-ucrete-hesaplayici',
    title: 'Maaştan Saatlik Ücrete Hesaplayıcı | Yıllık Maaşı Saatlik Ücrete Çevir',
    metaDescription:
      'Ücretsiz maaştan saatlik ücrete hesaplayıcı. Yıllık, aylık, haftalık, günlük, iki haftalık, dakika ve saniye ücretlerini çevirin.',
    h1: 'Maaştan Saatlik Ücrete Hesaplayıcı',
  },
  ru: {
    home: '/ru/',
    homeTitle: 'Калькулятор зарплаты в почасовую ставку | Узнайте точно, сколько вы зарабатываете в час',
    homeDescription:
      'Бесплатный калькулятор зарплаты в почасовую ставку. Переводите любую зарплату в почасовую, дневную, недельную, двухнедельную, месячную, годовую, за минуту и за секунду.',
    calculator: '/ru/kalkulyator-zarplaty-v-pochasovuyu-stavku/',
    slug: 'kalkulyator-zarplaty-v-pochasovuyu-stavku',
    title: 'Калькулятор зарплаты в почасовую ставку | Перевод годовой зарплаты в час',
    metaDescription:
      'Бесплатный калькулятор зарплаты в почасовую ставку. Переводите годовую, месячную, недельную, дневную и другую оплату.',
    h1: 'Калькулятор зарплаты в почасовую ставку',
  },
  it: {
    home: '/it/',
    homeTitle: 'Calcolatore Stipendio Orario | Sappi esattamente quanto guadagni all\'ora',
    homeDescription:
      'Calcolatore gratuito da stipendio a tariffa oraria. Converti qualsiasi stipendio in pagamento orario, giornaliero, settimanale, bisettimanale, mensile, annuale, al minuto e al secondo.',
    calculator: '/it/calcolatore-stipendio-orario/',
    slug: 'calcolatore-stipendio-orario',
    title: 'Calcolatore Stipendio Orario | Converti Stipendio Annuale in Tariffa Oraria',
    metaDescription:
      'Calcolatore gratuito da stipendio a tariffa oraria. Converti stipendi annuali, mensili, settimanali, giornalieri e bisettimanali.',
    h1: 'Calcolatore Stipendio Orario',
  },
  nl: {
    home: '/nl/',
    homeTitle: 'Salaris naar Uurloon Calculator | Weet precies wat je per uur verdient',
    homeDescription:
      'Gratis salaris naar uurloon calculator. Zet elk salaris om in uurloon, dagloon, weekloon, tweewekelijks, maandelijks, jaarlijks, per minuut en per seconde.',
    calculator: '/nl/salaris-naar-uurloon-calculator/',
    slug: 'salaris-naar-uurloon-calculator',
    title: 'Salaris naar Uurloon Calculator | Jaarlijks Salaris Omrekenen naar Uurloon',
    metaDescription:
      'Gratis salaris naar uurloon calculator. Reken jaarlijks, maandelijks, wekelijks, dagelijks en tweewekelijks salaris direct om.',
    h1: 'Salaris naar Uurloon Calculator',
  },
  pl: {
    home: '/pl/',
    homeTitle: 'Kalkulator Pensji na Stawkę Godzinową | Dowiedz się dokładnie, ile zarabiasz na godzinę',
    homeDescription:
      'Bezpłatny kalkulator pensji na stawkę godzinową. Przelicz każdą pensję na wynagrodzenie godzinowe, dzienne, tygodniowe, dwutygodniowe, miesięczne, roczne, na minutę i sekundę.',
    calculator: '/pl/kalkulator-pensji-na-stawke-godzinowa/',
    slug: 'kalkulator-pensji-na-stawke-godzinowa',
    title: 'Kalkulator Pensji na Stawkę Godzinową | Przelicz Pensję Roczną na Godzinową',
    metaDescription:
      'Bezpłatny kalkulator pensji na stawkę godzinową. Przelicz wynagrodzenie roczne, miesięczne, tygodniowe, dzienne i dwutygodniowe.',
    h1: 'Kalkulator Pensji na Stawkę Godzinową',
  },
  ko: {
    home: '/ko/',
    homeTitle: '연봉 시급 계산기 | 시간당 정확한 수입을 알아보세요',
    homeDescription:
      '무료 연봉 시급 계산기입니다. 모든 급여를 시급, 일급, 주급, 격주급, 월급, 연봉, 분당 및 초당 수입으로 변환합니다.',
    calculator: '/ko/salary-to-hourly-calculator/',
    slug: 'salary-to-hourly-calculator',
    title: '연봉 시급 계산기 | 연봉을 시급으로 변환',
    metaDescription:
      '무료 연봉 시급 계산기입니다. 연봉, 월급, 주급, 일급, 격주 급여, 분당 및 초당 수입을 즉시 변환합니다.',
    h1: '연봉 시급 계산기',
  },
};

export function getPagePaths(languageCode: string): PagePaths {
  return PAGE_PATHS[languageCode] || PAGE_PATHS.en;
}

export function getCalculatorUrl(languageCode: string, baseUrl: string = ''): string {
  return baseUrl + getPagePaths(languageCode).calculator;
}
