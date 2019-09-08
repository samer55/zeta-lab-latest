import React from 'react';
import { Button, View, Text ,ScrollView} from 'react-native';
import { TabNavigator, StackNavigator,SwitchNavigator } from 'react-navigation';
import Grid from './grid'
import PHOTOS from './grid'
class CBC extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
        An analysis gives important information about the types and numbers of cells in the blood, especially red blood cells, white blood cells, and platelets.) It is a routine examination to take a complete picture of blood and helps in the diagnosis of many diseases,
. And the detection of anemia - Anemia and identify the amount of blood lost in the event of bleeding (Bleeding).
Diagnosis of hypercyclicysis (polycythemia) and diagnosis of leukemia (leukemia
RBCs – Red Blood Cells count

The total number of red blood cells responsible for carrying oxygen to various cells of the body. Number of red blood cells -
Hct - (Hematocrite)
The proportion of red blood cells in the blood sample
- Hb - Hemoglobin
The substance responsible for carrying oxygen within the red blood cells. Through which the strength of blood is determined
MCV:
    Is the average size of red blood cells, which is the ratio of hematocrit (Hct) to the number of red blood cells
White Blood Cells))
It is part of the body is immune system and helps to counter any bacterial or viral infection.
- Blood Platelets
Smaller blood cells are responsible for blood clotting and protection from bleeding.

</Text>

      </View>
    );
  }
}
class Lipidprofile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',flexDirection:'column',backgroundColor:'white' }}>
      <ScrollView>

        <Text style={{fontSize:20}}>
        Is a set of analyzes to measure the level of fat and cholesterol and also measure the level of lipoproteins.
Some tests require fasting for a period of 9 to 12 hours before analysis, while others do not.
You should not eat high-fat foods the night before the test.
The test is performed to help determine the risk of heart problems and blood flow, including heart attacks and strokes.

</Text>
<Text style={{fontWeight:'bold',fontSize:15}}>Serum triglycerides</Text>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}>

<Text style={{fontSize:20}}>
 It is a type of fat. The body stores calories that are not immediately used by these triglycerides circulating in the blood to save energy for your muscles to functions. Triglyceride enters the blood after eating. If you eat more calories than your body needs, the level of triglycerides may be high.

</Text>
<Text>
  •	Normal less than 150
  </Text>
  <Text>
	•	Critical limit 150- 199
  </Text>
  <Text>
	•	High 200- 499
  </Text>
  <Text>
	•	Very high more than 500
  </Text>
  <Text style={{fontSize:20,fontWeight:'bold'}}>
  Serum total cholesterol
  </Text>
  <Text>
  Soft wax-like material is present throughout the body. Your body needs a little cholesterol to work properly. But too much cholesterol can block the arteries and lead to heart disease. Everyone must undergo a first-time screening test at the age of 35 and a 45-year-old woman.
</Text>
<Text>
Follow-up testing should be done:
    Every 5 years if your results are normal.
    Often people with diabetes, high blood pressure, heart disease, stroke, or blood flow problems to the legs or feet.
   You should check every year or so if you take medications to control high cholesterol.
Cholesterol
</Text>
</View>
<View style={{backgroundColor:'red',flexDirection:'column',borderWidth:1,borderColor:'black'}}><Text style={{fontSize:20,color:'white'}}>
Severity<Text>--</Text>Adult<Text>--</Text>Children and Adolescents


normal<Text>--</Text>Less than 200<Text>--</Text>Less than 170


Critical Limit<Text>--</Text>220 : 239<Text>--</Text>170 : 199


hight<Text>--</Text>More than 240<Text>--</Text>More than 200</Text>
</View>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}>

<Text style={{fontSize:20,fontWeight:'bold'}}>
LDL</Text>
<Text>
It is called "bad cholesterol" because it takes cholesterol to the arteries, where it collects in the walls of the arteries. Too much cholesterol in the arteries may lead to plaque buildup known as arteriosclerosis. This can increase the risk of arterial thrombosis. If a blood clot separates and reaches arteries in the heart or brain, you may have a stroke or a heart attack.
Sediment accumulation may reduce the flow of blood and oxygen to the main organs. Lack of oxygen to your organs or arteries can lead to kidney or peripheral arterial disease, as well as a heart attack or stroke.
</Text>
</View>
<View style={{backgroundColor:'red',flexDirection:'column',borderWidth:1,borderColor:'black'}}><Text style={{fontSize:20,color:'white'}}>
Severity<Text>--</Text>Adult<Text>--</Text>Children and Adolescents


normal<Text>--</Text>Less than 150 mg / 100 ml<Text>--</Text>Less than 110


Critical Limit<Text>--</Text>150: 190 mg / 100 ml<Text>--</Text>110 : 129


hight<Text>--</Text>More than 190 mg / 100 ml<Text>--</Text>More than 130</Text>
</View>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}>

<Text style={{fontSize:20,fontWeight:'bold'}}>
HDL</Text>
<Text>
HDL is known as "good cholesterol" because it transfers cholesterol to the liver to get rid of your body. HDL helps rid the body of excess cholesterol, so it is unlikely to end up in the arteries.
</Text>
</View>
<View style={{backgroundColor:'red',flexDirection:'column',borderWidth:1,borderColor:'black'}}><Text style={{fontSize:20,color:'white'}}>
Severity<Text>--</Text>Male<Text>--</Text>Female


normal<Text>--</Text>Higher than 55 mg / 100 ml<Text>--</Text>Higher than 65


Critical Limit<Text>--</Text>35 mg / 100 ml<Text>--</Text>45 : 65


hight<Text>--</Text>Less than 35 mg / 100 ml<Text>--</Text>Less than 45</Text>
</View>


</ScrollView>
      </View>
    );
  }
}class TSH extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',flexDirection:'column',backgroundColor:'white' }}>
      <ScrollView>
        <Text style={{fontSize:20}}>
        This hormone is excreted from the front of the pituitary gland on the orders of the thyroid hormone Thyrotropin-Releasing Hormone, which stimulates the growth of the thyroid gland and hormone secretion.
</Text>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}>

<Text style={{fontSize:20}}>
The relationship between this hormone and thyroid hormone is closely related. When thyroid hormone secretion decreases, TSH secretion is increased, which stimulates the thyroid gland to secrete these hormones. When thyroid hormone levels rise, this inhibits the secretion of TSH, This analysis is used in neonatal screening to diagnose early hypothyroidism. It is also used to detect and diagnose thyroid diseases, and to follow up on treatment in hypothyroidism or hyperactivity. In cases of hypothyroidism, the gland excretes large amounts of T3 and T4, thus reducing the secretion of the pituitary gland to the hormone to reduce the level of TSH in the blood. in a
</Text>
<Text style={{fontSize:20}}>
TSH secretion is increased in cases of hypothyroidism as an attempt to stimulate the thyroid gland to secrete more of these hormones.
Some drugs, such as oral contraceptives and aspirin, may affect T4, while FT4 is not affected.
As in the case of TSH, if you are taking medications to treat hypothyroidism, it is recommended that the analysis be performed before the daily dose.
</Text>
  <Text>
  T4 5.4-11.5 mcg / dL,
  </Text>
  <Text>
  T3 105-245 ng / dL.
  </Text>
  <Text>
  free part, 0.7-2.0 ng / dL,
  </Text>
  <Text style={{fontSize:20,fontWeight:'bold'}}>
  FT3 between 260-480 pg / dL.
  </Text>
</View>

</ScrollView>
      </View>
    );
  }
}class Ferritin extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20}}>Ferritin</Text>
<Text style={{fontSize:15}}>
Is an intracellular protein that controls iron storage and release
Ferritin is stored in the cells of the body until it is time to create more red blood cells. The body will refer to the cells to release ferritin. The ferrite is then connected to another substance called transferin.
</Text>
<Text style={{fontSize:10}}>
female 15-150ng / l
</Text>
<Text style={{fontSize:10}}>
male 30-400 ng / l
</Text>
      </View>
    );
  }
}class zinc extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20}}>Zinc</Text>
<Text style={{fontSize:15}}>
يلعب الزنك دورا حيويا في وجود البروتين الذي يساعد على تنظيم إنتاج الخلايا في الجهاز المناعي للجسم البشري. يتركز الزنك في أقوى عضلات الجسم وخاصة في خلايا الدم البيضاء والحمراء ، وشبكية العين ، الجلد، الكبد، والكلى والعظام والبنكرياس، والسائل المنوي وغدة البروستاتا في الرجال التي تحتوي أيضا على كميات كبيرة من الزنك .
يحتوي جسم الإنسان على أكثر من 300 إنزيم مختلف والذي يتطلب وجود الزنك ليعمل الجسم بكامل انشطته الطبيعية ..
يحتاج الشخص العادي إلى 2-3 غرامات من الزنك في أي وقت من الأوقات، علما ان في الجسم البشري أجهزة تفرز الزنك، مثل الغدة اللعابية، وغدة البروستاتا والبنكرياس. حتى الخلايا المشاركة في نشاط الجهاز المناعي لإفراز الزنك .
</Text>
<Text style={{fontSize:10}}>
women
0.66-1.10
</Text>
<Text style={{fontSize:10}}>
man
0.66-1.10
</Text>
      </View>
    );
  }
}class FSH extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20}}>Follicle-Stimulating Hormone (FSH</Text>
<Text style={{fontSize:15}}>
تفرز الغدةُ النخامية الهرمونَ المنشّط للحوصلة  ولهذا الهرمون دور أساسي في السيطرة على الدورة الشهرية وإنتاج البويضات الناضجة شهرياً، ومن الجدير بالذكر أنّ تركيز الهرمون يختلف طوال دورة الطمث الخاصة بالمرأة بحيث يصل إلى أعلى مستوى له قبل الإباضة مباشرة، أمّا عند الرجال يساعد هذا الهرمون على السيطرة على إنتاج الحيوانات المنوية، ويكون تركيزه ثابتاً ولا يتغير طوال الشهر، يعتبر من الفحوصات المستخدمة لتحديد سبب تأخر الحمل، وقدرة أجزاء الجهاز التناسلي على العمل بشكل سليم،
</Text>
<Text style={{fontSize:15}}>
أسباب إجراء فحص FSH أسباب إجراء الفحص للرجل يمكن إجراء هذا الفحص للرجل لتحديد بعض المشاكل التي قد تسبّب العقم ومنها: تقييم انخفاض عدد الحيوانات المنوية. تقييم قصور الغدد التناسلية، أو وجود خلل وظيفي فيها، أو فشلها. تقييم قصور الخصية الوظيفي.
 الغدةُ النخامية الهرمونَ المنشّط للحوصلة  ولهذا الهرمون دور أساسي في السيطرة على الدورة الشهرية وإنتاج البويضات الناضجة شهرياً، ومن الجدير بالذكر أنّ تركيز الهرمون يختلف طوال دورة الطمث الخاصة بالمرأة بحيث يصل إلى أعلى مستوى له قبل الإباضة مباشرة، أمّا عند الرجال يساعد هذا الهرمون على السيطرة على إنتاج الحيوانات المنوية، ويكون تركيزه ثابتاً ولا يتغير طوال الشهر، يعتبر من الفحوصات المستخدمة لتحديد سبب تأخر الحمل، وقدرة أجزاء الجهاز التناسلي على العمل بشكل سليم،
</Text>
<Text style={{fontSize:15}}>
أسباب إجراء الفحص للمرأة
ومن الأسباب التي تتطلب إجراء الفحص للمرأة ما يلي: تقييم مشاكل العقم. تقييم عدم انتظام الدورة الشهرية، أو انقطاعها كما هو الحال عند بلوغ سن اليأس. تشخيص اضطرابات الغدة النخامية أو الأمراض التي تتعلق بالمبايض.
سباب إجراء الفحص للأطفال لتحديد ما إذا كان الطفل يعاني من البلوغ المبكر، وهو بلوغ الفتيات في سن أقل من 9 سنوات، وبلوغ الفتيان في سن أقل من 10 سنوات، كما يمكن استخدام الاختبار لتحديد ما إذا كان الطفل يعاني من تأخر سن البلوغ
</Text>
<Text style={{fontSize:10}}>
Females from birth to age 7: less than 6.7 IU / L.
</Text>
<Text style={{fontSize:10}}>
Males from birth to age 7: less than 6.7 IU / L.
</Text>
<Text style={{fontSize:10}}>
Males aged 8 years and over: 1.3-19.3 IU / L
</Text>
<Text style={{fontSize:10}}>
. Females aged 8 years and over: Values ​​on the stage of the menstrual cycle are as follows: Serum phase: 3.1 - 7.9 IU / L.
</Text>
<Text style={{fontSize:10}}>
Ovulation: 2.3-18.5 IU / L. a
</Text>
<Text style={{fontSize:10}}>
For the azure phase: 1.4-5.5 IU / L.
</Text>
<Text style={{fontSize:10}}>
Postmenopausal: 30.6-106.3 IU / L
</Text>
      </View>
    );
  }
}class Lh extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20}}>LH)luteinizing hormone</Text>
<Text style={{fontSize:15}}>
عبارة عن بروتين كربوهيدراتيّ، وهو الهرمون المسؤول عن التبويض في جسم المرأة، وإنتاج هرمونيّ البروجيسترون والإستروجين، وهو المسؤول كذلك عن إنتاج هرمون التستوستيرون لدى الرجل في الخصيتين، والذي يحافظ بالتالي على قدرة الرجل على تكوين الحيوانات المنويّة، كما أنّه الهرمون المسؤول عن إنضاح البويضة والحويصلات البويضيّة لدى المرأة في فترة التبويض ، يجب أن يكون بنصف قيمة هرمون "FSH" في الجسم وهذا في الأيام الأولى من الدورة الشهريّة للمرأة، كما واّنه معروف طبيعياً أنّ نسبة هذا الهرمون تزداد بنسبة عالية في أيام التبويض لأنّه الهرمون المسؤول عن تفجير "الجراب" الحاوي للبويضة لدى المرأة وهو السبب في إمكانية حدوث التبويض، كما وتزيد نسبة هذا الهرمون أكثر في سن اليأس "بعد سن الأربعين"، أو حتى نتيجة زيادة هرمون "FSH" في الجسم كذلك. وقد يحدث العكس، أي تنخفض نسبة هذا الهرمون في الجسم لعدّة أسباب منها التداوي بـ "الإستروجين" و "التستوستيرون"، أو نتيجة الإصابة بأورام في الغدة الكظريّة أو المبيضيّة، أو الإصابة بمرض شيهان، أو نتيجة خلل في عمل الغدة النخاميّة في الجسم.
</Text>
<Text style={{fontSize:15}}>
Women in the first half of their menstrual cycle are from 2 to 20 IU per liter,
 It is in the middle of the menstrual cycle, ie in its ovulation period, from 15 to 80 IU per liter.
