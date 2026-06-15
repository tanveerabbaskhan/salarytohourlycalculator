export interface CardItem {
  title: string;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HomepageContent {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  supportLabel: string;
  supportItems: string[];
  currencyLine: string;
  trust: CardItem[];
  aboutKicker: string;
  aboutTitle: string;
  aboutText: string;
  aboutFacts: CardItem[];
  whyTitle: string;
  whyText: string[];
  usersTitle: string;
  usersIntro: string;
  users: CardItem[];
  howTitle: string;
  howIntro: string;
  steps: CardItem[];
  formulasTitle: string;
  formulasIntro: string;
  formulas: CardItem[];
  trueRateTitle: string;
  trueRateText: string;
  chartTitle: string;
  chartIntro: string;
  chartHeaders: string[];
  chartNote: string;
  compareTitle: string;
  compareIntro: string;
  comparison: CardItem[];
  scenariosTitle: string;
  scenarios: CardItem[];
  globalTitle: string;
  globalIntro: string;
  globalHours: CardItem[];
  globalOutro: string;
  faqTitle: string;
  faqs: FaqItem[];
  relatedTitle: string;
  relatedIntro: string;
  related: CardItem[];
  closingTitle: string;
  closingText: string;
  footerTitle: string;
  footerText: string;
}

export const salaryRows = [
  ['$30,000', '$2,500', '$576.92', '$14.42'],
  ['$35,000', '$2,917', '$673.08', '$16.83'],
  ['$40,000', '$3,333', '$769.23', '$19.23'],
  ['$45,000', '$3,750', '$865.38', '$21.63'],
  ['$50,000', '$4,167', '$961.54', '$24.04'],
  ['$55,000', '$4,583', '$1,057.69', '$26.44'],
  ['$60,000', '$5,000', '$1,153.85', '$28.85'],
  ['$70,000', '$5,833', '$1,346.15', '$33.65'],
  ['$80,000', '$6,667', '$1,538.46', '$38.46'],
  ['$90,000', '$7,500', '$1,730.77', '$43.27'],
  ['$100,000', '$8,333', '$1,923.08', '$48.08'],
];

const english: HomepageContent = {
  title: 'Salary to Hourly Calculator | Know Exactly What You Earn Per Hour',
  description:
    'Free salary to hourly calculator. Convert any wage into hourly, daily, weekly, biweekly, monthly, annual, per-minute and per-second pay in 50+ currencies.',
  eyebrow: 'Free salary conversion tool',
  h1: 'Salary to Hourly Calculator - Know Exactly What You Earn Per Hour',
  subheadline:
    "Stop guessing. Whether you're comparing job offers, switching from salary to hourly, or quoting a freelance rate - enter any wage and see your complete pay breakdown instantly. Free, no sign-up, works in every currency.",
  primaryCta: 'Use Calculator - Free & Instant',
  secondaryCta: 'View Conversion Chart',
  supportLabel: 'Supports',
  supportItems: ['Hourly', 'Daily', 'Weekly', 'Biweekly', 'Monthly', 'Annual', 'Per Minute', 'Per Second'],
  currencyLine: 'Works in: USD, EUR, GBP, PKR, INR, JPY, AED, CAD, AUD, BRL, and 50+ more currencies.',
  trust: [
    { title: '100% Free', text: 'No account required' },
    { title: 'Real-Time Results', text: 'Updates as you type' },
    { title: '12+ Languages', text: 'English, Arabic, Urdu, Spanish, French and more' },
    { title: 'No Data Stored', text: 'All calculations happen in your browser' },
    { title: 'Works Everywhere', text: 'Desktop, tablet and mobile' },
  ],
  aboutKicker: 'About this tool',
  aboutTitle: 'About This Calculator',
  aboutText:
    'This Salary to Hourly Calculator was built to give workers, job seekers, freelancers, and HR professionals a fast, accurate, and globally usable wage conversion tool.',
  aboutFacts: [
    { title: 'Formula base', text: '52 weeks per year, 12 months per year, and a user-configurable hours-per-week setting.' },
    { title: 'Default schedule', text: 'The default is 40 hours per week, but you can adjust it for part-time or non-standard contracts.' },
    { title: 'Gross pay only', text: 'This tool does not calculate tax deductions, insurance premiums, or retirement contributions.' },
  ],
  whyTitle: 'Why Converting Salary to Hourly Actually Matters',
  whyText: [
    "Most job offers don't speak the same language. One employer quotes $85,000 per year. Another offers $42 per hour. A third says $6,800 monthly. They could be the exact same pay - or wildly different - and without converting to a common unit, you simply cannot compare.",
    "That's the problem this salary-to-hourly calculator solves in seconds.",
    'Beyond job comparisons, knowing your true hourly rate changes how you think about your work. When you understand that a 60-hour salary week cuts your effective hourly rate nearly in half, the "stable" salaried role starts to look very different. Real financial clarity starts with the hourly number.',
  ],
  usersTitle: 'Who Uses This Calculator Every Day',
  usersIntro: 'This tool is built for anyone dealing with wages in the real world:',
  users: [
    { title: 'Job seekers', text: 'Comparing offers from different employers who quote pay differently.' },
    { title: 'Employees', text: 'Checking if switching from salary to hourly is worth it.' },
    { title: 'Freelancers and consultants', text: 'Setting competitive hourly rates that actually cover income goals.' },
    { title: 'HR managers and recruiters', text: 'Standardizing pay comparisons across roles.' },
    { title: 'International workers', text: 'Converting wages across different weekly work-hour standards.' },
    { title: 'Students and recent graduates', text: 'Making sense of a first job offer.' },
  ],
  howTitle: 'How to Use the Salary to Hourly Calculator',
  howIntro:
    "You don't need a manual - but here's exactly what each field does so you get the most accurate result possible.",
  steps: [
    {
      title: 'Step 1 - Enter Any Pay Amount You Already Know',
      text: 'You can start from any wage type. Type your annual salary, your monthly paycheck, your weekly earnings, or your current hourly rate. The calculator will fill in all other fields automatically in real time. There is no submit button - results appear as you type.',
    },
    {
      title: 'Step 2 - Set Your Weekly Hours',
      text: 'The default is 40 hours per week, which reflects a standard full-time schedule in most countries. If you work part-time, have a non-standard contract (37.5 hours is common in the UK, for example), or regularly work more than 40 hours, update this field. Getting this number right is critical - it has the biggest impact on your calculated hourly rate.',
    },
    {
      title: 'Step 3 - Select Your Currency',
      text: 'Choose your local currency from the dropdown. The symbol will update across all fields instantly. The tool supports over 50 global currencies including USD, EUR, GBP, PKR, INR, JPY, AED, BRL, CAD, and more. All calculations use the same currency throughout - no conversion rates are applied.',
    },
    {
      title: 'Step 4 - Read Your Full Pay Breakdown',
      text: 'Once you have entered your values, the Your Wage As panel shows your pay expressed in every time unit - daily, weekly, biweekly, monthly, and annual. Expand the Other Time Intervals section to see your per-minute and per-second earnings. Fair warning: the per-second figure is either deeply motivating or deeply unsettling, depending on your situation.',
    },
  ],
  formulasTitle: 'How to Calculate Hourly Rate from Salary - The Exact Formulas',
  formulasIntro:
    'Understanding the math behind the calculator means you can do quick estimates in your head and catch any errors. Here are the four core conversions:',
  formulas: [
    {
      title: 'Annual Salary to Hourly Rate',
      text: 'Divide your annual salary by 52 (weeks in a year), then divide again by your weekly hours. Example: $52,000 per year / 52 weeks / 40 hours = $25.00 per hour. A quick mental shortcut used widely: divide your annual salary by 2,000 (50 weeks x 40 hours). It is not perfectly exact but gives you a reliable ballpark in seconds.',
    },
    {
      title: 'Monthly Salary to Hourly Rate',
      text: 'Multiply your monthly salary by 12 to get the annual figure, then apply the same formula above. Example: $4,500/month x 12 = $54,000/year / 52 / 40 = $25.96 per hour.',
    },
    {
      title: 'Weekly Pay to Hourly Rate',
      text: 'Simply divide your weekly paycheck by the number of hours you worked that week. Example: $1,000 per week / 40 hours = $25.00 per hour.',
    },
    {
      title: 'Daily Wage to Hourly Rate',
      text: 'Divide your daily rate by the number of hours in your workday (typically 8 hours for a 40-hour week). Example: $200 per day / 8 hours = $25.00 per hour.',
    },
  ],
  trueRateTitle: 'What Is Your "True" Hourly Rate? (The Honest Calculation)',
  trueRateText:
    "Standard calculators assume you work every hour you're paid for. But if you're a salaried employee who regularly works 50+ hours while paid for 40, your real hourly rate is significantly lower. Likewise, if your annual salary figure includes 15 days of PTO you never take, your effective rate is higher than it looks. Use this calculator as your baseline, then adjust mentally for your real situation.",
  chartTitle: 'Common Salary to Hourly Conversion Chart (40 hrs/week)',
  chartIntro: 'Use this quick-reference table to look up common salary figures without entering them manually.',
  chartHeaders: ['Annual Salary', 'Monthly', 'Weekly', 'Hourly Rate'],
  chartNote: 'Assumes 40 hours/week, 52 weeks/year. For different hours, use the calculator above.',
  compareTitle: 'Salary vs. Hourly Pay - What Nobody Tells You',
  compareIntro:
    "The debate between salaried and hourly employment comes up constantly in personal finance communities, and for good reason: the differences go far beyond just how you're paid.",
  comparison: [
    {
      title: 'The Salaried Employee',
      text: 'A salary gives you income predictability. You know exactly what hits your bank account each month regardless of whether the week had 38 productive hours or 52 chaotic ones. Many salaried roles include benefits - health insurance, retirement contributions, paid leave, and bonuses - that add significant value beyond the base number. The hidden downside is unpaid overtime. In many countries and roles, salaried workers are classified as exempt, meaning every hour past 40 is simply expected and uncompensated. Reddit communities like r/antiwork are full of people who calculated their true hourly rate after a 60-hour week and got an uncomfortable shock.',
    },
    {
      title: 'The Hourly Employee',
      text: 'Hourly workers are paid for every minute on the clock, which creates transparency and legal protection. Under the Fair Labor Standards Act (FLSA) in the US, non-exempt hourly employees must be paid 1.5x their regular rate for every hour over 40 in a week. This overtime provision means a disciplined hourly worker can out-earn a salaried peer in a busy season. The trade-off is variability - hours can be cut without notice, and benefits are less common.',
    },
    {
      title: 'Which is Better for You?',
      text: 'Neither is universally better. The right answer depends on your industry, life stage, financial needs, and employer. What this tool gives you is the ability to compare both on a level playing field - the hourly rate - so you can make the decision with full information rather than guesswork.',
    },
  ],
  scenariosTitle: 'Real-World Scenarios Where This Calculator Helps',
  scenarios: [
    {
      title: 'Comparing Two Job Offers Side by Side',
      text: 'Company A offers $72,000 per year. Company B offers $38 per hour but only guarantees 35 hours per week. At 35 hours/week, Company B pays $38 x 35 x 52 = $69,160 per year - $2,840 less annually. This calculator makes that comparison instant.',
    },
    {
      title: 'Setting Your Freelance Rate',
      text: 'If you left a $60,000/year job, your raw hourly equivalent is $28.85/hour at 40 hrs/week. But freelancers typically bill only 50-70% of their working hours (the rest is admin, marketing, and unbilled meetings). To maintain the same income, a freelancer should target $41-$58/hour as a minimum, before accounting for self-employment taxes and lost benefits. This is a reality check most online tools skip entirely.',
    },
    {
      title: 'Negotiating a Raise or Promotion',
      text: 'Knowing your current hourly rate gives you a precise anchor for negotiation. "I am currently earning the equivalent of $31.25/hour, and based on my research the market rate for this role is $36-$39/hour" is a far more compelling conversation than a vague percentage request.',
    },
    {
      title: 'Evaluating Overtime or Extra Shifts',
      text: "If you're offered 10 overtime hours at 1.5x your base rate of $22/hour, you'll earn $33/hour for those hours - adding $330 to your paycheck. Knowing the numbers instantly lets you decide whether the extra hours are worth it for your situation.",
    },
  ],
  globalTitle: 'Hourly Rate Calculations Around the World - Hours Per Week Reference',
  globalIntro:
    'Standard working hours vary significantly by country. Using the wrong number produces an inaccurate hourly rate. Here are the most common standards to enter in the Hours per Week field:',
  globalHours: [
    { title: 'United States', text: '40 hours/week is the legal full-time standard.' },
    { title: 'United Kingdom', text: '37.5 hours is the most common contractual standard, though 35-40 is all common.' },
    { title: 'European Union', text: '48 hours/week is the legal maximum, but most contracts sit at 35-40 hours.' },
    { title: 'France', text: '35 hours/week is the legal standard (one of the lowest globally).' },
    { title: 'Germany', text: '38-40 hours is typical for most industries.' },
    { title: 'Pakistan & India', text: '48 hours/week is the standard under labor law, though many knowledge-economy jobs use 40-45.' },
    { title: 'Australia & Canada', text: '38-40 hours per week is standard.' },
    { title: 'Japan', text: '40 hours is the legal maximum, though actual working hours are often higher.' },
  ],
  globalOutro: 'Always enter your actual contracted hours for the most accurate result.',
  faqTitle: 'Frequently Asked Questions About Salary to Hourly Conversion',
  faqs: [
    {
      question: 'How do I convert my annual salary to an hourly rate?',
      answer:
        'Divide your annual salary by 52 (weeks per year) and then divide that result by the number of hours you work per week. For a standard 40-hour week: hourly rate = annual salary / 52 / 40. For example, $52,000 / 52 / 40 = $25.00 per hour.',
    },
    {
      question: 'What is $50,000 a year per hour?',
      answer:
        'A $50,000 annual salary equals approximately $24.04 per hour, based on a standard 40-hour, 52-week working year ($50,000 / 2,080 hours). If you work fewer hours - say 35 per week - the same salary equals $27.47 per hour.',
    },
    {
      question: 'How much is $20 an hour annually?',
      answer:
        'At $20 per hour, working 40 hours per week and 52 weeks per year, your annual salary is $41,600. Working 50 weeks (accounting for 2 weeks unpaid leave) gives $40,000 per year.',
    },
    {
      question: 'Does this calculator account for taxes?',
      answer:
        'No - this is a gross pay calculator. It converts between pay periods without deducting income tax, Social Security, Medicare, or other withholdings. The results show your pre-tax pay. For after-tax estimates, you would need a dedicated paycheck calculator that accounts for your tax filing status and deductions.',
    },
    {
      question: 'Should I include PTO and holidays when calculating my hourly rate?',
      answer:
        "It depends on your goal. If you want your contractual hourly equivalent, use your full contracted hours (e.g., 2,080 hours per year for 40 hrs/week). If you want your effective hourly rate - the rate for hours you actually work productively - subtract paid holidays and PTO from the total hours. Reddit's r/personalfinance recommends the contractual method for job comparisons and the effective method for freelance rate-setting.",
    },
    {
      question: 'How do I calculate overtime pay from my hourly rate?',
      answer:
        'In the US, overtime is typically paid at 1.5x (time-and-a-half) your regular hourly rate for hours over 40 per week. For example, at $25/hour, overtime pays $37.50/hour. Some employers pay double-time (2x) for holidays or extreme hours. Multiply your regular rate by the applicable multiplier to get your overtime rate.',
    },
    {
      question: "What's the quick mental math shortcut for annual to hourly conversion?",
      answer:
        "Divide your annual salary by 2,000. This assumes 50 working weeks at 40 hours each. For $60,000/year: $60,000 / 2,000 = $30/hour. It's slightly imprecise (the exact figure using 52 weeks is $28.85/hour) but useful for rapid mental estimates - a trick widely shared in Reddit's r/LifeProTips.",
    },
    {
      question: 'How is a monthly salary different from biweekly pay?',
      answer:
        'Monthly pay means you receive 12 paychecks per year. Biweekly pay means you receive 26 paychecks (every two weeks). In most months, these are nearly identical - but in two months each year, biweekly employees receive a third paycheck. This means your monthly take-home will look higher on those months if you are used to comparing to biweekly figures.',
    },
    {
      question: 'Can I use this for non-standard schedules like compressed workweeks or part-time?',
      answer:
        'Yes. Simply enter your actual weekly hours in the Hours per week field. If you work a 4x10 compressed schedule (40 hours over 4 days), the hourly calculation is unchanged - just keep 40 hours. For part-time at 25 hours/week, enter 25, and all conversions will reflect your actual schedule.',
    },
    {
      question: 'Is this tool free?',
      answer:
        "Yes, completely. There is no sign-up, no account creation, no email required, and no premium tier. All calculations happen locally in your browser. We don't store your numbers, and there is nothing to pay.",
    },
  ],
  relatedTitle: 'Other Calculators You Might Find Useful',
  relatedIntro: 'Once you know your hourly rate, these tools help you take the next step:',
  related: [
    { title: 'After-Tax Paycheck Calculator', text: 'See what you actually take home after federal, state, and local taxes.' },
    { title: 'Overtime Pay Calculator', text: 'Calculate exactly how much you earn for extra hours at 1.5x or 2x rates.' },
    { title: 'Freelance Rate Calculator', text: 'Factor in taxes, benefits, and non-billable time to set a sustainable client-facing rate.' },
    { title: 'Budget Calculator', text: 'Build a monthly budget based on your calculated take-home pay.' },
    { title: 'Cost of Living Comparison', text: 'See if a higher-paying job in another city actually leaves you better off after accounting for living expenses.' },
  ],
  closingTitle: 'Ready to Know Your True Hourly Rate?',
  closingText:
    'Scroll back up, enter your salary or hourly wage, and get your full pay breakdown in seconds. No sign-up. No ads chasing you. No catch. Just the numbers you need to make smarter decisions about your career and finances.',
  footerTitle: 'About This Calculator',
  footerText:
    'This Salary to Hourly Calculator was built to give workers, job seekers, freelancers, and HR professionals a fast, accurate, and globally usable wage conversion tool. Calculations follow standard pay period formulas: 52 weeks per year, 12 months per year, and a user-configurable hours-per-week setting (default: 40). This tool does not calculate tax deductions, insurance premiums, or retirement contributions. All figures shown are gross (pre-tax) estimates. For professional financial advice, consult a certified financial planner or your HR department.',
};

const localizedShell: Record<string, Partial<HomepageContent>> = {
  es: {
    title: 'Calculadora de Salario a Hora | Sepa exactamente cuánto gana por hora',
    description:
      'Calculadora gratuita de salario a hora. Convierte cualquier sueldo en pago por hora, diario, semanal, quincenal, mensual, anual, por minuto y por segundo.',
    eyebrow: 'Herramienta gratuita de conversión salarial',
    h1: 'Calculadora de Salario a Hora - Sepa exactamente cuánto gana por hora',
    subheadline:
      'Deje de adivinar. Ya sea que compare ofertas de trabajo, cambie de salario fijo a pago por hora o cotice una tarifa freelance, introduzca cualquier sueldo y vea al instante su desglose completo. Gratis, sin registro y compatible con cualquier moneda.',
    primaryCta: 'Usar calculadora - gratis e instantánea',
    secondaryCta: 'Ver tabla de conversión',
    supportLabel: 'Soporta',
    supportItems: ['Por hora', 'Diario', 'Semanal', 'Quincenal', 'Mensual', 'Anual', 'Por minuto', 'Por segundo'],
    currencyLine: 'Funciona con: USD, EUR, GBP, PKR, INR, JPY, AED, CAD, AUD, BRL y más de 50 monedas.',
    trust: [
      { title: '100% gratis', text: 'No se requiere cuenta' },
      { title: 'Resultados en tiempo real', text: 'Se actualiza mientras escribe' },
      { title: '12+ idiomas', text: 'Inglés, árabe, urdu, español, francés y más' },
      { title: 'No se almacenan datos', text: 'Todos los cálculos ocurren en su navegador' },
      { title: 'Funciona en todas partes', text: 'Escritorio, tablet y móvil' },
    ],
    aboutKicker: 'Sobre esta herramienta',
    aboutTitle: 'Acerca de esta calculadora',
    aboutText:
      'Esta calculadora de salario a hora fue creada para dar a trabajadores, candidatos, freelancers y profesionales de RR. HH. una herramienta rápida, precisa y global para convertir salarios.',
    aboutFacts: [
      { title: 'Base de cálculo', text: '52 semanas por año, 12 meses por año y horas semanales configurables por el usuario.' },
      { title: 'Horario predeterminado', text: 'El valor predeterminado es 40 horas por semana, pero puede cambiarlo para contratos parciales o no estándar.' },
      { title: 'Solo salario bruto', text: 'La herramienta no calcula impuestos, seguros, primas ni contribuciones de jubilación.' },
    ],
    whyTitle: 'Por qué convertir salario a hora realmente importa',
    whyText: [
      'La mayoría de las ofertas de trabajo no hablan el mismo idioma. Un empleador ofrece $85,000 al año. Otro ofrece $42 por hora. Un tercero dice $6,800 al mes. Podrían ser el mismo pago, o muy diferentes, y sin convertirlos a una unidad común no se pueden comparar con claridad.',
      'Ese es el problema que esta calculadora de salario a hora resuelve en segundos.',
      'Además de comparar ofertas, conocer su verdadera tarifa por hora cambia la forma en que piensa sobre su trabajo. Cuando entiende que una semana asalariada de 60 horas reduce casi a la mitad su tarifa efectiva por hora, el puesto estable empieza a verse diferente. La claridad financiera real empieza con el número por hora.',
    ],
    usersTitle: 'Quién usa esta calculadora todos los días',
    usersIntro: 'Esta herramienta está pensada para cualquier persona que trabaja con salarios en el mundo real:',
    users: [
      { title: 'Candidatos', text: 'Comparan ofertas de empleadores que expresan el pago de formas diferentes.' },
      { title: 'Empleados', text: 'Comprueban si cambiar de salario fijo a pago por hora merece la pena.' },
      { title: 'Freelancers y consultores', text: 'Definen tarifas por hora competitivas que cubren sus objetivos de ingresos.' },
      { title: 'RR. HH. y reclutadores', text: 'Estandarizan comparaciones salariales entre puestos.' },
      { title: 'Trabajadores internacionales', text: 'Convierten salarios entre distintos estándares de horas semanales.' },
      { title: 'Estudiantes y recién graduados', text: 'Entienden mejor su primera oferta laboral.' },
    ],
    howTitle: 'Cómo usar la calculadora de salario a hora',
    howIntro:
      'No necesita un manual, pero aquí tiene exactamente qué hace cada campo para obtener el resultado más preciso posible.',
    steps: [
      {
        title: 'Paso 1 - Introduzca cualquier cantidad que ya conozca',
        text: 'Puede empezar desde cualquier tipo de sueldo. Escriba su salario anual, pago mensual, ingreso semanal o tarifa actual por hora. La calculadora completa los demás campos automáticamente en tiempo real. No hay botón de enviar: los resultados aparecen mientras escribe.',
      },
      {
        title: 'Paso 2 - Configure sus horas semanales',
        text: 'El valor predeterminado es 40 horas por semana, que refleja un horario completo estándar en muchos países. Si trabaja medio tiempo, tiene un contrato no estándar (37.5 horas es común en Reino Unido, por ejemplo) o trabaja regularmente más de 40 horas, actualice este campo. Este número es crítico porque tiene el mayor impacto en la tarifa por hora calculada.',
      },
      {
        title: 'Paso 3 - Seleccione su moneda',
        text: 'Elija su moneda local en el menú desplegable. El símbolo se actualiza en todos los campos al instante. La herramienta admite más de 50 monedas globales, incluidas USD, EUR, GBP, PKR, INR, JPY, AED, BRL, CAD y más. Todos los cálculos usan la misma moneda; no se aplican tasas de cambio.',
      },
      {
        title: 'Paso 4 - Lea su desglose completo',
        text: 'Después de introducir sus valores, el panel de resultados muestra su pago en cada unidad de tiempo: diario, semanal, quincenal, mensual y anual. También verá las ganancias por minuto y por segundo para entender el valor real de su tiempo.',
      },
    ],
    formulasTitle: 'Cómo calcular la tarifa por hora desde el salario',
    formulasIntro:
      'Entender las matemáticas detrás de la calculadora le permite hacer estimaciones rápidas y detectar errores. Estas son las cuatro conversiones principales:',
    formulas: [
      {
        title: 'Salario anual a tarifa por hora',
        text: 'Divida el salario anual entre 52 semanas y luego entre sus horas semanales. Ejemplo: $52,000 al año / 52 semanas / 40 horas = $25.00 por hora. Atajo mental: divida el salario anual entre 2,000 (50 semanas x 40 horas). No es exacto, pero da una estimación rápida.',
      },
      {
        title: 'Salario mensual a tarifa por hora',
        text: 'Multiplique el salario mensual por 12 para obtener la cifra anual y aplique la misma fórmula. Ejemplo: $4,500/mes x 12 = $54,000/año / 52 / 40 = $25.96 por hora.',
      },
      {
        title: 'Pago semanal a tarifa por hora',
        text: 'Divida el pago semanal entre las horas trabajadas esa semana. Ejemplo: $1,000 por semana / 40 horas = $25.00 por hora.',
      },
      {
        title: 'Pago diario a tarifa por hora',
        text: 'Divida la tarifa diaria entre las horas de su jornada laboral (normalmente 8 horas para una semana de 40 horas). Ejemplo: $200 por día / 8 horas = $25.00 por hora.',
      },
    ],
    trueRateTitle: '¿Cuál es su tarifa por hora "real"?',
    trueRateText:
      'Las calculadoras estándar suponen que trabaja todas las horas por las que recibe pago. Si es empleado asalariado y trabaja regularmente más de 50 horas mientras se le paga por 40, su tarifa real por hora es mucho menor. Use esta calculadora como base y ajuste mentalmente según su situación real.',
    chartTitle: 'Tabla común de salario a hora (40 hrs/semana)',
    chartIntro: 'Use esta tabla de referencia rápida para consultar salarios comunes sin introducirlos manualmente.',
    chartHeaders: ['Salario anual', 'Mensual', 'Semanal', 'Tarifa por hora'],
    chartNote: 'Supone 40 horas/semana y 52 semanas/año. Para otros horarios, use la calculadora de arriba.',
    compareTitle: 'Salario vs. pago por hora',
    compareIntro:
      'El debate entre empleo asalariado y pago por hora aparece constantemente porque las diferencias van mucho más allá de la forma de pago.',
    comparison: [
      {
        title: 'El empleado asalariado',
        text: 'Un salario ofrece previsibilidad de ingresos. Sabe qué llegará a su cuenta cada mes, aunque la semana haya tenido 38 horas productivas o 52 horas caóticas. Muchos puestos asalariados incluyen beneficios como seguro médico, contribuciones de jubilación, vacaciones pagadas y bonos. La desventaja oculta es el tiempo extra no pagado.',
      },
      {
        title: 'El empleado por hora',
        text: 'Los trabajadores por hora cobran por cada minuto trabajado, lo que crea transparencia y protección legal. En Estados Unidos, los empleados no exentos suelen cobrar 1.5x por las horas que superan 40 por semana. La compensación puede subir en temporadas ocupadas, pero los horarios pueden variar.',
      },
      {
        title: '¿Cuál le conviene más?',
        text: 'Ninguna opción es universalmente mejor. Depende de su industria, etapa de vida, necesidades financieras y empleador. Esta herramienta le permite comparar ambas opciones en una misma base: la tarifa por hora.',
      },
    ],
    scenariosTitle: 'Casos reales donde esta calculadora ayuda',
    scenarios: [
      { title: 'Comparar dos ofertas lado a lado', text: 'La empresa A ofrece $72,000 al año. La empresa B ofrece $38 por hora, pero solo garantiza 35 horas por semana. A 35 horas/semana, la empresa B paga $69,160 al año, $2,840 menos. La calculadora hace esta comparación al instante.' },
      { title: 'Definir su tarifa freelance', text: 'Si dejó un empleo de $60,000/año, su equivalente bruto es $28.85/hora con 40 horas/semana. Pero los freelancers solo facturan parte de su tiempo, así que una tarifa sostenible debe incluir administración, impuestos, beneficios y tiempo no facturable.' },
      { title: 'Negociar un aumento o ascenso', text: 'Conocer su tarifa actual por hora le da un punto de referencia preciso para negociar con datos, no con una petición vaga.' },
      { title: 'Evaluar horas extra o turnos adicionales', text: 'Si le ofrecen 10 horas extra a 1.5x sobre una tarifa base de $22/hora, ganará $33/hora por esas horas, agregando $330 antes de impuestos.' },
    ],
    globalTitle: 'Cálculos de tarifa por hora alrededor del mundo',
    globalIntro:
      'Las horas laborales estándar varían mucho por país. Usar el número incorrecto produce una tarifa por hora imprecisa. Estos son valores comunes para introducir en Horas por semana:',
    globalHours: [
      { title: 'Estados Unidos', text: '40 horas/semana es el estándar legal de tiempo completo.' },
      { title: 'Reino Unido', text: '37.5 horas es un estándar contractual común, aunque 35-40 también es frecuente.' },
      { title: 'Unión Europea', text: '48 horas/semana es el máximo legal, pero muchos contratos están entre 35 y 40.' },
      { title: 'Francia', text: '35 horas/semana es el estándar legal.' },
      { title: 'Alemania', text: '38-40 horas es típico en muchas industrias.' },
      { title: 'Pakistán e India', text: '48 horas/semana es común bajo normas laborales, aunque muchos trabajos usan 40-45.' },
      { title: 'Australia y Canadá', text: '38-40 horas por semana es un rango estándar.' },
      { title: 'Japón', text: '40 horas es la referencia legal, aunque las horas reales pueden ser mayores.' },
    ],
    globalOutro: 'Introduzca siempre sus horas contratadas reales para obtener el resultado más preciso.',
    faqTitle: 'Preguntas frecuentes sobre conversión de salario a hora',
    faqs: [
      { question: '¿Cómo convierto mi salario anual a una tarifa por hora?', answer: 'Divida el salario anual entre 52 semanas y luego entre las horas que trabaja por semana. Para 40 horas: tarifa por hora = salario anual / 52 / 40. Por ejemplo, $52,000 / 52 / 40 = $25.00 por hora.' },
      { question: '¿Cuánto es $50,000 al año por hora?', answer: 'Un salario anual de $50,000 equivale aproximadamente a $24.04 por hora con una semana de 40 horas y 52 semanas al año. Si trabaja 35 horas por semana, el mismo salario equivale a $27.47 por hora.' },
      { question: '¿Cuánto es $20 por hora al año?', answer: 'A $20 por hora, trabajando 40 horas por semana y 52 semanas al año, el salario anual es $41,600. Con 50 semanas trabajadas, sería $40,000 al año.' },
      { question: '¿Esta calculadora incluye impuestos?', answer: 'No. Es una calculadora de salario bruto. Convierte entre periodos de pago sin descontar impuestos, seguridad social, seguro médico u otras retenciones.' },
      { question: '¿Debo incluir vacaciones y días festivos?', answer: 'Depende de su objetivo. Para comparar empleos, use las horas contratadas completas. Para una tarifa efectiva, reste vacaciones y días festivos de las horas totales.' },
      { question: '¿Cómo calculo el pago de horas extra?', answer: 'En Estados Unidos, las horas extra suelen pagarse a 1.5x la tarifa regular por las horas que superan 40 por semana. A $25/hora, la hora extra paga $37.50/hora.' },
      { question: '¿Cuál es el atajo mental para convertir salario anual a hora?', answer: 'Divida el salario anual entre 2,000. Para $60,000/año, el atajo da $30/hora. No es exacto, pero es útil para estimaciones rápidas.' },
      { question: '¿En qué se diferencia el pago mensual del quincenal?', answer: 'El pago mensual significa 12 pagos al año. El pago quincenal o bisemanal significa 26 pagos al año, por lo que en algunos meses puede recibir un tercer pago.' },
      { question: '¿Puedo usar horarios no estándar o medio tiempo?', answer: 'Sí. Introduzca sus horas semanales reales. Para una semana comprimida 4x10, use 40 horas. Para medio tiempo de 25 horas/semana, introduzca 25.' },
      { question: '¿La herramienta es gratuita?', answer: 'Sí, completamente. No requiere registro, cuenta, correo electrónico ni plan premium. Los cálculos se realizan localmente en su navegador.' },
    ],
    relatedTitle: 'Otras calculadoras útiles',
    relatedIntro: 'Una vez que conoce su tarifa por hora, estas herramientas pueden ayudarle con el siguiente paso:',
    related: [
      { title: 'Calculadora de salario neto', text: 'Vea cuánto recibe realmente después de impuestos y deducciones.' },
      { title: 'Calculadora de horas extra', text: 'Calcule cuánto gana por horas adicionales a 1.5x o 2x.' },
      { title: 'Calculadora de tarifa freelance', text: 'Incluya impuestos, beneficios y tiempo no facturable para fijar una tarifa sostenible.' },
      { title: 'Calculadora de presupuesto', text: 'Construya un presupuesto mensual basado en sus ingresos.' },
      { title: 'Comparador de costo de vida', text: 'Evalúe si un salario más alto en otra ciudad realmente le conviene.' },
    ],
    closingTitle: '¿Listo para conocer su tarifa horaria real?',
    closingText:
      'Vuelva arriba, introduzca su salario o tarifa por hora y obtenga el desglose completo en segundos. Sin registro, sin anuncios persiguiéndole, sin truco. Solo los números que necesita.',
    footerTitle: 'Acerca de esta calculadora',
    footerText:
      'Esta Calculadora de Salario a Hora fue creada para ofrecer a trabajadores, candidatos, freelancers y profesionales de RR. HH. una herramienta rápida, precisa y global para convertir salarios. Los cálculos siguen fórmulas estándar: 52 semanas por año, 12 meses por año y horas semanales configurables por el usuario (valor predeterminado: 40). No calcula impuestos, seguros ni aportes de jubilación. Todas las cifras son estimaciones brutas antes de impuestos.',
  },
  fr: {
    title: 'Calculateur Salaire Horaire | Sachez exactement ce que vous gagnez par heure',
    h1: 'Calculateur Salaire Horaire - Sachez exactement ce que vous gagnez par heure',
    subheadline: 'Arrêtez de deviner. Comparez des offres, convertissez un salaire en taux horaire ou fixez un tarif freelance avec un résultat instantané.',
    primaryCta: 'Utiliser le calculateur',
    secondaryCta: 'Voir le tableau',
    supportLabel: 'Prend en charge',
    supportItems: ['Horaire', 'Quotidien', 'Hebdomadaire', 'Bihebdomadaire', 'Mensuel', 'Annuel', 'Par minute', 'Par seconde'],
    whyTitle: 'Pourquoi convertir un salaire en taux horaire est important',
    howTitle: 'Comment utiliser le calculateur',
    formulasTitle: 'Formules exactes de conversion',
    chartTitle: 'Tableau courant salaire vers horaire',
    compareTitle: 'Salaire fixe vs paiement horaire',
    scenariosTitle: 'Situations réelles où ce calculateur aide',
    globalTitle: 'Référence des heures de travail dans le monde',
    faqTitle: 'Questions fréquentes sur la conversion salaire horaire',
    relatedTitle: 'Autres calculateurs utiles',
    closingTitle: 'Prêt à connaître votre vrai taux horaire ?',
    footerTitle: 'À propos de ce calculateur',
  },
  de: {
    title: 'Gehalt zu Stundenlohn Rechner | Genau wissen, was Sie pro Stunde verdienen',
    h1: 'Gehalt zu Stundenlohn Rechner - Genau wissen, was Sie pro Stunde verdienen',
    subheadline: 'Hören Sie auf zu raten. Vergleichen Sie Angebote, wechseln Sie von Gehalt zu Stundenlohn oder kalkulieren Sie einen Freelance-Satz sofort.',
    primaryCta: 'Rechner nutzen',
    secondaryCta: 'Umrechnungstabelle ansehen',
    supportLabel: 'Unterstützt',
    supportItems: ['Stündlich', 'Täglich', 'Wöchentlich', 'Zweiwöchentlich', 'Monatlich', 'Jährlich', 'Pro Minute', 'Pro Sekunde'],
    whyTitle: 'Warum die Umrechnung von Gehalt in Stundenlohn wichtig ist',
    howTitle: 'So verwenden Sie den Rechner',
    formulasTitle: 'Die genauen Formeln',
    chartTitle: 'Häufige Gehalt-zu-Stundenlohn-Tabelle',
    compareTitle: 'Gehalt vs. Stundenlohn',
    scenariosTitle: 'Praxisfälle für diesen Rechner',
    globalTitle: 'Arbeitsstunden pro Woche weltweit',
    faqTitle: 'Häufige Fragen zur Umrechnung',
    relatedTitle: 'Weitere nützliche Rechner',
    closingTitle: 'Bereit für Ihren echten Stundenlohn?',
    footerTitle: 'Über diesen Rechner',
  },
};

interface Pack {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  supportLabel: string;
  supportItems: string[];
  currencyLine: string;
  trustTitles: string[];
  trustTexts: string[];
  aboutKicker: string;
  aboutTitle: string;
  aboutText: string;
  facts: string[];
  whyTitle: string;
  why: string[];
  usersTitle: string;
  usersIntro: string;
  users: string[];
  howTitle: string;
  howIntro: string;
  steps: string[];
  formulasTitle: string;
  formulasIntro: string;
  formulas: string[];
  trueRateTitle: string;
  trueRateText: string;
  chartTitle: string;
  chartIntro: string;
  chartHeaders: string[];
  chartNote: string;
  compareTitle: string;
  compareIntro: string;
  comparison: string[];
  scenariosTitle: string;
  scenarios: string[];
  globalTitle: string;
  globalIntro: string;
  globalHours: string[];
  globalOutro: string;
  faqTitle: string;
  faqs: string[];
  relatedTitle: string;
  relatedIntro: string;
  related: string[];
  closingTitle: string;
  closingText: string;
  footerTitle: string;
  footerText: string;
}

function makePack(pack: Pack): HomepageContent {
  const userTitles = pack.usersTitle.includes('Qui') ? ['Candidatos', 'Empleados', 'Freelancers y consultores', 'RR. HH. y reclutadores', 'Trabajadores internacionales', 'Estudiantes y graduados'] : [];
  const defaultUserTitles = ['1', '2', '3', '4', '5', '6'];
  const userLabels = userTitles.length ? userTitles : defaultUserTitles;

  return {
    title: pack.title,
    description: pack.description,
    eyebrow: pack.eyebrow,
    h1: pack.h1,
    subheadline: pack.subheadline,
    primaryCta: pack.primaryCta,
    secondaryCta: pack.secondaryCta,
    supportLabel: pack.supportLabel,
    supportItems: pack.supportItems,
    currencyLine: pack.currencyLine,
    trust: pack.trustTitles.map((title, index) => ({ title, text: pack.trustTexts[index] })),
    aboutKicker: pack.aboutKicker,
    aboutTitle: pack.aboutTitle,
    aboutText: pack.aboutText,
    aboutFacts: [
      { title: pack.facts[0], text: pack.facts[1] },
      { title: pack.facts[2], text: pack.facts[3] },
      { title: pack.facts[4], text: pack.facts[5] },
    ],
    whyTitle: pack.whyTitle,
    whyText: pack.why,
    usersTitle: pack.usersTitle,
    usersIntro: pack.usersIntro,
    users: pack.users.map((text, index) => ({ title: userLabels[index] || String(index + 1), text })),
    howTitle: pack.howTitle,
    howIntro: pack.howIntro,
    steps: pack.steps.map((text, index) => ({ title: text.split(':')[0], text: text.split(':').slice(1).join(':').trim() || text })),
    formulasTitle: pack.formulasTitle,
    formulasIntro: pack.formulasIntro,
    formulas: pack.formulas.map((text, index) => ({ title: text.split(':')[0], text: text.split(':').slice(1).join(':').trim() || text })),
    trueRateTitle: pack.trueRateTitle,
    trueRateText: pack.trueRateText,
    chartTitle: pack.chartTitle,
    chartIntro: pack.chartIntro,
    chartHeaders: pack.chartHeaders,
    chartNote: pack.chartNote,
    compareTitle: pack.compareTitle,
    compareIntro: pack.compareIntro,
    comparison: pack.comparison.map(text => ({ title: text.split(':')[0], text: text.split(':').slice(1).join(':').trim() || text })),
    scenariosTitle: pack.scenariosTitle,
    scenarios: pack.scenarios.map(text => ({ title: text.split(':')[0], text: text.split(':').slice(1).join(':').trim() || text })),
    globalTitle: pack.globalTitle,
    globalIntro: pack.globalIntro,
    globalHours: pack.globalHours.map(text => ({ title: text.split(':')[0], text: text.split(':').slice(1).join(':').trim() || text })),
    globalOutro: pack.globalOutro,
    faqTitle: pack.faqTitle,
    faqs: pack.faqs.map(text => ({ question: text.split('?')[0] + '?', answer: text.split('?').slice(1).join('?').trim() || text })),
    relatedTitle: pack.relatedTitle,
    relatedIntro: pack.relatedIntro,
    related: pack.related.map(text => ({ title: text.split(':')[0], text: text.split(':').slice(1).join(':').trim() || text })),
    closingTitle: pack.closingTitle,
    closingText: pack.closingText,
    footerTitle: pack.footerTitle,
    footerText: pack.footerText,
  };
}

interface GenericPack {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  subheadline: string;
  cta: string;
  chartCta: string;
  supports: string;
  supportItems: string[];
  currencyLine: string;
  free: string;
  freeText: string;
  realTime: string;
  realTimeText: string;
  languages: string;
  languagesText: string;
  privacy: string;
  privacyText: string;
  devices: string;
  devicesText: string;
  aboutKicker: string;
  aboutTitle: string;
  aboutText: string;
  formulaBase: string;
  formulaText: string;
  defaultSchedule: string;
  defaultText: string;
  grossOnly: string;
  grossText: string;
  whyTitle: string;
  whyText: string[];
  usersTitle: string;
  usersIntro: string;
  userTitles: string[];
  userTexts: string[];
  howTitle: string;
  howIntro: string;
  stepTitles: string[];
  stepTexts: string[];
  formulasTitle: string;
  formulasIntro: string;
  formulaTitles: string[];
  formulaTexts: string[];
  trueRateTitle: string;
  trueRateText: string;
  chartTitle: string;
  chartIntro: string;
  chartHeaders: string[];
  chartNote: string;
  compareTitle: string;
  compareIntro: string;
  compareTitles: string[];
  compareTexts: string[];
  scenariosTitle: string;
  scenarioTitles: string[];
  scenarioTexts: string[];
  globalTitle: string;
  globalIntro: string;
  countryRows: string[];
  globalOutro: string;
  faqTitle: string;
  questions: string[];
  answers: string[];
  relatedTitle: string;
  relatedIntro: string;
  relatedTitles: string[];
  relatedTexts: string[];
  closingTitle: string;
  closingText: string;
  footerTitle: string;
  footerText: string;
}

function makeGenericPack(pack: GenericPack): HomepageContent {
  return {
    title: pack.title,
    description: pack.description,
    eyebrow: pack.eyebrow,
    h1: pack.h1,
    subheadline: pack.subheadline,
    primaryCta: pack.cta,
    secondaryCta: pack.chartCta,
    supportLabel: pack.supports,
    supportItems: pack.supportItems,
    currencyLine: pack.currencyLine,
    trust: [
      { title: pack.free, text: pack.freeText },
      { title: pack.realTime, text: pack.realTimeText },
      { title: pack.languages, text: pack.languagesText },
      { title: pack.privacy, text: pack.privacyText },
      { title: pack.devices, text: pack.devicesText },
    ],
    aboutKicker: pack.aboutKicker,
    aboutTitle: pack.aboutTitle,
    aboutText: pack.aboutText,
    aboutFacts: [
      { title: pack.formulaBase, text: pack.formulaText },
      { title: pack.defaultSchedule, text: pack.defaultText },
      { title: pack.grossOnly, text: pack.grossText },
    ],
    whyTitle: pack.whyTitle,
    whyText: pack.whyText,
    usersTitle: pack.usersTitle,
    usersIntro: pack.usersIntro,
    users: pack.userTitles.map((title, index) => ({ title, text: pack.userTexts[index] })),
    howTitle: pack.howTitle,
    howIntro: pack.howIntro,
    steps: pack.stepTitles.map((title, index) => ({ title, text: pack.stepTexts[index] })),
    formulasTitle: pack.formulasTitle,
    formulasIntro: pack.formulasIntro,
    formulas: pack.formulaTitles.map((title, index) => ({ title, text: pack.formulaTexts[index] })),
    trueRateTitle: pack.trueRateTitle,
    trueRateText: pack.trueRateText,
    chartTitle: pack.chartTitle,
    chartIntro: pack.chartIntro,
    chartHeaders: pack.chartHeaders,
    chartNote: pack.chartNote,
    compareTitle: pack.compareTitle,
    compareIntro: pack.compareIntro,
    comparison: pack.compareTitles.map((title, index) => ({ title, text: pack.compareTexts[index] })),
    scenariosTitle: pack.scenariosTitle,
    scenarios: pack.scenarioTitles.map((title, index) => ({ title, text: pack.scenarioTexts[index] })),
    globalTitle: pack.globalTitle,
    globalIntro: pack.globalIntro,
    globalHours: pack.countryRows.map(row => ({ title: row.split(':')[0], text: row.split(':').slice(1).join(':').trim() })),
    globalOutro: pack.globalOutro,
    faqTitle: pack.faqTitle,
    faqs: pack.questions.map((question, index) => ({ question, answer: pack.answers[index] })),
    relatedTitle: pack.relatedTitle,
    relatedIntro: pack.relatedIntro,
    related: pack.relatedTitles.map((title, index) => ({ title, text: pack.relatedTexts[index] })),
    closingTitle: pack.closingTitle,
    closingText: pack.closingText,
    footerTitle: pack.footerTitle,
    footerText: pack.footerText,
  };
}

interface AutoLocalePack {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  subheadline: string;
  cta: string;
  chartCta: string;
  supports: string;
  supportItems: string[];
  currencyLine: string;
  free: string;
  freeText: string;
  realTime: string;
  realTimeText: string;
  languages: string;
  languagesText: string;
  privacy: string;
  privacyText: string;
  devices: string;
  devicesText: string;
  aboutKicker: string;
  aboutTitle: string;
  aboutText: string;
  formulaBase: string;
  formulaText: string;
  defaultSchedule: string;
  defaultText: string;
  grossOnly: string;
  grossText: string;
  whyTitle: string;
  whyText: string[];
  usersTitle: string;
  usersIntro: string;
  userTitles: string[];
  userTexts: string[];
  howTitle: string;
  howIntro: string;
  stepTitles: string[];
  stepTexts: string[];
  formulasTitle: string;
  formulasIntro: string;
  formulaTitles: string[];
  formulaTexts: string[];
  trueRateTitle: string;
  trueRateText: string;
  chartTitle: string;
  chartIntro: string;
  chartHeaders: string[];
  chartNote: string;
  compareTitle: string;
  compareIntro: string;
  compareTitles: string[];
  compareTexts: string[];
  scenariosTitle: string;
  scenarioTitles: string[];
  scenarioTexts: string[];
  globalTitle: string;
  globalIntro: string;
  countryRows: string[];
  globalOutro: string;
  faqTitle: string;
  questions: string[];
  answers: string[];
  relatedTitle: string;
  relatedIntro: string;
  relatedTitles: string[];
  relatedTexts: string[];
  closingTitle: string;
  closingText: string;
  footerTitle: string;
  footerText: string;
}

const makeAutoLocalePack = (pack: AutoLocalePack): HomepageContent => makeGenericPack(pack);

interface BriefPack {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  subheadline: string;
  cta: string;
  chartCta: string;
  supports: string;
  supportItems: string[];
  currencyLine: string;
  trust: string[];
  about: string[];
  whyTitle: string;
  why: string[];
  usersTitle: string;
  usersIntro: string;
  users: string[];
  howTitle: string;
  howIntro: string;
  steps: string[];
  formulasTitle: string;
  formulasIntro: string;
  formulas: string[];
  trueRate: string[];
  chart: string[];
  chartHeaders: string[];
  compare: string[];
  scenariosTitle: string;
  scenarios: string[];
  global: string[];
  countries: string[];
  faqTitle: string;
  faqs: string[];
  related: string[];
  closing: string[];
  footer: string[];
}

function makeBriefPack(pack: BriefPack): HomepageContent {
  return {
    title: pack.title,
    description: pack.description,
    eyebrow: pack.eyebrow,
    h1: pack.h1,
    subheadline: pack.subheadline,
    primaryCta: pack.cta,
    secondaryCta: pack.chartCta,
    supportLabel: pack.supports,
    supportItems: pack.supportItems,
    currencyLine: pack.currencyLine,
    trust: [
      { title: pack.trust[0], text: pack.trust[1] },
      { title: pack.trust[2], text: pack.trust[3] },
      { title: pack.trust[4], text: pack.trust[5] },
      { title: pack.trust[6], text: pack.trust[7] },
      { title: pack.trust[8], text: pack.trust[9] },
    ],
    aboutKicker: pack.about[0],
    aboutTitle: pack.about[1],
    aboutText: pack.about[2],
    aboutFacts: [
      { title: pack.about[3], text: pack.about[4] },
      { title: pack.about[5], text: pack.about[6] },
      { title: pack.about[7], text: pack.about[8] },
    ],
    whyTitle: pack.whyTitle,
    whyText: pack.why,
    usersTitle: pack.usersTitle,
    usersIntro: pack.usersIntro,
    users: pack.users.map(item => ({ title: item.split(':')[0], text: item.split(':').slice(1).join(':').trim() })),
    howTitle: pack.howTitle,
    howIntro: pack.howIntro,
    steps: pack.steps.map(item => ({ title: item.split(':')[0], text: item.split(':').slice(1).join(':').trim() })),
    formulasTitle: pack.formulasTitle,
    formulasIntro: pack.formulasIntro,
    formulas: pack.formulas.map(item => ({ title: item.split(':')[0], text: item.split(':').slice(1).join(':').trim() })),
    trueRateTitle: pack.trueRate[0],
    trueRateText: pack.trueRate[1],
    chartTitle: pack.chart[0],
    chartIntro: pack.chart[1],
    chartHeaders: pack.chartHeaders,
    chartNote: pack.chart[2],
    compareTitle: pack.compare[0],
    compareIntro: pack.compare[1],
    comparison: pack.compare.slice(2).map(item => ({ title: item.split(':')[0], text: item.split(':').slice(1).join(':').trim() })),
    scenariosTitle: pack.scenariosTitle,
    scenarios: pack.scenarios.map(item => ({ title: item.split(':')[0], text: item.split(':').slice(1).join(':').trim() })),
    globalTitle: pack.global[0],
    globalIntro: pack.global[1],
    globalHours: pack.countries.map(item => ({ title: item.split(':')[0], text: item.split(':').slice(1).join(':').trim() })),
    globalOutro: pack.global[2],
    faqTitle: pack.faqTitle,
    faqs: pack.faqs.map(item => ({ question: item.split('|')[0], answer: item.split('|')[1] })),
    relatedTitle: pack.related[0],
    relatedIntro: pack.related[1],
    related: pack.related.slice(2).map(item => ({ title: item.split(':')[0], text: item.split(':').slice(1).join(':').trim() })),
    closingTitle: pack.closing[0],
    closingText: pack.closing[1],
    footerTitle: pack.footer[0],
    footerText: pack.footer[1],
  };
}

const remainingLocalized: Record<string, HomepageContent> = {
  pt: makePack({
    title: 'Calculadora de Salário por Hora | Saiba exatamente quanto ganha por hora',
    description: 'Calculadora gratuita para converter salário anual, mensal, semanal, diário, quinzenal, por minuto e por segundo.',
    eyebrow: 'Ferramenta gratuita de conversão salarial',
    h1: 'Calculadora de Salário por Hora - Saiba exatamente quanto ganha por hora',
    subheadline: 'Pare de adivinhar. Compare propostas, mude de salário para pagamento por hora ou defina uma tarifa freelance e veja o detalhamento completo instantaneamente.',
    primaryCta: 'Usar calculadora grátis',
    secondaryCta: 'Ver tabela de conversão',
    supportLabel: 'Suporta',
    supportItems: ['Por hora', 'Diário', 'Semanal', 'Quinzenal', 'Mensal', 'Anual', 'Por minuto', 'Por segundo'],
    currencyLine: 'Funciona com USD, EUR, GBP, PKR, INR, JPY, AED, CAD, AUD, BRL e mais de 50 moedas.',
    trustTitles: ['100% grátis', 'Resultados em tempo real', '12+ idiomas', 'Nenhum dado armazenado', 'Funciona em todos os dispositivos'],
    trustTexts: ['Sem conta obrigatória', 'Atualiza enquanto você digita', 'Inglês, árabe, urdu, espanhol, francês e mais', 'Todos os cálculos acontecem no navegador', 'Desktop, tablet e celular'],
    aboutKicker: 'Sobre esta ferramenta',
    aboutTitle: 'Sobre esta calculadora',
    aboutText: 'Esta calculadora foi criada para trabalhadores, candidatos, freelancers e profissionais de RH que precisam converter salários com rapidez e clareza.',
    facts: ['Base da fórmula', '52 semanas por ano, 12 meses por ano e horas semanais ajustáveis.', 'Jornada padrão', 'O padrão é 40 horas por semana, mas você pode alterar.', 'Valor bruto', 'Não calcula impostos, seguros ou contribuições de aposentadoria.'],
    whyTitle: 'Por que converter salário em hora realmente importa',
    why: ['Ofertas de trabalho usam períodos diferentes: anual, mensal ou por hora. Sem uma unidade comum, a comparação fica imprecisa.', 'A calculadora resolve isso em segundos.', 'Saber o valor por hora mostra o efeito de semanas longas e ajuda a tomar decisões financeiras melhores.'],
    usersTitle: 'Quem usa esta calculadora todos os dias',
    usersIntro: 'A ferramenta serve para qualquer pessoa que lida com salários:',
    users: ['Candidatos comparam propostas diferentes.', 'Funcionários avaliam mudanças entre salário e hora.', 'Freelancers definem tarifas sustentáveis.', 'RH padroniza comparações de remuneração.', 'Trabalhadores internacionais ajustam padrões semanais.', 'Estudantes entendem a primeira oferta.'],
    howTitle: 'Como usar a calculadora',
    howIntro: 'Preencha o valor conhecido, ajuste horas e moeda e leia o resultado.',
    steps: ['Passo 1 - Digite qualquer valor conhecido: salário anual, mensal, semanal ou por hora.', 'Passo 2 - Ajuste as horas semanais: use 40 ou sua jornada contratada real.', 'Passo 3 - Selecione a moeda: o símbolo muda automaticamente e não há conversão cambial.', 'Passo 4 - Leia o detalhamento: veja dia, semana, quinzena, mês, ano, minuto e segundo.'],
    formulasTitle: 'Fórmulas exatas de salário por hora',
    formulasIntro: 'A matemática ajuda a conferir os resultados.',
    formulas: ['Salário anual para hora: salário anual / 52 / horas semanais.', 'Salário mensal para hora: salário mensal x 12 / 52 / horas semanais.', 'Pagamento semanal para hora: pagamento semanal / horas trabalhadas.', 'Pagamento diário para hora: diária / horas do dia de trabalho.'],
    trueRateTitle: 'Qual é sua taxa horária real?',
    trueRateText: 'Se você trabalha muitas horas extras sem pagamento adicional, sua taxa real é menor que a taxa contratual.',
    chartTitle: 'Tabela comum de salário por hora (40 h/semana)',
    chartIntro: 'Use a tabela para consultar valores frequentes rapidamente.',
    chartHeaders: ['Salário anual', 'Mensal', 'Semanal', 'Valor por hora'],
    chartNote: 'Assume 40 horas por semana e 52 semanas por ano.',
    compareTitle: 'Salário vs pagamento por hora',
    compareIntro: 'A diferença vai além da forma de pagamento.',
    comparison: ['Empregado assalariado: renda previsível e benefícios, mas possível hora extra não paga.', 'Trabalhador por hora: pagamento transparente por tempo trabalhado, mas renda pode variar.', 'Qual é melhor: depende da função, benefícios, horas reais e necessidades financeiras.'],
    scenariosTitle: 'Situações reais em que ajuda',
    scenarios: ['Comparar propostas: transforme tudo em valor por hora.', 'Definir tarifa freelance: inclua impostos e tempo não faturável.', 'Negociar aumento: use uma referência horária precisa.', 'Avaliar horas extras: calcule se o tempo adicional vale a pena.'],
    globalTitle: 'Horas semanais pelo mundo',
    globalIntro: 'A jornada padrão varia por país.',
    globalHours: ['Estados Unidos: 40 horas por semana.', 'Reino Unido: 37,5 horas é comum.', 'União Europeia: muitos contratos ficam entre 35 e 40.', 'França: 35 horas por semana.', 'Alemanha: 38 a 40 horas.', 'Paquistão e Índia: 40 a 48 horas.', 'Austrália e Canadá: 38 a 40 horas.', 'Japão: referência legal de 40 horas.'],
    globalOutro: 'Informe sempre suas horas contratadas reais.',
    faqTitle: 'Perguntas frequentes',
    faqs: ['Como converter salário anual para hora? Divida por 52 e pelas horas semanais.', 'Quanto é 50.000 por ano por hora? Com 40 horas, cerca de 24,04 por hora.', 'A calculadora inclui impostos? Não, mostra valores brutos.', 'Posso usar jornada parcial? Sim, informe suas horas semanais reais.', 'A ferramenta é gratuita? Sim, sem cadastro.'],
    relatedTitle: 'Outras calculadoras úteis',
    relatedIntro: 'Depois da taxa horária, estes cálculos ajudam:',
    related: ['Calculadora de salário líquido: estime o valor após impostos.', 'Calculadora de horas extras: calcule 1,5x ou 2x.', 'Calculadora freelance: inclua impostos e tempo não faturável.', 'Calculadora de orçamento: planeje gastos mensais.', 'Custo de vida: compare cidades.'],
    closingTitle: 'Pronto para saber sua taxa horária real?',
    closingText: 'Volte ao topo, insira seu salário e veja o detalhamento em segundos.',
    footerTitle: 'Sobre esta calculadora',
    footerText: 'Esta ferramenta oferece conversão rápida de salário bruto usando 52 semanas por ano, 12 meses por ano e horas semanais configuráveis.',
  }),
  fr: makeGenericPack({
    title: 'Calculateur Salaire Horaire | Sachez exactement ce que vous gagnez par heure',
    description: 'Calculateur gratuit pour convertir salaire annuel, mensuel, hebdomadaire, quotidien, bihebdomadaire, par minute et par seconde.',
    eyebrow: 'Outil gratuit de conversion salariale',
    h1: 'Calculateur Salaire Horaire - Sachez exactement ce que vous gagnez par heure',
    subheadline: 'Arrêtez de deviner. Comparez des offres, passez du salaire au taux horaire ou fixez un tarif freelance et voyez le détail complet instantanément.',
    cta: 'Utiliser le calculateur',
    chartCta: 'Voir le tableau',
    supports: 'Prend en charge',
    supportItems: ['Horaire', 'Quotidien', 'Hebdomadaire', 'Bihebdomadaire', 'Mensuel', 'Annuel', 'Par minute', 'Par seconde'],
    currencyLine: 'Fonctionne avec USD, EUR, GBP, PKR, INR, JPY, AED, CAD, AUD, BRL et plus de 50 devises.',
    free: '100 % gratuit',
    freeText: 'Aucun compte requis',
    realTime: 'Résultats en temps réel',
    realTimeText: 'Mise à jour pendant la saisie',
    languages: '12+ langues',
    languagesText: 'Français, anglais, espagnol, arabe, ourdou et plus',
    privacy: 'Aucune donnée stockée',
    privacyText: 'Tous les calculs se font dans votre navigateur',
    devices: 'Fonctionne partout',
    devicesText: 'Ordinateur, tablette et mobile',
    aboutKicker: 'À propos de cet outil',
    aboutTitle: 'À propos de ce calculateur',
    aboutText: 'Ce calculateur aide les salariés, candidats, freelances et équipes RH à convertir rapidement une rémunération brute.',
    formulaBase: 'Base de calcul',
    formulaText: '52 semaines par an, 12 mois par an et heures hebdomadaires configurables.',
    defaultSchedule: 'Horaire par défaut',
    defaultText: 'La valeur par défaut est 40 heures par semaine, modifiable selon votre contrat.',
    grossOnly: 'Montants bruts',
    grossText: 'Les impôts, assurances et cotisations ne sont pas déduits.',
    whyTitle: 'Pourquoi convertir un salaire en taux horaire est important',
    whyText: ['Les offres utilisent souvent des périodes différentes : annuel, mensuel ou horaire. Une unité commune rend la comparaison fiable.', 'Le calculateur résout cette comparaison en quelques secondes.', 'Le taux horaire montre aussi l’effet réel des longues semaines sur un salaire fixe.'],
    usersTitle: 'Qui utilise ce calculateur',
    usersIntro: 'Il est utile à toute personne qui traite des salaires :',
    userTitles: ['Candidats', 'Salariés', 'Freelances', 'Équipes RH', 'Travailleurs internationaux', 'Étudiants'],
    userTexts: ['Comparent des offres différentes.', 'Évaluent le passage du salaire au taux horaire.', 'Fixent des tarifs viables.', 'Standardisent les comparaisons.', 'Adaptent les heures selon le pays.', 'Comprennent une première offre.'],
    howTitle: 'Comment utiliser le calculateur',
    howIntro: 'Saisissez le montant connu, ajustez les heures et la devise, puis lisez le résultat.',
    stepTitles: ['Étape 1 - Saisir un montant', 'Étape 2 - Régler les heures', 'Étape 3 - Choisir la devise', 'Étape 4 - Lire le détail'],
    stepTexts: ['Commencez par un salaire annuel, mensuel, hebdomadaire ou horaire.', 'Utilisez 40 heures ou votre horaire contractuel réel.', 'Le symbole de devise change automatiquement sans conversion de change.', 'Consultez les montants par jour, semaine, mois, an, minute et seconde.'],
    formulasTitle: 'Formules exactes de conversion',
    formulasIntro: 'Ces formules permettent de vérifier les résultats.',
    formulaTitles: ['Annuel vers horaire', 'Mensuel vers horaire', 'Hebdomadaire vers horaire', 'Journalier vers horaire'],
    formulaTexts: ['Salaire annuel / 52 / heures hebdomadaires.', 'Salaire mensuel x 12 / 52 / heures hebdomadaires.', 'Paie hebdomadaire / heures travaillées.', 'Tarif journalier / heures de la journée.'],
    trueRateTitle: 'Votre vrai taux horaire',
    trueRateText: 'Si vous travaillez régulièrement plus d’heures sans rémunération supplémentaire, votre taux effectif est plus bas.',
    chartTitle: 'Tableau courant salaire vers horaire',
    chartIntro: 'Utilisez ce tableau pour consulter rapidement des salaires fréquents.',
    chartHeaders: ['Salaire annuel', 'Mensuel', 'Hebdomadaire', 'Taux horaire'],
    chartNote: 'Suppose 40 heures par semaine et 52 semaines par an.',
    compareTitle: 'Salaire fixe vs paiement horaire',
    compareIntro: 'Le choix dépend de la stabilité, des avantages, des heures réelles et des heures supplémentaires.',
    compareTitles: ['Salarié fixe', 'Travailleur horaire', 'Quel choix ?'],
    compareTexts: ['Revenu prévisible et avantages possibles, mais heures supplémentaires parfois non payées.', 'Paiement transparent du temps travaillé, mais revenu plus variable.', 'La meilleure option dépend de votre emploi, de vos besoins et de votre employeur.'],
    scenariosTitle: 'Cas réels où ce calculateur aide',
    scenarioTitles: ['Comparer deux offres', 'Fixer un tarif freelance', 'Négocier une augmentation', 'Évaluer les heures supplémentaires'],
    scenarioTexts: ['Convertissez chaque offre en taux horaire.', 'Ajoutez impôts, avantages et temps non facturable.', 'Utilisez un repère horaire précis.', 'Vérifiez si les heures en plus valent l’effort.'],
    globalTitle: 'Heures de travail hebdomadaires dans le monde',
    globalIntro: 'Les standards varient selon les pays.',
    countryRows: ['États-Unis: 40 heures par semaine.', 'Royaume-Uni: 37,5 heures est fréquent.', 'Union européenne: souvent entre 35 et 40 heures.', 'France: 35 heures par semaine.', 'Allemagne: 38 à 40 heures.', 'Pakistan et Inde: 40 à 48 heures.', 'Australie et Canada: 38 à 40 heures.', 'Japon: référence légale de 40 heures.'],
    globalOutro: 'Saisissez toujours vos heures contractuelles réelles.',
    faqTitle: 'Questions fréquentes',
    questions: ['Comment convertir un salaire annuel en taux horaire ?', 'Combien vaut 50 000 par an à l’heure ?', 'Le calcul inclut-il les impôts ?', 'Puis-je utiliser un horaire atypique ?', 'L’outil est-il gratuit ?'],
    answers: ['Divisez le salaire annuel par 52 puis par les heures hebdomadaires.', 'Avec 40 heures par semaine, environ 24,04 par heure.', 'Non, les résultats sont bruts.', 'Oui, saisissez vos heures réelles.', 'Oui, sans inscription.'],
    relatedTitle: 'Autres calculateurs utiles',
    relatedIntro: 'Après le taux horaire, ces outils peuvent aider :',
    relatedTitles: ['Salaire net', 'Heures supplémentaires', 'Tarif freelance', 'Budget', 'Coût de la vie'],
    relatedTexts: ['Estimez le revenu après retenues.', 'Calculez 1,5x ou 2x.', 'Ajoutez impôts et temps non facturable.', 'Planifiez les dépenses mensuelles.', 'Comparez les villes.'],
    closingTitle: 'Prêt à connaître votre vrai taux horaire ?',
    closingText: 'Remontez, saisissez votre salaire et obtenez le détail complet en quelques secondes.',
    footerTitle: 'À propos de ce calculateur',
    footerText: 'Ce calculateur convertit rapidement une rémunération brute avec 52 semaines par an, 12 mois par an et des heures hebdomadaires configurables.',
  }),
  de: makeGenericPack({
    title: 'Gehalt zu Stundenlohn Rechner | Genau wissen, was Sie pro Stunde verdienen',
    description: 'Kostenloser Rechner für Jahres-, Monats-, Wochen-, Tages-, Zweiwochen-, Minuten- und Sekundenwerte.',
    eyebrow: 'Kostenloses Tool zur Gehaltsumrechnung',
    h1: 'Gehalt zu Stundenlohn Rechner - Genau wissen, was Sie pro Stunde verdienen',
    subheadline: 'Hören Sie auf zu raten. Vergleichen Sie Angebote, wechseln Sie von Gehalt zu Stundenlohn oder berechnen Sie einen Freelance-Satz sofort.',
    cta: 'Rechner nutzen',
    chartCta: 'Tabelle ansehen',
    supports: 'Unterstützt',
    supportItems: ['Stündlich', 'Täglich', 'Wöchentlich', 'Zweiwöchentlich', 'Monatlich', 'Jährlich', 'Pro Minute', 'Pro Sekunde'],
    currencyLine: 'Funktioniert mit USD, EUR, GBP, PKR, INR, JPY, AED, CAD, AUD, BRL und mehr als 50 Währungen.',
    free: '100 % kostenlos',
    freeText: 'Kein Konto erforderlich',
    realTime: 'Echtzeit-Ergebnisse',
    realTimeText: 'Aktualisiert sich beim Tippen',
    languages: '12+ Sprachen',
    languagesText: 'Deutsch, Englisch, Spanisch, Arabisch, Urdu und mehr',
    privacy: 'Keine Datenspeicherung',
    privacyText: 'Alle Berechnungen laufen im Browser',
    devices: 'Überall nutzbar',
    devicesText: 'Desktop, Tablet und Mobilgerät',
    aboutKicker: 'Über dieses Tool',
    aboutTitle: 'Über diesen Rechner',
    aboutText: 'Dieser Rechner hilft Beschäftigten, Bewerbern, Freelancern und HR-Teams, Bruttolöhne schnell zu vergleichen.',
    formulaBase: 'Formelbasis',
    formulaText: '52 Wochen pro Jahr, 12 Monate pro Jahr und anpassbare Wochenstunden.',
    defaultSchedule: 'Standardzeit',
    defaultText: 'Standard sind 40 Stunden pro Woche, anpassbar an Ihren Vertrag.',
    grossOnly: 'Nur brutto',
    grossText: 'Steuern, Versicherungen und Rentenbeiträge werden nicht abgezogen.',
    whyTitle: 'Warum die Umrechnung von Gehalt in Stundenlohn wichtig ist',
    whyText: ['Angebote verwenden verschiedene Zeiträume. Ein gemeinsamer Stundenwert macht sie vergleichbar.', 'Dieser Rechner löst die Umrechnung in Sekunden.', 'Der Stundenwert zeigt auch, wie lange Wochen ein Festgehalt tatsächlich verändern.'],
    usersTitle: 'Wer diesen Rechner nutzt',
    usersIntro: 'Er ist für alle gedacht, die mit Löhnen arbeiten:',
    userTitles: ['Bewerber', 'Beschäftigte', 'Freelancer', 'HR-Teams', 'Internationale Arbeitnehmer', 'Studierende'],
    userTexts: ['Vergleichen unterschiedliche Angebote.', 'Prüfen Gehalt gegen Stundenlohn.', 'Setzen tragfähige Honorare.', 'Standardisieren Vergütungen.', 'Passen Wochenstunden nach Land an.', 'Verstehen erste Jobangebote.'],
    howTitle: 'So verwenden Sie den Rechner',
    howIntro: 'Betrag eingeben, Stunden und Währung anpassen, Ergebnis lesen.',
    stepTitles: ['Schritt 1 - Betrag eingeben', 'Schritt 2 - Wochenstunden setzen', 'Schritt 3 - Währung wählen', 'Schritt 4 - Aufschlüsselung lesen'],
    stepTexts: ['Starten Sie mit Jahres-, Monats-, Wochen- oder Stundenlohn.', 'Nutzen Sie 40 oder Ihre echten Vertragsstunden.', 'Das Symbol ändert sich ohne Wechselkursumrechnung.', 'Sehen Sie Tag, Woche, Monat, Jahr, Minute und Sekunde.'],
    formulasTitle: 'Exakte Formeln',
    formulasIntro: 'Mit diesen Formeln prüfen Sie die Ergebnisse.',
    formulaTitles: ['Jährlich zu stündlich', 'Monatlich zu stündlich', 'Wöchentlich zu stündlich', 'Täglich zu stündlich'],
    formulaTexts: ['Jahresgehalt / 52 / Wochenstunden.', 'Monatsgehalt x 12 / 52 / Wochenstunden.', 'Wochenlohn / gearbeitete Stunden.', 'Tagessatz / Tagesstunden.'],
    trueRateTitle: 'Ihr echter Stundenlohn',
    trueRateText: 'Unbezahlte Mehrarbeit senkt den effektiven Stundenlohn deutlich.',
    chartTitle: 'Häufige Umrechnungstabelle',
    chartIntro: 'Schneller Überblick über übliche Jahresgehälter.',
    chartHeaders: ['Jahresgehalt', 'Monatlich', 'Wöchentlich', 'Stundenlohn'],
    chartNote: 'Angenommen werden 40 Stunden pro Woche und 52 Wochen pro Jahr.',
    compareTitle: 'Gehalt vs. Stundenlohn',
    compareIntro: 'Die Entscheidung hängt von Stabilität, Vorteilen und echten Arbeitsstunden ab.',
    compareTitles: ['Festangestellte', 'Stundenkräfte', 'Welche Wahl?'],
    compareTexts: ['Planbares Einkommen und Vorteile, aber mögliche unbezahlte Mehrarbeit.', 'Transparente Bezahlung pro Stunde, aber schwankendes Einkommen.', 'Die beste Wahl hängt von Rolle, Bedarf und Arbeitgeber ab.'],
    scenariosTitle: 'Praxisfälle',
    scenarioTitles: ['Angebote vergleichen', 'Freelance-Satz setzen', 'Gehalt verhandeln', 'Überstunden bewerten'],
    scenarioTexts: ['Alle Angebote auf Stundenlohn bringen.', 'Steuern und nicht abrechenbare Zeit einplanen.', 'Mit genauem Stundenwert argumentieren.', 'Prüfen, ob Zusatzstunden lohnen.'],
    globalTitle: 'Wochenarbeitszeiten weltweit',
    globalIntro: 'Standards unterscheiden sich nach Land.',
    countryRows: ['USA: 40 Stunden pro Woche.', 'Vereinigtes Königreich: 37,5 Stunden häufig.', 'Europäische Union: oft 35 bis 40 Stunden.', 'Frankreich: 35 Stunden pro Woche.', 'Deutschland: 38 bis 40 Stunden.', 'Pakistan und Indien: 40 bis 48 Stunden.', 'Australien und Kanada: 38 bis 40 Stunden.', 'Japan: 40 Stunden als Referenz.'],
    globalOutro: 'Geben Sie immer Ihre echten Vertragsstunden ein.',
    faqTitle: 'Häufige Fragen',
    questions: ['Wie rechne ich Jahresgehalt in Stundenlohn um?', 'Was sind 50.000 pro Jahr pro Stunde?', 'Sind Steuern enthalten?', 'Kann ich Teilzeit nutzen?', 'Ist das Tool kostenlos?'],
    answers: ['Teilen Sie durch 52 und dann durch Wochenstunden.', 'Bei 40 Stunden etwa 24,04 pro Stunde.', 'Nein, die Werte sind brutto.', 'Ja, geben Sie Ihre echten Wochenstunden ein.', 'Ja, ohne Anmeldung.'],
    relatedTitle: 'Weitere nützliche Rechner',
    relatedIntro: 'Nach dem Stundenlohn helfen diese Tools:',
    relatedTitles: ['Netto-Rechner', 'Überstunden', 'Freelance-Honorar', 'Budget', 'Lebenshaltungskosten'],
    relatedTexts: ['Einkommen nach Abzügen schätzen.', '1,5x oder 2x berechnen.', 'Steuern und Leerlauf einplanen.', 'Monatsausgaben planen.', 'Städte vergleichen.'],
    closingTitle: 'Bereit für Ihren echten Stundenlohn?',
    closingText: 'Geben Sie oben Ihr Gehalt ein und erhalten Sie die Aufschlüsselung in Sekunden.',
    footerTitle: 'Über diesen Rechner',
    footerText: 'Dieser Rechner nutzt Bruttowerte, 52 Wochen pro Jahr, 12 Monate pro Jahr und frei einstellbare Wochenstunden.',
  }),
  ja: makeGenericPack({
    title: '年収から時給への計算機 | 1時間あたりの収入を正確に知る',
    description: '無料の年収・月収・週給・日給・隔週給・分給・秒給変換計算機。',
    eyebrow: '無料の給与変換ツール',
    h1: '年収から時給への計算機 - 1時間あたりの収入を正確に知る',
    subheadline: '推測をやめましょう。求人を比較し、年収から時給に切り替え、またはフリーランスの料金を設定し、完全な内訳を即座に確認できます。',
    cta: '計算機を使用',
    chartCta: '変換表を見る',
    supports: '対応',
    supportItems: ['時給', '日給', '週給', '隔週給', '月給', '年収', '分給', '秒給'],
    currencyLine: 'USD、EUR、GBP、PKR、INR、JPY、AED、CAD、AUD、BRLなど50以上の通貨で動作します。',
    free: '100%無料',
    freeText: 'アカウント不要',
    realTime: 'リアルタイム結果',
    realTimeText: '入力中に更新',
    languages: '12以上の言語',
    languagesText: '日本語、英語、スペイン語、アラビア語、ウルドゥー語など',
    privacy: 'データ保存なし',
    privacyText: 'すべての計算はブラウザで行われます',
    devices: 'どこでも動作',
    devicesText: 'デスクトップ、タブレット、モバイル',
    aboutKicker: 'このツールについて',
    aboutTitle: 'この計算機について',
    aboutText: 'この計算機は、従業員、求職者、フリーランサー、HRチームが総給与を迅速に比較するのに役立ちます。',
    formulaBase: '計算の基礎',
    formulaText: '年52週、年12ヶ月、調整可能な週労働時間。',
    defaultSchedule: '標準時間',
    defaultText: 'デフォルトは週40時間ですが、契約に合わせて調整可能。',
    grossOnly: '総額のみ',
    grossText: '税金、保険、年金控除は差し引かれません。',
    whyTitle: '年収を時給に変換することが重要な理由',
    whyText: ['求人は異なる期間を使用することがよくあります。共通の時給単位により比較が可能になります。', 'この計算機は数秒で変換を解決します。', '時給は、長時間労働が固定給に与える実際の影響も示します。'],
    usersTitle: 'この計算機を使用する人',
    usersIntro: '給与を扱うすべての人に役立ちます：',
    userTitles: ['求職者', '従業員', 'フリーランサー', 'HRチーム', '海外労働者', '学生'],
    userTexts: ['異なる求人を比較する。', '給与と時給の切り替えを評価する。', '持続可能な料金を設定する。', '報酬の比較を標準化する。', '国に応じて週労働時間を調整する。', '最初の求人を理解する。'],
    howTitle: '計算機の使い方',
    howIntro: '金額を入力し、時間と通貨を調整して、結果を読みます。',
    stepTitles: ['ステップ1 - 金額を入力', 'ステップ2 - 週労働時間を設定', 'ステップ3 - 通貨を選択', 'ステップ4 - 内訳を読む'],
    stepTexts: ['年収、月収、週給、または時給から開始します。', '40時間または実際の契約労働時間を使用します。', '為替換算なしで記号が自動的に変更されます。', '日、週、月、年、分、秒の金額を確認します。'],
    formulasTitle: '正確な変換式',
    formulasIntro: 'これらの式で結果を確認できます。',
    formulaTitles: ['年収から時給へ', '月収から時給へ', '週給から時給へ', '日給から時給へ'],
    formulaTexts: ['年収 / 52 / 週労働時間。', '月収 x 12 / 52 / 週労働時間。', '週給 / 労働時間。', '日給 / 1日の労働時間。'],
    trueRateTitle: '実際の時給',
    trueRateText: '無給の残業が定期的にある場合、実質的な時給は契約時給より低くなります。',
    chartTitle: '一般的な変換表',
    chartIntro: '一般的な年収をすばやく確認するための表。',
    chartHeaders: ['年収', '月収', '週給', '時給'],
    chartNote: '週40時間、年52週と仮定します。',
    compareTitle: '給与と時給',
    compareIntro: '決定は安定性、福利厚生、実際の労働時間に依存します。',
    compareTitles: ['正社員', '時給制', 'どちらが良い？'],
    compareTexts: ['予測可能な収入と福利厚生、ただし無給残業の可能性あり。', '労働時間ごとの透明な支払い、ただし収入は変動する可能性あり。', '最良の選択は役割、ニーズ、雇用主によって異なります。'],
    scenariosTitle: '実際の使用例',
    scenarioTitles: ['求人の比較', 'フリーランス料金の設定', '給与交渉', '残業の評価'],
    scenarioTexts: ['すべての求人を時給に変換する。', '税金と請求可能でない時間を計画する。', '正確な時給基準を使用して議論する。', '追加時間が価値があるか確認する。'],
    globalTitle: '世界の週労働時間',
    globalIntro: '標準は国によって異なります。',
    countryRows: ['米国: 週40時間。', '英国: 37.5時間が一般的。', '欧州連合: 多くが35〜40時間。', 'フランス: 週35時間。', 'ドイツ: 38〜40時間。', 'パキスタンとインド: 40〜48時間。', 'オーストラリアとカナダ: 38〜40時間。', '日本: 40時間が基準。'],
    globalOutro: '常に実際の契約労働時間を入力してください。',
    faqTitle: 'よくある質問',
    questions: ['年収を時給に変換するには？', '年収5万は時給いくら？', '税金は含まれていますか？', 'パートタイムを使用できますか？', 'ツールは無料ですか？'],
    answers: ['52で割り、次に週労働時間で割ります。', '週40時間で約24.04。', 'いいえ、値は総額です。', 'はい、実際の週労働時間を入力します。', 'はい、登録なし。'],
    relatedTitle: 'その他の便利な計算機',
    relatedIntro: '時給を知った後、これらのツールが役立ちます：',
    relatedTitles: ['手取り計算機', '残業', 'フリーランス報酬', '予算', '生活費'],
    relatedTexts: ['控除後の収入を推定する。', '1.5倍または2倍を計算する。', '税金とアイドル時間を計画する。', '月々の出費を計画する。', '都市を比較する。'],
    closingTitle: '実際の時給を知る準備はできましたか？',
    closingText: '上に給与を入力し、数秒で内訳を取得してください。',
    footerTitle: 'この計算機について',
    footerText: 'この計算機は総額を使用し、年52週、年12ヶ月、自由に調整可能な週労働時間を使用します。',
  }),
  zh: makeGenericPack({
    title: '年薪转时薪计算器 | 准确了解您每小时赚多少',
    description: '免费计算器，用于转换年薪、月薪、周薪、日薪、双周薪、分钟薪和秒薪。',
    eyebrow: '免费薪资转换工具',
    h1: '年薪转时薪计算器 - 准确了解您每小时赚多少',
    subheadline: '停止猜测。比较工作机会，从薪资转为时薪，或设定自由职业费率，并立即查看完整的细分。',
    cta: '使用计算器',
    chartCta: '查看转换表',
    supports: '支持',
    supportItems: ['时薪', '日薪', '周薪', '双周薪', '月薪', '年薪', '每分钟', '每秒'],
    currencyLine: '支持美元、欧元、英镑、巴基斯坦卢比、印度卢比、日元、阿联酋迪拉姆、加元、澳元、巴西雷亚尔等50多种货币。',
    free: '100%免费',
    freeText: '无需账户',
    realTime: '实时结果',
    realTimeText: '输入时更新',
    languages: '12+种语言',
    languagesText: '简体中文、英语、西班牙语、阿拉伯语、乌尔都语等',
    privacy: '无数据存储',
    privacyText: '所有计算都在浏览器中进行',
    devices: '随处可用',
    devicesText: '桌面、平板和手机',
    aboutKicker: '关于此工具',
    aboutTitle: '关于此计算器',
    aboutText: '此计算器帮助员工、求职者、自由职业者和人力资源团队快速比较总薪酬。',
    formulaBase: '计算基础',
    formulaText: '每年52周，每年12个月，可调整的每周工作时间。',
    defaultSchedule: '标准时间',
    defaultText: '默认为每周40小时，可根据合同调整。',
    grossOnly: '仅税前',
    grossText: '不扣除税款、保险或退休金。',
    whyTitle: '将年薪转换为时薪为何重要',
    whyText: ['工作机会经常使用不同的时间段。共同的小时单位使它们具有可比性。', '此计算器在几秒钟内解决转换问题。', '时薪还显示了长时间工作对固定薪资的实际影响。'],
    usersTitle: '谁使用此计算器',
    usersIntro: '对任何处理薪资的人都有用：',
    userTitles: ['求职者', '员工', '自由职业者', '人力资源团队', '国际工作者', '学生'],
    userTexts: ['比较不同的工作机会。', '评估从薪资转为时薪。', '设定可持续的费率。', '标准化薪酬比较。', '根据国家调整每周工作时间。', '理解第一个工作机会。'],
    howTitle: '如何使用计算器',
    howIntro: '输入金额，调整时间和货币，然后阅读结果。',
    stepTitles: ['步骤1 - 输入金额', '步骤2 - 设置每周工作时间', '步骤3 - 选择货币', '步骤4 - 阅读细分'],
    stepTexts: ['从年薪、月薪、周薪或时薪开始。', '使用40小时或您的实际合同工作时间。', '符号自动更改，无需汇率转换。', '查看日、周、月、年、分钟和秒的金额。'],
    formulasTitle: '精确的转换公式',
    formulasIntro: '使用这些公式验证结果。',
    formulaTitles: ['年薪转时薪', '月薪转时薪', '周薪转时薪', '日薪转时薪'],
    formulaTexts: ['年薪 / 52 / 每周工作时间。', '月薪 x 12 / 52 / 每周工作时间。', '周薪 / 工作时间。', '日薪 / 每日工作时间。'],
    trueRateTitle: '您的实际时薪',
    trueRateText: '如果您定期无薪加班，实际时薪将低于合同时薪。',
    chartTitle: '常见转换表',
    chartIntro: '快速查看常见年薪的表格。',
    chartHeaders: ['年薪', '月薪', '周薪', '时薪'],
    chartNote: '假设每周40小时，每年52周。',
    compareTitle: '薪资与时薪',
    compareIntro: '决定取决于稳定性、福利和实际工作时间。',
    compareTitles: ['固定薪资员工', '时薪员工', '哪个选择？'],
    compareTexts: ['可预测的收入和福利，但可能有无薪加班。', '工作时间透明支付，但收入可能波动。', '最佳选择取决于您的职位、需求和雇主。'],
    scenariosTitle: '实际用例',
    scenarioTitles: ['比较工作机会', '设定自由职业费率', '薪资谈判', '评估加班'],
    scenarioTexts: ['将所有工作机会转换为时薪。', '计划税款和不可计费时间。', '使用精确的小时费率基准进行谈判。', '检查额外时间是否值得。'],
    globalTitle: '全球每周工作时间',
    globalIntro: '标准因国家而异。',
    countryRows: ['美国: 每周40小时。', '英国: 37.5小时很常见。', '欧盟: 通常35-40小时。', '法国: 每周35小时。', '德国: 38-40小时。', '巴基斯坦和印度: 40-48小时。', '澳大利亚和加拿大: 38-40小时。', '日本: 40小时为基准。'],
    globalOutro: '始终输入您的实际合同工作时间。',
    faqTitle: '常见问题',
    questions: ['如何将年薪转换为时薪？', '年薪5万每小时多少？', '包含税款吗？', '可以使用非标准时间吗？', '工具免费吗？'],
    answers: ['除以52，然后除以每周工作时间。', '每周40小时约24.04。', '不，值为税前。', '是，输入您的实际每周工作时间。', '是，无需注册。'],
    relatedTitle: '其他有用的计算器',
    relatedIntro: '了解时薪后，这些工具有所帮助：',
    relatedTitles: ['净薪计算器', '加班', '自由职业报酬', '预算', '生活成本'],
    relatedTexts: ['估算扣除后的收入。', '计算1.5倍或2倍。', '计划税款和空闲时间。', '计划每月支出。', '比较城市。'],
    closingTitle: '准备好了解您的实际时薪了吗？',
    closingText: '在上方输入您的薪资，并在几秒钟内获取细分。',
    footerTitle: '关于此计算器',
    footerText: '此计算器使用税前金额，每年52周，每年12个月，可自由调整的每周工作时间。',
  }),
  id: makeGenericPack({
    title: 'Kalkulator Gaji ke Upah Per Jam | Ketahui Persis Berapa yang Anda Hasilkan Per Jam',
    description: 'Kalkulator gratis untuk mengonversi gaji tahunan, bulanan, mingguan, harian, dwimingguan, per menit, dan per detik.',
    eyebrow: 'Alat konversi gaji gratis',
    h1: 'Kalkulator Gaji ke Upah Per Jam - Ketahui Persis Berapa yang Anda Hasilkan Per Jam',
    subheadline: 'Berhenti menebak. Bandingkan penawaran kerja, ubah dari gaji ke upah per jam, atau tetapkan tarif freelance dan lihat rincian lengkap secara instan.',
    cta: 'Gunakan kalkulator',
    chartCta: 'Lihat tabel konversi',
    supports: 'Mendukung',
    supportItems: ['Per jam', 'Harian', 'Mingguan', 'Dwimingguan', 'Bulanan', 'Tahunan', 'Per menit', 'Per detik'],
    currencyLine: 'Bekerja dengan USD, EUR, GBP, PKR, INR, JPY, AED, CAD, AUD, BRL, dan lebih dari 50 mata uang lainnya.',
    free: '100% gratis',
    freeText: 'Tidak perlu akun',
    realTime: 'Hasil real-time',
    realTimeText: 'Diperbarui saat mengetik',
    languages: '12+ bahasa',
    languagesText: 'Bahasa Indonesia, Inggris, Spanyol, Arab, Urdu, dan lainnya',
    privacy: 'Tidak ada data yang disimpan',
    privacyText: 'Semua perhitungan terjadi di browser Anda',
    devices: 'Bekerja di mana saja',
    devicesText: 'Desktop, tablet, dan ponsel',
    aboutKicker: 'Tentang alat ini',
    aboutTitle: 'Tentang kalkulator ini',
    aboutText: 'Kalkulator ini membantu karyawan, kandidat, freelancer, dan tim HR membandingkan kompensasi kotor dengan cepat.',
    formulaBase: 'Dasar rumus',
    formulaText: '52 minggu per tahun, 12 bulan per tahun, dan jam mingguan yang dapat disesuaikan.',
    defaultSchedule: 'Jadwal default',
    defaultText: 'Default adalah 40 jam per minggu, dapat disesuaikan dengan kontrak Anda.',
    grossOnly: 'Hanya kotor',
    grossText: 'Pajak, asuransi, dan kontribusi pensiun tidak dipotong.',
    whyTitle: 'Mengapa mengonversi gaji ke upah per jam itu penting',
    whyText: ['Penawaran kerja sering menggunakan periode yang berbeda. Unit jam bersama membuatnya dapat dibandingkan.', 'Kalkulator ini menyelesaikan konversi dalam hitungan detik.', 'Upah per jam juga menunjukkan dampak nyata dari jam kerja panjang pada gaji tetap.'],
    usersTitle: 'Siapa yang menggunakan kalkulator ini',
    usersIntro: 'Berguna bagi siapa pun yang bekerja dengan gaji:',
    userTitles: ['Kandidat', 'Karyawan', 'Freelancer', 'Tim HR', 'Pekerja internasional', 'Siswa'],
    userTexts: ['Bandingkan penawaran yang berbeda.', 'Evaluasi perubahan dari gaji ke upah per jam.', 'Tetapkan tarif yang berkelanjutan.', 'Standarkan perbandingan kompensasi.', 'Sesuaikan jam mingguan menurut negara.', 'Pahami penawaran kerja pertama.'],
    howTitle: 'Cara menggunakan kalkulator',
    howIntro: 'Masukkan jumlah, sesuaikan jam dan mata uang, lalu baca hasilnya.',
    stepTitles: ['Langkah 1 - Masukkan jumlah', 'Langkah 2 - Atur jam mingguan', 'Langkah 3 - Pilih mata uang', 'Langkah 4 - Baca rincian'],
    stepTexts: ['Mulai dengan gaji tahunan, bulanan, mingguan, atau per jam.', 'Gunakan 40 jam atau jam kerja kontrak Anda yang sebenarnya.', 'Simbol berubah secara otomatis tanpa konversi mata uang.', 'Lihat jumlah per hari, minggu, bulan, tahun, menit, dan detik.'],
    formulasTitle: 'Rumus konversi yang tepat',
    formulasIntro: 'Gunakan rumus ini untuk memverifikasi hasil.',
    formulaTitles: ['Tahunan ke per jam', 'Bulanan ke per jam', 'Mingguan ke per jam', 'Harian ke per jam'],
    formulaTexts: ['Gaji tahunan / 52 / jam mingguan.', 'Gaji bulanan x 12 / 52 / jam mingguan.', 'Gaji mingguan / jam kerja.', 'Tarif harian / jam kerja hari.'],
    trueRateTitle: 'Upah per jam Anda yang sebenarnya',
    trueRateText: 'Jika Anda secara teratur bekerja lebih banyak jam tanpa kompensasi tambahan, tarif efektif Anda lebih rendah.',
    chartTitle: 'Tabel konversi umum',
    chartIntro: 'Tinjau cepat gaji tahunan yang umum.',
    chartHeaders: ['Gaji tahunan', 'Bulanan', 'Mingguan', 'Upah per jam'],
    chartNote: 'Asumsikan 40 jam per minggu dan 52 minggu per tahun.',
    compareTitle: 'Gaji vs upah per jam',
    compareIntro: 'Keputusan bergantung pada stabilitas, manfaat, dan jam kerja nyata.',
    compareTitles: ['Karyawan bergaji tetap', 'Pekerja per jam', 'Pilihan mana?'],
    compareTexts: ['Pendapatan yang dapat diprediksi dan manfaat, tetapi kemungkinan lembur tanpa bayaran.', 'Pembayaran transparan per jam kerja, tetapi pendapatan mungkin bervariasi.', 'Pilihan terbaik bergantung pada peran, kebutuhan, dan majikan Anda.'],
    scenariosTitle: 'Kasus penggunaan nyata',
    scenarioTitles: ['Bandingkan penawaran', 'Tetapkan tarif freelance', 'Negosiasi gaji', 'Evaluasi lembur'],
    scenarioTexts: ['Ubah semua penawaran menjadi upah per jam.', 'Rencanakan pajak dan waktu yang tidak dapat ditagih.', 'Bernegosiasi dengan dasar jam yang tepat.', 'Periksa apakah waktu tambahan sepadan.'],
    globalTitle: 'Jam kerja mingguan di seluruh dunia',
    globalIntro: 'Standar bervariasi menurut negara.',
    countryRows: ['AS: 40 jam per minggu.', 'Inggris: 37,5 jam umum.', 'Uni Eropa: sering 35-40 jam.', 'Prancis: 35 jam per minggu.', 'Jerman: 38-40 jam.', 'Pakistan dan India: 40-48 jam.', 'Australia dan Kanada: 38-40 jam.', 'Jepang: 40 jam sebagai referensi.'],
    globalOutro: 'Selalu masukkan jam kerja kontrak Anda yang sebenarnya.',
    faqTitle: 'Pertanyaan umum',
    questions: ['Bagaimana mengonversi gaji tahunan ke upah per jam?', 'Berapa 50.000 per tahun per jam?', 'Apakah pajak termasuk?', 'Bisakah saya menggunakan waktu paruh?', 'Apakah alat ini gratis?'],
    answers: ['Bagi dengan 52, lalu dengan jam mingguan.', 'Dengan 40 jam per minggu, sekitar 24,04 per jam.', 'Tidak, nilainya kotor.', 'Ya, masukkan jam mingguan Anda yang sebenarnya.', 'Ya, tanpa pendaftaran.'],
    relatedTitle: 'Kalkulator lain yang berguna',
    relatedIntro: 'Setelah mengetahui upah per jam, alat ini membantu:',
    relatedTitles: ['Kalkulator bersih', 'Lembur', 'Honorarium freelance', 'Anggaran', 'Biaya hidup'],
    relatedTexts: ['Perkirakan pendapatan setelah potongan.', 'Hitung 1,5x atau 2x.', 'Rencanakan pajak dan waktu idle.', 'Rencanakan pengeluaran bulanan.', 'Bandingkan kota.'],
    closingTitle: 'Siap untuk mengetahui upah per jam Anda yang sebenarnya?',
    closingText: 'Masukkan gaji Anda di atas dan dapatkan rinciannya dalam hitungan detik.',
    footerTitle: 'Tentang kalkulator ini',
    footerText: 'Kalkulator ini menggunakan nilai kotor, 52 minggu per tahun, 12 bulan per tahun, dan jam mingguan yang dapat disesuaikan dengan bebas.',
  }),
  tr: makeGenericPack({
    title: 'Maaştan Saatlik Ücrete Hesaplayıcı | Saat Başına Ne Kazandığınızı Tam Olarak Bilin',
    description: 'Yıllık, aylık, haftalık, günlük, iki haftalık, dakikalık ve saniyelik değerler için ücretsiz hesaplayıcı.',
    eyebrow: 'Ücretsiz maaş dönüştürme aracı',
    h1: 'Maaştan Saatlik Ücrete Hesaplayıcı - Saat Başına Ne Kazandığınızı Tam Olarak Bilin',
    subheadline: 'Tahmin etmeyi bırakın. İş tekliflerini karşılaştırın, maaştan saatlik ücrete geçin veya bir freelancer tarifesini belirleyin ve tam ayrıntıyı anında görün.',
    cta: 'Hesaplayıcıyı kullan',
    chartCta: 'Dönüştürme tablosunu gör',
    supports: 'Destekler',
    supportItems: ['Saatlik', 'Günlük', 'Haftalık', 'İki haftalık', 'Aylık', 'Yıllık', 'Dakika başına', 'Saniye başına'],
    currencyLine: 'USD, EUR, GBP, PKR, INR, JPY, AED, CAD, AUD, BRL ve 50+ daha fazla para birimi ile çalışır.',
    free: '%100 ücretsiz',
    freeText: 'Hesap gerekli değil',
    realTime: 'Gerçek zamanlı sonuçlar',
    realTimeText: 'Yazarken güncellenir',
    languages: '12+ dil',
    languagesText: 'Türkçe, İngilizce, İspanyolca, Arapça, Urduca ve daha fazlası',
    privacy: 'Veri depolama yok',
    privacyText: 'Tüm hesaplamalar tarayıcınızda gerçekleşir',
    devices: 'Her yerde çalışır',
    devicesText: 'Masaüstü, tablet ve mobil',
    aboutKicker: 'Bu araç hakkında',
    aboutTitle: 'Bu hesaplayıcı hakkında',
    aboutText: 'Bu hesaplayıcı, çalışanların, adayların, freelancerların ve HR ekiplerinin brüt maaşları hızlı bir şekilde karşılaştırmasına yardımcı olur.',
    formulaBase: 'Formül temeli',
    formulaText: 'Yılda 52 hafta, yılda 12 ay ve ayarlanabilir haftalık saatler.',
    defaultSchedule: 'Standart zaman',
    defaultText: 'Varsayılan haftada 40 saattir, sözleşmenize göre ayarlanabilir.',
    grossOnly: 'Sadece brüt',
    grossText: 'Vergiler, sigortalar ve emekli kesintileri düşülmez.',
    whyTitle: 'Maaşı saatlik ücrete dönüştürmek neden önemli',
    whyText: ['İş teklifleri genellikle farklı dönemler kullanır. Ortak bir saatlik birim karşılaştırmayı mümkün kılar.', 'Bu hesaplayıcı dönüştürmeyi saniyeler içinde çözer.', 'Saatlik ücret, uzun haftaların sabit bir maaşa gerçek etkisini de gösterir.'],
    usersTitle: 'Bu hesaplayıcıyı kim kullanır',
    usersIntro: 'Maaşlarla çalışan herkes için yararlıdır:',
    userTitles: ['Adaylar', 'Çalışanlar', 'Freelancerlar', 'HR ekipleri', 'Uluslararası çalışanlar', 'Öğrenciler'],
    userTexts: ['Farklı teklifleri karşılaştırır.', 'Maaştan saatlik ücrete geçişi değerlendirir.', 'Sürdürülebilir ücretler belirler.', 'Ücret karşılaştırmalarını standartlaştırır.', 'Ülkeye göre haftalık saatleri ayarlar.', 'İlk iş teklifini anlar.'],
    howTitle: 'Hesaplayıcı nasıl kullanılır',
    howIntro: 'Tutarı girin, saatleri ve para birimini ayarlayın, ardından sonucu okuyun.',
    stepTitles: ['Adım 1 - Tutar girin', 'Adım 2 - Haftalık saatleri ayarlayın', 'Adım 3 - Para birimi seçin', 'Adım 4 - Ayrıntıyı okuyun'],
    stepTexts: ['Yıllık, aylık, haftalık veya saatlik maaşla başlayın.', '40 saat veya gerçek sözleşme saatlerinizi kullanın.', 'Sembol kur dönüşümü olmadan otomatik olarak değişir.', 'Gün, hafta, ay, yıl, dakika ve saniye tutarlarını görün.'],
    formulasTitle: 'Kesin dönüşüm formülleri',
    formulasIntro: 'Sonuçları doğrulamak için bu formülleri kullanın.',
    formulaTitles: ['Yıllıktan saatliğe', 'Aylıktan saatliğe', 'Haftalıktan saatliğe', 'Günlükten saatliğe'],
    formulaTexts: ['Yıllık maaş / 52 / haftalık saatler.', 'Aylık maaş x 12 / 52 / haftalık saatler.', 'Haftalık ücret / çalışılan saatler.', 'Günlük ücret / günlük saatler.'],
    trueRateTitle: 'Gerçek saatlik ücretiniz',
    trueRateText: 'Düzenli olarak ek ücret almadan fazla çalışırsanız, efektif oranınız sözleşme oranından daha düşüktür.',
    chartTitle: 'Yaygın dönüşüm tablosu',
    chartIntro: 'Yaygın yıllık maaşları hızlıca inceleyin.',
    chartHeaders: ['Yıllık maaş', 'Aylık', 'Haftalık', 'Saatlik ücret'],
    chartNote: 'Haftada 40 saat ve yılda 52 hafta varsayılır.',
    compareTitle: 'Maaş vs saatlik ücret',
    compareIntro: 'Karar istikrar, avantajlar ve gerçek çalışma saatlerine bağlıdır.',
    compareTitles: ['Sabit maaşlı çalışan', 'Saatlik çalışan', 'Hangi seçenek?'],
    compareTexts: ['Öngörülebilir gelir ve avantajlar, ancak muhtemelen ücretsiz fazla mesai.', 'Çalışılan saat için şeffaf ödeme, ancak gelir dalgalanabilir.', 'En iyi seçenek rolünüze, ihtiyaçlarınıza ve işvereninize bağlıdır.'],
    scenariosTitle: 'Gerçek kullanım durumları',
    scenarioTitles: ['Teklifleri karşılaştır', 'Freelancer ücreti belirle', 'Maaş müzakere et', 'Fazla mesaiyi değerlendir'],
    scenarioTexts: ['Tüm teklifleri saatlik ücrete dönüştürün.', 'Vergileri ve faturalandırılamayan zamanı planlayın.', 'Kesin bir saatlik referansla tartışın.', 'Ek sürenin değerli olup olmadığını kontrol edin.'],
    globalTitle: 'Dünyada haftalık çalışma saatleri',
    globalIntro: 'Standartlar ülkeye göre değişir.',
    countryRows: ['ABD: Haftada 40 saat.', 'İngiltere: 37,5 saat yaygın.', 'Avrupa Birliği: Genellikle 35-40 saat.', 'Fransa: Haftada 35 saat.', 'Almanya: 38-40 saat.', 'Pakistan ve Hindistan: 40-48 saat.', 'Avustralya ve Kanada: 38-40 saat.', 'Japonya: 40 saat referans.'],
    globalOutro: 'Her zaman gerçek sözleşme saatlerinizi girin.',
    faqTitle: 'Sık sorulan sorular',
    questions: ['Yıllık maaşı saatlik ücrete nasıl dönüştürürüm?', 'Yılda 50.000 saat başına ne kadar?', 'Vergiler dahil mi?', 'Yarı zamanlı kullanabilir miyim?', 'Araç ücretsiz mi?'],
    answers: ['52 ile bölün, ardından haftalık saatlerle bölün.', 'Haftada 40 saat ile yaklaşık 24,04.', 'Hayır, değerler brüt.', 'Evet, gerçek haftalık saatlerinizi girin.', 'Evet, kayıt olmadan.'],
    relatedTitle: 'Diğer yararlı hesaplayıcılar',
    relatedIntro: 'Saatlik ücreti bildikten sonra, bu araçlar yardımcı olur:',
    relatedTitles: ['Net hesaplayıcı', 'Fazla mesai', 'Freelancer ücreti', 'Bütçe', 'Yaşam maliyeti'],
    relatedTexts: ['Kesintiler sonrası geliri tahmin edin.', '1,5x veya 2x hesaplayın.', 'Vergileri ve boş zamanı planlayın.', 'Aylık harcamaları planlayın.', 'Şehirleri karşılaştırın.'],
    closingTitle: 'Gerçek saatlik ücretinizi bilmeye hazır mısınız?',
    closingText: 'Yukarıya maaşınızı girin ve saniyeler içinde ayrıntıyı alın.',
    footerTitle: 'Bu hesaplayıcı hakkında',
    footerText: 'Bu hesaplayıcı brüt değerleri kullanır, yılda 52 hafta, yılda 12 ay ve serbestçe ayarlanabilir haftalık saatler.',
  }),
  ru: makeAutoLocalePack({
    title: 'Калькулятор зарплаты в почасовую ставку | Узнайте точный доход за час',
    description: 'Бесплатный калькулятор для перевода годовой, месячной, недельной, дневной, двухнедельной, поминутной и посекундной оплаты.',
    eyebrow: 'Бесплатный инструмент конвертации зарплаты',
    h1: 'Калькулятор зарплаты в почасовую ставку - Узнайте точный доход за час',
    subheadline: 'Больше не гадайте. Сравнивайте предложения, переводите оклад в почасовую ставку или задавайте фриланс-тариф и сразу смотрите полный расчет.',
    cta: 'Использовать калькулятор',
    chartCta: 'Посмотреть таблицу',
    supports: 'Поддерживает',
    supportItems: ['Почасово', 'В день', 'В неделю', 'Раз в две недели', 'В месяц', 'В год', 'В минуту', 'В секунду'],
    currencyLine: 'Работает с USD, EUR, GBP, PKR, INR, JPY, AED, CAD, AUD, BRL и более чем 50 валютами.',
    free: '100% бесплатно',
    freeText: 'Аккаунт не требуется',
    realTime: 'Результаты сразу',
    realTimeText: 'Обновляется при вводе',
    languages: '12+ языков',
    languagesText: 'Русский, английский, испанский, арабский, урду и другие',
    privacy: 'Данные не сохраняются',
    privacyText: 'Все расчеты выполняются в браузере',
    devices: 'Работает везде',
    devicesText: 'Компьютер, планшет и телефон',
    aboutKicker: 'Об инструменте',
    aboutTitle: 'О калькуляторе',
    aboutText: 'Калькулятор помогает сотрудникам, соискателям, фрилансерам и HR-командам быстро сравнивать валовую оплату.',
    formulaBase: 'Основа формулы',
    formulaText: '52 недели в году, 12 месяцев в году и настраиваемые часы в неделю.',
    defaultSchedule: 'График по умолчанию',
    defaultText: 'По умолчанию используется 40 часов в неделю, но значение можно изменить под ваш договор.',
    grossOnly: 'Только брутто',
    grossText: 'Налоги, страховки и пенсионные взносы не вычитаются.',
    whyTitle: 'Почему важно переводить зарплату в почасовую ставку',
    whyText: ['Предложения о работе часто используют разные периоды оплаты. Общая почасовая единица делает сравнение честным.', 'Этот калькулятор выполняет пересчет за секунды.', 'Почасовая ставка показывает, как длинные рабочие недели меняют реальную ценность фиксированного оклада.'],
    usersTitle: 'Кто пользуется этим калькулятором',
    usersIntro: 'Он полезен всем, кто работает с оплатой труда:',
    userTitles: ['Соискатели', 'Сотрудники', 'Фрилансеры', 'HR-команды', 'Международные работники', 'Студенты'],
    userTexts: ['Сравнивают разные предложения.', 'Оценивают переход с оклада на почасовую оплату.', 'Назначают устойчивые ставки.', 'Стандартизируют сравнение компенсаций.', 'Учитывают нормы часов по странам.', 'Понимают первое предложение о работе.'],
    howTitle: 'Как пользоваться калькулятором',
    howIntro: 'Введите сумму, настройте часы и валюту, затем прочитайте результат.',
    stepTitles: ['Шаг 1 - Введите сумму', 'Шаг 2 - Укажите часы в неделю', 'Шаг 3 - Выберите валюту', 'Шаг 4 - Посмотрите расчет'],
    stepTexts: ['Начните с годовой, месячной, недельной или почасовой оплаты.', 'Используйте 40 часов или реальные часы по договору.', 'Символ валюты меняется автоматически без обменного курса.', 'Смотрите сумму за день, неделю, месяц, год, минуту и секунду.'],
    formulasTitle: 'Точные формулы пересчета',
    formulasIntro: 'Эти формулы помогают проверить результат.',
    formulaTitles: ['Годовая зарплата в час', 'Месячная зарплата в час', 'Недельная оплата в час', 'Дневная оплата в час'],
    formulaTexts: ['Годовая зарплата / 52 / часы в неделю.', 'Месячная зарплата x 12 / 52 / часы в неделю.', 'Недельная оплата / отработанные часы.', 'Дневная ставка / часы рабочего дня.'],
    trueRateTitle: 'Ваша реальная почасовая ставка',
    trueRateText: 'Если вы регулярно работаете сверх нормы без доплаты, эффективная ставка ниже договорной.',
    chartTitle: 'Распространенная таблица пересчета',
    chartIntro: 'Быстро проверьте типичные годовые зарплаты.',
    chartHeaders: ['Годовая зарплата', 'В месяц', 'В неделю', 'Почасовая ставка'],
    chartNote: 'Предполагается 40 часов в неделю и 52 недели в году.',
    compareTitle: 'Оклад или почасовая оплата',
    compareIntro: 'Выбор зависит от стабильности, льгот и реальных рабочих часов.',
    compareTitles: ['Сотрудник на окладе', 'Почасовой работник', 'Что выбрать?'],
    compareTexts: ['Предсказуемый доход и льготы, но возможны неоплаченные переработки.', 'Прозрачная оплата за время, но доход может меняться.', 'Лучший вариант зависит от роли, потребностей и работодателя.'],
    scenariosTitle: 'Реальные случаи использования',
    scenarioTitles: ['Сравнить предложения', 'Задать фриланс-тариф', 'Обсудить повышение', 'Оценить переработки'],
    scenarioTexts: ['Переведите все предложения в почасовую ставку.', 'Учитывайте налоги и неоплачиваемое время.', 'Используйте точную почасовую опору в переговорах.', 'Проверьте, стоит ли дополнительное время оплаты.'],
    globalTitle: 'Рабочие часы в неделю по миру',
    globalIntro: 'Нормы отличаются по странам.',
    countryRows: ['США: 40 часов в неделю.', 'Великобритания: часто 37,5 часа.', 'Европейский союз: обычно 35-40 часов.', 'Франция: 35 часов в неделю.', 'Германия: 38-40 часов.', 'Пакистан и Индия: 40-48 часов.', 'Австралия и Канада: 38-40 часов.', 'Япония: ориентир 40 часов.'],
    globalOutro: 'Всегда вводите реальные договорные часы.',
    faqTitle: 'Частые вопросы',
    questions: ['Как перевести годовую зарплату в почасовую ставку?', 'Сколько в час составляет 50 000 в год?', 'Учитываются ли налоги?', 'Можно ли использовать неполный график?', 'Инструмент бесплатный?'],
    answers: ['Разделите на 52, затем на часы в неделю.', 'При 40 часах в неделю это примерно 24,04 в час.', 'Нет, показаны валовые суммы.', 'Да, введите ваши реальные часы в неделю.', 'Да, без регистрации.'],
    relatedTitle: 'Другие полезные калькуляторы',
    relatedIntro: 'Когда вы знаете почасовую ставку, пригодятся эти инструменты:',
    relatedTitles: ['Калькулятор чистой зарплаты', 'Сверхурочные', 'Фриланс-тариф', 'Бюджет', 'Стоимость жизни'],
    relatedTexts: ['Оцените доход после удержаний.', 'Рассчитайте оплату 1,5x или 2x.', 'Планируйте налоги и простои.', 'Планируйте ежемесячные расходы.', 'Сравнивайте города.'],
    closingTitle: 'Готовы узнать реальную почасовую ставку?',
    closingText: 'Введите зарплату выше и получите расчет за секунды.',
    footerTitle: 'О калькуляторе',
    footerText: 'Калькулятор использует валовые суммы, 52 недели в году, 12 месяцев в году и свободно настраиваемые часы в неделю.',
  }),
  it: makeAutoLocalePack({
    title: 'Calcolatore da stipendio a paga oraria | Scopri quanto guadagni all ora',
    description: 'Calcolatore gratuito per convertire stipendio annuale, mensile, settimanale, giornaliero, bisettimanale, al minuto e al secondo.',
    eyebrow: 'Strumento gratuito di conversione stipendio',
    h1: 'Calcolatore da stipendio a paga oraria - Scopri quanto guadagni all ora',
    subheadline: 'Smetti di indovinare. Confronta offerte, passa da stipendio a paga oraria o imposta una tariffa freelance e vedi subito il riepilogo completo.',
    cta: 'Usa il calcolatore',
    chartCta: 'Vedi tabella',
    supports: 'Supporta',
    supportItems: ['Oraria', 'Giornaliera', 'Settimanale', 'Bisettimanale', 'Mensile', 'Annuale', 'Al minuto', 'Al secondo'],
    currencyLine: 'Funziona con USD, EUR, GBP, PKR, INR, JPY, AED, CAD, AUD, BRL e oltre 50 valute.',
    free: '100% gratuito',
    freeText: 'Nessun account richiesto',
    realTime: 'Risultati immediati',
    realTimeText: 'Si aggiorna mentre scrivi',
    languages: '12+ lingue',
    languagesText: 'Italiano, inglese, spagnolo, arabo, urdu e altre',
    privacy: 'Nessun dato salvato',
    privacyText: 'Tutti i calcoli restano nel browser',
    devices: 'Funziona ovunque',
    devicesText: 'Desktop, tablet e telefono',
    aboutKicker: 'Informazioni',
    aboutTitle: 'Informazioni sul calcolatore',
    aboutText: 'Questo calcolatore aiuta lavoratori, candidati, freelance e team HR a confrontare rapidamente la retribuzione lorda.',
    formulaBase: 'Base formula',
    formulaText: '52 settimane all anno, 12 mesi all anno e ore settimanali regolabili.',
    defaultSchedule: 'Orario predefinito',
    defaultText: 'Il valore predefinito e 40 ore a settimana, modificabile in base al contratto.',
    grossOnly: 'Solo lordo',
    grossText: 'Non sottrae tasse, assicurazioni o contributi pensionistici.',
    whyTitle: 'Perche convertire lo stipendio in paga oraria conta',
    whyText: ['Le offerte di lavoro usano periodi diversi. Una base oraria comune rende il confronto chiaro.', 'Il calcolatore risolve la conversione in pochi secondi.', 'La paga oraria mostra anche l effetto reale delle settimane lunghe su uno stipendio fisso.'],
    usersTitle: 'Chi usa questo calcolatore',
    usersIntro: 'Utile per chiunque lavori con stipendi:',
    userTitles: ['Candidati', 'Dipendenti', 'Freelance', 'Team HR', 'Lavoratori internazionali', 'Studenti'],
    userTexts: ['Confrontano offerte diverse.', 'Valutano il passaggio da stipendio a paga oraria.', 'Definiscono tariffe sostenibili.', 'Standardizzano i confronti retributivi.', 'Adattano le ore settimanali per paese.', 'Capiscono la prima offerta di lavoro.'],
    howTitle: 'Come usare il calcolatore',
    howIntro: 'Inserisci l importo, regola ore e valuta, poi leggi il risultato.',
    stepTitles: ['Passo 1 - Inserisci importo', 'Passo 2 - Imposta ore settimanali', 'Passo 3 - Scegli valuta', 'Passo 4 - Leggi il riepilogo'],
    stepTexts: ['Parti da stipendio annuale, mensile, settimanale o orario.', 'Usa 40 ore o le ore reali del contratto.', 'Il simbolo cambia automaticamente senza cambio valuta.', 'Vedi importi per giorno, settimana, mese, anno, minuto e secondo.'],
    formulasTitle: 'Formule esatte di conversione',
    formulasIntro: 'Usa queste formule per verificare i risultati.',
    formulaTitles: ['Da annuale a oraria', 'Da mensile a oraria', 'Da settimanale a oraria', 'Da giornaliera a oraria'],
    formulaTexts: ['Stipendio annuale / 52 / ore settimanali.', 'Stipendio mensile x 12 / 52 / ore settimanali.', 'Retribuzione settimanale / ore lavorate.', 'Tariffa giornaliera / ore del giorno lavorativo.'],
    trueRateTitle: 'La tua vera paga oraria',
    trueRateText: 'Se lavori spesso ore extra senza compenso aggiuntivo, la tariffa effettiva e piu bassa di quella contrattuale.',
    chartTitle: 'Tabella di conversione comune',
    chartIntro: 'Controlla rapidamente stipendi annuali frequenti.',
    chartHeaders: ['Stipendio annuale', 'Mensile', 'Settimanale', 'Paga oraria'],
    chartNote: 'Presume 40 ore a settimana e 52 settimane all anno.',
    compareTitle: 'Stipendio vs paga oraria',
    compareIntro: 'La scelta dipende da stabilita, benefit e ore reali.',
    compareTitles: ['Dipendente stipendiato', 'Lavoratore orario', 'Quale scegliere?'],
    compareTexts: ['Reddito prevedibile e benefit, ma possibili straordinari non pagati.', 'Pagamento trasparente per il tempo lavorato, ma reddito variabile.', 'La scelta migliore dipende da ruolo, esigenze e datore di lavoro.'],
    scenariosTitle: 'Casi d uso reali',
    scenarioTitles: ['Confrontare offerte', 'Impostare tariffa freelance', 'Negoziare stipendio', 'Valutare straordinari'],
    scenarioTexts: ['Converti tutte le offerte in paga oraria.', 'Considera tasse e tempo non fatturabile.', 'Negozia con un riferimento orario preciso.', 'Verifica se il tempo extra conviene.'],
    globalTitle: 'Ore settimanali nel mondo',
    globalIntro: 'Gli standard cambiano per paese.',
    countryRows: ['Stati Uniti: 40 ore a settimana.', 'Regno Unito: 37,5 ore sono comuni.', 'Unione Europea: spesso 35-40 ore.', 'Francia: 35 ore a settimana.', 'Germania: 38-40 ore.', 'Pakistan e India: 40-48 ore.', 'Australia e Canada: 38-40 ore.', 'Giappone: riferimento di 40 ore.'],
    globalOutro: 'Inserisci sempre le ore contrattuali reali.',
    faqTitle: 'Domande frequenti',
    questions: ['Come converto lo stipendio annuale in paga oraria?', 'Quanto fa 50.000 all anno all ora?', 'Le tasse sono incluse?', 'Posso usare un orario part-time?', 'Lo strumento e gratuito?'],
    answers: ['Dividi per 52 e poi per le ore settimanali.', 'Con 40 ore a settimana, circa 24,04 all ora.', 'No, i valori sono lordi.', 'Si, inserisci le ore settimanali reali.', 'Si, senza registrazione.'],
    relatedTitle: 'Altri calcolatori utili',
    relatedIntro: 'Dopo aver trovato la paga oraria, questi strumenti aiutano:',
    relatedTitles: ['Stipendio netto', 'Straordinari', 'Tariffa freelance', 'Budget', 'Costo della vita'],
    relatedTexts: ['Stima il reddito dopo detrazioni.', 'Calcola 1,5x o 2x.', 'Pianifica tasse e tempi vuoti.', 'Pianifica spese mensili.', 'Confronta citta.'],
    closingTitle: 'Pronto a conoscere la tua vera paga oraria?',
    closingText: 'Inserisci lo stipendio sopra e ottieni il riepilogo in pochi secondi.',
    footerTitle: 'Informazioni sul calcolatore',
    footerText: 'Il calcolatore usa importi lordi, 52 settimane all anno, 12 mesi all anno e ore settimanali liberamente regolabili.',
  }),
  nl: makeAutoLocalePack({
    title: 'Salaris naar uurloon calculator | Weet precies wat u per uur verdient',
    description: 'Gratis calculator om jaarloon, maandloon, weekloon, dagloon, tweewekelijks loon, per minuut en per seconde om te rekenen.',
    eyebrow: 'Gratis salarisomrekener',
    h1: 'Salaris naar uurloon calculator - Weet precies wat u per uur verdient',
    subheadline: 'Stop met schatten. Vergelijk banen, reken salaris om naar uurloon of bepaal een freelancetarief en zie direct de volledige uitsplitsing.',
    cta: 'Calculator gebruiken',
    chartCta: 'Tabel bekijken',
    supports: 'Ondersteunt',
    supportItems: ['Per uur', 'Per dag', 'Per week', 'Tweewekelijks', 'Per maand', 'Per jaar', 'Per minuut', 'Per seconde'],
    currencyLine: 'Werkt met USD, EUR, GBP, PKR, INR, JPY, AED, CAD, AUD, BRL en meer dan 50 valuta.',
    free: '100% gratis',
    freeText: 'Geen account nodig',
    realTime: 'Directe resultaten',
    realTimeText: 'Werkt bij elke invoer',
    languages: '12+ talen',
    languagesText: 'Nederlands, Engels, Spaans, Arabisch, Urdu en meer',
    privacy: 'Geen data opgeslagen',
    privacyText: 'Alle berekeningen gebeuren in uw browser',
    devices: 'Werkt overal',
    devicesText: 'Desktop, tablet en mobiel',
    aboutKicker: 'Over deze tool',
    aboutTitle: 'Over deze calculator',
    aboutText: 'Deze calculator helpt werknemers, sollicitanten, freelancers en HR-teams om brutoloon snel te vergelijken.',
    formulaBase: 'Formulebasis',
    formulaText: '52 weken per jaar, 12 maanden per jaar en aanpasbare uren per week.',
    defaultSchedule: 'Standaardrooster',
    defaultText: 'Standaard is 40 uur per week, maar u kunt dit aanpassen aan uw contract.',
    grossOnly: 'Alleen bruto',
    grossText: 'Belasting, verzekering en pensioenbijdragen worden niet afgetrokken.',
    whyTitle: 'Waarom salaris naar uurloon omrekenen belangrijk is',
    whyText: ['Vacatures gebruiken vaak verschillende betaalperioden. Een gemeenschappelijke uurwaarde maakt vergelijken eerlijk.', 'Deze calculator rekent dat in seconden om.', 'Uurloon laat ook zien wat lange werkweken doen met een vast salaris.'],
    usersTitle: 'Wie gebruikt deze calculator',
    usersIntro: 'Handig voor iedereen die met loon werkt:',
    userTitles: ['Sollicitanten', 'Werknemers', 'Freelancers', 'HR-teams', 'Internationale werknemers', 'Studenten'],
    userTexts: ['Vergelijken verschillende aanbiedingen.', 'Beoordelen de overstap van salaris naar uurloon.', 'Bepalen duurzame tarieven.', 'Standaardiseren loonvergelijkingen.', 'Passen weekuren per land aan.', 'Begrijpen een eerste baanaanbod.'],
    howTitle: 'Hoe gebruikt u de calculator',
    howIntro: 'Voer een bedrag in, pas uren en valuta aan en lees het resultaat.',
    stepTitles: ['Stap 1 - Voer bedrag in', 'Stap 2 - Stel weekuren in', 'Stap 3 - Kies valuta', 'Stap 4 - Lees de uitsplitsing'],
    stepTexts: ['Begin met jaarloon, maandloon, weekloon of uurloon.', 'Gebruik 40 uur of uw echte contracturen.', 'Het symbool verandert automatisch zonder wisselkoers.', 'Bekijk bedragen per dag, week, maand, jaar, minuut en seconde.'],
    formulasTitle: 'Exacte omrekenformules',
    formulasIntro: 'Gebruik deze formules om de resultaten te controleren.',
    formulaTitles: ['Jaarloon naar uurloon', 'Maandloon naar uurloon', 'Weekloon naar uurloon', 'Dagloon naar uurloon'],
    formulaTexts: ['Jaarloon / 52 / weekuren.', 'Maandloon x 12 / 52 / weekuren.', 'Weekloon / gewerkte uren.', 'Dagloon / uren per werkdag.'],
    trueRateTitle: 'Uw echte uurloon',
    trueRateText: 'Als u vaak extra uren werkt zonder extra betaling, ligt uw effectieve tarief lager dan uw contracttarief.',
    chartTitle: 'Veelgebruikte omrekentabel',
    chartIntro: 'Bekijk snel veelvoorkomende jaarsalarissen.',
    chartHeaders: ['Jaarsalaris', 'Maandelijks', 'Wekelijks', 'Uurloon'],
    chartNote: 'Gebaseerd op 40 uur per week en 52 weken per jaar.',
    compareTitle: 'Salaris vs uurloon',
    compareIntro: 'De keuze hangt af van stabiliteit, voordelen en echte werkuren.',
    compareTitles: ['Werknemer met salaris', 'Werknemer per uur', 'Welke keuze?'],
    compareTexts: ['Voorspelbaar inkomen en voordelen, maar mogelijk onbetaald overwerk.', 'Transparante betaling voor gewerkte tijd, maar inkomen kan schommelen.', 'De beste keuze hangt af van functie, behoeften en werkgever.'],
    scenariosTitle: 'Praktische situaties',
    scenarioTitles: ['Aanbiedingen vergelijken', 'Freelancetarief bepalen', 'Salaris onderhandelen', 'Overwerk beoordelen'],
    scenarioTexts: ['Zet alle aanbiedingen om naar uurloon.', 'Plan belastingen en niet-factureerbare tijd.', 'Onderhandel met een exacte uurwaarde.', 'Controleer of extra tijd de moeite waard is.'],
    globalTitle: 'Weekuren wereldwijd',
    globalIntro: 'Normen verschillen per land.',
    countryRows: ['Verenigde Staten: 40 uur per week.', 'Verenigd Koninkrijk: 37,5 uur is gebruikelijk.', 'Europese Unie: vaak 35-40 uur.', 'Frankrijk: 35 uur per week.', 'Duitsland: 38-40 uur.', 'Pakistan en India: 40-48 uur.', 'Australie en Canada: 38-40 uur.', 'Japan: 40 uur als referentie.'],
    globalOutro: 'Voer altijd uw echte contracturen in.',
    faqTitle: 'Veelgestelde vragen',
    questions: ['Hoe reken ik jaarsalaris om naar uurloon?', 'Hoeveel is 50.000 per jaar per uur?', 'Zijn belastingen inbegrepen?', 'Kan ik parttime uren gebruiken?', 'Is de tool gratis?'],
    answers: ['Deel door 52 en daarna door de weekuren.', 'Bij 40 uur per week ongeveer 24,04 per uur.', 'Nee, de waarden zijn bruto.', 'Ja, voer uw echte weekuren in.', 'Ja, zonder registratie.'],
    relatedTitle: 'Andere handige calculators',
    relatedIntro: 'Na uw uurloon helpen deze tools verder:',
    relatedTitles: ['Nettoloon', 'Overwerk', 'Freelancetarief', 'Budget', 'Kosten van levensonderhoud'],
    relatedTexts: ['Schat inkomen na inhoudingen.', 'Bereken 1,5x of 2x.', 'Plan belasting en lege tijd.', 'Plan maandelijkse uitgaven.', 'Vergelijk steden.'],
    closingTitle: 'Klaar om uw echte uurloon te weten?',
    closingText: 'Voer hierboven uw salaris in en krijg de uitsplitsing in seconden.',
    footerTitle: 'Over deze calculator',
    footerText: 'Deze calculator gebruikt brutobedragen, 52 weken per jaar, 12 maanden per jaar en vrij instelbare weekuren.',
  }),
  pl: makeAutoLocalePack({
    title: 'Kalkulator pensji na stawkę godzinową | Sprawdź dokładnie ile zarabiasz za godzinę',
    description: 'Darmowy kalkulator do przeliczania pensji rocznej, miesięcznej, tygodniowej, dziennej, dwutygodniowej, minutowej i sekundowej.',
    eyebrow: 'Darmowe narzędzie do przeliczania wynagrodzeń',
    h1: 'Kalkulator pensji na stawkę godzinową - Sprawdź dokładnie ile zarabiasz za godzinę',
    subheadline: 'Przestań zgadywać. Porównuj oferty, przelicz pensję na stawkę godzinową albo ustaw stawkę freelance i od razu zobacz pełne wyliczenie.',
    cta: 'Użyj kalkulatora',
    chartCta: 'Zobacz tabelę',
    supports: 'Obsługuje',
    supportItems: ['Godzinowo', 'Dziennie', 'Tygodniowo', 'Dwutygodniowo', 'Miesięcznie', 'Rocznie', 'Na minutę', 'Na sekundę'],
    currencyLine: 'Działa z USD, EUR, GBP, PKR, INR, JPY, AED, CAD, AUD, BRL i ponad 50 walutami.',
    free: '100% za darmo',
    freeText: 'Bez konta',
    realTime: 'Wyniki od razu',
    realTimeText: 'Aktualizuje się podczas pisania',
    languages: '12+ języków',
    languagesText: 'Polski, angielski, hiszpański, arabski, urdu i więcej',
    privacy: 'Dane nie są zapisywane',
    privacyText: 'Wszystkie obliczenia są w przeglądarce',
    devices: 'Działa wszędzie',
    devicesText: 'Komputer, tablet i telefon',
    aboutKicker: 'O narzędziu',
    aboutTitle: 'O kalkulatorze',
    aboutText: 'Kalkulator pomaga pracownikom, kandydatom, freelancerom i zespołom HR szybko porównywać wynagrodzenie brutto.',
    formulaBase: 'Podstawa wzoru',
    formulaText: '52 tygodnie w roku, 12 miesięcy w roku i regulowane godziny tygodniowe.',
    defaultSchedule: 'Domyślny grafik',
    defaultText: 'Domyślnie 40 godzin tygodniowo, ale możesz wpisać swój kontraktowy czas pracy.',
    grossOnly: 'Tylko brutto',
    grossText: 'Podatki, ubezpieczenia i składki emerytalne nie są odliczane.',
    whyTitle: 'Dlaczego przeliczanie pensji na stawkę godzinową ma znaczenie',
    whyText: ['Oferty pracy często podają różne okresy płatności. Wspólna stawka godzinowa ułatwia porównanie.', 'Ten kalkulator robi to w kilka sekund.', 'Stawka godzinowa pokazuje też realny wpływ długich tygodni pracy na stałą pensję.'],
    usersTitle: 'Kto używa tego kalkulatora',
    usersIntro: 'Przydatny dla każdej osoby pracującej z wynagrodzeniami:',
    userTitles: ['Kandydaci', 'Pracownicy', 'Freelancerzy', 'Zespoły HR', 'Pracownicy międzynarodowi', 'Studenci'],
    userTexts: ['Porównują różne oferty.', 'Oceniają przejście z pensji na stawkę godzinową.', 'Ustalają trwałe stawki.', 'Standaryzują porównania płac.', 'Dostosowują godziny do kraju.', 'Rozumieją pierwszą ofertę pracy.'],
    howTitle: 'Jak używać kalkulatora',
    howIntro: 'Wpisz kwotę, ustaw godziny i walutę, a potem odczytaj wynik.',
    stepTitles: ['Krok 1 - Wpisz kwotę', 'Krok 2 - Ustaw godziny tygodniowo', 'Krok 3 - Wybierz walutę', 'Krok 4 - Odczytaj wyliczenie'],
    stepTexts: ['Zacznij od pensji rocznej, miesięcznej, tygodniowej lub godzinowej.', 'Użyj 40 godzin albo realnych godzin z umowy.', 'Symbol waluty zmienia się automatycznie bez kursu wymiany.', 'Zobacz kwoty za dzień, tydzień, miesiąc, rok, minutę i sekundę.'],
    formulasTitle: 'Dokładne wzory przeliczeń',
    formulasIntro: 'Użyj tych wzorów do sprawdzenia wyniku.',
    formulaTitles: ['Roczna na godzinową', 'Miesięczna na godzinową', 'Tygodniowa na godzinową', 'Dzienna na godzinową'],
    formulaTexts: ['Pensja roczna / 52 / godziny tygodniowo.', 'Pensja miesięczna x 12 / 52 / godziny tygodniowo.', 'Wypłata tygodniowa / przepracowane godziny.', 'Stawka dzienna / godziny dnia pracy.'],
    trueRateTitle: 'Twoja prawdziwa stawka godzinowa',
    trueRateText: 'Jeśli często pracujesz nadgodziny bez dodatkowej zapłaty, efektywna stawka jest niższa od umownej.',
    chartTitle: 'Popularna tabela przeliczeń',
    chartIntro: 'Szybko sprawdź typowe pensje roczne.',
    chartHeaders: ['Pensja roczna', 'Miesięcznie', 'Tygodniowo', 'Stawka godzinowa'],
    chartNote: 'Zakłada 40 godzin tygodniowo i 52 tygodnie rocznie.',
    compareTitle: 'Pensja vs stawka godzinowa',
    compareIntro: 'Wybór zależy od stabilności, benefitów i realnych godzin pracy.',
    compareTitles: ['Pracownik etatowy', 'Pracownik godzinowy', 'Co wybrać?'],
    compareTexts: ['Przewidywalny dochód i benefity, ale możliwe bezpłatne nadgodziny.', 'Przejrzysta płatność za czas pracy, ale dochód może się wahać.', 'Najlepszy wybór zależy od roli, potrzeb i pracodawcy.'],
    scenariosTitle: 'Praktyczne zastosowania',
    scenarioTitles: ['Porównanie ofert', 'Ustalenie stawki freelance', 'Negocjacja podwyżki', 'Ocena nadgodzin'],
    scenarioTexts: ['Przelicz wszystkie oferty na stawkę godzinową.', 'Uwzględnij podatki i czas niefakturowany.', 'Negocjuj z dokładnym punktem odniesienia.', 'Sprawdź, czy dodatkowy czas się opłaca.'],
    globalTitle: 'Godziny pracy tygodniowo na świecie',
    globalIntro: 'Standardy różnią się w zależności od kraju.',
    countryRows: ['Stany Zjednoczone: 40 godzin tygodniowo.', 'Wielka Brytania: często 37,5 godziny.', 'Unia Europejska: zwykle 35-40 godzin.', 'Francja: 35 godzin tygodniowo.', 'Niemcy: 38-40 godzin.', 'Pakistan i Indie: 40-48 godzin.', 'Australia i Kanada: 38-40 godzin.', 'Japonia: punkt odniesienia 40 godzin.'],
    globalOutro: 'Zawsze wpisuj swoje realne godziny z umowy.',
    faqTitle: 'Częste pytania',
    questions: ['Jak przeliczyć pensję roczną na stawkę godzinową?', 'Ile za godzinę daje 50 000 rocznie?', 'Czy kalkulator uwzględnia podatki?', 'Czy mogę użyć niepełnego etatu?', 'Czy narzędzie jest darmowe?'],
    answers: ['Podziel przez 52, a potem przez godziny tygodniowo.', 'Przy 40 godzinach tygodniowo około 24,04 za godzinę.', 'Nie, wartości są brutto.', 'Tak, wpisz swoje realne godziny tygodniowe.', 'Tak, bez rejestracji.'],
    relatedTitle: 'Inne przydatne kalkulatory',
    relatedIntro: 'Po poznaniu stawki godzinowej pomogą też:',
    relatedTitles: ['Wynagrodzenie netto', 'Nadgodziny', 'Stawka freelance', 'Budżet', 'Koszty życia'],
    relatedTexts: ['Oszacuj dochód po potrąceniach.', 'Oblicz 1,5x lub 2x.', 'Planuj podatki i puste godziny.', 'Planuj miesięczne wydatki.', 'Porównuj miasta.'],
    closingTitle: 'Gotowy poznać swoją prawdziwą stawkę godzinową?',
    closingText: 'Wpisz pensję powyżej i otrzymaj wyliczenie w kilka sekund.',
    footerTitle: 'O kalkulatorze',
    footerText: 'Kalkulator używa kwot brutto, 52 tygodni w roku, 12 miesięcy w roku i swobodnie regulowanych godzin tygodniowych.',
  }),
  ko: makeAutoLocalePack({
    title: '연봉 시급 계산기 | 시간당 얼마를 버는지 정확히 확인하세요',
    description: '연봉, 월급, 주급, 일급, 격주 급여, 분당 및 초당 급여를 무료로 변환하는 계산기입니다.',
    eyebrow: '무료 급여 변환 도구',
    h1: '연봉 시급 계산기 - 시간당 얼마를 버는지 정확히 확인하세요',
    subheadline: '더 이상 추측하지 마세요. 채용 제안을 비교하거나 연봉을 시급으로 바꾸거나 프리랜서 요율을 정하고 즉시 전체 급여 내역을 확인하세요.',
    cta: '계산기 사용',
    chartCta: '변환표 보기',
    supports: '지원 항목',
    supportItems: ['시급', '일급', '주급', '격주', '월급', '연봉', '분당', '초당'],
    currencyLine: 'USD, EUR, GBP, PKR, INR, JPY, AED, CAD, AUD, BRL 및 50개 이상의 통화를 지원합니다.',
    free: '100% 무료',
    freeText: '계정이 필요 없습니다',
    realTime: '실시간 결과',
    realTimeText: '입력하는 즉시 업데이트',
    languages: '12개 이상 언어',
    languagesText: '한국어, 영어, 스페인어, 아랍어, 우르두어 등',
    privacy: '데이터 저장 없음',
    privacyText: '모든 계산은 브라우저에서 처리됩니다',
    devices: '어디서나 사용',
    devicesText: '데스크톱, 태블릿, 모바일',
    aboutKicker: '도구 소개',
    aboutTitle: '계산기 소개',
    aboutText: '이 계산기는 근로자, 구직자, 프리랜서, HR 팀이 세전 급여를 빠르게 비교하도록 돕습니다.',
    formulaBase: '공식 기준',
    formulaText: '1년 52주, 1년 12개월, 조정 가능한 주당 근무 시간.',
    defaultSchedule: '기본 근무 시간',
    defaultText: '기본값은 주 40시간이며 계약 조건에 맞게 변경할 수 있습니다.',
    grossOnly: '세전 금액',
    grossText: '세금, 보험료, 퇴직 기여금은 차감하지 않습니다.',
    whyTitle: '연봉을 시급으로 바꾸는 것이 중요한 이유',
    whyText: ['채용 제안은 서로 다른 급여 기간을 사용합니다. 공통 시급 기준이 있어야 제대로 비교할 수 있습니다.', '이 계산기는 몇 초 만에 변환을 완료합니다.', '시급은 긴 근무 시간이 고정 연봉의 실제 가치에 어떤 영향을 주는지도 보여줍니다.'],
    usersTitle: '이 계산기를 사용하는 사람',
    usersIntro: '급여를 다루는 누구에게나 유용합니다:',
    userTitles: ['구직자', '직원', '프리랜서', 'HR 팀', '국제 근로자', '학생'],
    userTexts: ['서로 다른 제안을 비교합니다.', '연봉제와 시급제 전환을 평가합니다.', '지속 가능한 요율을 정합니다.', '보상 비교를 표준화합니다.', '국가별 주당 시간을 조정합니다.', '첫 직장 제안을 이해합니다.'],
    howTitle: '계산기 사용 방법',
    howIntro: '금액을 입력하고 시간과 통화를 조정한 뒤 결과를 확인하세요.',
    stepTitles: ['1단계 - 금액 입력', '2단계 - 주당 시간 설정', '3단계 - 통화 선택', '4단계 - 내역 확인'],
    stepTexts: ['연봉, 월급, 주급 또는 시급 중 아는 값을 입력하세요.', '40시간 또는 실제 계약 근무 시간을 사용하세요.', '환율 변환 없이 기호만 자동으로 바뀝니다.', '일, 주, 월, 년, 분, 초 단위 금액을 확인하세요.'],
    formulasTitle: '정확한 변환 공식',
    formulasIntro: '이 공식으로 결과를 확인할 수 있습니다.',
    formulaTitles: ['연봉에서 시급', '월급에서 시급', '주급에서 시급', '일급에서 시급'],
    formulaTexts: ['연봉 / 52 / 주당 시간.', '월급 x 12 / 52 / 주당 시간.', '주급 / 근무 시간.', '일급 / 하루 근무 시간.'],
    trueRateTitle: '나의 실제 시급',
    trueRateText: '추가 보상 없이 정기적으로 초과 근무를 한다면 실제 시급은 계약상 시급보다 낮습니다.',
    chartTitle: '일반 변환표',
    chartIntro: '자주 쓰는 연봉 금액을 빠르게 확인하세요.',
    chartHeaders: ['연봉', '월급', '주급', '시급'],
    chartNote: '주 40시간, 연 52주 기준입니다.',
    compareTitle: '연봉제 vs 시급제',
    compareIntro: '선택은 안정성, 복리후생, 실제 근무 시간에 따라 달라집니다.',
    compareTitles: ['연봉제 직원', '시급제 근로자', '어떤 선택?'],
    compareTexts: ['예측 가능한 소득과 복리후생이 있지만 무급 초과 근무가 있을 수 있습니다.', '근무 시간에 대한 투명한 보상이 있지만 소득이 변동될 수 있습니다.', '가장 좋은 선택은 직무, 필요, 고용주에 따라 달라집니다.'],
    scenariosTitle: '실제 활용 사례',
    scenarioTitles: ['제안 비교', '프리랜서 요율 설정', '연봉 협상', '초과 근무 평가'],
    scenarioTexts: ['모든 제안을 시급으로 변환합니다.', '세금과 청구할 수 없는 시간을 고려합니다.', '정확한 시급 기준으로 협상합니다.', '추가 시간이 가치 있는지 확인합니다.'],
    globalTitle: '세계의 주당 근무 시간',
    globalIntro: '표준은 국가마다 다릅니다.',
    countryRows: ['미국: 주 40시간.', '영국: 37.5시간이 흔합니다.', '유럽연합: 보통 35-40시간.', '프랑스: 주 35시간.', '독일: 38-40시간.', '파키스탄 및 인도: 40-48시간.', '호주 및 캐나다: 38-40시간.', '일본: 40시간을 기준으로 사용합니다.'],
    globalOutro: '항상 실제 계약 근무 시간을 입력하세요.',
    faqTitle: '자주 묻는 질문',
    questions: ['연봉을 시급으로 어떻게 변환하나요?', '연 50,000은 시급으로 얼마인가요?', '세금이 포함되나요?', '파트타임도 사용할 수 있나요?', '이 도구는 무료인가요?'],
    answers: ['52로 나눈 뒤 주당 시간으로 나누세요.', '주 40시간 기준 약 24.04입니다.', '아니요, 세전 금액입니다.', '네, 실제 주당 시간을 입력하세요.', '네, 가입 없이 무료입니다.'],
    relatedTitle: '유용한 다른 계산기',
    relatedIntro: '시급을 알게 되면 다음 도구도 도움이 됩니다:',
    relatedTitles: ['실수령액 계산기', '초과 근무', '프리랜서 요율', '예산', '생활비'],
    relatedTexts: ['공제 후 소득을 추정합니다.', '1.5배 또는 2배를 계산합니다.', '세금과 빈 시간을 계획합니다.', '월별 지출을 계획합니다.', '도시를 비교합니다.'],
    closingTitle: '실제 시급을 확인할 준비가 되셨나요?',
    closingText: '위에 급여를 입력하고 몇 초 만에 내역을 확인하세요.',
    footerTitle: '계산기 소개',
    footerText: '이 계산기는 세전 금액, 연 52주, 연 12개월, 자유롭게 조정 가능한 주당 근무 시간을 사용합니다.',
  }),
};

const faqExtensions: Record<string, FaqItem[]> = {
  pt: [
    { question: 'Quanto é 20 por hora por ano?', answer: 'A 20 por hora, trabalhando 40 horas por semana e 52 semanas por ano, o salário anual é 41.600. Com 50 semanas trabalhadas, seria 40.000 por ano.' },
    { question: 'Devo incluir férias e feriados?', answer: 'Depende do objetivo. Para comparar empregos, use as horas contratadas completas. Para uma taxa efetiva, subtraia férias e feriados das horas totais.' },
    { question: 'Como calculo horas extras?', answer: 'Em muitos casos, horas extras são pagas a 1,5x a taxa regular para horas acima do limite semanal. A 25 por hora, 1,5x equivale a 37,50 por hora.' },
    { question: 'Qual é o atalho mental para converter salário anual em hora?', answer: 'Divida o salário anual por 2.000. Para 60.000 por ano, o atalho dá 30 por hora. Não é exato, mas ajuda em estimativas rápidas.' },
    { question: 'Qual é a diferença entre salário mensal e pagamento quinzenal?', answer: 'Pagamento mensal significa 12 pagamentos por ano. Pagamento quinzenal ou a cada duas semanas normalmente significa 26 pagamentos por ano.' },
  ],
  fr: [
    { question: 'Combien représente 20 de l’heure par an ?', answer: 'À 20 de l’heure, avec 40 heures par semaine et 52 semaines par an, le salaire annuel est de 41 600. Avec 50 semaines travaillées, il est de 40 000.' },
    { question: 'Dois-je inclure les congés payés et les jours fériés ?', answer: 'Cela dépend de votre objectif. Pour comparer des emplois, utilisez les heures contractuelles complètes. Pour un taux effectif, retirez les congés et jours fériés.' },
    { question: 'Comment calculer les heures supplémentaires ?', answer: 'Les heures supplémentaires sont souvent payées à 1,5x le taux normal au-delà du seuil hebdomadaire. À 25 de l’heure, cela donne 37,50 de l’heure.' },
    { question: 'Quel est le raccourci mental pour convertir annuel en horaire ?', answer: 'Divisez le salaire annuel par 2 000. Pour 60 000 par an, cela donne environ 30 par heure. Ce n’est pas exact, mais utile pour estimer vite.' },
    { question: 'Quelle différence entre salaire mensuel et paiement bihebdomadaire ?', answer: 'Le paiement mensuel donne 12 versements par an. Le paiement bihebdomadaire donne généralement 26 versements par an.' },
  ],
  de: [
    { question: 'Wie viel sind 20 pro Stunde im Jahr?', answer: 'Bei 20 pro Stunde, 40 Stunden pro Woche und 52 Wochen pro Jahr ergibt sich ein Jahresgehalt von 41.600. Bei 50 Arbeitswochen sind es 40.000.' },
    { question: 'Soll ich Urlaub und Feiertage einbeziehen?', answer: 'Das hängt vom Ziel ab. Für Jobvergleiche nutzen Sie die vertraglichen Stunden. Für einen effektiven Stundenlohn ziehen Sie Urlaub und Feiertage ab.' },
    { question: 'Wie berechne ich Überstunden?', answer: 'Überstunden werden häufig mit 1,5x des normalen Satzes bezahlt. Bei 25 pro Stunde entspricht das 37,50 pro Überstunde.' },
    { question: 'Was ist die schnelle Kopfrechnung von Jahresgehalt zu Stundenlohn?', answer: 'Teilen Sie das Jahresgehalt durch 2.000. Bei 60.000 pro Jahr ergibt das ungefähr 30 pro Stunde. Es ist nicht exakt, aber schnell.' },
    { question: 'Was ist der Unterschied zwischen Monatsgehalt und zweiwöchentlicher Zahlung?', answer: 'Monatsgehalt bedeutet 12 Zahlungen pro Jahr. Zweiwöchentliche Zahlung bedeutet normalerweise 26 Zahlungen pro Jahr.' },
  ],
  ja: [
    { question: '時給20の場合、年収はいくらですか？', answer: '時給20で週40時間、年52週働くと年収は41,600です。50週で計算する場合は40,000です。' },
    { question: '有給休暇や祝日を含めるべきですか？', answer: '目的によります。仕事の比較なら契約上の総労働時間を使います。実効時給を知りたい場合は、有給休暇や祝日を差し引きます。' },
    { question: '残業代はどう計算しますか？', answer: '残業は通常の時給の1.5倍で計算されることがあります。時給25なら、1.5倍は37.50です。' },
    { question: '年収から時給への簡単な暗算方法は？', answer: '年収を2,000で割ります。年収60,000なら約30/時です。完全に正確ではありませんが、素早い目安になります。' },
    { question: '月給と隔週払いはどう違いますか？', answer: '月給は年12回の支払いです。隔週払いは通常、年26回の支払いになります。' },
  ],
  zh: [
    { question: '每小时20一年是多少？', answer: '按每小时20、每周40小时、每年52周计算，年薪为41,600。如果按50个工作周计算，则为40,000。' },
    { question: '计算时应包含带薪休假和节假日吗？', answer: '取决于目标。比较工作机会时，使用完整合同工时。计算实际时薪时，可从总工时中减去休假和节假日。' },
    { question: '如何计算加班工资？', answer: '加班通常按正常时薪的1.5倍计算。若时薪为25，则1.5倍加班时薪为37.50。' },
    { question: '年薪转时薪有什么快速心算方法？', answer: '将年薪除以2,000。年薪60,000约等于每小时30。它不是完全精确，但适合快速估算。' },
    { question: '月薪和双周薪有什么区别？', answer: '月薪一年支付12次。双周薪通常一年支付26次。' },
  ],
  id: [
    { question: 'Berapa 20 per jam dalam setahun?', answer: 'Dengan 20 per jam, 40 jam per minggu, dan 52 minggu per tahun, gaji tahunan adalah 41.600. Dengan 50 minggu kerja, hasilnya 40.000.' },
    { question: 'Apakah PTO dan hari libur harus dimasukkan?', answer: 'Tergantung tujuan. Untuk membandingkan pekerjaan, gunakan jam kontrak penuh. Untuk tarif efektif, kurangi cuti dan hari libur dari total jam.' },
    { question: 'Bagaimana menghitung lembur?', answer: 'Lembur sering dihitung 1,5x dari tarif reguler. Jika tarifnya 25 per jam, tarif lembur 1,5x adalah 37,50 per jam.' },
    { question: 'Apa cara cepat menghitung gaji tahunan ke per jam?', answer: 'Bagi gaji tahunan dengan 2.000. Untuk 60.000 per tahun, perkiraannya 30 per jam. Tidak sempurna, tetapi cepat.' },
    { question: 'Apa bedanya gaji bulanan dan dwimingguan?', answer: 'Gaji bulanan berarti 12 pembayaran per tahun. Pembayaran dwimingguan biasanya berarti 26 pembayaran per tahun.' },
  ],
  tr: [
    { question: 'Saatte 20 yılda ne kadar eder?', answer: 'Saatte 20, haftada 40 saat ve yılda 52 hafta çalışırsanız yıllık maaş 41.600 olur. 50 hafta için 40.000 olur.' },
    { question: 'Ücretli izin ve tatilleri dahil etmeli miyim?', answer: 'Amacınıza bağlıdır. İş karşılaştırması için sözleşme saatlerini kullanın. Efektif oran için izin ve tatilleri toplam saatten çıkarın.' },
    { question: 'Fazla mesai nasıl hesaplanır?', answer: 'Fazla mesai genellikle normal ücretin 1,5 katı ile hesaplanır. Saatlik 25 için 1,5x fazla mesai 37,50 eder.' },
    { question: 'Yıllık maaşı saatliğe çevirmek için hızlı kısayol nedir?', answer: 'Yıllık maaşı 2.000’e bölün. Yılda 60.000 için yaklaşık 30/saat çıkar. Tam kesin değildir ama hızlıdır.' },
    { question: 'Aylık maaş ile iki haftalık ödeme arasındaki fark nedir?', answer: 'Aylık maaş yılda 12 ödeme demektir. İki haftalık ödeme genellikle yılda 26 ödeme demektir.' },
  ],
  ru: [
    { question: 'Сколько в год составляет 20 в час?', answer: 'При 20 в час, 40 часах в неделю и 52 неделях в году годовой доход составляет 41 600. При 50 рабочих неделях это 40 000.' },
    { question: 'Нужно ли учитывать отпуск и праздники?', answer: 'Зависит от цели. Для сравнения вакансий используйте полные договорные часы. Для эффективной ставки вычтите отпуск и праздники.' },
    { question: 'Как рассчитать оплату сверхурочных?', answer: 'Сверхурочные часто оплачиваются по ставке 1,5x от обычной. При 25 в час такая ставка составит 37,50 в час.' },
    { question: 'Какой быстрый способ перевести годовую зарплату в час?', answer: 'Разделите годовую зарплату на 2 000. Для 60 000 в год получится примерно 30 в час. Это не идеально точно, но быстро.' },
    { question: 'Чем отличается месячная зарплата от выплаты раз в две недели?', answer: 'Месячная зарплата означает 12 выплат в год. Выплата раз в две недели обычно означает 26 выплат в год.' },
  ],
  it: [
    { question: 'Quanto fa 20 all ora all anno?', answer: 'A 20 all ora, con 40 ore a settimana e 52 settimane all anno, lo stipendio annuale e 41.600. Con 50 settimane lavorate e 40.000.' },
    { question: 'Devo includere ferie e festivita?', answer: 'Dipende dallo scopo. Per confrontare lavori usa le ore contrattuali complete. Per la tariffa effettiva sottrai ferie e festivita.' },
    { question: 'Come calcolo gli straordinari?', answer: 'Gli straordinari sono spesso pagati 1,5x della tariffa normale. Con 25 all ora, 1,5x equivale a 37,50 all ora.' },
    { question: 'Qual e il trucco rapido per passare da annuale a orario?', answer: 'Dividi lo stipendio annuale per 2.000. Per 60.000 all anno ottieni circa 30 all ora. Non e perfetto, ma e veloce.' },
    { question: 'Qual e la differenza tra stipendio mensile e bisettimanale?', answer: 'Lo stipendio mensile prevede 12 pagamenti l anno. Il pagamento bisettimanale di solito prevede 26 pagamenti l anno.' },
  ],
  nl: [
    { question: 'Hoeveel is 20 per uur per jaar?', answer: 'Bij 20 per uur, 40 uur per week en 52 weken per jaar is het jaarsalaris 41.600. Bij 50 werkweken is dat 40.000.' },
    { question: 'Moet ik verlof en feestdagen meenemen?', answer: 'Dat hangt af van uw doel. Voor baanvergelijking gebruikt u volledige contracturen. Voor effectief uurloon trekt u verlof en feestdagen af.' },
    { question: 'Hoe bereken ik overwerk?', answer: 'Overwerk wordt vaak betaald tegen 1,5x het normale tarief. Bij 25 per uur is dat 37,50 per uur.' },
    { question: 'Wat is de snelle hoofdrekentruc voor jaarloon naar uurloon?', answer: 'Deel het jaarsalaris door 2.000. Bij 60.000 per jaar is dat ongeveer 30 per uur. Niet exact, wel snel.' },
    { question: 'Wat is het verschil tussen maandloon en tweewekelijkse betaling?', answer: 'Maandloon betekent 12 betalingen per jaar. Tweewekelijkse betaling betekent meestal 26 betalingen per jaar.' },
  ],
  pl: [
    { question: 'Ile rocznie daje 20 za godzinę?', answer: 'Przy 20 za godzinę, 40 godzinach tygodniowo i 52 tygodniach rocznie pensja roczna wynosi 41 600. Przy 50 tygodniach to 40 000.' },
    { question: 'Czy uwzględniać urlop i święta?', answer: 'To zależy od celu. Do porównania ofert użyj pełnych godzin z umowy. Do stawki efektywnej odejmij urlop i święta.' },
    { question: 'Jak obliczyć nadgodziny?', answer: 'Nadgodziny często płaci się jako 1,5x stawki podstawowej. Przy 25 za godzinę daje to 37,50 za godzinę.' },
    { question: 'Jaki jest szybki skrót z pensji rocznej na godzinową?', answer: 'Podziel pensję roczną przez 2 000. Dla 60 000 rocznie wychodzi około 30 za godzinę. To nie jest idealnie dokładne, ale szybkie.' },
    { question: 'Czym różni się pensja miesięczna od dwutygodniowej?', answer: 'Pensja miesięczna oznacza 12 wypłat rocznie. Płatność dwutygodniowa zwykle oznacza 26 wypłat rocznie.' },
  ],
  ko: [
    { question: '시급 20은 연봉으로 얼마인가요?', answer: '시급 20, 주 40시간, 연 52주 기준이면 연봉은 41,600입니다. 50주 기준이면 40,000입니다.' },
    { question: '유급휴가와 공휴일을 포함해야 하나요?', answer: '목적에 따라 다릅니다. 직업 비교에는 전체 계약 시간을 사용하고, 실제 시급을 보려면 휴가와 공휴일을 총 시간에서 빼세요.' },
    { question: '초과 근무 수당은 어떻게 계산하나요?', answer: '초과 근무는 보통 기본 시급의 1.5배로 계산됩니다. 시급 25라면 1.5배는 37.50입니다.' },
    { question: '연봉을 시급으로 빠르게 계산하는 방법은?', answer: '연봉을 2,000으로 나누세요. 연봉 60,000이면 약 30/시간입니다. 완전히 정확하진 않지만 빠른 추정에 좋습니다.' },
    { question: '월급과 격주 급여는 어떻게 다른가요?', answer: '월급은 1년에 12번 지급됩니다. 격주 급여는 보통 1년에 26번 지급됩니다.' },
  ],
};

export function getHomepageContent(language: string): HomepageContent {
  const content = {
    ...english,
    ...(localizedShell[language] || {}),
    ...(remainingLocalized[language] || {}),
  };
  const extension = faqExtensions[language] || [];

  return {
    ...content,
    faqs: [...content.faqs, ...extension].slice(0, english.faqs.length),
  };
}