</Text>
<Text style={{fontSize:15}}>
For males with a normal rate of 1 to 8 IU per liter,
Children do not exceed 0.4 IU per liter.
</Text>
      </View>
    );
  }
}class Testosterone extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20}}>Testosterone test</Text>
<Text style={{fontSize:15}}>
هو الهرمون الجنسي الذكري المسؤول عن نضج الذكور وظهور علامات البلوغ والذي يفرز من الخصيتين.
يفضل قياس مستوى هرمون التستوستيرون في الصباح الباكر حيث يبلغ اقصى مستوى له في الصباح (أي ما يقارب الـ 8 صباحاً).
</Text>
<Text style={{fontSize:15}}>
Children up to 5 months: 75-400 ng / dL.
</Text>
<Text style={{fontSize:15}}>
Children up to 9 years: less than 30 ng / dL.
</Text>
<Text style={{fontSize:10}}>
Aged 10-18 years: from 30-1200 ng / dL.
</Text>
<Text style={{fontSize:10}}>
Young males and older than 19 years and older: 240-950 ng / dl.
</Text>
      </View>

    );
  }
}class Progesterone extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20}}>Progesterone</Text>
<Text style={{fontSize:15}}>
هو هرمون أنثوي يفرزه الجسم الأصفر  في المبيض خلال المرحلة البروجستيرونية اي في اخر اسبوعين من الدورة الشهرية للأنثى بعد الإباضة، وهو من الهرمونات الستيروئيدية.
</Text>
<Text style={{fontSize:15}}>
يتم كذلك تكوين البروجستيرون عند الجنسين في قشر الكظر. كما يتم إفرازة بكميات كبيرة في المشيمة أثناء الحمل، وتتزايد كمياته بتقدم الحمل وتهبط قبل الولادة بأيام. كما يعمل عن طريق تسميك بطانة الرحم المخاطية بحيث يمكن زرع البويضة المخصبة
</Text>
<Text style={{fontSize:15}}>
Follicular  0.20-1.50ng/ml
</Text>
<Text style={{fontSize:10}}>
0.64-4.77nmol/l
</Text>
<Text style={{fontSize:10}}>
Ovulation  .80-3.00ng/ml
</Text>
<Text style={{fontSize:10}}>
2.54-9.54nmol/l
</Text>
<Text style={{fontSize:10}}>
Luteal 1.70-27.0ng/ml
</Text>
<Text style={{fontSize:10}}>
5.41-85.86nmol/l
</Text>
<Text style={{fontSize:10}}>
Post menopause .10-0.80ng/ml
</Text>
<Text style={{fontSize:10}}>
0.32-2.54nmol
</Text>
<Text style={{fontSize:10}}>
Male 0.20-1.40ng/ml
</Text>
<Text style={{fontSize:10}}>
0.64-4.45nmol/l
</Text>
      </View>
    );
  }
}class B12 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20}}>
        It is a vitamin that dissolves in water and has a key role in the normal functioning of the brain and nervous system through the formation of myelin and the maturity of red blood cells. It is one of the B vitamins. Vitamin B12 is involved in the representation of each cell in the human body, especially cells that contribute to the synthesis of DNA as well as lipid metabolism and amino acid. It is not possible for fungi, plants or animals (even humans) to produce vitamin B12 alone. Bacteria and enzymes have the enzymes needed to produce vitamin B12. . Vitamin B12 deficiency can cause irreparable damage, especially in the brain and nervous system. Some symptoms may appear in cases where vitamin deficiency is slightly below average, such as fatigue, lethargy, frustration, poor memory, shortness of breath, headache and skin pigmentation. These symptoms are especially apparent in older people over the age of 60, Vitamin B12, where they produce less acid in the stomach due to aging. Vitamin B12 deficiency can also cause mania and psychosis.
</Text>
        <Text style={{fontSize:20}}>200_1000pg/ml
</Text>

      </View>
    );
  }
}class dihydroxy extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:20}}>
      فيتامين د هو الفيتامين المعروف بفيتامين الشمس؛ إذ إنّ المصدر الأساسي للحصول عليه هو تعرّض الجسم لأشعة الشمس حتى يُنتج الجسم هذا الفيتامين، وذلك عن طريق تعرّض الجلد للأشعة فوق البنفسجية من أشعة الشمس، فيقوم بتحويل الكولستيرول الموجود في الجلد عن طريق سلسلة من العمليات الحيوية إلى فيتامين د. ويعد تعريض اليدين والرجلين للشمس من خمسٍ إلى عشر دقائق، مرتين إلى ثلاث مرات في الأسبوع مدةً كافيةً لتزويد الجسم بحاجته من فيتامين د، بالإضافة إلى توافره بكميات محدودة في بعض الأطعمة. حتوي فيتامين د على العديد من الوظائف المهمة. ربما الأكثر حيوية هي تنظيم امتصاص الكالسيوم والفوسفور ، وتسهيل وظيفة نظام المناعة الطبيعية. الحصول على كمية كافية من فيتامين (د) مهم للنمو الطبيعي وتطور العظام والأسنان ، وكذلك تحسين المقاومة ضد بعض الأمراض.
</Text>
      <Text style={{fontSize:20}}>إذا لم يحصل جسمك على ما يكفي من فيتامين د ، فأنت عرضة لخطر الإصابة بتشوهات في العظام مثل العظام الرخوة (لين العظام) أو العظام الهشة (هشاشة العظام).

</Text>
<Text style={{fontSize:10}}>
N=19-54pg/ml

</Text>

      </View>
    );
  }
}class Hydroxy extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:20}}>
      The body converts vitamin D into a chemical known as 25-hydroxy vitamin D, also called calcidiol.
      Examination of 25-hydroxy vitamin D is the best way to control vitamin D levels. The amount of 25 hydroxy vitamin D in the blood is a good indicator of the amount of vitamin D your body possesses. The test can determine whether vitamin D levels are too high or too low It can be an important indicator of osteoporosis (bone weakness) and rickets (bone deformity).
</Text>
      <Text style={{fontSize:20}}>
      A 25-hydroxy vitamin D examination is performed for several different reasons. It can help them to know whether vitamin D is too much or too little to cause bone weakness or other deformities. It can also control people at risk of vitamin D deficiency,

</Text>
<Text style={{fontSize:10}}>
Deficieny less than 20ng/ml

</Text>
<Text style={{fontSize:10}}>
Insufficiency  20-29ng/ml

</Text>
<Text style={{fontSize:10}}>
Sufficiency   30-100ng/ml

</Text>
<Text style={{fontSize:10}}>
Toxicity more than 100ng/ml

</Text>
      </View>
    );
  }
}class Pt extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:20}}>
      هو مقدار الوقت اللازم لتخثر بلازما الدم. البروثرومبين ، المعروف أيضا باسم العامل الثاني ، هو واحد فقط من العديد من بروتينات البلازما التي تشارك في عملية التخثر.
      يتم عمل فحص عندما تحصل على قطع وتمزق الأوعية الدموية ، تتجمع الصفائح الدموية في مكان الجرح. حيث يقومون بإنشاء قابس مؤقت لوقف النزيف. من أجل إنتاج جلطة دموية قوية ، تعمل سلسلة من 12 بروتينًا بلازميًا ، أو "عوامل تجلط الدم" معًا لصنع مادة تسمى الفيبرين ، والتي تقوم بإغلاق الجرح.
</Text>
      <Text style={{fontSize:20}}>
      يمكن أن يسبب اضطراب النزيف المعروف باسم الهيموفيليا جسمك لخلق بعض عوامل التخثر بشكل غير صحيح ،. قد تؤدي بعض الأدوية أو أمراض الكبد أو نقص فيتامين K إلى تكون الجلطة غير الطبيعية. ذا كنت تتناول دواء الوارفارين الدوائي ، فسيقوم الطبيب بإجراء اختبارات PT منتظمة للتأكد من أنك لا تتناول الكثير من الأدوية. تناول الكثير من الوارفارين يمكن أن يسبب نزيفًا مفرطًا.

</Text>
      </View>
    );
  }
}class INR extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:30}}>INR </Text>
<Text style={{fontSize:20}}>
 هو  نظام طوّرته مُنظمة الصّحة العالميّة للتعبير عن نتائج اختبار زمن البروثرومبين  هو اختبار يستخدم للمساعدة في اكتشاف وتشخيص اضطراب النزيف أو اضطراب التخثر المفرط ؛ تُحسب النسبة الدولية المقيّمة (INR) من نتيجة PT ، وتُستخدم لمراقبة مدى فعالية الوارفارين (مضاد للتجلط)
</Text>
<Text style={{fontSize:10}}>
 1-1.5 IU
</Text>
      </View>
    );
  }
}class PcT extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20}}>
زمن البروثرومبين (PT) هو اختبار يستخدم للمساعدة في اكتشاف وتشخيص اضطراب النزيف أو اضطراب التخثر المفرط ؛ تُحسب النسبة الدولية المقيّمة (INR) من نتيجة PT ، وتُستخدم لمراقبة مدى فعالية الوارفارين (مضاد للتجلط)



pt=12-16 sec</Text>

      </View>
    );
  }
}
class ptt extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20}}>
        يؤدي النزيف إلى سلسلة من التفاعلات المعروفة باسم شلال التخثر. التخثر هو العملية التي يستخدمها جسمك لوقف النزيف. تخلق الخلايا المسماة بالصفائح الدموية قابسًا لتغطية الأنسجة التالفة. ثم تتفاعل عوامل تخثر الجسم لتشكيل جلطة دموية. انخفاض  عوامل التخثر يمكن أن تمنع تشكل الجلطة. يمكن أن يؤدي النقص في عوامل التخثر إلى أعراض مثل النزيف المفرط ، ونزيف الأنف المستمر ، وكدمات سهلة.  يستخدم الفحص كجزء من التحقيق في اضطراب نزيف محتمل أو جلطة دموية (حلقة تخثر) ؛ لمراقبةالعلاج مضاد للتجلط الهيبارين. كجزء من الفحص قبل الجراحة أو إجراء جراحي آخر

</Text>
<Text>
26-35sec
</Text>

      </View>
    );
  }
}
class ESR extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20}}>
        Is a test to examine the speed of deposition of red blood cells within a test sample, with the intention of detecting changes in blood proteins, to link these changes to diseases in the body, and the extent of its response to the treatments provided to him
        </Text>
        <Text style={{fontSize:10}}>less 25 mm/H</Text>

      </View>
    );
  }
}class Fasting extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:20}}>
      The amount of glucose in the blood is measured. When a person is eating food, glucose levels rise in his blood, reaching his maximum after an hour of eating. In the normal state, the pancreas secrete the insulin hormone to control the level of glucose in the blood by helping to break it to be used by the body cells to get On energy or to be stored until needed One problem is the lack of enough insulin, or problems at the level of cell response to isolated insulin, or problems at the same time
</Text>
<Text style={{fontSize:10}}>
Requirement of fasting 8 - 12 hours for eating only

</Text>
<Text style={{fontSize:10}}>
Normal less than 100mg/dl

</Text>
<Text style={{fontSize:10}}>
Pre-diabetes 100-126mg/dl

</Text>
<Text style={{fontSize:10}}>
The incidence of diabetes is more than 126mg/dl

</Text>
      </View>
    );
  }
}class Randomblood extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:20}}>
      هو اختبار دم عشوائي للتحقق من مستويات الجلوكوز (السكر). يتم ذلك عادة عن طريق وخز الإصبع لاخد قطرة صغيرة من الدم. ثم يتم مسح هذا الدم على شريط اختبار من شأنه أن يعطي قراءة الجلوكوز.
</Text>
      <Text style={{fontSize:20}}>
      اختبار جلوكوز عشوائي هو أداة قوية للأشخاص الذين يعانون من مرض السكري. يمكن أن يساعد في تقييم مدى جودة إدارة المرض

</Text>

<Text style={{fontSize:10}}>
Normal less than 140mg/dl

</Text>
<Text style={{fontSize:10}}>
Pre-diabetes 140-200mg/dl

</Text>
<Text style={{fontSize:10}}>
Diabetes more than 200mg/dl

</Text>
      </View>
    );
  }
}class CReactive extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:20}}>
      Is a test in which the detection of the proportion of C-protein produced by the liver, in cases of severe inflammation, which makes it a strong indicator of the presence of inflammation in the body
      Evaporative catalysts develop by activating proton
</Text>
      <Text style={{fontSize:20}}>
      As a result of exposure to various bacterial agents of bacterial, viral, fungal, rheumatism, and other causes, leading to the release of entrolokin-6, and stokins;
      C-reactive protein, which reaches its peak after infection with bacterial agents about forty-eight hours

</Text>

<Text style={{fontSize:10}}>
Normal =less 6 mg/l

</Text>
      </View>

    );
  }
}class Urine extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:20}}>
      Urine analysis is performed to detect the physical properties of urine(Color, macrophage, pH, odor, density)Such as white blood cells, red blood cells, hemoglobin, Urobilinogen, bilirubin,In addition to microscopic examination of urine deposits,Leukocytes, red blood cells, or kidney cells, in addition to detecting the presence of different types of crystals, fungi, or bacteria. Or including epithelial cells
</Text>


      </View>
    );
  }
}class Liver extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:20}}>
      Total protein-TP1_: which combines albumin protein and globulin protein in addition to the coagulation factor, which is the protein of fibrinogen and is estimated based on certain coagulation tests. It is used to check the metabolic or metabolic capacity of the liver The albumin is mainly made in the liver and is essential for normal body functions. Albumins are naturally present in the body, making up about 60% of all plasma proteins.
</Text>
      <Text style={{fontSize:20}}>
      Normal 5.5_9 g/dl

</Text>
      </View>
    );
  }
}class Alanine extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:20}}>
      هو عبارة عن إنزيم يوجد في خلايا الكبد والكلى،   ويوجد في كميات قليلة منه في القلب والعضلات
      فهو يساعد في الكشف عن الأضرار الناجمة عن التهاب الكبد أو نتيجة استخدام بعض الأدوية أو بعض المواد الأخرى التي قد تكون سامة للكبد
</Text>
      <Text style={{fontSize:20}}>
      normalrange=4-36 unit/l

</Text>

      </View>

    );
  }
}class Glutamyl extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:20}}>
      هو انزيم يعمل  بمثابة جزيء نقل ، مما يساعد على تحريك الجزيئات الأخرى في جميع أنحاء الجسم. وهو يلعب دورًا مهمًا في مساعدة الكبد على استقلاب الأدوية والسموم الأخرى.
</Text>
      <Text style={{fontSize:20}}>
      يتركز GGT في الكبد ، ولكنه موجود أيضًا في المرارة والطحال والبنكرياس والكليتين. وعادة ما تكون مستويات GGT في الدم مرتفعة عندما يتلف الكبد. غالباً ما يتم هذا الاختبار مع اختبارات أخرى تقيس
      إنزيمات الكبد إذا كان هناك احتمال لتلف الكبد

</Text>

<Text style={{fontSize:10}}>
n=0-15 uni/l  صيام 8 ساعات

</Text>
      </View>
    );
  }
}class Lactate extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:20}}>
      هو إنزيم مطلوب أثناء عملية تحويل السكر إلى طاقة لخلاياك. LDH موجود في أنواع كثيرة من الأعضاء والأنسجة في جميع أنحاء الجسم ، بما في ذلك الكبد والقلب والبنكرياس والكليتين والعضلات الهيكلية والأنسجة الليمفاوية وخلايا الدم.
</Text>
      <Text style={{fontSize:20}}>
      عندما يتسبب المرض أو الإصابة في تلف خلاياك ، فقد يتم إطلاق LDH في مجرى الدم ، مما يؤدي إلى ارتفاع مستوى LDH في الدم. ارتفاع LDH في الدم يشير إلى تلف الخلايا الحادة أو المزمنة

</Text>

<Text style={{fontSize:10}}>
105-333 unit/l

</Text>
      </View>

    );
  }
}class ALP extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:20}}>
      انزيم يعمل على قياس  كمية إنزيم الفوسفاتيز القلوي
      تشير المستويات غير الطبيعية لـ ALP في الدم إلى وجود مشكلة في الكبد أو المرارة أو العظام. ومع ذلك ، فإنها قد تشير أيضًا إلى سوء التغذية ، أو أورام سرطان الكلى ، أو مشاكل معوية ، أو مشكلة في البنكرياس ، أو عدوى خطيرة. يختلف النطاق الطبيعي لـ ALP من شخص لآخر ويعتمد على عمرك ونوع الدم ونوع الجنس وما إذا كنت حاملاً
</Text>
      <Text style={{fontSize:20}}>
      41-133 units / liter.

</Text>


      </View>
    );
  }
}class Bilirubin extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:20}}>
      هي صبغة صفراء موجودة في الدم والبراز اختبار البيليروبين يحدد مستويات البيليروبين في الجسم
</Text>
      <Text style={{fontSize:20}}>
      في بعض الأحيان لا يستطيع الكبد معالجة البيليروبين في الجسم. يمكن أن يكون هذا بسبب وجود زيادة في البيليروبين أو انسدادات أو التهابات في الكبد.

</Text>
<Text style={{fontSize:20}}>
عندما يحتوي جسمك على الكثير من البيليروبين ، فإن بشرتك وبياض عينيك ستبدأ بالصفار. تسمى هذه الحالة باليرقان.
 بعض الأحيان لا يستطيع الكبد معالجة البيليروبين في الجسم. يمكن أن يكون هذا بسبب وجود زيادة في البيليروبين أو انسدادات أو التهابات في الكبد.

</Text>
<Text style={{fontSize:20}}>
يصنع البيليروبين في الجسم عندما ينهار بروتين الهيموجلوبين في خلايا الدم الحمراء القديمة. انهيار الخلايا القديمة هو عملية طبيعية وصحية.
ينتقل البيليروبين إلى الكبد. من ثم تتم معالجة البيليروبين ، ويخلط في الصفراء ، ثم تفرز في القنوات الصفراوية وتخزن في المرارة.

</Text>
<Text style={{fontSize:20}}>
في نهاية المطاف ، يتم إطلاق الصفراء في الأمعاء الدقيقة للمساعدة في هضم الدهون. تفرز في النهاية في البراز.

</Text>
<Text style={{fontSize:20}}>
يسمى البيليروبين المتصل بالكبد بحامض الجلوكورونيك ، وهو حمض مشتق من الجلوكوز ، بيليروبين المباشر أو المترافق. يسمى البيليروبين غير المرتبط بحمض الغلوكورونيك غير مباشر ، أو غير مقترن ، البيليروبين. ويسمى كل البيليروبين في الدم معا "البيليروبين الكلي".

</Text>
<Text style={{fontSize:20}}>
سيحصل اختبار شامل للبيليروبين على الدم على عدد دقيق من مستويات البيليروبين الثلاثة في دمك: المباشر ، وغير المباشر ، والإجمالي.

</Text>
<Text style={{fontSize:10}}>
Direct over 0.30mg / dl

</Text>
<Text style={{fontSize:10}}>
More than 5.13umol / l

</Text>
<Text style={{fontSize:10}}>
Total up to1.2mg / dl

</Text>
<Text style={{fontSize:10}}>
Up to 20.52 micro mol / l

</Text>
      </View>
    );
  }
}class Kft extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',flexDirection:'column',backgroundColor:'white' }}>
      <ScrollView>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Urine analysis</Text>
        <Text style={{fontSize:20}}>
        This analysis is performed to ensure that there is no excess protein, blood, bacteria, pus, or sugar in the urine. The analysis is performed by examining the urine sample under a microscope, or by dipping the bar
</Text>
<Text style={{fontWeight:'bold',fontSize:15}}>Creatinine Clearance</Text>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}>

<Text style={{fontSize:20}}>
Creatinine is a natural waste produced by the normal movement of muscles. This test is performed to compare creatinine levels in a 24-hour urine sample with creatinine level in the blood to measure the amount of waste disposed of by the kidneys per minute.
<Text>
  71-151ml/min
  </Text>
  <Text>
  Microalbuminuria
  </Text>
  <Text>
  Is a urine test that measures the amount of albumin in the urine.
  Albumin is a protein used by the body to grow cells and to help repair tissues. A certain level of urine may be a sign of kidney damage.
  <Text>
  Bjith kidneys are responsible for removing waste of blood and regulate the levels of water fluids in your body. Healthy kidneys make sure that the waste is filtered from your body and that the nutrients and proteins necessary for your health, such as albumin, remain in your body.
  </Text>
  <Text style={{fontSize:20,fontWeight:'bold'}}>
  Less than 30mg/l
  </Text>

<Text style={{fontSize:14,fontWeight:'bold'}}>

Serum creatinine

</Text>
</View>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}>
<Text style={{fontSize:20,color:'black'}}>
Creatinine is a molecule of chemical waste generated by the metabolism of muscle.
    Creatinine is produced from creatine, a molecule of great importance for the production of muscle energy.
    Approximately 2% of body creatin is converted to creatinine every day.

</Text>
</View>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}>

<Text style={{fontSize:20}}>
Creatinine is transferred through the blood stream to the kidneys. The kidneys filter most of the creatinine and dispose of it in the urine.

</Text>
<Text>
, Creatinine production naturally remains essentially unchanged on a daily basis. Muscle mass in the body is relatively constant from day to day
</Text>
</View>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}><Text style={{fontSize:20,color:'black'}}>
62-106umol/l

</Text>
<Text>
Female 0.5-0.9mg/dl

</Text>
<Text>
44-80umol

</Text>
<Text>
Children 0.3-0.87mg/dl

</Text>
<Text>
26.5-61.9

</Text>
<Text>
Infant 0.17-0.42mg/dl

</Text>
<Text>
15-37umol/l

</Text>
<Text style={{fontSize:24,fontWeight:'bold'}}>
Blood urea nitrogen
</Text>
<Text style={{fontSize:20}}>
Nitrogen is a natural waste product created by the body after eating. When the liver breaks the proteins in your food - it produces urea nitrogen in the blood, also known as BUN. The liver releases the substance into the blood, eventually ending up in the kidneys. The amount of waste in the blood is checked. If the levels are outside the normal range, it may mean that your kidney or liver is not working properly.
</Text>
<Text style={{fontSize:10}}>
Normalrange=7.94-22.9mg/dl
</Text>
<Text style={{fontSize:10}}>
1.32-3.82mmol/l
</Text>
<Text style={{fontSize:20,fontWeight:'bold'}}>
Glomerular filtration rate

</Text>
<Text>
It is used to verify the efficiency of kidney functions, in which the amount of blood passing through the glomeruli is calculated every minute.
</Text>
<Text style={{fontSize:20,fontWeight:'bold'}}>
Uric acid

</Text>
<Text>
Uric acid is a chemical produced when the body breaks down foods containing organic compounds called purines. The purines are created through the natural process of cell damage in the body
</Text>
<Text>
Most uric acid is dissolved in the blood, filtered through the kidneys, and is expelled in the urine. Sometimes the body produces too much uric acid or does not filter enough of it. (Hyperuricemia) is the name of the disorder that occurs when you have too much uric acid in your body. High levels of uric acid are associated with a condition called gout. Gout is a form of arthritis that causes swelling of the joints, especially in the feet and large toes. Another cause of hyperuricemia is increased blood cell death, due to cancer or cancer treatments. This can lead to the accumulation of uric acid in the body.
</Text>
<Text>
It is also possible to have very little uric acid in your blood, which is a symptom of liver or kidney disease. It is also a symptom of Fanconi syndrome, a disorder in kidney tubes that inhibits the absorption of substances such as glucose and uric acid. These substances are then passed in urine instead.
</Text>

<Text>
Male 3.4-7mg/dl                     urine  2.2-275mg/dl
                                    131-16362umol/l
     202-416umol/l
Female 2.4-5.7mg/dl
      143-339umol
</Text>
</View>
<Text style={{fontSize:20,fontWeight:'bold'}}>
Serum Sodium

</Text>
<Text style={{fontSize:15}}>
It is a particularly important component in the functions of nerves and muscles. Your body maintains sodium balance through a variety of mechanisms. Sodium enters the blood through food and drink. The blood is removed from the blood through urine, faeces and sweat. The body needs sodium to control blood pressure. When the sodium is less than the desired limit, signals are sent to the kidneys and sweat glands to stimulate the retention of water in the body to maintain sodium in the human body. Required, the kidneys get rid of excess This can lead to the accumulation of fluid between the cells and increase blood volume accordingly, which means more work for the heart, and more pressure on the blood vessels, Which may cause over time to spasm of blood vessels, high blood pressure or the incidence of heart attacks or strokes.

</Text>
<Text>
136-145mmol/l

</Text>
<Text style={{fontSize:20,fontWeight:'bold'}}>
Serum Potassium

</Text>
<Text>
It plays an important role in maintaining the electrical balance on the cell surface. It is very important in the process of communication between different cells in the nervous system and communication between the nerves and muscles. It is also important in the process of transfer of signals and food from outside the cell into the aldosterone works on the secretion of potassium in the urine when it rises, and maintain the cation when it is low level and problems caused by the change in the level of potassium is dysfunction of the nervous system and muscles and serious disorders Heart systems
3.5-5.1 mmol/l
</Text>
<Text style={{fontSize:20,fontWeight:'bold'}}>
Chloride
</Text>
<Text>
It plays an important role in maintaining the electrical balance on the cell surface. It is very important in the process of communication between different cells in the nervous system and communication between the nerves and muscles. It is also important in the process of transfer of signals and food from outside the cell into the aldosterone works on the secretion of potassium in the urine when it rises, and maintain the cation when it is low level and problems caused by the change in the level of potassium is dysfunction of the nervous system and muscles and serious disorders Heart systems
98-107 mmol/l

</Text>
<Text style={{fontSize:20,fontWeight:'bold'}}>
Homocysteine

</Text>
<Text>
The amino acid is found as a building block in all food proteins, and this harmful amino acid is produced in the body; it cracks the blood vessels, leads to atherosclerosis, and clogged it; which may cause the stroke, or Heart attack, and Alzheimers disease, if it increases its concentration on its normal blood level, and has only one benefit, namely the formation of the amino acid "Cysteine", which enters the formation of yeast and hormones, which include insulin hormone, which regulates the concentration of sugar Blood, but "cystine" is also found in human-treated proteins. Requesting examination to help determine if you are deficient in folic acid or vitamin B 12. To determine whether you are at increased risk of heart attack or stroke

</Text>
<Text style={{fontSize:30}}>
Male 5.5-16.2

</Text>
<Text style={{fontSize:30}}>
Female 4.4-13.5

</Text>
</ScrollView>
      </View>
    );
  }
}class folic extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
        Folic acid, or folic acid, is a vitamin B complex. Folic acid is essential for the production of red blood cells. It can be considered one of the most complex vitamins. It contributes to improving the health of hair, skin, nervous system and symptoms. Which indicate a lack of anemia. Gastrointestinal disorders, thus difficulty absorption of nutrients or. Feeling tired and tired. Feeling tense and anxious. Disorders of the nervous system. The possibility of acidity of the stomach Stomach
        Folic acid is a vitamin B 9, which is necessary for the production of healthy red blood cells. These cells provide oxygen to the entire body,. Folic acid is also important for the normal growth of the fetus. It helps in the growth of cells and tissues in addition to the creation of DNA, which transmits genetic information. This is why folic acid is especially important for pregnant women and pregnant women.
        </Text>

<Text>
Women should take 400 micrograms of folic acid every day, starting at least one month before conception. Taking extra folic acid during pregnancy can help prevent birth defects in the brain and cord thorns
3-17ng/ml
6.8-38.5nmol/l

</Text>
      </View>
    );
  }
}
class Hba1c extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
        Is a form of hemoglobin (the blood pigment that carries oxygen) that is linked to glucose.
        The blood test for HbA1c is routinely performed in people with type 1 and type 2 diabetes.
        The level of HbA1c reflects how diabetes is controlled. It reflects glucose levels in the blood over the past six to eight weeks and does not reflect a daily rise and fall of blood glucose
</Text>
        <Text>5.7% to 6.4% normal
Pre-diabetic 5.7-6.4
Diabetes more than 6.5
</Text>

      </View>
    );
  }
}
class A extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
        Is a protein that carries HDL ("good") cholesterol. Helps to start an HDL process to remove the bad types of cholesterol from your body. In this way, lipoprotein A can help reduce the risk of cardiovascular disease. Although lipoprotein levels can be measured, it is common to measure HDL and LDL cholesterol ("bad") when looking at cardiovascular risk.
        You may need this test to see if you are at increased risk for heart disease. If you are already suffering from heart problems such as a heart attack. This test is not often used as a fat profile. It measures the level of body fat and HDL cholesterol. But some studies suggest that the results of the apolipoprotein A test are a good measure of the risk of heart disease.
        This test may help improve your risk if you have a family history
        Fasting must be 12-14
</Text>
        <Text> male 104-202mg/dl
female108-225mg/dl
</Text>

      </View>
    );
  }
}
class Transferrin extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
        It is the main protein in the blood that binds to iron and travels throughout the body. The transferrin test directly measures the level of blood in the bloodstream.
        The examination is done early in the morning and must be 8 hours fast
</Text>
        <Text>Iron supplements should be stopped for at least 24 hours
200.00-360.000mg / dl
</Text>
        <Text>Total Iron Binding Capacity (TIBC)
        TIBC is a type of blood test that measures whether there is too much iron or too little in the bloodstream.
        Iron is a type of metal found in all cells of the body. You can get the iron you need through your diet. Once iron enters the body, it is transported through the bloodstream by a protein called transferrin, which is produced by the liver. The TIBC test assessed the transferrin transfer range through iron blood.
</Text>
        <Text>The check is done early in the morning
Fasting for 8 hours
Iron supplements should be stopped for at least 24 hours
240-450 μg / dl
</Text>

      </View>
    );
  }
}
class tpo extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
        Are antibodies that develop as a result of an autoimmune attack on the thyroid gland. They target the gland, usually leading to the destruction of the gland over time. Antibodies to TPOAb attack the thyroid peroxidase, an enzyme that plays a role in converting T4 to T3. High levels of TPOAb can be a sign of inflammation of the gland or destruction of tissues such as Hashimotos disease.
</Text>

      </View>
    );
  }
}
class Protein extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>هو واحد من العديد من البروتينات الحيوية في جسم الإنسان.حيث  يلعب دورا كبيرا في السيطرة على عملية تخثر الدم لديك. إن قدرة دمك على التجلط مهمة للغاية.حيث يعمل على  منع فقدان الدم الزائد عند حدوث إصابة. ومع ذلك ، يمكن أن تكون الجلطة الدموية في الشريان أو الوريد (تسمى تجلط الدم) خطيرة للغاية.
بروتين S هو مضاد للتخثر. إذا لم يكن هناك ما يكفي منه ، فقد يتكون نوع ضار من الجلطة الدموية. هناك حاجة إلى الكمية الصحيحة من البروتين S لضمان عمل عملية تخثر الدم بشكل صحيح.
</Text>
        <Text>في بعض الحالات ، يكون نقص بروتين s))وراثيا. بعض الناس يولدون ببساطة مع نقص في هذا المضاد للتخثر. قد يطلب الطبيب إجراء الاختبار إذا كان لديك أحد أفراد العائلة المقربين أو أكثر ممن لديهم تاريخ من الجلطات الدموية الخطيرة أو إذا كان أحد أفراد عائلتك يعاني من نقص في بروتين S المعروف.
</Text>
        <Text>بالنسبة لمعظم الأشخاص الذين لديهم نقص في بروتين S ، فإن الجلطة الدموية الخطيرة هي في الغالب أول علامة على أن هناك خطأ ما. وغالبا ما تظهر الجلطة في الساق أو الرئة ، وعادة لا تظهر أي أعراض قبل الحدث
</Text>
        <Text>50-130 male
Female 70-115</Text>

      </View>
    );
  }
}
class Prothrombin extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>هي حالة وراثية تسبب زيادة في احتمالية تشكل الدم لجلطات دموية خطيرة.بحيث جميع االناس  يصنعون بروتيرومبين (ويسمى أيضا العامل الثاني)
ويتم إنتاج بروتين البروثرومبين للمساعدة في تجلط الدم ، ويتم إنتاجه بكميات أكبر بعد تلف أحد الأوعية الدموية.
    الناس الذين لديهم طفرة في جين البروثرومبين ينتجون بروتين بروترمبين أكثر مما هو طبيعي. بما أن هناك المزيد من بروتين البروثرومبين في الدم ، فإن هذا يزيد من احتمالية لتشكل الجلطات الدموية .
</Text>

      </View>
    );
  }
}
class Mthafr extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>يتم عمل الفحص لتقييم سبب ارتفاع مستويات الهوموسيستين. و تحديد خطر تجلط الدم أو أمراض القلب والأوعية الدموية المبكرة (CVD) يتم عمل الفحص
عندما ترتفع مستويات الهوموسستئين. او في بعض الأحيان عندما يكون أحد الأقارب لديه طفرات جينية من MTHFR أو قد أصيب بتطور أو تخثر في عمر مبكر
</Text>

      </View>
    );
  }
}
class THROMBIN extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>عندحدوث نزف ، يمتلك جسمك دفاعات طبيعية تمنعك من فقدان الكثير من الدم. هذه الدفاعات معروفة مجتمعة بالتخثر. وتعرف البروتينات التي تساعد في عملية التخثر بعوامل التخثر. وتساعد عوامل التخثر أيضًا في الحفاظ على اتساق جريان الدم في الأوعية الدموية.
تتم عملية التجلط للحماية  من فقدان الدم. ولكن الكثير من التجلط يمكن أن يتسبب في تشكل جلطات دموية مهددة للحياة. هذه الجلطات يمكن أن تمنع تدفق الدم إلى أعضائك الحيوية. ينتج الجسم أنواعًا معينة من البروتينات التي تنظم عملية التخثر الثرومبين هو واحد من تلك البروتينات.
يتم قياس  كمية بروتين مضاد الثرومبين في جسمك لمعرفة ما إذا كان لديك نقص في مضاد الثرومبين الذي يسبب تجلط الدم أكبر من الطبيعي.

80-100
</Text>

      </View>
    );
  }
}
class Anticoagulants extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>نوع من الأجسام المضادة التي ينتجها نظام المناعة في الجسم. في حين أن معظم الأجسام المضادة تهاجم المرض في الجسم ، إلا أن LAs تهاجم الخلايا السليمة وبروتينات الخلية.
يهاجمون الفسفوليبيدات ، وهي مكونات أساسية لأغشية الخلايا. ترتبط LAs باضطراب في نظام المناعة يعرف باسم متلازمة antiphospholipid.
يمكن ل LAs زيادة خطر تجلط الدم. ومع ذلك ، يمكن أن تكون الأجسام المضادة موجودة ولا تؤدي إلى تجلط.
يمكن أن تكون الجلطات الدموية مهددة للحياة إذا لم تعالج على الفور.
يمكن للجلطات الدموية الصغيرة التي تسببها LAs تعقيد الحمل والحث على الإجهاض. قد تكون حالات الإجهاض المتعددة علامة على وجود LAs ، خاصة إذا حدثت بعد الأشهر الثلاثة الأولى.
36-49 sec
</Text>

      </View>
    );
  }
}
class Cardiolipin extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> يتم عمل الفحص للمساعدة في التحقيق في تكوين الجلطة الدموية او للمساعدة في تحديد سبب الإجهاض المتكرر ، أو كجزء من تقييم لمتلازمة الفوسفوليبيد أو في بعض الأحيان أمراض المناعة الذاتية او عندما يكون لديك جلطة دموية واحدة أو أكثر في الوريد أو الشريان.
Negative less 12mpl/ml
Equivocal 12-18mpl/ml
Positive more than 18mpl/ml</Text>

      </View>
    );
  }
}
class APA extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>يتم عمل الفحص للمساعدة في التحقق من وجود جلطات الدم أو PTT لفترات طويلة بشكل غير متوقع  خاصة إذا كنت تعاني من حالات إجهاض متكررة ؛يتم عمل الفحص  في بعض الأحيان للمساعدة في تشخيص أو تقييم اضطراب المناعة الذاتية وعادة يتم عمل الفحص عندما يكون لديك اختبار PTT لفترات طويلة غير المبررة(ارتفاع نسبة ال ptt )  او عندما يكون لديك جلطات دموية غير متكررة ؛ او عندما كان لديك الإجهاض المتكرر ، وخاصة في الثلث الثاني والثالث من الحمل
Negative less 12u/ml
Equivocal 12-18u/ml
Positive more than 18u/ml
</Text>

      </View>
    );
  }
}
class CA125 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
        To monitor the treatment of ovarian cancer or sometimes to evaluate a tumor in the pelvic area (pelvic mass); it is not recommended for screening for symptomatic women but is sometimes asked to help detect early ovarian cancer in people who are identified as at high risk.
        Before starting treatment for ovarian cancer at intervals during and after treatment; sometimes when you have a pelvic mass or are at high risk of developing ovarian cancer
</Text>

      </View>
    );
  }
}
class Ca15 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
        To monitor response to treatment for breast cancer and to help monitor the recurrence of the disease
</Text>

      </View>
    );
  }
}

class Cancer extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>

        To monitor response to pancreatic cancer treatment to see recurrence and sometimes to help diagnose pancreatic cancer
        During and / or after pancreatic cancer treatment

34u/ml
</Text>

      </View>
    );
  }
}
class Carcinoembryonic extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
        To monitor cancer treatment, including response to treatment and is used as an indicator of the amount of cancer or tumor size present (or to help regulate cancer; sometimes as a follow-up to a positive cancer screening test to compare whether the level drops to normal (suggesting cancer is likely to be removed) Ie after cancer treatment
        Or when your condition is diagnosed with colon, pancreas, breast, lung, ovary, thyroid or other cancer before starting cancer treatment, and then, if elevated, at intervals during and after treatment; sometimes when cancer is suspected but not Confirm it - or help to discover it
</Text>

      </View>
    );
  }
}
class Calcium extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
        It is an essential element in the body of living organisms and is available in certain natural proportions that affect it. This element in cells provides a natural proportion that helps the cells of the body to perform their functions properly,
        Calcium is present in many organs, blood and other body fluids, but it is concentrated in bones and teeth
        . Lack of calcium leads to muscle cramps and arthritis. Heart disorders and rickets, and osteoporosis and fragility
Adult 8.6-10 mg/dl
           2.15-2.50mmol/l
Child 8.4-11mg/dl
          2.1-2.75mmol
</Text>

      </View>
    );
  }
}
class Magnesium extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
        Magnesium is the fourth most abundant metal in the human body.
        Where it plays many important roles in the health of the body and brain. The intake of magnesium adequately reduces the risk of osteoporosis in postmenopausal women, promotes bone building, and increases the density; it helps to precipitate calcium in the bones, and contributes to the activation of vitamin D In the kidneys
        Magnesium deficiency may negatively affect the body if it increases calcium intake, increasing the risk of kidney stones
0.66-0.99mmol/l
</Text>

      </View>
    );
  }
}
class Phosphours extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>الفسفور من أهم المعادن لصحة جسم الإنسان، وذلك لأنه جزء لا يتجرأ في العديد من مهام جسم الإنسان، فالفسفور يتحد مع الكالسيوم ويضفي على العظام قوة وصلابة قوية جداً، كما أنه مكون من مكونات المادة الوراثية وهذه المادة موجودة داخل الخلايا، ويعمل أيضاً على مراقبة وضبط البروتينات داخل الجسم
</Text>
        <Text>يتم قياس  الفوسفور في الدم والمساعدة في تشخيص الحالات المعروفة ويتم عمل فحصل لمتابعة مستوى الكالسيوم غير الطبيعي او عندما يكون لديك اضطراب في الكلى أو مرض السكري غير المنضبط او عند تناول مكملات الكالسيوم أو الفوسفات
Adult male 2.7-4.9 mg/dl
Adult female 2.5-4.8mg/dl
</Text>

      </View>
    );
  }
}
class VitaminA extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
        Vitamin A is a fat-soluble vitamin that plays a key role in maintaining vision, body growth and maintaining immunity and reproductive health.
        Getting adequate amounts of vitamin A from your diet prevents symptoms of deficiency, which include hair loss, skin problems, dry eyes, night blindness and increased susceptibility to infection.
200-1200ng/ml
</Text>

      </View>
    );
  }
}
class b1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>الثيامين كان أول فيتامين ب الذي اكتشفه العلماء. هذا هو السبب في أن اسمها يحمل الرقم مثل باقي الفيتامينات B ، الثيامين قابل للذوبان في الماء ويساعد الجسم على تحويل الطعام إلى طاقة. يمكنك العثور عليها في:
</Text>
        <Text>    الأطعمة
    المكملات الفردية
    الفيتامينات المتعددة
يمكن لنقص الثيامين أن يؤثر على العديد من الوظائف المختلفة لجسمك ، بما في ذلك وظائف:
    الجهاز العصبي
    قلب
    دماغ
</Text>
        <Text>25-85 micrgram/l
</Text>

      </View>
    );
  }
}
class b2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>يساعد فيتامين ب 2 وفيتامين ب الأخرى الجسم  على بناء خلايا الدم الحمراء ودعم الوظائف الخلوية الأخرى التي تمنحك الطاقة. يتم الحصول على أقصى استفادة من فيتامينات B إذا كنت تتناول مكملات غذائية أو تتناول أطعمة تحتوي على كل منها.يؤدي نقص فيتاين بي2 الى فقر الدم
</Text>
        <Text>ومن المهم بشكل خاص التأكد من الحصول على كمية كافية من ريبوفلافين في النظام الغذائي للمراة الحامل . يمكن لنقص الريبوفلافين أن يعرض نمو الطفل للخطر ويزيد من فرص الإصابة بحالة تسمم الحمل ، والتي تتضمن ارتفاع ضغط الدم بشكل خطير أثناء الحمل. ومن المضاعفات الأكثر خطورة من تسمم الحمل هي نقص تدفق الدم إلى المشيمة.
</Text>
<Text> 180-295 mg/l
</Text>
      </View>
    );
  }
}
class b6 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>فيتامين ب 6 المعروف أيضا باسم البيريدوكسين ، هو واحد من ثمانية فيتامينات في المجموعة ب المعقدة..

يحصل معظم الناس على ما يكفي من فيتامين ب 6 في نظامهم الغذائي ، ولكن إذا كنت تعاني من نقص في فيتامينات ب معقدة أخرى ، مثل الفولات و B12 ، فمن الأرجح أن يكون لديك ننقص  في فيتامين ب 6 أيضًا
يعتبر نقص فيتامين ب 6 أكثر شيوعًا في الأشخاص الذين يعانون من أمراض الكبد أو الكلى أو الجهاز الهضمي أو أمراض المناعة الذاتية ، بالإضافة إلى المدخنين والبدناء والمدمنين على الكحول والنساء الحوامل
في الجسم ، يشارك B6 في أكثر من 150 تفاعل. التي  تساعد جسمك على معالجة البروتينات والكربوهيدرات والدهون التي تتناولها. كما يرتبط B6 ارتباطًا وثيقًا بوظائف الجهاز العصبي وجهاز المناعة

B6 لديها خصائص مضادة للأكسدة ومضادة للالتهابات. هذا يعني أنه قد يلعب دورا في المساعدة على منع الأمراض المزمنة مثل أمراض القلب والسرطان
3.6-18ng / ml
</Text>

      </View>
    );
  }
}
class e extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>هو عبارة عن فيتامين قابل للذوبان في الدهون ويُسمّى أيضاً بفيتامين هـ، وقد أظهرت العديد من الدراسات أنّ الكثير من الناس لا يحصلون على النسبة اليومية المناسبة منه، ممّا يعرضهم لمجموعةٍ واسعةٍ من الأمراض بما فيها ضعف المناعة العامة في الجسم، وقد يؤدي نقصه في بعض الحالات للإصابة بالزهايمر وإضعاف القدرات العقلية
يظهر ارتفاع فيتامين بي 6 في حالات ارتفاع الليبدات او الدهون  الناتجة عن امراض الكبد وانخفاض الفيتامين  يدل على سوء التغدية.
5-18hg/ml
</Text>

      </View>
    );
  }
}
class k extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>يشير فيتامين K إلى مجموعة من الفيتامينات التي تذوب في الدهون والتي تلعب دورًا في تخثر الدم ، واستقلاب العظام ، وتنظيم مستويات الكالسيوم في الدم.
يحتاج الجسم إلى فيتامين ك لإنتاج البروثرومبين ، وهو عامل تجلط وعائي مهم في تخثر الدم واستقلاب العظام. يجب على الأشخاص الذين يستخدمون أدوية تمييع الدم ، مثل الوارفارين ، أو الكومادين ، عمل فحص لفيتامين k
النقص نادر ، ولكن في الحالات الشديدة ، يمكن أن يزيد من زمن التجلط ، مما يؤدي إلى النزيف والنزيف المفرط.
</Text>
        <Text>0.3-2.7nmol / l
</Text>

      </View>
    );
  }
}
class Hepatitis extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>التهاب الكبد هو التهاب وتضخم الكبد. أحد أكثر الأسباب شيوعًا لالتهاب الكبد الحاد هو العدوى بفيروس التهاب الكبد ، عادةً التهاب الكبد A ، التهاب الكبد B أو التهاب الكبد C. إن التهاب الكبد الفيروسي الحاد عبارة عن مجموعة من اختبارات الدم التي يتم إجراؤها معًا للمساعدة في تشخيص التهاب الكبد الفيروسي. بعض الاختبارات الكشف يت فيها الكشف عن الأجسام المضادة التي ينتجها الجهاز المناعي ردا على العدوى والكشف عن البروتينات (المستضدات) التي تشير إلى وجود الفيروس
</Text>

      </View>
    );
  }
}
class Rubella extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>الحصبة الألمانية عضو في عائلة Togavirus ، ويبقى البشر المضيف الطبيعي الوحيد لهذا الفيروس. عادة ما يكون الانتقال عن طريق استنشاق الهواء الملوث بالفايروس
يمكن أن تؤدي الإصابات الأولية بالحمى الرحمية إلى مضاعفات شديدة للجنين ، خاصة إذا حدثت العدوى خلال الأشهر الأربعة الأولى من الحمل. غالباً ما يرتبط متلازمة الحصبة الألمانية الخلقية بفقدان السمع ، وعيوب القلب والأوعية الدموية والعين.
</Text>
        <Text>Less than 5u/ml negative
</Text>
        <Text>Positive more than 10
</Text>

      </View>
    );
  }
}
class Rheumatoid extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>التهاب المفاصل الروماتويدي (RA) هو التهاب مزمن في المفاصل. يشبه عددا من الاضطرابات والظروف الأخرى. هذا هو السبب في أنه غالبا ما يستغرق وقتا لتشخيص.
لا تقدم فحوصات الدم إجابة بسيطة بنعم أو لا على ما إذا كان لديك النهاب المفاصل . لكن يمكن أن يساعد الطبيب على توجيهك نحو التشخيص.
</Text>
        <Text>بعد حصولك على تشخيص التهاب المفاصل فإن اختبارات الدم المستمرة ستراقب الآثار الجانبية للأدوية المستخدمة في العلاج وأيضًا المساعدة في تتبع تطور الاضطراب.
</Text>
        <Text>اختبار RF ليس مثاليًا لتحديد ما إذا كان لديك النهاب مقاصل
</Text>

      </View>
    );
  }
}
class Antistreptolysin extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>هو فحص الدم الذي يتحقق من وجود عدوى بكتيرية. عندما تتلامس مع البكتيريا الضارة ، ينتج جسمك أجسامًا مضادة للدفاع عن نفسه ضد هذه البكتيريا. وينتج جسمك  ايضا أجسامًا مضادة خاصة بالبكتيريا التي تقاتلها.
يقيس اختبار ASO الأجسام المضادة التي ينتجها جسمك استجابةً لمادة سامة تعرف باسم. Streptolysin O هي سموم تنتجها بكتيريا Streptococcus (GAS). يقوم جسمك بصنع الأجسام المضادة O عندما يكون لديك عدوى بكتيرية تسببها البكتيريا GAS.
عادة ، عندما يكون لديك عدوى بكتيريا مثل التهاب الحلق ، تتلقى المضادات الحيوية التي تقتل البكتيريا بكتيريا. لكن بعض الأشخاص لا يعانون من أي أعراض أثناء الإصابة
بالتهاب وقد لا يعرفون أنهم بحاجة إلى العلاج. عندما يحدث هذا ، يمكن أن تؤدي العدوى غير المعالجة إلى مضاعفات في المستقبل..
حيث يمكن لاختبار ASO أن يساعد الطبيب على تحديد ما إذا كنت مصابًا بعدوى بكتيرية عن طريق قياس وجود الأجسام المضادة لمضادات الارتجاع في الدم.
سيقوم طبيبك بإجراء اختبار عيار ASO إذا كان لديك أعراض مضاعفات ما بعد العقديات. بعض من المضاعفات الشائعة للبكتيريا تشمل:
    التهاب الشغاف الجرثومي
    التهاب كبيبات الكلى
    الحمى الروماتيزمية
الأجسام المضادة antistreptolysin تبلغ ذروتها في النظام الخاص بك بين ثلاثة إلى ثمانية أسابيع بعد عدوى بكتيريا. يمكن أن تبقى مستويات عالية لعدة أشهر. يمكن لطبيبك تحديد ما إذا كانت الأعراض ناجمة عن مضاعفات ما بعد المكورات العقدية عن طريق التحقق من مستويات الأجسام المضادة.
 Adult more than 200iu/unit
Child more than 150iu/uni
</Text>

      </View>
    );
  }
}
class Antinuclear extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>الاجسام المضادة هي بروتينات يصنعها جهاز المناعة لديك. فهي تساعد جسمك على التعرف على العدوى ومكافحتها. تستهدف الأجسام المضادة عادة المواد الضارة ، مثل البكتيريا والفيروسات ، من خلال تنشيط نظام المناعة للتخلص منها.
في بعض الأحيان ، تستهدف الأجسام المضادة الخلايا والأنسجة السليمة عن طريق الخطأ. هذا هو المعروف باسم استجابة المناعة الذاتية. تسمى الأجسام المضادة التي تهاجم البروتينات السليمة داخل النواة - مركز التحكم في خلاياك - بالأجسام المضادة للنواة (ANA).
</Text>
        <Text>عندما يتلقى الجسم إشارات للهجوم على نفسه ، فإنه يمكن أن يؤدي إلى أمراض المناعة الذاتية مثل الذئبة ، تصلب الجلد ، مرض النسيج الضام المختلط ، التهاب الكبد المناعي الذاتي ، وغيرها. تختلف الأعراض باختلاف المرض ، ولكنها قد تشمل الطفح الجلدي أو التورم أو التهاب المفاصل أو الإرهاق.
</Text>
        <Text>في حين أنه من الطبيعي أن يكون لديك بعض ANA ، فإن وجود عدد كبير جدًا من هذه البروتينات يعد علامة على وجود أمراض المناعة الذاتية النشطة. يساعد فحص ANA على تحديد مستوى ANA في دمك. قد يكون لديك اضطراب ذاتي إذا كان المستوى مرتفعًا. ومع ذلك ، يمكن أن تؤدي أيضًا حالات مثل الالتهابات والسرطان والمشاكل الطبية الأخرى إلى اختبار إيجابي ANA.
</Text>
        <Text>يتم عمل فحص إذا كان لديك علامات أو أعراض اضطراب في المناعة الذاتية. قد يشير اختبار ANA إلى أن لديك نوعًا من حالات المناعة الذاتية ، ولكن لا يمكن استخدامه لتشخيص اضطراب معين.
</Text>
<Text>Titer less than 1/80

</Text>
      </View>
    );
  }
}
class Citrullinated extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>وهو بروتين ينتج كجزء من العملية التي تؤدي  التهاب المفاصل الروماتويدي. يستخدم لتأكيد تشخيص التهاب المفاصل الروماتويدي. يعد الجسم المضاد CCP المضاد الأكثر تحديدًا لالتهاب المفاصل الروماتويدي. مع خصوصية حوالي 98 ٪ ، بل هو علامة موثوق بها لتأكيد تشخيص التهاب المفاصل الروماتويدي. حيث أن الأجسام المضادة لـ CCP سبقت تشخيص التهاب المفاصل الروماتويدي ويمكن أن توجد قبل سنوات من تطور أعراض RA. ويعتقد أن لديهم دور ممرض في تطوير RA
</Text>
        <Text>مضاد الأجسام المضادة لـ CCP هو أكثر موثوقية من عامل الروماتويد في تشخيص التهاب المفاصل الروماتويدي. يمكن لاختبار مكافحة CCP بدقة تشخيص التهاب المفاصل الروماتويدي في مرحلة مبكرة للغاية بالمقارنة مع عامل الروماتويد.
</Text>
        <Text>Negative lessthan5RU/ml
Positive more than 5
</Text>

      </View>
    );
  }
}
class Seminal extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>غالباً ما ينصح بتحليل السائل المنوي عندما يواجه الأزواج مشاكل في الحمل. سيساعد الاختبار الطبيب على تحديد ما إذا كان الرجل عقيمًا. كما سيساعد التحليل أيضًا في تحديد ما إذا كان انخفاض عدد الحيوانات المنوية أو خلل الحيوانات المنوية
</Text>
        <Text>يجب الحصول على أفضل عينة: يعتبر الاستمناء الطريقة المفضلة للحصول على عينة نظيفة
    تجنب القذف لمدة 24 إلى 72 ساعة قبل الاختبار.
    تجنب الكحول والكافيين والعقاقير مثل الكوكايين والماريجوانا قبل يومين إلى خمسة أيام من الاختبار.
</Text>
        <Text>    تجنب أي أدوية ويجب أن تبقى العينه في درجة حرارة الجسم. إذا كان الجو دافئًا أو شديد البرودة ، فستكون النتائج غير دقيقة. ثانياً ، يجب تسليم العينه  إلى المختبر خلال 30 إلى 60 دقيقة من مغادرة الجسم.
</Text>
        <Text>حجم العينه-2-5 مل
زمن التميع 10-30دقيقة
Ph 7.2-76
تركيز الحيوانات المنوية 20-160مليون/ضخة
الحركة 70-90%في الساعه
الشكل 79-90% طبيعي
</Text>
<Text>
كريات الدم البيضاء اقل من مليون/مل

</Text>
      </View>
    );
  }
}
class Hsv extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
        فيروس الهربس البسيط ، المعروف أيضا باسم HSV ،. يمكن أن يظهر الهربس في أجزاء مختلفة من الجسم ، أكثرها شيوعا على الأعضاء التناسلية أو الفم. هناك نوعان من فيروس الهربس البسيط.
</Text>
        <Text>
        HSV-1: المعروف أيضا باسم الهربس عن طريق الفم ، يمكن أن يسبب هذا النوع من القروح الباردة وبثور الحمى حول الفم وعلى الوجه.
            HSV-2: هذا النوع مسؤول بشكل عام عن تفشي الهربس التناسلي.
</Text>
        <Text>   
        فيروس الهربس البسيط هو فيروس معدي يمكن أن ينتقل من شخص لآخر من خلال الاتصال المباشر. غالباً ما ينتقل الفايروس الى الأطفال مع HSV-1 من الاتصال المبكر مع بالغ مصاب. ثم يحملون الفيروس معهم لبقية حياتهم.
</Text>
        <Text>
        يمكن أن تحدث الإصابة بـ HSV-1 من التفاعلات العامة مثل:
            تناول الطعام من نفس الأواني
            تقاسم بلسم الشفاه
            تقبيل
</Text>
<Text>
ينتشر الفيروس بسرعة أكبر عندما يكون الشخص المصاب يعاني من تفشي المرض. في أي مكان من 30 إلى 95 في المئة من البالغين هم مصابون بالفيروس لـ HSV-1 ، على الرغم من أنهم قد لا يعانون
من تفشي المرض. من الممكن أيضا الحصول على الهربس التناسلي من HSV-1 إذا كان الشخص الذي أجرى ممارسة الجنس عن طريق الفم يعاني من قروح باردة خلال تلك الفترة.

</Text>
      </View>
    );
  }
}

class HIV extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>هو فيروس يدمر جهاز المناعة. يساعد الجهاز المناعي الجسم على محاربة الالتهابات. يصيب فيروس العوز المناعي البشري خلايا CD4 وتقتلها ، وهي نوع من الخلايا المناعية تسمى الخلايا التائية T cells.، في الوقت الذي يقتل فيه فيروس HIV خلايا CD4 ، يزداد احتمال حصول الجسم على أنواع مختلفة من العدوى
ينتقل فيروس نقص المناعة البشرية من خلال سوائل الجسم التي تشمل:
    دم
    المني
    السوائل المهبلية والمستقيم
    حليب الثدي
لا ينتشر الفيروس في الهواء أو الماء ، أو من خلال الاتصال العرضي.
يبلغ العمر المتوقع للإصابة بمرض الإيدز ، غير المعالج ، حوالي ثلاث سنوات
</Text>

      </View>
    );
  }
}
class electrophoreses extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>اختبار الهيموغلوبين الكهربائي هو اختبار دم يستخدم لقياس وتحديد أنواع مختلفة من الهيموجلوبين في مجرى الدم. الهيموجلوبين هو البروتين الموجود داخل خلايا الدم الحمراء المسؤولة عن نقل الأكسجين إلى الأنسجة والأعضاء.

يمكن أن تسبب الطفرات الجينية في جسمك لإنتاج الهيموجلوبين الذي يتشكل بشكل غير صحيح. يمكن أن يسبب هذا الهيموجلوبين غير الطبيعي كمية قليلة جدًا من الأكسجين للوصول إلى الأنسجة والأعضاء.

هناك المئات من أنواع مختلفة من الهيموجلوبين. يشملوا:

    الهيموغلوبين f: يُعرف أيضًا باسم الهيموجلوبين الجنيني. إنه النوع الموجود في الأجنة المتزايدة وحديثي الولادة. يتم استبدال الهيموغلوبين بعد الولادة بقليل.
    الهيموغلوبين A: هذا هو المعروف أيضا باسم خضاب الكبار. إنه النوع الأكثر شيوعًا من الهيموغلوبين. يوجد في الأطفال والبالغين الأصحاء.
    الهيموجلوبين C ، D ، E ، M ، و S: هذه الأنواع النادرة من الهيموغلوبين غير الطبيعي الناجم عن الطفرات الجينية.
</Text>

      </View>
    );
  }
}
class rapid extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>هو اختبار دم يستخدم لفحص مرض الزهري. وهو يعمل عن طريق اكتشاف الأجسام المضادة غير النوعية التي ينتجها جسمك لمكافحة العدوى.

مرض الزهري هو عدوى تنتقل عن طريق الاتصال الجنسي (والناجمة عن بكتيريا spirochete bacterium Treponema pallidum. يمكن أن تكون قاتلة إذا تركت دون علاج. إلى جانب اختبار مضاد أجسام معين ، يسمح اختبار RPR للطبيب بتأكيد تشخيص العدوى النشطة وبدء العلاج. وهذا يقلل من فرص حدوث مضاعفات وانتشار المرض من قبل شخص مصاب ولكن غير مدرك.
</Text>

      </View>
    );
  }
}
class Tb extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>هو عدوى خطيرة ، وعادة من الرئتين ، تنتشر هذه البكتريا عندما تتنفس في الهواء الذي ينفثه شخص مصاب بمرض السل. يمكن للبكتيريا أن تبقى غير نشطة في جسمك لسنوات.
عندما يصبح الجهاز المناعي ضعيفًا ، يمكن أن يصبح السل نشطًا وينتج عنه أعراض مثل:
    حمى
</Text>
        <Text>    فقدان الوزن
    السعال
    تعرق ليلي
يصاب بعض الناس ببكتيريا السل ولكنهم لا يعانون من أعراض. تُعرف هذه الحالة باسم Tent الكامن. ﻳﻤﻜﻦ أن ﻳﺒﻘﻰ ﻣﺮض اﻟﺴُﻞ TB ﺳﺎكﻨﺎً ﻟﻤﺪة ﺳﻨﻮات ﻗﺒﻞ أن ﻳﺘﻄﻮر إﻟﻰ ﻣﺮض اﻟﺴُﻞ
</Text>
        <Text>إذا كان مرض السل لا يستجيب للمضادات الحيوية ، فيشير إلى أنه مرض السل المقاوم للأدوية. عندما يصيب السل جسمك ، يصبح أكثر حساسية لعناصر معينة من البكتيريا ، يتم عمل اختبار
PPD لتحقق من حساسية الجسم الحالية.
</Text>

      </View>
    );
  }
}
class hCG extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:20}}>يتم قياس مستوى الهرمون الموجهة للغدد التناسلية الموجود في عينة الدم حيث  يتم إنتاج HCG أثناء الحمل
هناك فروق بين اختبارات الدم واختبارات البول ك شريحة البول التي يمكنك شراؤها دون وصفة طبية. يمكن أن تتأثر اختبارات البول بعوامل مثل الجفاف والوقت من اليوم الذي تختبره ، في حين أن اختبار دم hCG يمكن أن يقدم نتائج حاسمة حتى في الحالات التي تكون فيها مستويات الهرمون منخفضة
أثناء الحمل ، تقوم الخلايا في المشيمة النامية بتكوين hCG. المشيمة هي الكيس الذي يغذي البويضة بعد أن يتم إخصابها وتعلق بجدار الرحم.
يمكن الكشف عن HCG في عينة الدم بعد حوالي 11 يومًا من الحمل. تستمر مستويات الـ hCG في مضاعفة كل 48 إلى 72 ساعة. تصل إلى ذروتها حوالي 8 إلى 11 أسبوعًا بعد الحمل. ثم تنخفض مستويات HCG وتستقر ، وتبقى ثابتة بالنسبة لبقية الحمل. يتم إجراء اختبار الدم hCG إلى
</Text>
<Text>    تأكيد الحمل
    تحديد العمر التقريبي للجنين
    تشخيص الحمل غير الطبيعي ، مثل الحمل خارج الرحم
    تشخيص الإجهاض المحتمل
    شاشة لمتلازمة داون
</Text>
<View style={{flexDirection:'row'}}>
<View style={{justifyContent:'center',flexDirection:'column',borderWidth:1}}>
<Text>Normal hCG levels
</Text>
<Text>0–750
</Text>

<Text>200–7,000
</Text>

<Text>200–32,000
</Text>

<Text>3,000–160,000
</Text>

<Text>32,000–210,000
</Text>

<Text>
9,000–210,000</Text>
<Text>
1,400–53,000
</Text>
<Text>

940–60,000</Text>

</View>

<View style={{justifyContent:'center',flexDirection:'column',borderWidth:1}}>
</View>
<Text>Weeks from last menstrual period

</Text>
<Text>4

</Text>

<Text>5

</Text>

<Text>6
</Text>

<Text>7
</Text>

<Text>8–12
</Text>

<Text>

13–16</Text>
<Text>

16–29</Text>
<Text>


29–41</Text>


</View>
      </View>
    );
  }
}
class pylori extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>هو نوع شائع من البكتيريا التي تنمو في الجهاز الهضمي ولديها القدرة على مهاجمة بطانة المعدة. إنه يصيب حوالي 60% من سكان العالم البالغين. عادة ما تكون غير ضارة ، ولكنها مسؤولة عن غالبية القرحة في المعدة والأمعاء الدقيقة.ان
الإصابات بهذه السلالة من البكتيريا لا تسبب عادة أعراضًا ، إلا أنها قد تؤدي إلى أمراض في بعض الأشخاص ، بما في ذلك القرحة الهضمية ، وحالة التهاب داخل المعدة تعرف باسم التهاب المعدة.

تم تعديلها  للعيش في بيئة قاسية حمضية في المعدة. يمكن لهذه البكتيريا تغيير البيئة المحيطة بها وتقليل حموضتها حتى تتمكن من البقاء على قيد الحياة. يتيح الشكل الحلزوني للبكتيريا الحلزونية اختراق بطانة المعدة ، حيث يحميها المخاط ، ولا تتمكن خلايا المناعة في الجسم من الوصول إليها. يمكن للبكتيريا أن تتداخل مع الاستجابة المناعية وتضمن عدم تدميرها
</Text>

      </View>
    );
  }
}
class Phosphokinase extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
        An enzyme that helps to make chemical changes in your body) is in your heart, your brain, and your skeletal muscles. When the muscle tissue is damaged, CPK leaks into your blood. Therefore, high levels of CPK usually indicate a type of stress or injury to your heart or other muscles.
        High CPK may indicate muscle inflammation due to disease activity or a nested condition. CPK levels can also be high after exercise, so your doctor may want to re-examine CPK after several days of rest. If your CPK is high without exercise or stays high with rest, your doctor may ask for additional tests to determine which type of isoenzyme is high. This information will help determine the source of the damage (skeletal muscle, heart, or brain). Some medications, such as cholesterol-lowering drugs, can cause an increase in CPK
</Text>
        <Text>52 - 336 U/L
</Text>

      </View>
    );
  }
}
class Syphilis extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>هي عدوى تنتقل عن طريق الاتصال الجنسي  الناجمة عن نوع من البكتيريا المعروفة باسم اللولبية الشاحبة. أول علامة على مرض الزهري هي قرحة صغيرة غير مؤلمة. يمكن أن تظهر على الأعضاء الجنسية ، المستقيم ، أو داخل الفم. مرض الزهري يمكن أن يكون تحديا لتشخيص. يمكن أن يكون اي يصيب شخص ما دون ظهور أي أعراض لسنوات. ومع ذلك ، يتم اكتشاف الزهري المبكر ، كلما كان ذلك أفضل. يمكن أن يتسبب مرض الزهري الذي لا يزال غير معالج لفترة طويلة في إلحاق أضرار كبيرة بالأعضاء الهامة ، مثل القلب والدماغ.
ينتشر مرض الزهري فقط من خلال الاتصال المباشر مع مريض الزهري. لا يمكن نقلها من خلال مشاركة مرحاض مع شخص آخر أو ارتداء ملابس شخص آخر أو استخدام أواني تناول الطعام لشخص آخر.
</Text>

      </View>
    );
  }
}
class TOXOPLASMA extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>هو فحص دم يحدد إذا كان لديك أجسام مضادة لطفيل التوكسوبلازما جوندي. يطلق عليه أيضًا اختبار داء المقوسات. جسمك يصنع هذه الأجسام المضادة فقط بعد أن تكون مصابًا بهذا الطفيلي. اعداد وانواع  الأجسام المضادة التي لديك تشير إلى ما إذا كانت اصابة حديثة أم حدثت منذ زمن بعيد .
إذا أصيبت المرأة الحامل ، قد تنتقل العدوى إلى الجنين. هذا يمكن أن يؤدي الى تلف في الدماغ والعمى في الطفل المتنامي. لمعرفة ما إذا كان طفلك قد أصيب بالعدوى ، يستطيع الطبيب اختبار عينة من السائل الأمنيوسي ، وهو السائل الذي يحيط بطفلك في الرحم.

يتم التعرض  لخطر الإصابة من قبل T. gondii عندما يتم أكل  اللحم النيء أو غير المطبوخ جيدا من حيوان مصاب. يمكن أيضًا الاصابة به  عن طريق التعامل مع قطة مصابة أو برازها
</Text>

      </View>
    );
  }
}
class Varicella extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>جديري الماء هو عدوى فيروسية تسبب طفح جلدي من بقع وحكة في جميع أنحاء الجسم وأعراضه تشبه أعراض الأنفلونزا.

اعتاد أن يكون مرضًا شائعًا في مرحلة الطفولة في الولايات المتحدة ، خاصة عند الأطفال دون سن الثانية عشرة. وهو أمر نادر الآن ، بفضل لقاح الحماق الذي يحصل عليه الأطفال عندما يكونوا بعمر 12 إلى 15 شهرًا ، تليها جرعة معززة في 4 إلى 6 سنوات من العمر.
ما هي علامات وأعراض مرض جدري الماء؟

يبدأ الجدري في كثير من الأحيان دون الطفح الجلدي التقليدي ، مع الحمى والصداع والتهاب في الحلق ، أو آلام المعدة. قد تستمر هذه الأعراض لبضعة أيام ، مع حمى (38،3 ° - 38،8 درجة مئوية).

عادة ما يبدأ الطفح الجلدي الأحمر الحاك على البطن أو الظهر والوجه ، ثم ينتشر إلى أي مكان آخر في الجسم (بما في ذلك فروة الرأس والفم والذراعين والساقين والأعضاء التناسلية).

يبدأ الطفح الجلدي بكثرة النتوءات الحمراء الصغيرة التي تبدو مثل البثور أو لدغ الحشرات. تظهر في موجات أكثر من 2 إلى 4 أيام ، ثم تتحول إلى بثور رقيقة الجدران مملوءة بالسوائل.
تظهر جميع المراحل الثلاث لطفح الجدري (المطبات الحمراء ، البثور ، الجُلب) على الجسم في نفس الوقت. قد ينتشر الطفح الجلدي بشكل أوسع أو يكون أكثر حدة لدى الأطفال الذين يعانون من ضعف في الجهاز المناعي أو اضطرابات جلدية مثل الإكزيما.

وينتج فيروس جدري الماء من فيروس varicella-zoster (VZV).. بعد إصابة شخص ما بجدري الماء ، يظل الفيروس خاملًا) في الجهاز العصبي لبقية حياته ، على الرغم من اختفاء جدري الماء. يمكن للفيروس أن يعيد تنشيط نفسه  فيما بعد.
الأطفال الذين يتم تطعيمهم ضد جدري الماء هم أقل عرضة لتطوير القوباء المنطقية عندما يكبرون. إذا حدث ذلك ، فإن حالة القوباء المنطقية عادة ما تكون أخف وأقل احتمالا لإحداث مضاعفات من شخص لم يتم تحصينه.

الجدري معدي جدا - معظم الأطفال الذين لديهم أخوة مصابون أيضا سيحصلون عليه (إذا لم يكونوا قد أصابوا بالفعل بالمرض أو اللقاح) ، تظهر عليهم الأعراض بعد أسبوعين من أول طفل.

ينتقل فيروس جدري الماء عبر الهواء (عن طريق السعال والعطس) وعن طريق التلامس المباشر مع المخاط أو اللعاب (اللعاب) أو السوائل من البثور. جدري الجدري معدي من حوالي يومين قبل أن يبدأ الطفح الجلدي حتى يتم تقشير جميع البثرات.


</Text>

      </View>
    );
  }
}
class CORTISOL extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>الكورتيزول ، هي  مادة كيمائية تفرزها الغدة الكظرية ، وهي ذات تأثير ايجابي على الجسم ، إذ تعمل على زيادة الشعور بالاسترخاء والراحة ، أما الخلل في افراز الكورتيزول وزيادة نسبته في الجسم.. فله اضرار صحية تتمثل في الشعور بالقلق والارهاق ، وزيادة الوزن
الكورتيزول مسؤول، بشكل أساسي، عن عملية استقلاب المواد (الأيض) في الجسم ويتم إطلاقه كرد فعل في حالات الضغط. إضافة إلى ذلك, يعمل الكورتيزول على مراقبة فعاليات معينة يقوم بها الجهاز المناعي. بشكل عام, يتم إفراز الكورتيزول بكميات أكبر في ساعات الصباح المبكرة, وتقل هذه الكمية في ساعات المساء. الإفراز الزائد لمادة الكورتيزول، بسبب ورم في الغدة النخامية او في الغدة الكظرية
</Text>
        <Text>171-535NMOL/L
64-328NMOL/L</Text>

      </View>
    );
  }
}


export default  Test = SwitchNavigator(
  {
    Home: Lipidprofile,
    Details: APA,
    grid:Grid,
    ph:PHOTOS,
    cbc:CBC,
    esr:ESR,
    fbs:Fasting,
    b12:B12,
    folate:folic,
    crp:CReactive,
    urine:Urine,
    kft:Kft,
    lipidp:Lipidprofile,
    lft:Liver,
    hba1c:Hba1c,
    apolipoprotein:A,
    cpk:Phosphokinase,
    transferrin:Transferrin,
    ferritin:Ferritin,
    tsh:TSH,
    tpo:tpo,
    magnesium:Magnesium,
    hydroxy:Hydroxy,
    Ca19:Cancer,
    CEa:Carcinoembryonic,
    Ca125:CA125,
    Ca15:Ca15,
    Calcium:Calcium,
    Vitamina:VitaminA,
    Vitaminb1:b1,
    Vitamine:e,
    Vitamink:k,
    seminal:Seminal,
    Hepatitis:Hepatitis,
    Citrullinated:Citrullinated,
    Antinuclear:Antinuclear,
    Rheumatoid:Rheumatoid,
    Antistreptolysin:Antistreptolysin,
    electrophoreses:electrophoreses,
    Cortizol:CORTISOL,
    Toxoplasma:TOXOPLASMA,

},
  {
    initialRouteName: 'grid',
  }
);
