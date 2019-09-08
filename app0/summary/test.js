import React from 'react';
import { Button, View, Text ,ScrollView} from 'react-native';
import { TabNavigator, StackNavigator,SwitchNavigator } from 'react-navigation';
import Grid from './grid'
import PHOTOS from './grid'
import { Header } from 'react-native-elements'

class CBC extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <Text style={{fontSize:20}}>
تحليل يعطي معلومات هامة عن أنواع وأعداد الخلايا في الدم، و خاصة خلايا الدم الحمراء، و خلايا الدم البيضاء ، والصفائح الدموية.) هو فحص روتيني لأخذ صورة كاملة للدم وتساعد بشكل أساسي في تشخيص كثير من الأمراض في مقدمتها أمراض الدم،
. والكشف عن وجود الأنيميا-فقر الدم ()والتعرف على كمية الدم المفقود في حال وجود نزيف
وتشخيص فرط الكريات الحمراء  وتشخيص أمراض الدم مثل سرطان الدم
العدد الكلي لخلايا الدم الحمراء والمسئولة عن حمل الأوكسجين لمختلف خلايا الجسم. عدد خلايا كرات الدم الحمراء –
نسبة خلايا الدم الحمراء في عينة الدم
المادة المسئولة عن حمل الأوكسجين داخل خلايا الدم الحمراء. ومن خلالها يتم تحديد قوة الدم
    عبارة عن متوسط حجم خلايا الدم الحمراء، وهو عبارة عن نسبة الهيماتوكريت  إلى عدد خلايا الدم الحمراء
جزء من الجهاز المناعي للجسم وهي تساعد على مواجهة أي عدوى بكتيرية أو فيروسية.
أصغر خلايا الدم والمسؤولة عن تجلط الدم والحماية من النزيف.
</Text>

      </View>
    );
  }
}
class Prolactin extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <Text style={{fontSize:20}}>
    يتم إنتاج البرولاكتين من الغدة النخامية في الدماغ. يعرف أيضًا بـ PRL أو هرمون  يستخدم أساسا لمساعدة النساء على إنتاج الحليب بعد الولادة.  وهو مهم  بالنسبة لكل من الصحة الإنجابية للذكور والإناث هنالك . وظيفة محددة من البرولاكتين في الرجال ليست معروفة. ومع ذلك ، فقد استخدمت مستويات البرولاكتين لقياس الرضا الجنسي لدى الرجال والنساء على حد سواء.

    Male up to 20 ng/ml
    Female up to 26ng/ml
</Text>

      </View>
    );
  }
}
class Lipidprofile extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
          <ScrollView>

        <Text style={{fontSize:20}}>هي مجموعة من التحاليل لقياس مستوى الدهون والكوليسترول في الدم وأيضا قياس مستوى البروتينات الدهنية .
تتطلب بعض التحاليل أن تكون صائما لمدة تترواح بين 9 إلى 12 ساعة قبل التحليل بينما البعض الآخر لايلزم له ذلك.
يجب ألا تتناول الأطعمة الغنية بالدهون في الليلة السابقة للاختبار.

يتم عمل الفحص للمساعدة في تحديد وجود احتمالية الإصابة بمشاكل القلب وتدفق الدم، بما في ذلك النوبات القلبية والسكتات الدماغية.
</Text>
<Text style={{fontSize:20}}>
Serum triglycerides</Text>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}>

<Text style={{fontSize:20}}>
	•	هي نوع من الدهون. يقوم الجسم بتخزين السعرات الحرارية التي لا يستخدمها على الفور هذه الدهون الثلاثية تدور في الدم لتوفير الطاقة لعضلاتك للعمل. تدخل الدهون الثلاثية إلى الدم بعد تناول الطعام. إذا كنت تأكل سعرات حرارية أكثر مما يحتاجه جسمك ، فقد يكون مستوى الدهون الثلاثية مرتفعًا.
</Text>
<Text style={{fontSize:20}}>
  •	Normal less than 150
  </Text>
  <Text style={{fontSize:20}}>
	•	Critical limit 150- 199
  </Text>
  <Text style={{fontSize:20}}>
	•	High 200- 499
  </Text>
  <Text style={{fontSize:20}}>
	•	Very high more than 500
  </Text>
  <Text style={{fontSize:20}}>
  Serum total cholesterol
  </Text>
  <Text style={{fontSize:20}}>
مادة ناعمة تشبه الشمع موجودة في جميع أجزاء الجسم. يحتاج جسمك إلى القليل من الكوليسترول للعمل بشكل صحيح. ولكن الكثير من الكوليسترول يمكن أن يسد الشرايين ويؤدي إلى أمراض القلب. يجب أن يخضع كل شخص لاختبار الفحص لأول مرة في سن 35 عامًا ، ولعمر 45 عامًا للنساء.
</Text>
<Text style={{fontSize:20}}>
يجب أن يتم اختبار المتابعة:
    كل 5 سنوات إذا كانت نتائجك طبيعية.
 في كثير من الأحيان للأشخاص الذين يعانون من مرض السكري ، وارتفاع ضغط الدم ، وأمراض القلب ، والسكتة الدماغية ، أو مشاكل تدفق الدم إلى الساقين أو القدمين.
</Text>
</View>
<View style={{backgroundColor:'red',flexDirection:'column',borderWidth:1,borderColor:'black'}}><Text style={{fontSize:20,color:'white'}}>
Severity<Text>--</Text>Adult<Text>--</Text>Children and Adolescents


normal<Text>--</Text>Less than 200<Text>--</Text>Less than 170


Critical Limit<Text>--</Text>220 : 239<Text>--</Text>170 : 199


hight<Text>--</Text>More than 240<Text>--</Text>More than 200</Text>
</View>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}>

<Text style={{fontSize:20}}>
LDL</Text>
<Text style={{fontSize:20}}>
يسمى "الكولسترول السيئ" لأنه يأخذ الكولسترول إلى الشرايين ، حيث يتجمع في جدران الشرايين. قد يؤدي الكثير من الكوليسترول في الشرايين إلى تراكم  plaqueالمعروف باسم تصلب الشرايين. هذا يمكن أن يزيد من خطر تجلط الدم في الشرايين. إذا انفصلت جلطة دموية  ووصلت شريانًا في القلب أو الدماغ ، فقد تصاب بسكتة دماغية أو نوبة قلبية.
قد يقلل تراكم الترسبات من تدفق الدم والأكسجين إلى الأعضاء الرئيسية. قد يؤدي نقص  الأوكسجين إلى أعضائك أو شرايينك إلى الإصابة بأمراض الكلى أو أمراض الشرايين الطرفية ، بالإضافة إلى نوبة قلبية أو سكتة دماغية.
</Text>
</View>
<View style={{backgroundColor:'red',flexDirection:'column',borderWidth:1,borderColor:'black'}}><Text style={{fontSize:20,color:'white'}}>
Severity<Text>--</Text>Adult<Text>--</Text>Children and Adolescents


normal<Text>--</Text>Less than 150 mg / 100 ml<Text>--</Text>Less than 110


Critical Limit<Text>--</Text>150: 190 mg / 100 ml<Text>--</Text>110 : 129


hight<Text>--</Text>More than 190 mg / 100 ml<Text>--</Text>More than 130</Text>
</View>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}>

<Text style={{fontSize:20}}>
HDL</Text>
<Text style={{fontSize:20}}>
يعرف HDL باسم "الكولسترول الجيد" لأنه ينقل الكوليسترول إلى الكبد ليتم طرده من جسمك. يساعد HDL على تخليص الجسم من الكوليسترول الزائد ، لذلك فمن غير المرجح أن ينتهي به الأمر في الشرايين.
 يقلل تراكم الترسبات من تدفق الدم والأكسجين إلى الأعضاء الرئيسية. قد يؤدي نقص  الأوكسجين إلى أعضائك أو شرايينك إلى الإصابة بأمراض الكلى أو أمراض الشرايين الطرفية ، بالإضافة إلى نوبة قلبية أو سكتة دماغية.
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
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
          <ScrollView>
        <Text style={{fontSize:20}}>
يفرز هذا الهرمون من الجزء الأمامي من الغدة النخامية بناء على أوامر من الهرمون المطلق للغدة الدرقية Thyrotropin-Releasing Hormone من تحت المهاد المخي، والذي يعمل على تحفيز نمو الغدة الدرقية وإفراز الهرمونات منها. العلاقة بين هذا الهرمون وهرمون الغدة الدرقية علاقة وثيقة، فحينما يقل إفراز هرمونات الغدة الدرقية يزداد إفراز TSH، والذي يحفز الغدة الدرقية على إفراز هذه الهرمونات، وعندما يرتفع مستوى هرمونات الغدة الدرقية فإن ذلك يؤدي لتثبيط إفراز TSH،
</Text>
<Text style={{fontSize:20}}>
:يستخدم هذا التحليل في</Text>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}>

<Text style={{fontSize:20}}>
فحص حديثي الولادة لتشخيص قصور الغدة الدرقية مبكرا. كما يستخدم لاكتشاف وتشخيص أمراض الغدة الدرقية، ولمتابعة العلاج في حالات قصور الغدة الدرقية أو فرط النشاط فيها. وفي حالات فرط نشاط الغدة الدرقية تفرز الغدة كميات كبيرة من T3 و T4، وبالتالي يقل إفراز الغدة النخامية للهرمون ليقل مستوي TSH في الدم. في
المقابل يزداد إفراز TSH في حالات قصور الغدة الدرقية كمحاولة لتحفيز الغدة الدرقية على إفراز المزيد من هذه الهرمونات. </Text>
<Text style={{fontSize:20}}>
ا أن بعض الأدوية مثل حبوب منع الحمل والأسبرين قد تؤثر على نتيجة T4، بينما لا تتأثر قيمة FT4. كما في حالة TSH، إذا كنت تتناول أدوية لعلاج قصور الغدة، ينصح أن يتم عمل التحليل قبل تناول الجرعة اليومية.  </Text>
<Text style={{fontSize:20}}>
  T4 5.4-11.5 mcg / dL,
  </Text>
  <Text style={{fontSize:20}}>
  T3 105-245 ng / dL.
  </Text>
  <Text style={{fontSize:20}}>
  free part, 0.7-2.0 ng / dL,
  </Text>
  <Text style={{fontSize:20}}>

  FT3 between 260-480 pg / dL.
  </Text>
</View>

</ScrollView>
      </View>
    );
  }
}class Ferritin extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
            <Text style={{fontSize:20}}>Ferritin</Text>
<Text style={{fontSize:20}}>هو بروتين موجود داخل الخلايا، يتحكم في تخزين وإطلاق الحديد
يتم تخزين Ferritin في خلايا الجسم حتى يحين وقت إنشاء المزيد من خلايا الدم الحمراء. سيشير الجسم إلى الخلايا لإطلاق ferritin. ثم يربط الفريتين إلى مادة أخرى تسمى ترانسفيرين.
</Text>
<Text style={{fontSize:20}}>
female 15-150ng / l
</Text>
<Text style={{fontSize:20}}>
male 30-400 ng / l
</Text>
      </View>
    );
  }
}class zinc extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
            <Text style={{fontSize:20}}>Zinc</Text>
            <Text style={{fontSize:20}}>
يلعب الزنك دورا حيويا في وجود البروتين الذي يساعد على تنظيم إنتاج الخلايا في الجهاز المناعي للجسم البشري. يتركز الزنك في أقوى عضلات الجسم وخاصة في خلايا الدم البيضاء والحمراء ، وشبكية العين ، الجلد، الكبد، والكلى والعظام والبنكرياس، والسائل المنوي وغدة البروستاتا في الرجال التي تحتوي أيضا على كميات كبيرة من الزنك .
يحتوي جسم الإنسان على أكثر من 300 إنزيم مختلف والذي يتطلب وجود الزنك ليعمل الجسم بكامل انشطته الطبيعية ..
يحتاج الشخص العادي إلى 2-3 غرامات من الزنك في أي وقت من الأوقات، علما ان في الجسم البشري أجهزة تفرز الزنك، مثل الغدة اللعابية، وغدة البروستاتا والبنكرياس. حتى الخلايا المشاركة في نشاط الجهاز المناعي لإفراز الزنك .
</Text>
<Text style={{fontSize:20}}>
women
0.66-1.10
</Text>
<Text style={{fontSize:20}}>
man
0.66-1.10
</Text>
</ScrollView>
      </View>
    );
  }
}class FSH extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    /><ScrollView>
            <Text style={{fontSize:20}}>Follicle-Stimulating Hormone (FSH</Text>
              <Text style={{fontSize:20}}>
تفرز الغدةُ النخامية الهرمونَ المنشّط للحوصلة  ولهذا الهرمون دور أساسي في السيطرة على الدورة الشهرية وإنتاج البويضات الناضجة شهرياً، ومن الجدير بالذكر أنّ تركيز الهرمون يختلف طوال دورة الطمث الخاصة بالمرأة بحيث يصل إلى أعلى مستوى له قبل الإباضة مباشرة، أمّا عند الرجال يساعد هذا الهرمون على السيطرة على إنتاج الحيوانات المنوية، ويكون تركيزه ثابتاً ولا يتغير طوال الشهر، يعتبر من الفحوصات المستخدمة لتحديد سبب تأخر الحمل، وقدرة أجزاء الجهاز التناسلي على العمل بشكل سليم،
</Text>
<Text style={{fontSize:20}}>
أسباب إجراء فحص FSH أسباب إجراء الفحص للرجل يمكن إجراء هذا الفحص للرجل لتحديد بعض المشاكل التي قد تسبّب العقم ومنها: تقييم انخفاض عدد الحيوانات المنوية. تقييم قصور الغدد التناسلية، أو وجود خلل وظيفي فيها، أو فشلها. تقييم قصور الخصية الوظيفي.
 الغدةُ النخامية الهرمونَ المنشّط للحوصلة  ولهذا الهرمون دور أساسي في السيطرة على الدورة الشهرية وإنتاج البويضات الناضجة شهرياً، ومن الجدير بالذكر أنّ تركيز الهرمون يختلف طوال دورة الطمث الخاصة بالمرأة بحيث يصل إلى أعلى مستوى له قبل الإباضة مباشرة، أمّا عند الرجال يساعد هذا الهرمون على السيطرة على إنتاج الحيوانات المنوية، ويكون تركيزه ثابتاً ولا يتغير طوال الشهر، يعتبر من الفحوصات المستخدمة لتحديد سبب تأخر الحمل، وقدرة أجزاء الجهاز التناسلي على العمل بشكل سليم،
</Text>
<Text style={{fontSize:20}}>
أسباب إجراء الفحص للمرأة
ومن الأسباب التي تتطلب إجراء الفحص للمرأة ما يلي: تقييم مشاكل العقم. تقييم عدم انتظام الدورة الشهرية، أو انقطاعها كما هو الحال عند بلوغ سن اليأس. تشخيص اضطرابات الغدة النخامية أو الأمراض التي تتعلق بالمبايض.
سباب إجراء الفحص للأطفال لتحديد ما إذا كان الطفل يعاني من البلوغ المبكر، وهو بلوغ الفتيات في سن أقل من 9 سنوات، وبلوغ الفتيان في سن أقل من 10 سنوات، كما يمكن استخدام الاختبار لتحديد ما إذا كان الطفل يعاني من تأخر سن البلوغ
</Text>
<Text style={{fontSize:20}}>
Females from birth to age 7: less than 6.7 IU / L.
</Text>
<Text style={{fontSize:20}}>
Males from birth to age 7: less than 6.7 IU / L.
</Text>
<Text style={{fontSize:20}}>
Males aged 8 years and over: 1.3-19.3 IU / L
</Text>
<Text style={{fontSize:20}}>
. Females aged 8 years and over: Values ​​on the stage of the menstrual cycle are as follows: Serum phase: 3.1 - 7.9 IU / L.
</Text>
<Text style={{fontSize:20}}>
Ovulation: 2.3-18.5 IU / L. a
</Text>
<Text style={{fontSize:20}}>
For the azure phase: 1.4-5.5 IU / L.
</Text>
<Text style={{fontSize:20}}>
Postmenopausal: 30.6-106.3 IU / L
</Text>
</ScrollView>
      </View>
    );
  }
}class Lh extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    /><ScrollView>
            <Text style={{fontSize:20}}>LH)luteinizing hormone</Text>
            <Text style={{fontSize:20}}>
عبارة عن بروتين كربوهيدراتيّ، وهو الهرمون المسؤول عن التبويض في جسم المرأة، وإنتاج هرمونيّ البروجيسترون والإستروجين، وهو المسؤول كذلك عن إنتاج هرمون التستوستيرون لدى الرجل في الخصيتين، والذي يحافظ بالتالي على قدرة الرجل على تكوين الحيوانات المنويّة، كما أنّه الهرمون المسؤول عن إنضاح البويضة والحويصلات البويضيّة لدى المرأة في فترة التبويض ، يجب أن يكون بنصف قيمة هرمون "FSH" في الجسم وهذا في الأيام الأولى من الدورة الشهريّة للمرأة، كما واّنه معروف طبيعياً أنّ نسبة هذا الهرمون تزداد بنسبة عالية في أيام التبويض لأنّه الهرمون المسؤول عن تفجير "الجراب" الحاوي للبويضة لدى المرأة وهو السبب في إمكانية حدوث التبويض، كما وتزيد نسبة هذا الهرمون أكثر في سن اليأس "بعد سن الأربعين"، أو حتى نتيجة زيادة هرمون "FSH" في الجسم كذلك. وقد يحدث العكس، أي تنخفض نسبة هذا الهرمون في الجسم لعدّة أسباب منها التداوي بـ "الإستروجين" و "التستوستيرون"، أو نتيجة الإصابة بأورام في الغدة الكظريّة أو المبيضيّة، أو الإصابة بمرض شيهان، أو نتيجة خلل في عمل الغدة النخاميّة في الجسم.
</Text>
<Text style={{fontSize:20}}>
Women in the first half of their menstrual cycle are from 2 to 20 IU per liter,
 It is in the middle of the menstrual cycle, ie in its ovulation period, from 15 to 80 IU per liter.
</Text>
<Text style={{fontSize:20}}>
For males with a normal rate of 1 to 8 IU per liter,
Children do not exceed 0.4 IU per liter.
</Text>
</ScrollView>
      </View>
    );
  }
}class Testosterone extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    /><ScrollView>
            <Text style={{fontSize:20}}>Testosterone test</Text>
            <Text style={{fontSize:20}}>
هو الهرمون الجنسي الذكري المسؤول عن نضج الذكور وظهور علامات البلوغ والذي يفرز من الخصيتين.
يفضل قياس مستوى هرمون التستوستيرون في الصباح الباكر حيث يبلغ اقصى مستوى له في الصباح (أي ما يقارب الـ 8 صباحاً).
</Text>
<Text style={{fontSize:20}}>
Children up to 5 months: 75-400 ng / dL.
</Text>
<Text style={{fontSize:20}}>
Children up to 9 years: less than 30 ng / dL.
</Text>
<Text style={{fontSize:20}}>
Aged 10-18 years: from 30-1200 ng / dL.
</Text>
<Text style={{fontSize:20}}>
Young males and older than 19 years and older: 240-950 ng / dl.
</Text>
</ScrollView>
      </View>

    );
  }
}class Progesterone extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    /><ScrollView>
            <Text style={{fontSize:20}}>Progesterone</Text>
            <Text style={{fontSize:20}}>
هو هرمون أنثوي يفرزه الجسم الأصفر  في المبيض خلال المرحلة البروجستيرونية اي في اخر اسبوعين من الدورة الشهرية للأنثى بعد الإباضة، وهو من الهرمونات الستيروئيدية.
</Text>
<Text style={{fontSize:20}}>
يتم كذلك تكوين البروجستيرون عند الجنسين في قشر الكظر. كما يتم إفرازة بكميات كبيرة في المشيمة أثناء الحمل، وتتزايد كمياته بتقدم الحمل وتهبط قبل الولادة بأيام. كما يعمل عن طريق تسميك بطانة الرحم المخاطية بحيث يمكن زرع البويضة المخصبة
</Text>
<Text style={{fontSize:20}}>
Follicular  0.20-1.50ng/ml
</Text>
<Text style={{fontSize:20}}>
0.64-4.77nmol/l
</Text>
<Text style={{fontSize:20}}>
Ovulation  .80-3.00ng/ml
</Text>
<Text style={{fontSize:20}}>
2.54-9.54nmol/l
</Text>
<Text style={{fontSize:20}}>
Luteal 1.70-27.0ng/ml
</Text>
<Text style={{fontSize:20}}>
5.41-85.86nmol/l
</Text>
<Text style={{fontSize:20}}>
Post menopause .10-0.80ng/ml
</Text>
<Text style={{fontSize:20}}>
0.32-2.54nmol
</Text>
<Text style={{fontSize:20}}>
Male 0.20-1.40ng/ml
</Text>
<Text style={{fontSize:20}}>
0.64-4.45nmol/l
</Text>
</ScrollView>
      </View>
    );
  }
}class B12 extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
            <Text style={{fontSize:20}}>وهو عبارة عن فيتامين يذوب في الماء ولديه دور اساسي في الاداء الطبيعي للدماغ و الجهاز العصبي من خلال تكوين الميالين ونضوج خلايا الدم الحمراء. وهو احد فيتامينات ب الثمانية. ويشارك فيتامين ب 12 في عملية التمثيل لكل خلية في الجسم البشري خصوصا الخلايا التي تساهم في تركيب الحمض النووي وكذلك في استقلاب الحمضي الدهني والحمض الاميني. ليس بإمكان الفطريات او النباتات او الحيوانات ( حتى الانسان) انتاج فيتامين ب 12. وحدهما البكتيريا والعتائق تملك الانزيمات اللازمة لإنتاج فيتامين ب 12. يمكن ان يؤدي نقص فيتامين ب 12 في ضرر شديد لا يمكن اصلاحه خصوصا في الدماغ والجهاز العصبي. و قد تظهر بعض الاعراض في الحالات التي يكون نقص مستوى الفيتامين اقل بقليل من المعدل مثل التعب والخمول و الاحباط و ضعف في الذاكرة وضيق في التنفس وصداع وشحوب في البشرة .وتظهر هذه الاعراض خصوصا عند كبار السن فوق عمر ال 60  حيث انهم يعانون من نقص امتصاص فيتامين ب12 حيث انهم ينتجون حمضا اقل في المعدة بسبب تقدمهم في العمر. كما يمكن ان يسبب نقص فيتامين ب 12الهوس والذهان.
</Text>
        <Text style={{fontSize:20}}>200_1000pg/ml
</Text>
</ScrollView>
      </View>
    );
  }
}class dihydroxy extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    /><ScrollView>
    <Text style={{fontSize:20}}>
      فيتامين د هو الفيتامين المعروف بفيتامين الشمس؛ إذ إنّ المصدر الأساسي للحصول عليه هو تعرّض الجسم لأشعة الشمس حتى يُنتج الجسم هذا الفيتامين، وذلك عن طريق تعرّض الجلد للأشعة فوق البنفسجية من أشعة الشمس، فيقوم بتحويل الكولستيرول الموجود في الجلد عن طريق سلسلة من العمليات الحيوية إلى فيتامين د. ويعد تعريض اليدين والرجلين للشمس من خمسٍ إلى عشر دقائق، مرتين إلى ثلاث مرات في الأسبوع مدةً كافيةً لتزويد الجسم بحاجته من فيتامين د، بالإضافة إلى توافره بكميات محدودة في بعض الأطعمة. حتوي فيتامين د على العديد من الوظائف المهمة. ربما الأكثر حيوية هي تنظيم امتصاص الكالسيوم والفوسفور ، وتسهيل وظيفة نظام المناعة الطبيعية. الحصول على كمية كافية من فيتامين (د) مهم للنمو الطبيعي وتطور العظام والأسنان ، وكذلك تحسين المقاومة ضد بعض الأمراض.
</Text>
      <Text style={{fontSize:20}}>إذا لم يحصل جسمك على ما يكفي من فيتامين د ، فأنت عرضة لخطر الإصابة بتشوهات في العظام مثل العظام الرخوة (لين العظام) أو العظام الهشة (هشاشة العظام).

</Text>
<Text style={{fontSize:20}}>
N=19-54pg/ml

</Text>
</ScrollView>
      </View>
    );
  }
}class Hydroxy extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
          <Text style={{fontSize:20}}>
      يقوم الجسم بتحويل فيتامين د إلى مادة كيميائية تعرف بـ 25-هيدروكسي فيتامين د ، وتسمى أيضا الكالسيديول.

      فحص  25-hydroxy فيتامين (د) هو أفضل طريقة لمراقبة مستويات فيتامين (د). كمية 25 هيدروكسي فيتامين د في الدم هي مؤشر جيد على كمية فيتامين د التي يمتلكها جسمك. يمكن أن يحدد الاختبار ما إذا كانت مستويات فيتامين د مرتفعة جدًا أو منخفضة جدًا.
</Text>
      <Text style={{fontSize:20}}>
      يمكن أن يكون مؤشرا هاما لهشاشة العظام (ضعف العظام) والكساح (تشوه العظام).
      يتم عمل فحص  25-hydroxy فيتامين د لعدة أسباب مختلفة. يمكن أن يساعدهم في معرفة ما إذا كان فيتامين (د) كثيرًا أو قليلًا جدًا يسبب ضعف العظام أو تشوهات أخرى. ويمكنه أيضًا مراقبة الأشخاص المعرضين لخطر الإصابة بنقص فيتامين (د)

</Text>
<Text style={{fontSize:20}}>
Deficieny less than 20ng/ml

</Text>
<Text style={{fontSize:20}}>
Insufficiency  20-29ng/ml

</Text>
<Text style={{fontSize:20}}>
Sufficiency   30-100ng/ml

</Text>
<Text style={{fontSize:20}}>
Toxicity more than 100ng/ml

</Text>
</ScrollView>
      </View>
    );
  }
}class Pt extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>
      <Text style={{fontSize:20}}>
      هو مقدار الوقت اللازم لتخثر بلازما الدم. البروثرومبين ، المعروف أيضا باسم العامل الثاني ، هو واحد فقط من العديد من بروتينات البلازما التي تشارك في عملية التخثر.
      يتم عمل فحص عندما تحصل على قطع وتمزق الأوعية الدموية ، تتجمع الصفائح الدموية في مكان الجرح. حيث يقومون بإنشاء قابس مؤقت لوقف النزيف. من أجل إنتاج جلطة دموية قوية ، تعمل سلسلة من 12 بروتينًا بلازميًا ، أو "عوامل تجلط الدم" معًا لصنع مادة تسمى الفيبرين ، والتي تقوم بإغلاق الجرح.
</Text>
      <Text style={{fontSize:20}}>
      يمكن أن يسبب اضطراب النزيف المعروف باسم الهيموفيليا جسمك لخلق بعض عوامل التخثر بشكل غير صحيح ،. قد تؤدي بعض الأدوية أو أمراض الكبد أو نقص فيتامين K إلى تكون الجلطة غير الطبيعية. ذا كنت تتناول دواء الوارفارين الدوائي ، فسيقوم الطبيب بإجراء اختبارات PT منتظمة للتأكد من أنك لا تتناول الكثير من الأدوية. تناول الكثير من الوارفارين يمكن أن يسبب نزيفًا مفرطًا.

</Text>
</ScrollView>
      </View>
    );
  }
}class INR extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
            <Text style={{fontSize:30}}>INR </Text>
<Text style={{fontSize:20}}>
 هو  نظام طوّرته مُنظمة الصّحة العالميّة للتعبير عن نتائج اختبار زمن البروثرومبين  هو اختبار يستخدم للمساعدة في اكتشاف وتشخيص اضطراب النزيف أو اضطراب التخثر المفرط ؛ تُحسب النسبة الدولية المقيّمة (INR) من نتيجة PT ، وتُستخدم لمراقبة مدى فعالية الوارفارين (مضاد للتجلط)
</Text>
<Text style={{fontSize:20}}>
 1-1.5 IU
</Text>
</ScrollView>
      </View>
    );
  }
}class PcT extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
            <Text style={{fontSize:20}}>
زمن البروثرومبين (PT) هو اختبار يستخدم للمساعدة في اكتشاف وتشخيص اضطراب النزيف أو اضطراب التخثر المفرط ؛ تُحسب النسبة الدولية المقيّمة (INR) من نتيجة PT ، وتُستخدم لمراقبة مدى فعالية الوارفارين (مضاد للتجلط)



pt=12-16 sec</Text>
</ScrollView>
      </View>
    );
  }
}
class ptt extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
            <Text style={{fontSize:20}}>
        يؤدي النزيف إلى سلسلة من التفاعلات المعروفة باسم شلال التخثر. التخثر هو العملية التي يستخدمها جسمك لوقف النزيف. تخلق الخلايا المسماة بالصفائح الدموية قابسًا لتغطية الأنسجة التالفة. ثم تتفاعل عوامل تخثر الجسم لتشكيل جلطة دموية. انخفاض  عوامل التخثر يمكن أن تمنع تشكل الجلطة. يمكن أن يؤدي النقص في عوامل التخثر إلى أعراض مثل النزيف المفرط ، ونزيف الأنف المستمر ، وكدمات سهلة.  يستخدم الفحص كجزء من التحقيق في اضطراب نزيف محتمل أو جلطة دموية (حلقة تخثر) ؛ لمراقبةالعلاج مضاد للتجلط الهيبارين. كجزء من الفحص قبل الجراحة أو إجراء جراحي آخر

</Text>
<Text style={{fontSize:20}}>
26-35sec
</Text>
</ScrollView>
      </View>
    );
  }
}
class ESR extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
            <Text style={{fontSize:20}}>هو اختبار لفحص سرعة ترسّب كريات الدم الحمراء داخل عيّنة اختبار، بقصد اكتشاف التغيّرات التي تحدث لبروتينات الدم، لربط هذه التغيرات بالأمراض التي تصيب الجسم، ومدى استجابته للعلاجات المقدمة له</Text>
            <Text style={{fontSize:20}}>
less 25 mm/H</Text>
</ScrollView>
      </View>
    );
  }
}class Fasting extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
          <Text style={{fontSize:20}}>
      يتم قياس كمية الجلوكوز في الدم. فعند تناول الإنسان الطعام، يرتفع مستوى سكر الغلوكوز في الدم لديه، ليصل الحد الأقصى له بعد مرور ساعة على تناوله، وفي الوضع الطبيعيّ يقوم البنكرياس بإفراز هرمون الإنسولين للسيطرة على مستوى سكر الغلوكوز في الدم، وذلك بالمساعدة على تحطيمه ليتم استخدامه من قبل خلايا الجسم للحصول على الطاقة أو ليتمّ تخزينه إلى حين حاجة
</Text>
      <Text style={{fontSize:20}}>
      ومن المشاكل التي تصيب الانسان عدم إفراز كميات كافية من الإنسولين،  او مشاكل على مستوى استجابة الخلايا للإنسولين المفرز، أو المشكلتين في الوقت ذاته

</Text>
<Text style={{fontSize:20}}>
Requirement of fasting 8 - 12 hours for eating only

</Text>
<Text style={{fontSize:20}}>
Normal less than 100mg/dl

</Text>
<Text style={{fontSize:20}}>
Pre-diabetes 100-126mg/dl

</Text>
<Text style={{fontSize:20}}>
The incidence of diabetes is more than 126mg/dl

</Text>
</ScrollView>
      </View>
    );
  }
}class Randomblood extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
<ScrollView>
      <Text style={{fontSize:20}}>

      هو اختبار دم عشوائي للتحقق من مستويات الجلوكوز (السكر). يتم ذلك عادة عن طريق وخز الإصبع لاخد قطرة صغيرة من الدم. ثم يتم مسح هذا الدم على شريط اختبار من شأنه أن يعطي قراءة الجلوكوز.
</Text>
      <Text style={{fontSize:20}}>
      اختبار جلوكوز عشوائي هو أداة قوية للأشخاص الذين يعانون من مرض السكري. يمكن أن يساعد في تقييم مدى جودة إدارة المرض

</Text>

<Text style={{fontSize:20}}>
Normal less than 140mg/dl

</Text>
<Text style={{fontSize:20}}>
Pre-diabetes 140-200mg/dl

</Text>
<Text style={{fontSize:20}}>
Diabetes more than 200mg/dl

</Text>
</ScrollView>
      </View>
    );
  }
}class CReactive extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
          <Text style={{fontSize:20}}>
      هو فحص يتم فيه الكشف عن نسبة بروتين سي الّذي يفرزه الكبد، في حالات الالتهاب الشديد، ممّا يجعله مؤشّرا قويّاً لوجود الالتهابات في الجسم
      تتطوّر محفّزات إفرازسي ري اكتف بروتن
</Text>
      <Text style={{fontSize:20}}>
      نتيجةَ تعرُضِها للعوامل الجرثوميّة المختلفة من إنتانات بكتيريّة، وفيروسيّة، وفطريّة، وروماتيزم، وغيرها من المسبّبات حيث تؤدّي إلى تحرّر الإنترولوكين-6، و الستوكينات، ُ ؛ لتي تُحَفزُ إنتاج
     بروتين سي التفاعلي؛ حيث تصل إلى قمّتها بعد الإصابة بالعوامل الجرثوميّة بحوالي ثمانية وأربعين ساعة

</Text>

<Text style={{fontSize:20}}>
Normal =less 6 mg/l

</Text>
</ScrollView>
      </View>

    );
  }
}class Urine extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
      يتم عمل فحص تحليل البول للكشف عن الخصائص الفيزيائية للبول
      (اللون والعكورة و الرقم الهيدروجيني والرائحه والكثافة)
</Text>
      <Text style={{fontSize:20}}>
      والكيميائيه  مثل (خلايا الدم البيضاء_النتريت-خلايا الدم الحمراء-هيموغلوبين- ا(ليوروبيلينوجين: Urobilinogen)- (لبيليروبين: Bilirubin)

</Text>

<Text style={{fontSize:20}}>
بالإضافة للفحص المجهري لرواسب البول،

</Text>
<Text style={{fontSize:20}}>
كريات الدم البيضاء، أو كريات الدم الحمراء، أو خلايا الكلى، إضافة إلى الكشف عن وجود أنواع مختلفة من البلورات، أو الفطريات، أو البكتيريا.او بما في ذلك الخلايا الطلائية

</Text>
</ScrollView>
      </View>
    );
  }
}class Liver extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
          <Text style={{fontSize:20}}>
      Total protein-TP1_: والذي يجمع بين بروتين الألبيومين وبروتين الجلوبيولين بالإضافة لعامل التخثر وهو بروتين الفيبرينوجين ويتم تقديره بناءً على اختبارات تخثر معينة. ويستخدم لفحص قدرة الكبد الأيضية أو الاستقلابية
</Text>
      <Text style={{fontSize:20}}>
      Normal 5.5_9 g/dl

</Text>

<Text style={{fontSize:20}}>
Albumin

</Text>
<Text style={{fontSize:20}}>
N=3.5-5.5g/dl

</Text>
<Text style={{fontSize:20}}>
يتم تصنيع الألبومين بشكل أساسي في الكبد وهو ضروري لوظائف الجسم الطبيعية  يتواجد الألبومين بشكل طبيعي في الجسم مشكلاً حوالي 60% من مجموع بروتينات البلازما.

</Text>
<Text style={{fontSize:20}}>
Globulin-Glob

</Text>
<Text style={{fontSize:20}}>
2-3.5g/dl

</Text>
<Text style={{fontSize:20}}>
Aspartate Amino Transferase-AST

</Text>
<Text style={{fontSize:20}}>
هو إنزيم يوجد في خلايا الجسم، وخاصة في القلب والكبد، وبشكل أقل في الكلى والعضلات. تكون مستويات إنزيم ناقلة الاسبارتات في الدم عند الأصحاء منخفضة. وعند حصول إصابة في خلايا الكبد أو العضلات، يجري تحرير إِنزيم AST عبر الدم.

</Text>
<Text style={{fontSize:20}}>
8-35 unit/l.normal=

</Text>
</ScrollView>
      </View>
    );
  }
}class Alanine extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
          <Text style={{fontSize:20}}>
      هو عبارة عن إنزيم يوجد في خلايا الكبد والكلى،   ويوجد في كميات قليلة منه في القلب والعضلات
      فهو يساعد في الكشف عن الأضرار الناجمة عن التهاب الكبد أو نتيجة استخدام بعض الأدوية أو بعض المواد الأخرى التي قد تكون سامة للكبد
</Text>
      <Text style={{fontSize:20}}>
      normalrange=4-36 unit/l

</Text>
</ScrollView>
      </View>

    );
  }
}class Glutamyl extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
          <Text style={{fontSize:20}}>
      هو انزيم يعمل  بمثابة جزيء نقل ، مما يساعد على تحريك الجزيئات الأخرى في جميع أنحاء الجسم. وهو يلعب دورًا مهمًا في مساعدة الكبد على استقلاب الأدوية والسموم الأخرى.
</Text>
      <Text style={{fontSize:20}}>
      يتركز GGT في الكبد ، ولكنه موجود أيضًا في المرارة والطحال والبنكرياس والكليتين. وعادة ما تكون مستويات GGT في الدم مرتفعة عندما يتلف الكبد. غالباً ما يتم هذا الاختبار مع اختبارات أخرى تقيس
      إنزيمات الكبد إذا كان هناك احتمال لتلف الكبد

</Text>

<Text style={{fontSize:20}}>
n=0-15 uni/l  صيام 8 ساعات

</Text>
</ScrollView>
      </View>
    );
  }
}class Lactate extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
          <Text style={{fontSize:20}}>
      هو إنزيم مطلوب أثناء عملية تحويل السكر إلى طاقة لخلاياك. LDH موجود في أنواع كثيرة من الأعضاء والأنسجة في جميع أنحاء الجسم ، بما في ذلك الكبد والقلب والبنكرياس والكليتين والعضلات الهيكلية والأنسجة الليمفاوية وخلايا الدم.
</Text>
      <Text style={{fontSize:20}}>
      عندما يتسبب المرض أو الإصابة في تلف خلاياك ، فقد يتم إطلاق LDH في مجرى الدم ، مما يؤدي إلى ارتفاع مستوى LDH في الدم. ارتفاع LDH في الدم يشير إلى تلف الخلايا الحادة أو المزمنة

</Text>

<Text style={{fontSize:20}}>
105-333 unit/l

</Text>
</ScrollView>
      </View>

    );
  }
}class ALP extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
          <Text style={{fontSize:20}}>
      انزيم يعمل على قياس  كمية إنزيم الفوسفاتيز القلوي
      تشير المستويات غير الطبيعية لـ ALP في الدم إلى وجود مشكلة في الكبد أو المرارة أو العظام. ومع ذلك ، فإنها قد تشير أيضًا إلى سوء التغذية ، أو أورام سرطان الكلى ، أو مشاكل معوية ، أو مشكلة في البنكرياس ، أو عدوى خطيرة. يختلف النطاق الطبيعي لـ ALP من شخص لآخر ويعتمد على عمرك ونوع الدم ونوع الجنس وما إذا كنت حاملاً
</Text>
      <Text style={{fontSize:20}}>
      41-133 units / liter.

</Text>

</ScrollView>
      </View>
    );
  }
}class Bilirubin extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
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
<Text style={{fontSize:20}}>
Direct over 0.30mg / dl

</Text>
<Text style={{fontSize:20}}>
More than 5.13umol / l

</Text>
<Text style={{fontSize:20}}>
Total up to1.2mg / dl

</Text>
<Text style={{fontSize:20}}>
Up to 20.52 micro mol / l

</Text>
</ScrollView>
      </View>
    );
  }
}class Kft extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
          <ScrollView>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Urine analysis</Text>
        <Text style={{fontSize:20}}>
        يتم عمل هدا التحليل للتاكد من عدموجود كميّات زائدة من البروتين، أو الدّم، أو البكتيريا، أو القيح، أو السُّكر في البول يُجرى التحليل عن طريق فحص عيّنة البول تحت المجهر، أو من خلال غمس شريط 
</Text>
<Text style={{fontSize:20}}>
Creatinine Clearance</Text>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}>

<Text style={{fontSize:20}}>
يُعتبر الكرياتينين من المخلّفات الطبيعيّة التي تنتج عن الحركة الطبيعيّة للعضلات، ويُجرى هذا الفحص بهدف مقارنة مستوى الكرياتينين في عينة بول جُمِعت على مدار 24 ساعة مع مستوى الكرياتينين في الدّم، وذلك لقياس كميّة الفضلات التي تتخلص منها الكليتان في الدقيقة الواحدة</Text>
<Text style={{fontSize:20}}>
  71-151ml/min
  </Text>
  <Text style={{fontSize:20}}>
  Microalbuminuria
  </Text>
  <Text style={{fontSize:20}}>
  هو اختبار البول الذي يقيس كمية الزلال في البول.
 الزلال هو بروتين يستخدمه الجسم  لنمو الخلايا وللمساعدة في إصلاح الأنسجة. وجودها بمستوى معين في البول قد يكون علامة على تلف الكلى.  </Text>
 <Text style={{fontSize:20}}>
  بجيث إن الكلى مسؤولة عن إزالة النفايات من الدم وتنظيم مستويات سوائل المياه في جسمك. تتأكد الكلى الصحية من أن النفايات يتم ترشيحها من جسمك وأن المواد المغذية والبروتينات الضرورية لصحتك ، مثل الألبومين ، تبقى في جسمك.
  </Text>
  <Text style={{fontSize:20}}>
  Less than 30mg/l
  </Text>
  <Text style={{fontSize:20}}>
مادة ناعمة تشبه الشمع موجودة في جميع أجزاء الجسم. يحتاج جسمك إلى القليل من الكوليسترول للعمل بشكل صحيح. ولكن الكثير من الكوليسترول يمكن أن يسد الشرايين ويؤدي إلى أمراض القلب. يجب أن يخضع كل شخص لاختبار الفحص لأول مرة في سن 35 عامًا ، ولعمر 45 عامًا للنساء.
</Text>
<Text style={{fontSize:20}}>

Serum creatinine

</Text>
</View>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}><Text style={{fontSize:20,color:'black'}}>
لكرياتينين هو جزيء من المخلفات الكيميائيه يتولد من عملية التمثيل الغذائي العضلي.
    يتم إنتاج الكرياتينين من الكرياتين ، وهو جزيء ذو أهمية كبيرة لإنتاج الطاقة في العضلات.
    يتم تحويل ما يقرب من 2 ٪ من كرياتين الجسم إلى الكرياتينين كل يوم.
    يتم نقل الكرياتينين من خلال مجرى الدم إلى الكليتين. تقوم الكلى بتصفية ا معظم الكرياتينين والتخلص منها في البول.

</Text>
</View>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}>

<Text style={{fontSize:20}}>يبقى إنتاج الكرياتينين بشكل طبيعي دون تغيير بشكل أساسي على أساس يومي.لان كتلة العضلات في الجسم ثابتة نسبيا من يوم لآخر
</Text>
</View>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}><Text style={{fontSize:20,color:'black'}}>
62-106umol/l

</Text>
<Text style={{fontSize:20}}>
Female 0.5-0.9mg/dl

</Text>
<Text style={{fontSize:20}}>
44-80umol

</Text>
<Text style={{fontSize:20}}>
Children 0.3-0.87mg/dl

</Text>
<Text style={{fontSize:20}}>
26.5-61.9

</Text>
<Text style={{fontSize:20}}>
Infant 0.17-0.42mg/dl

</Text>
<Text style={{fontSize:20}}>
15-37umol/l

</Text>
<Text style={{fontSize:20}}>
Blood urea nitrogen
</Text>
<Text style={{fontSize:20}}>
النيتروجين هو منتج النفايات الطبيعية التي يخلقها الجسم  بعد تناول الطعام. عندما يقوم الكبد بكسر البروتينات في طعامك – فإنه ينتج نيتروجين اليوريا في الدم ، المعروف أيضًا باسم BUN. يقوم الكبد بإطلاق المادة في الدم ، وينتهي بها الأمر في نهاية المطاف في الكليتين يتم فحص  كمية المخلفات الموجودة في الدم . إذا كانت المتستويات  خارج النطاق الطبيعي ، فقد يعني ذلك أن كليتيك أو كبدك لا يعملان بشكل صحيح.
</Text>
<Text style={{fontSize:20}}>
Normalrange=7.94-22.9mg/dl
</Text>
<Text style={{fontSize:20}}>
1.32-3.82mmol/l
</Text>
<Text style={{fontSize:20,fontWeight:'bold'}}>
Glomerular filtration rate

</Text>
<Text>يستخدم للتحقق من مدى كفاءة عمل الكلى، يتم فيه حساب مقدار الدم المار عبر كبيبات الكلى كل دقيقة.
</Text>
<Text style={{fontSize:20,fontWeight:'bold'}}>
Uric acid

</Text>
<Text style={{fontSize:20}}>
حمض اليوريك هو مادة كيميائية تنتج عندما يقوم الجسم بكسر الأطعمة التي تحتوي على مركبات عضوية تسمى البيورينات يتم إنشاء البيورينات من خلال العملية الطبيعية لتلف الخلايا في الجسم
</Text>
<Text style={{fontSize:20}}>
يذاب معظم حمض اليوريك في الدم ، وتصفى من خلال الكلى ، ويتم طردة في البول. في بعض الأحيان ينتج الجسم الكثير من حمض اليوريك أو لا يقوم بتصفية الكمية الكافية منه. (فرط حمض يوريك الدم) هو اسم الاضطراب الذي يحدث عندما يكون لديك الكثير من حمض اليوريك في جسمك.
</Text>
<Text style={{fontSize:20}}>
ترتبط مستويات عالية من حمض اليوريك مع حالة تسمى النقرس. النقرس هو شكل من أشكال التهاب المفاصل يسبب تورم المفاصل ، وخاصة في القدمين وأصابع القدم الكبيرة. سبب آخر من فرط حمض يوريك الدم هو زيادة موت الخلايا ، بسبب السرطان أو علاجات السرطان. هذا يمكن أن يؤدي إلى تراكم حمض اليوريك في الجسم.
</Text>
<Text style={{fontSize:20}}>
من الممكن أيضًا أن يكون لديك حمض اليوريك قليل جدًا في دمك ، وهو أحد أعراض مرض الكبد أو الكلى. وهو أيضًا أحد أعراض متلازمة فانكوني Fanconi ، وهو اضطراب في أنابيب الكلى التي تمنع امتصاص مواد مثل الجلوكوز وحامض اليوريك. ثم يتم تمرير هذه المواد في البول بدلا من ذلك.
 اليوريك هو مادة كيميائية تنتج عندما يقوم الجسم بكسر الأطعمة التي تحتوي على مركبات عضوية تسمى البيورينات يتم إنشاء البيورينات من خلال العملية الطبيعية لتلف الخلايا في الجسم
</Text>
<Text style={{fontSize:20}}>
Male 3.4-7mg/dl                     urine  2.2-275mg/dl
                                    131-16362umol/l
     202-416umol/l
Female 2.4-5.7mg/dl
      143-339umol
</Text>
</View>
<Text style={{fontSize:20}}>
Serum Sodium

</Text>
<Text style={{fontSize:20}}>
هو عنصر مهم بشكل خاص في وظيفة الأعصاب والعضلات.  حيث يحافظ جسمك على توازن الصوديوم من خلال مجموعة متنوعة من الآليات. يدخل الصوديوم  إلى الدم من خلال الطعام والشراب. ويخرج من الدم عن طريق البول والبراز والعرق حيث يحتاج الجسم إلى للصوديوم للتحكم في ضغط الدّم فعند انخفاض الصويدوم عن الحدّ المطلوب يتم إرسال إشارات للكلى، والغدد العرقية لتحفيزها على الاحتفاظ بالماء في الجسم للحفاظ على الصوديوم في جسم الإنسان، أما عند زيادة مستوى الصوديوم عن حدّه المطلوب، فإنّ الكلى تتخلّص من الفائض منه عن طريق إخراج بول أكثر ملوحة، وفي حال لم تتمكّن الكلى من التخلص من الصوديوم الفائض بالشكل الكافي؛ فإنّ ذلك قد يؤدي إلى تراكم السائل بين الخلايا وزيادة حجم الدم تبعاً لذلك، مما يعني المزيد من العمل للقلب، والمزيد من الضغط على الأوعية الدموية، والذي قد يتسبب مع مرور الوقت إلى تشنّج الأوعية الدّموية، وارتفاع ضغط الدّم أو الإصابة بنوبات قلبية أو سكتات دماغية.

</Text>
<Text style={{fontSize:20}}>
136-145mmol/l

</Text>
<Text style={{fontSize:20}}>
Serum Potassium

</Text>
<Text style={{fontSize:20}}>
وهو عنصر  يلعب دوراً هاماً في الحفاظ على التوازن الكهربائي على سطح الخلية. وله أهمية كبيرة في عملية الاتصال بين الخلايا المختلفة في جهاز الأعصاب والتواصل ما بين الأعصاب والعضلات. كما أنه هام أيضاً في عملية نقل الاشارات والمواد الغذائية من خارج الخلية إلى داخلها يعمل هرمون الألدوستيرون على إفراز البوتاسيوم في البول عندما يرتفع مستواه، ويحافظ على الكاتيون عندما ينخفض مستواه ومن  المشاكل التي يحدثها تغير مستوى البوتاسيوم وهي خلل في عمل الجهاز العصبي والعضلات واضطرابات خطيرة في نظم القلب
3.5-5.1 mmol/l
</Text>
<Text style={{fontSize:20}}>
Chloride
</Text>
<Text style={{fontSize:20}}>
تكمن أهميته في الحفاظ على حجم وضغط الدم بشكل مُناسب اضافة الى السيطرة على الرقم الهيدروجيني لسوائل الجسم المختلفة لتبقى في مستواها الطبيعي كما يُسهم في خلق الاتزان بين السوائل داخل وخارج الخلية ويُوصى به بالتزامن مع الكهرليات الاخرى ( الصوديوم والبوتاسيوم ) كجزء من الفحوصات الفيزيائية الدورية لتشخيص العديد من الاضطرابات.
98-107 mmol/l

</Text>
<Text style={{fontSize:20}}>
Homocysteine

</Text>
<Text style={{fontSize:20}}>
ينتح من  تحطم حمض أميني آخر يدعى "الميثيونين"؛ الذي هو حمض أميني طبيعي يوجد كوحدة بناء في كل بروتينات الغذاء، وهذا الحمض الأميني الضارٌ يُنتَج؛ فالأوعية الدموية، ويؤدي إلى تصلب الشرايين، وانسدادها؛ ما قد يسبب الجلطة الدماغية، أو السكتة القلبية، ويسبب "الزهايمر"، إذا زاد تركيزه على معدله الطبيعي في الدم، وتكون له فائدة واحدة فقط، ألا وهي تكوين الحامض الأميني "سيستين Cysteine"؛ الذي يدخل في تركيب الخمائر والهورمونات، التي تشمل هرمون الإنسولين، الذي ينظم تركيز سكّر الدم، ولكن "سيستين" موجود أيضاً في البروتينات التي يتناولها الإنسان.ويطلب فحص لمساعدة في تحديد ما إذا كنت تعاني من نقص في حمض الفوليك أو نقص فيتامين ب 12. لتحديد ما إذا كنت في خطر متزايد من نوبة قلبية أو سكتة دماغية

</Text>
<Text style={{fontSize:20}}>
Male 5.5-16.2

</Text>
<Text style={{fontSize:20}}>
Female 4.4-13.5

</Text>
</ScrollView>
      </View>
    );
  }
}class folic extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            يعتبر حمض الفوليك أو كما يُسمى بالإنجليزية folic acid أحد الفيتامينات التي تنتمي إلى فيتامين ب المركّب، ويحتاج الجسم حمض الفوليك بشكلٍ أساسيّ لإنتاج كريات الدم الحمراء، ويُمكن اعتباره من أكثر الفيتامينات المعقّدة، إذ يساهم في تحسين صحة الشعر، والجلد، والجهاز العصبيّ،ومن الاعراض التي تدل على نقصهٍالإصابة بالأنيميااو. اضطرابات في الجهاز الهضميّ، وبالتالي صعوبة امتصاص العناصر الغذائية او. الشعور بالإرهاق والتعب. الشعور بالتوتر والقلق. اضطرابات في الجهاز العصبيّ. احتمالية الإصابة بحموضة المعدة حمض الفوليك هو فيتامين ب 9 ، وهو ضروري لإنتاج خلايا الدم الحمراء السليمة. تقدم هذه الخلايا الأكسجين إلى الجسم بأكمله ،. حمض الفوليك مهم أيضا للنمو الطبيعي للجنين. فهو يساعد في نمو الخلايا والأنسجة بالإضافة إلى إنشاء الحمض النووي ، الذي ينقل المعلومات الوراثية. وهذا هو سبب أهمية حمض الفوليك بشكل خاص للنساء الحوامل  اويخططن للحمل.</Text>
            <Text style={{fontSize:20}}>
ينبغي للمرأة أن تأخذ 400 ميكروغرام من حمض الفوليك كل يوم ، بدءا بشهر واحد على الأقل قبل الحمل. يمكن أن يساعد أخذ حمض الفوليك الإضافي أثناء الحمل على الوقاية من العيوب الخلقية في الدماغ والحبل الشوك
3-17ng/ml
6.8-38.5nmol/l

</Text>
</ScrollView>
      </View>
    );
  }
}
class Hba1c extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            هو شكل من أشكال الهيموجلوبين (صبغة الدم التي تحمل الأكسجين) التي ترتبط بالجلوكوز.
يتم إجراء اختبار الدم لمستوى HbA1c بشكل روتيني عند الأشخاص المصابين بالنوع الأول والثاني من السكري.
مستوHbA1c تعكس كيف يتم التحكم في مرض السكري.و تعكس مستويات الجلوكوز في الدم خلال الستة إلى ثمانية أسابيع الماضية ولا تعكس صعود وهبوط يومي للجلوكوز في الدم
</Text>
<Text style={{fontSize:20}}>
5.7% to 6.4% normal
Pre-diabetic 5.7-6.4
Diabetes more than 6.5
</Text>
</ScrollView>
      </View>
    );
  }
}
class A extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            هو بروتين يحمل الكوليسترول HDL ("الجيد"). يساعد على بدء عملية HDL لإزالة الأنواع السيئة من الكوليسترول من جسمك. بهذه الطريقة ، يمكن أن يساعد البروتين الشحمي A على تقليل خطر الإصابة بأمراض القلب والأوعية الدموية. على الرغم من أن مستويات البروتين الشحمي A يمكن قياسها ، إلا أنه من الشائع قياس كوليسترول HDL و LDL ("سيء") عند النظر إلى مخاطر القلب والأوعية الدموية.
قد تحتاج إلى هذا الاختبار لمعرفة ما إذا كنت في خطر متزايد لأمراض القلب. إذا كنت تعاني بالفعل من مشاكل في القلب مثل نوبة قلبية. لا يستخدم هذا الاختبار في كثير من الأحيان مثل ملف تعريف الدهون. يقيس مستوى الدهون في الجسم HDL والكولسترول الضار. لكن بعض الدراسات تشير إلى أن نتائج اختبار apolipoprotein A هي مقياس جيد لمخاطر الإصابة بأمراض القلب.
قد يساعد هذا الاختبار على تحسين مخاطرك إذا كان لديك تاريخ عائلي
يجب صيام 12-14قبل الفحص
</Text>
<Text style={{fontSize:20}}>
        male 104-202mg/dl
female108-225mg/dl
</Text>
</ScrollView>
      </View>
    );
  }
}
class Transferrin extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            هو البروتين الرئيسي في الدم الذي يرتبط بالحديد وينقله في جميع أنحاء الجسم. اختبار ترانسفيرين يقيس مباشرة مستواة في الدم.
يتم الفحص في الصباح الباكر يجب صيام 8 ساعات و</Text>
<Text style={{fontSize:20}}>
        Iron supplements should be stopped for at least 24 hours
200.00-360.000mg / dl
</Text>
<Text style={{fontSize:20}}>
        Total Iron Binding Capacity (TIBC)
اختبار قدرة الحديد الكلي (TIBC) وهو نوع من اختبار الدم الذي يقيس ما إذا كان هناك الكثير من الحديد أو القليل جدًا في مجرى الدم.
الحديد هو نوع من المعادن الموجودة في جميع خلايا الجسم. يمكنك الحصول على الحديد الذي تحتاجه من خلال نظامك الغذائي. بمجرد دخول الحديد إلى الجسم ، يتم نقله عبر مجرى الدم عن طريق بروتين يسمى transferrin ، والذي يتم إنتاجه بواسطة الكبد. اختبار TIBC بتقييم مدى نقل transferrin الحديد من خلال الدم.
</Text>
<Text style={{fontSize:20}}>
        The check is done early in the morning
Fasting for 8 hours
Iron supplements should be stopped for at least 24 hours
240-450 μg / dl
</Text>
</ScrollView>
      </View>
    );
  }
}
class tpo extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            هي أجسام مضادة تتطور نتيجة لهجوم مناعي ذاتي على الغدة الدرقية. أنها تستهدف الغدة ، وعادة ما يؤدي إلى تدمير الغدة على مر الزمن. تهاجم الأجسام المضادة لـ TPOAb بيروكسيديز الغدة الدرقية ، وهو إنزيم يلعب دورًا في تحويل T4 إلى T3. يمكن أن يكون ارتفاع مستويات TPOAb دليلاً على حدوث التهاب في الغدة أو تدمير الأنسجة مثل مرض هاشيموتو.
أ 0—35 IU/mL
</Text>
</ScrollView>
      </View>
    );
  }
}
class Protein extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            هو واحد من العديد من البروتينات الحيوية في جسم الإنسان.حيث  يلعب دورا كبيرا في السيطرة على عملية تخثر الدم لديك. إن قدرة دمك على التجلط مهمة للغاية.حيث يعمل على  منع فقدان الدم الزائد عند حدوث إصابة. ومع ذلك ، يمكن أن تكون الجلطة الدموية في الشريان أو الوريد (تسمى تجلط الدم) خطيرة للغاية.
بروتين S هو مضاد للتخثر. إذا لم يكن هناك ما يكفي منه ، فقد يتكون نوع ضار من الجلطة الدموية. هناك حاجة إلى الكمية الصحيحة من البروتين S لضمان عمل عملية تخثر الدم بشكل صحيح.
</Text>
<Text style={{fontSize:20}}>
        في بعض الحالات ، يكون نقص بروتين s))وراثيا. بعض الناس يولدون ببساطة مع نقص في هذا المضاد للتخثر. قد يطلب الطبيب إجراء الاختبار إذا كان لديك أحد أفراد العائلة المقربين أو أكثر ممن لديهم تاريخ من الجلطات الدموية الخطيرة أو إذا كان أحد أفراد عائلتك يعاني من نقص في بروتين S المعروف.
</Text>
<Text style={{fontSize:20}}>
        بالنسبة لمعظم الأشخاص الذين لديهم نقص في بروتين S ، فإن الجلطة الدموية الخطيرة هي في الغالب أول علامة على أن هناك خطأ ما. وغالبا ما تظهر الجلطة في الساق أو الرئة ، وعادة لا تظهر أي أعراض قبل الحدث
</Text>
<Text style={{fontSize:20}}>
        50-130 male
Female 70-115</Text>
</ScrollView>
      </View>
    );
  }
}
class Prothrombin extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            هي حالة وراثية تسبب زيادة في احتمالية تشكل الدم لجلطات دموية خطيرة.بحيث جميع االناس  يصنعون بروتيرومبين (ويسمى أيضا العامل الثاني)
ويتم إنتاج بروتين البروثرومبين للمساعدة في تجلط الدم ، ويتم إنتاجه بكميات أكبر بعد تلف أحد الأوعية الدموية.
    الناس الذين لديهم طفرة في جين البروثرومبين ينتجون بروتين بروترمبين أكثر مما هو طبيعي. بما أن هناك المزيد من بروتين البروثرومبين في الدم ، فإن هذا يزيد من احتمالية لتشكل الجلطات الدموية .
</Text>
</ScrollView>
      </View>
    );
  }
}
class Mthafr extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            يتم عمل الفحص لتقييم سبب ارتفاع مستويات الهوموسيستين. و تحديد خطر تجلط الدم أو أمراض القلب والأوعية الدموية المبكرة (CVD) يتم عمل الفحص
عندما ترتفع مستويات الهوموسستئين. او في بعض الأحيان عندما يكون أحد الأقارب لديه طفرات جينية من MTHFR أو قد أصيب بتطور أو تخثر في عمر مبكر
</Text>
</ScrollView>
      </View>
    );
  }
}
class THROMBIN extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            عندحدوث نزف ، يمتلك جسمك دفاعات طبيعية تمنعك من فقدان الكثير من الدم. هذه الدفاعات معروفة مجتمعة بالتخثر. وتعرف البروتينات التي تساعد في عملية التخثر بعوامل التخثر. وتساعد عوامل التخثر أيضًا في الحفاظ على اتساق جريان الدم في الأوعية الدموية.
تتم عملية التجلط للحماية  من فقدان الدم. ولكن الكثير من التجلط يمكن أن يتسبب في تشكل جلطات دموية مهددة للحياة. هذه الجلطات يمكن أن تمنع تدفق الدم إلى أعضائك الحيوية. ينتج الجسم أنواعًا معينة من البروتينات التي تنظم عملية التخثر الثرومبين هو واحد من تلك البروتينات.
يتم قياس  كمية بروتين مضاد الثرومبين في جسمك لمعرفة ما إذا كان لديك نقص في مضاد الثرومبين الذي يسبب تجلط الدم أكبر من الطبيعي.

80-100
</Text>
</ScrollView>
      </View>
    );
  }
}
class Anticoagulants extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            نوع من الأجسام المضادة التي ينتجها نظام المناعة في الجسم. في حين أن معظم الأجسام المضادة تهاجم المرض في الجسم ، إلا أن LAs تهاجم الخلايا السليمة وبروتينات الخلية.
يهاجمون الفسفوليبيدات ، وهي مكونات أساسية لأغشية الخلايا. ترتبط LAs باضطراب في نظام المناعة يعرف باسم متلازمة antiphospholipid.
يمكن ل LAs زيادة خطر تجلط الدم. ومع ذلك ، يمكن أن تكون الأجسام المضادة موجودة ولا تؤدي إلى تجلط.
يمكن أن تكون الجلطات الدموية مهددة للحياة إذا لم تعالج على الفور.
يمكن للجلطات الدموية الصغيرة التي تسببها LAs تعقيد الحمل والحث على الإجهاض. قد تكون حالات الإجهاض المتعددة علامة على وجود LAs ، خاصة إذا حدثت بعد الأشهر الثلاثة الأولى.
36-49 sec
</Text>
</ScrollView>
      </View>
    );
  }
}
class Cardiolipin extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
             يتم عمل الفحص للمساعدة في التحقيق في تكوين الجلطة الدموية او للمساعدة في تحديد سبب الإجهاض المتكرر ، أو كجزء من تقييم لمتلازمة الفوسفوليبيد أو في بعض الأحيان أمراض المناعة الذاتية او عندما يكون لديك جلطة دموية واحدة أو أكثر في الوريد أو الشريان.
Negative less 12mpl/ml
Equivocal 12-18mpl/ml
Positive more than 18mpl/ml</Text>
</ScrollView>
      </View>
    );
  }
}
class APA extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            يتم عمل الفحص للمساعدة في التحقق من وجود جلطات الدم أو PTT لفترات طويلة بشكل غير متوقع  خاصة إذا كنت تعاني من حالات إجهاض متكررة ؛يتم عمل الفحص  في بعض الأحيان للمساعدة في تشخيص أو تقييم اضطراب المناعة الذاتية وعادة يتم عمل الفحص عندما يكون لديك اختبار PTT لفترات طويلة غير المبررة(ارتفاع نسبة ال ptt )  او عندما يكون لديك جلطات دموية غير متكررة ؛ او عندما كان لديك الإجهاض المتكرر ، وخاصة في الثلث الثاني والثالث من الحمل
Negative less 12u/ml
Equivocal 12-18u/ml
Positive more than 18u/ml
</Text>
</ScrollView>
      </View>
    );
  }
}
class CA125 extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            لرصد علاج سرطان المبيض  او في بعض الأحيان لتقييم ورم موجود في منطقة الحوض (كتلة الحوض) ؛ لا يُنصح به لفحص النساء عديمات الأعراض ولكن يُطلب منه أحيانًا المساعدة في الكشف عن سرطان المبيض المبكر في الأشخاص المعرَّفين بأنهم معرضون لخطر كبير يتم عمل الاختبار
قبل بدء العلاج لسرطان المبيض وعلى فترات أثناء وبعد العلاج ؛ في بعض الأحيان عندما يكون لديك كتلة الحوض أو تكون في خطر كبير لتطوير سرطان المبيض
35.000u/ml
</Text>
</ScrollView>
      </View>
    );
  }
}
class Ca15 extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            لمراقبة الاستجابة للعلاج من سرطان الثدي وللمساعدة في مراقبة تكرار المرض
25u/ml
</Text>
</ScrollView>
      </View>
    );
  }
}

class Cancer extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            لرصد الاستجابة لعلاج سرطان البنكرياس لمشاهدة التكرار و في بعض الأحيان للمساعدة في تشخيص سرطان البنكرياس
أثناء و / أو بعد علاج سرطان البنكرياس

34u/ml
</Text>
</ScrollView>
      </View>
    );
  }
}
class Carcinoembryonic extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            لرصد علاج السرطان ، بما في ذلك الاستجابة للعلاج ويستخدم  كمؤشر على كمية السرطان أو حجم الورم الموجود (اوالمساعدة في تنظيم السرطان ؛ أحيانًا كمتابعة لاختبار الفحص الإيجابي للسرطان ، لمقارنة ما إذا كان المستوى ينخفض ​​إلى المستوى الطبيعي (مما يشير إلى أنه من المرجح إزالة السرطان)اي بعد علاج السرطان
او عندما يتم تشخيص حالتك بالقولون أو البنكرياس أو الثدي أو الرئة أو المبيض أو الغدة الدرقية النخاعية أو أي سرطان آخر قبل البدء في علاج السرطان ، وبعد ذلك ، إذا ارتفعت ، على فترات أثناء وبعد العلاج ؛ في بعض الأحيان عندما يشتبه في السرطان ولكن لم يتم تأكيده – او للمساعدة في اكتشافه

مدخن 5000ug/l
غير مدخن3000ug/l
</Text>
</ScrollView>
      </View>
    );
  }
}
class Calcium extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            عنصر أساسي في جسم الكائنات الحية وهو متوفّر فيها بنسب طبيعية معينة تؤثر عليه، فتوفر هذا العنصر في الخلايا بنسبه طبيعية يساعد خلايا الجسم على القيام بوظائفها بشكل سليم،
يتواجد الكالسيوم في العديد من الأعضاء والدم وسوائل الجسم الأخرى ولكنه يتركز في العظام والأسنان حيث
. حدوث تقلصات في العضلات والتهابات المفاصل.و واضطرابات في القلب الكساح، وتلين العظام وهشاشتها بحيث نقص الكالسيوم يؤدي الى
Adult 8.6-10 mg/dl
           2.15-2.50mmol/l
Child 8.4-11mg/dl
          2.1-2.75mmol
</Text>
</ScrollView>
      </View>
    );
  }
}
class Magnesium extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            المغنيسيوم هو رابع أكثر المعادن وفرة في جسم الإنسان.
حيث يلعب العديد من الأدوار المهمة في صحة الجسم والدماغ .واأنّ تناول المغنيسيوم بشكلٍ كافٍ يُقلّل من خطر الإصابة بهشاشة العظام لدى النساء بعد انقطاع الطمث، ويعزز بناء العظام، ويزيد من كثافته؛ فهو يساعد على ترسيب الكالسيوم في العظام، كما يساهم في تنشيط فيتامين د في الكليتين
إنّ نقص المغنيسيوم قد ينعكس سلباً على الجسم في حال زيادة تناوله للكالسيوم، ممّا يزيد من خطر الإصابة بحصى الكلى 1.6-2.4mg/dl
0.66-0.99mmol/l
</Text>
</ScrollView>
      </View>
    );
  }
}
class Phosphours extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            الفسفور من أهم المعادن لصحة جسم الإنسان، وذلك لأنه جزء لا يتجرأ في العديد من مهام جسم الإنسان، فالفسفور يتحد مع الكالسيوم ويضفي على العظام قوة وصلابة قوية جداً، كما أنه مكون من مكونات المادة الوراثية وهذه المادة موجودة داخل الخلايا، ويعمل أيضاً على مراقبة وضبط البروتينات داخل الجسم
</Text>
        <Text>يتم قياس  الفوسفور في الدم والمساعدة في تشخيص الحالات المعروفة ويتم عمل فحصل لمتابعة مستوى الكالسيوم غير الطبيعي او عندما يكون لديك اضطراب في الكلى أو مرض السكري غير المنضبط او عند تناول مكملات الكالسيوم أو الفوسفات
Adult male 2.7-4.9 mg/dl
Adult female 2.5-4.8mg/dl
</Text>
</ScrollView>
      </View>
    );
  }
}
class VitaminA extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            فيتامين (أ) هو فيتامين قابل للذوبان في الدهون يلعب دورا أساسيا في الحفاظ على الرؤية ، ونمو الجسم والحفاظ على المناعة والصحة الإنجابية.
الحصول على كميات كافية من فيتامين (أ) من النظام الغذائي الخاص بك يمنع أعراض النقص ، والتي تشمل فقدان الشعر ، ومشاكل الجلد ، جفاف العين ، والعمى الليلي وزيادة القابلية للإصابة بالعدوى.
200-1200ng/ml
</Text>
</ScrollView>
      </View>
    );
  }
}
class b1 extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>

            الثيامين كان أول فيتامين ب الذي اكتشفه العلماء. هذا هو السبب في أن اسمها يحمل الرقم مثل باقي الفيتامينات B ، الثيامين قابل للذوبان في الماء ويساعد الجسم على تحويل الطعام إلى طاقة. يمكنك العثور عليها في:
</Text>
<Text style={{fontSize:20}}>
   الأطعمة
    المكملات الفردية
    الفيتامينات المتعددة
يمكن لنقص الثيامين أن يؤثر على العديد من الوظائف المختلفة لجسمك ، بما في ذلك وظائف:
    الجهاز العصبي
    قلب
    دماغ
</Text>
<Text style={{fontSize:20}}>
25-85 micrgram/l
</Text>
</ScrollView>
      </View>
    );
  }
}
class b2 extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>

            يساعد فيتامين ب 2 وفيتامين ب الأخرى الجسم  على بناء خلايا الدم الحمراء ودعم الوظائف الخلوية الأخرى التي تمنحك الطاقة. يتم الحصول على أقصى استفادة من فيتامينات B إذا كنت تتناول مكملات غذائية أو تتناول أطعمة تحتوي على كل منها.يؤدي نقص فيتاين بي2 الى فقر الدم
</Text>
<Text style={{fontSize:20}}>
        ومن المهم بشكل خاص التأكد من الحصول على كمية كافية من ريبوفلافين في النظام الغذائي للمراة الحامل . يمكن لنقص الريبوفلافين أن يعرض نمو الطفل للخطر ويزيد من فرص الإصابة بحالة تسمم الحمل ، والتي تتضمن ارتفاع ضغط الدم بشكل خطير أثناء الحمل. ومن المضاعفات الأكثر خطورة من تسمم الحمل هي نقص تدفق الدم إلى المشيمة.
</Text>
<Text style={{fontSize:20}}>
 180-295 mg/l
</Text>
</ScrollView>
      </View>
    );
  }
}
class b6 extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            فيتامين ب 6 المعروف أيضا باسم البيريدوكسين ، هو واحد من ثمانية فيتامينات في المجموعة ب المعقدة..

يحصل معظم الناس على ما يكفي من فيتامين ب 6 في نظامهم الغذائي ، ولكن إذا كنت تعاني من نقص في فيتامينات ب معقدة أخرى ، مثل الفولات و B12 ، فمن الأرجح أن يكون لديك ننقص  في فيتامين ب 6 أيضًا
يعتبر نقص فيتامين ب 6 أكثر شيوعًا في الأشخاص الذين يعانون من أمراض الكبد أو الكلى أو الجهاز الهضمي أو أمراض المناعة الذاتية ، بالإضافة إلى المدخنين والبدناء والمدمنين على الكحول والنساء الحوامل
في الجسم ، يشارك B6 في أكثر من 150 تفاعل. التي  تساعد جسمك على معالجة البروتينات والكربوهيدرات والدهون التي تتناولها. كما يرتبط B6 ارتباطًا وثيقًا بوظائف الجهاز العصبي وجهاز المناعة

B6 لديها خصائص مضادة للأكسدة ومضادة للالتهابات. هذا يعني أنه قد يلعب دورا في المساعدة على منع الأمراض المزمنة مثل أمراض القلب والسرطان
3.6-18ng / ml
</Text>
</ScrollView>
      </View>
    );
  }
}
class e extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>

            هو عبارة عن فيتامين قابل للذوبان في الدهون ويُسمّى أيضاً بفيتامين هـ، وقد أظهرت العديد من الدراسات أنّ الكثير من الناس لا يحصلون على النسبة اليومية المناسبة منه، ممّا يعرضهم لمجموعةٍ واسعةٍ من الأمراض بما فيها ضعف المناعة العامة في الجسم، وقد يؤدي نقصه في بعض الحالات للإصابة بالزهايمر وإضعاف القدرات العقلية
يظهر ارتفاع فيتامين بي 6 في حالات ارتفاع الليبدات او الدهون  الناتجة عن امراض الكبد وانخفاض الفيتامين  يدل على سوء التغدية.
5-18hg/ml
</Text>
</ScrollView>
      </View>
    );
  }
}
class k extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            يشير فيتامين K إلى مجموعة من الفيتامينات التي تذوب في الدهون والتي تلعب دورًا في تخثر الدم ، واستقلاب العظام ، وتنظيم مستويات الكالسيوم في الدم.
يحتاج الجسم إلى فيتامين ك لإنتاج البروثرومبين ، وهو عامل تجلط وعائي مهم في تخثر الدم واستقلاب العظام. يجب على الأشخاص الذين يستخدمون أدوية تمييع الدم ، مثل الوارفارين ، أو الكومادين ، عمل فحص لفيتامين k
النقص نادر ، ولكن في الحالات الشديدة ، يمكن أن يزيد من زمن التجلط ، مما يؤدي إلى النزيف والنزيف المفرط.
</Text>
<Text style={{fontSize:20}}>
0.3-2.7nmol / l
</Text>
</ScrollView>
      </View>
    );
  }
}
class Hepatitis extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            التهاب الكبد هو التهاب وتضخم الكبد. أحد أكثر الأسباب شيوعًا لالتهاب الكبد الحاد هو العدوى بفيروس التهاب الكبد ، عادةً التهاب الكبد A ، التهاب الكبد B أو التهاب الكبد C. إن التهاب الكبد الفيروسي الحاد عبارة عن مجموعة من اختبارات الدم التي يتم إجراؤها معًا للمساعدة في تشخيص التهاب الكبد الفيروسي. بعض الاختبارات الكشف يت فيها الكشف عن الأجسام المضادة التي ينتجها الجهاز المناعي ردا على العدوى والكشف عن البروتينات (المستضدات) التي تشير إلى وجود الفيروس
</Text>
</ScrollView>
      </View>
    );
  }
}
class Rubella extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            الحصبة الألمانية عضو في عائلة Togavirus ، ويبقى البشر المضيف الطبيعي الوحيد لهذا الفيروس. عادة ما يكون الانتقال عن طريق استنشاق الهواء الملوث بالفايروس
يمكن أن تؤدي الإصابات الأولية بالحمى الرحمية إلى مضاعفات شديدة للجنين ، خاصة إذا حدثت العدوى خلال الأشهر الأربعة الأولى من الحمل. غالباً ما يرتبط متلازمة الحصبة الألمانية الخلقية بفقدان السمع ، وعيوب القلب والأوعية الدموية والعين.
</Text>
<Text style={{fontSize:20}}>
        Less than 5u/ml negative
</Text>
<Text style={{fontSize:20}}>
        Positive more than 10
</Text>
</ScrollView>
      </View>
    );
  }
}
class Rheumatoid extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            التهاب المفاصل الروماتويدي (RA) هو التهاب مزمن في المفاصل. يشبه عددا من الاضطرابات والظروف الأخرى. هذا هو السبب في أنه غالبا ما يستغرق وقتا لتشخيص.
لا تقدم فحوصات الدم إجابة بسيطة بنعم أو لا على ما إذا كان لديك النهاب المفاصل . لكن يمكن أن يساعد الطبيب على توجيهك نحو التشخيص.
</Text>
<Text style={{fontSize:20}}>
        بعد حصولك على تشخيص التهاب المفاصل فإن اختبارات الدم المستمرة ستراقب الآثار الجانبية للأدوية المستخدمة في العلاج وأيضًا المساعدة في تتبع تطور الاضطراب.
</Text>
<Text style={{fontSize:20}}>
        اختبار RF ليس مثاليًا لتحديد ما إذا كان لديك النهاب مقاصل
</Text>
</ScrollView>
      </View>
    );
  }
}
class Antistreptolysin extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            هو فحص الدم الذي يتحقق من وجود عدوى بكتيرية. عندما تتلامس مع البكتيريا الضارة ، ينتج جسمك أجسامًا مضادة للدفاع عن نفسه ضد هذه البكتيريا. وينتج جسمك  ايضا أجسامًا مضادة خاصة بالبكتيريا التي تقاتلها.
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
</ScrollView>
      </View>
    );
  }
}
class Antinuclear extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            الاجسام المضادة هي بروتينات يصنعها جهاز المناعة لديك. فهي تساعد جسمك على التعرف على العدوى ومكافحتها. تستهدف الأجسام المضادة عادة المواد الضارة ، مثل البكتيريا والفيروسات ، من خلال تنشيط نظام المناعة للتخلص منها.
في بعض الأحيان ، تستهدف الأجسام المضادة الخلايا والأنسجة السليمة عن طريق الخطأ. هذا هو المعروف باسم استجابة المناعة الذاتية. تسمى الأجسام المضادة التي تهاجم البروتينات السليمة داخل النواة - مركز التحكم في خلاياك - بالأجسام المضادة للنواة (ANA).
</Text>
<Text style={{fontSize:20}}>

        عندما يتلقى الجسم إشارات للهجوم على نفسه ، فإنه يمكن أن يؤدي إلى أمراض المناعة الذاتية مثل الذئبة ، تصلب الجلد ، مرض النسيج الضام المختلط ، التهاب الكبد المناعي الذاتي ، وغيرها. تختلف الأعراض باختلاف المرض ، ولكنها قد تشمل الطفح الجلدي أو التورم أو التهاب المفاصل أو الإرهاق.
</Text>
<Text style={{fontSize:20}}>
        في حين أنه من الطبيعي أن يكون لديك بعض ANA ، فإن وجود عدد كبير جدًا من هذه البروتينات يعد علامة على وجود أمراض المناعة الذاتية النشطة. يساعد فحص ANA على تحديد مستوى ANA في دمك. قد يكون لديك اضطراب ذاتي إذا كان المستوى مرتفعًا. ومع ذلك ، يمكن أن تؤدي أيضًا حالات مثل الالتهابات والسرطان والمشاكل الطبية الأخرى إلى اختبار إيجابي ANA.
</Text>
<Text style={{fontSize:20}}>
        يتم عمل فحص إذا كان لديك علامات أو أعراض اضطراب في المناعة الذاتية. قد يشير اختبار ANA إلى أن لديك نوعًا من حالات المناعة الذاتية ، ولكن لا يمكن استخدامه لتشخيص اضطراب معين.
</Text>
<Text>Titer less than 1/80

</Text>
</ScrollView>
      </View>
    );
  }
}
class Citrullinated extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            وهو بروتين ينتج كجزء من العملية التي تؤدي  التهاب المفاصل الروماتويدي. يستخدم لتأكيد تشخيص التهاب المفاصل الروماتويدي. يعد الجسم المضاد CCP المضاد الأكثر تحديدًا لالتهاب المفاصل الروماتويدي. مع خصوصية حوالي 98 ٪ ، بل هو علامة موثوق بها لتأكيد تشخيص التهاب المفاصل الروماتويدي. حيث أن الأجسام المضادة لـ CCP سبقت تشخيص التهاب المفاصل الروماتويدي ويمكن أن توجد قبل سنوات من تطور أعراض RA. ويعتقد أن لديهم دور ممرض في تطوير RA
</Text>
<Text style={{fontSize:20}}>
        مضاد الأجسام المضادة لـ CCP هو أكثر موثوقية من عامل الروماتويد في تشخيص التهاب المفاصل الروماتويدي. يمكن لاختبار مكافحة CCP بدقة تشخيص التهاب المفاصل الروماتويدي في مرحلة مبكرة للغاية بالمقارنة مع عامل الروماتويد.
</Text>
<Text style={{fontSize:20}}>
Negative lessthan5RU/ml
Positive more than 5
</Text>
</ScrollView>
      </View>
    );
  }
}
class Seminal extends React.Component {

  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            غالباً ما ينصح بتحليل السائل المنوي عندما يواجه الأزواج مشاكل في الحمل. سيساعد الاختبار الطبيب على تحديد ما إذا كان الرجل عقيمًا. كما سيساعد التحليل أيضًا في تحديد ما إذا كان انخفاض عدد الحيوانات المنوية أو خلل الحيوانات المنوية
</Text>
<Text style={{fontSize:20}}>
        يجب الحصول على أفضل عينة: يعتبر الاستمناء الطريقة المفضلة للحصول على عينة نظيفة
    تجنب القذف لمدة 24 إلى 72 ساعة قبل الاختبار.
    تجنب الكحول والكافيين والعقاقير مثل الكوكايين والماريجوانا قبل يومين إلى خمسة أيام من الاختبار.
</Text>
<Text style={{fontSize:20}}>
   تجنب أي أدوية ويجب أن تبقى العينه في درجة حرارة الجسم. إذا كان الجو دافئًا أو شديد البرودة ، فستكون النتائج غير دقيقة. ثانياً ، يجب تسليم العينه  إلى المختبر خلال 30 إلى 60 دقيقة من مغادرة الجسم.
</Text>
<Text style={{fontSize:20}}>
        حجم العينه-2-5 مل
زمن التميع 10-30دقيقة
Ph 7.2-76
تركيز الحيوانات المنوية 20-160مليون/ضخة
الحركة 70-90%في الساعه
الشكل 79-90% طبيعي
</Text>
<Text style={{fontSize:20}}>
كريات الدم البيضاء اقل من مليون/مل

</Text>
</ScrollView>
      </View>
    );
  }
}
class Hsv extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
        فيروس الهربس البسيط ، المعروف أيضا باسم HSV ،. يمكن أن يظهر الهربس في أجزاء مختلفة من الجسم ، أكثرها شيوعا على الأعضاء التناسلية أو الفم. هناك نوعان من فيروس الهربس البسيط.
</Text>
<Text style={{fontSize:20}}>
        HSV-1: المعروف أيضا باسم الهربس عن طريق الفم ، يمكن أن يسبب هذا النوع من القروح الباردة وبثور الحمى حول الفم وعلى الوجه.
            HSV-2: هذا النوع مسؤول بشكل عام عن تفشي الهربس التناسلي.
</Text>
<Text style={{fontSize:20}}>
        فيروس الهربس البسيط هو فيروس معدي يمكن أن ينتقل من شخص لآخر من خلال الاتصال المباشر. غالباً ما ينتقل الفايروس الى الأطفال مع HSV-1 من الاتصال المبكر مع بالغ مصاب. ثم يحملون الفيروس معهم لبقية حياتهم.
</Text>
<Text style={{fontSize:20}}>
        يمكن أن تحدث الإصابة بـ HSV-1 من التفاعلات العامة مثل:
            تناول الطعام من نفس الأواني
            تقاسم بلسم الشفاه
            تقبيل
</Text>
<Text style={{fontSize:20}}>
ينتشر الفيروس بسرعة أكبر عندما يكون الشخص المصاب يعاني من تفشي المرض. في أي مكان من 30 إلى 95 في المئة من البالغين هم مصابون بالفيروس لـ HSV-1 ، على الرغم من أنهم قد لا يعانون
من تفشي المرض. من الممكن أيضا الحصول على الهربس التناسلي من HSV-1 إذا كان الشخص الذي أجرى ممارسة الجنس عن طريق الفم يعاني من قروح باردة خلال تلك الفترة.

</Text>
</ScrollView>
      </View>
    );
  }
}

class HIV extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            هو فيروس يدمر جهاز المناعة. يساعد الجهاز المناعي الجسم على محاربة الالتهابات. يصيب فيروس العوز المناعي البشري خلايا CD4 وتقتلها ، وهي نوع من الخلايا المناعية تسمى الخلايا التائية T cells.، في الوقت الذي يقتل فيه فيروس HIV خلايا CD4 ، يزداد احتمال حصول الجسم على أنواع مختلفة من العدوى
ينتقل فيروس نقص المناعة البشرية من خلال سوائل الجسم التي تشمل:
    دم
    المني
    السوائل المهبلية والمستقيم
    حليب الثدي
لا ينتشر الفيروس في الهواء أو الماء ، أو من خلال الاتصال العرضي.
يبلغ العمر المتوقع للإصابة بمرض الإيدز ، غير المعالج ، حوالي ثلاث سنوات
</Text>
</ScrollView>
      </View>
    );
  }
}
class electrophoreses extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>

            اختبار الهيموغلوبين الكهربائي هو اختبار دم يستخدم لقياس وتحديد أنواع مختلفة من الهيموجلوبين في مجرى الدم. الهيموجلوبين هو البروتين الموجود داخل خلايا الدم الحمراء المسؤولة عن نقل الأكسجين إلى الأنسجة والأعضاء.

يمكن أن تسبب الطفرات الجينية في جسمك لإنتاج الهيموجلوبين الذي يتشكل بشكل غير صحيح. يمكن أن يسبب هذا الهيموجلوبين غير الطبيعي كمية قليلة جدًا من الأكسجين للوصول إلى الأنسجة والأعضاء.

هناك المئات من أنواع مختلفة من الهيموجلوبين. يشملوا:

    الهيموغلوبين f: يُعرف أيضًا باسم الهيموجلوبين الجنيني. إنه النوع الموجود في الأجنة المتزايدة وحديثي الولادة. يتم استبدال الهيموغلوبين بعد الولادة بقليل.
    الهيموغلوبين A: هذا هو المعروف أيضا باسم خضاب الكبار. إنه النوع الأكثر شيوعًا من الهيموغلوبين. يوجد في الأطفال والبالغين الأصحاء.
    الهيموجلوبين C ، D ، E ، M ، و S: هذه الأنواع النادرة من الهيموغلوبين غير الطبيعي الناجم عن الطفرات الجينية.
</Text>
</ScrollView>
      </View>
    );
  }
}
class rapid extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            هو اختبار دم يستخدم لفحص مرض الزهري. وهو يعمل عن طريق اكتشاف الأجسام المضادة غير النوعية التي ينتجها جسمك لمكافحة العدوى.

مرض الزهري هو عدوى تنتقل عن طريق الاتصال الجنسي (والناجمة عن بكتيريا spirochete bacterium Treponema pallidum. يمكن أن تكون قاتلة إذا تركت دون علاج. إلى جانب اختبار مضاد أجسام معين ، يسمح اختبار RPR للطبيب بتأكيد تشخيص العدوى النشطة وبدء العلاج. وهذا يقلل من فرص حدوث مضاعفات وانتشار المرض من قبل شخص مصاب ولكن غير مدرك.
</Text>
</ScrollView>
      </View>
    );
  }
}
class Tb extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            هو عدوى خطيرة ، وعادة من الرئتين ، تنتشر هذه البكتريا عندما تتنفس في الهواء الذي ينفثه شخص مصاب بمرض السل. يمكن للبكتيريا أن تبقى غير نشطة في جسمك لسنوات.
عندما يصبح الجهاز المناعي ضعيفًا ، يمكن أن يصبح السل نشطًا وينتج عنه أعراض مثل:
    حمى
</Text>
<Text style={{fontSize:20}}>
   فقدان الوزن
    السعال
    تعرق ليلي
يصاب بعض الناس ببكتيريا السل ولكنهم لا يعانون من أعراض. تُعرف هذه الحالة باسم Tent الكامن. ﻳﻤﻜﻦ أن ﻳﺒﻘﻰ ﻣﺮض اﻟﺴُﻞ TB ﺳﺎكﻨﺎً ﻟﻤﺪة ﺳﻨﻮات ﻗﺒﻞ أن ﻳﺘﻄﻮر إﻟﻰ ﻣﺮض اﻟﺴُﻞ
</Text>
<Text style={{fontSize:20}}>
        إذا كان مرض السل لا يستجيب للمضادات الحيوية ، فيشير إلى أنه مرض السل المقاوم للأدوية. عندما يصيب السل جسمك ، يصبح أكثر حساسية لعناصر معينة من البكتيريا ، يتم عمل اختبار
PPD لتحقق من حساسية الجسم الحالية.
</Text>
</ScrollView>
      </View>
    );
  }
}
class hCG extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
            <Text style={{fontSize:20}}>يتم قياس مستوى الهرمون الموجهة للغدد التناسلية الموجود في عينة الدم حيث  يتم إنتاج HCG أثناء الحمل
هناك فروق بين اختبارات الدم واختبارات البول ك شريحة البول التي يمكنك شراؤها دون وصفة طبية. يمكن أن تتأثر اختبارات البول بعوامل مثل الجفاف والوقت من اليوم الذي تختبره ، في حين أن اختبار دم hCG يمكن أن يقدم نتائج حاسمة حتى في الحالات التي تكون فيها مستويات الهرمون منخفضة
أثناء الحمل ، تقوم الخلايا في المشيمة النامية بتكوين hCG. المشيمة هي الكيس الذي يغذي البويضة بعد أن يتم إخصابها وتعلق بجدار الرحم.
يمكن الكشف عن HCG في عينة الدم بعد حوالي 11 يومًا من الحمل. تستمر مستويات الـ hCG في مضاعفة كل 48 إلى 72 ساعة. تصل إلى ذروتها حوالي 8 إلى 11 أسبوعًا بعد الحمل. ثم تنخفض مستويات HCG وتستقر ، وتبقى ثابتة بالنسبة لبقية الحمل. يتم إجراء اختبار الدم hCG إلى
</Text>
<Text style={{fontSize:20}}>
   تأكيد الحمل
    تحديد العمر التقريبي للجنين
    تشخيص الحمل غير الطبيعي ، مثل الحمل خارج الرحم
    تشخيص الإجهاض المحتمل
    شاشة لمتلازمة داون
</Text>
<View style={{flexDirection:'row'}}>
<View style={{justifyContent:'center',flexDirection:'column',borderWidth:1}}>
<Text style={{fontSize:20}}>
Normal hCG levels
</Text>
<Text style={{fontSize:20}}>
0–750
</Text>

<Text style={{fontSize:20}}>
200–7,000
</Text>

<Text style={{fontSize:20}}>
200–32,000
</Text>

<Text style={{fontSize:20}}>
3,000–160,000
</Text>

<Text style={{fontSize:20}}>
32,000–210,000
</Text>

<Text style={{fontSize:20}}>

9,000–210,000</Text>
<Text style={{fontSize:20}}>

1,400–53,000
</Text>
<Text style={{fontSize:20}}>


940–60,000</Text>

</View>

<View style={{justifyContent:'center',flexDirection:'column',borderWidth:1}}>
</View>
<Text style={{fontSize:20}}>
Weeks from last menstrual period

</Text>
<Text style={{fontSize:20}}>
4

</Text>

<Text style={{fontSize:20}}>
5

</Text>

<Text style={{fontSize:20}}>
6
</Text>

<Text style={{fontSize:20}}>
7
</Text>

<Text style={{fontSize:20}}>
8–12
</Text>

<Text style={{fontSize:20}}>


13–16</Text>
<Text style={{fontSize:20}}>


16–29</Text>
<Text style={{fontSize:20}}>



29–41</Text>


</View>
</ScrollView>
      </View>
    );
  }
}
class pylori extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
      <ScrollView>
      <Text style={{fontSize:20}}>
        هو نوع شائع من البكتيريا التي تنمو في الجهاز الهضمي ولديها القدرة على مهاجمة بطانة المعدة. إنه يصيب حوالي 60% من سكان العالم البالغين. عادة ما تكون غير ضارة ، ولكنها مسؤولة عن غالبية القرحة في المعدة والأمعاء الدقيقة.ان
الإصابات بهذه السلالة من البكتيريا لا تسبب عادة أعراضًا ، إلا أنها قد تؤدي إلى أمراض في بعض الأشخاص ، بما في ذلك القرحة الهضمية ، وحالة التهاب داخل المعدة تعرف باسم التهاب المعدة.

تم تعديلها  للعيش في بيئة قاسية حمضية في المعدة. يمكن لهذه البكتيريا تغيير البيئة المحيطة بها وتقليل حموضتها حتى تتمكن من البقاء على قيد الحياة. يتيح الشكل الحلزوني للبكتيريا الحلزونية اختراق بطانة المعدة ، حيث يحميها المخاط ، ولا تتمكن خلايا المناعة في الجسم من الوصول إليها. يمكن للبكتيريا أن تتداخل مع الاستجابة المناعية وتضمن عدم تدميرها
</Text>
</ScrollView>
      </View>
    );
  }
}
class Phosphokinase extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            وهو إنزيم يساعد على إحداث تغييرات كيميائية في جسمك) موجود في قلبك ، ودماغك ، وعضلاتك الهيكلية. عندما يتلف النسيج العضلي ، يتسرب CPK إلى دمك. لذلك ، فإن المستويات العالية من CPK تشير عادة إلى نوع من الإجهاد أو الإصابة لقلبك أو العضلات الأخرى.
قد يشير CPK المرتفع إلى التهاب في العضلات بسبب نشاط المرض أو حالة متداخلة. يمكن أيضًا أن تكون مستويات CPK عالية بعد التمرين الرياضي ، لذلك قد يرغب طبيبك في إعادة فحص CPK بعد عدة أيام من الراحة. إذا كان CPK الخاص بك مرتفعًا بدون ممارسة أو يظل مرتفعاً مع الراحة ، قد يطلب الطبيب اختبارات إضافية لتحديد أي نوع (isoenzyme) من CPK مرتفع. هذه المعلومات ستساعده على تحديد مصدر الضرر (العضلات الهيكلية ، القلب ، أو الدماغ). يمكن أن تسبب بعض الأدوية ، مثل العقاقير المخفضة للكوليسترول ، زيادة في CPK 0
</Text>
<Text style={{fontSize:20}}>
        52 - 336 U/L
</Text>
</ScrollView>
      </View>
    );
  }
}
class Syphilis extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            هي عدوى تنتقل عن طريق الاتصال الجنسي  الناجمة عن نوع من البكتيريا المعروفة باسم اللولبية الشاحبة. أول علامة على مرض الزهري هي قرحة صغيرة غير مؤلمة. يمكن أن تظهر على الأعضاء الجنسية ، المستقيم ، أو داخل الفم. مرض الزهري يمكن أن يكون تحديا لتشخيص. يمكن أن يكون اي يصيب شخص ما دون ظهور أي أعراض لسنوات. ومع ذلك ، يتم اكتشاف الزهري المبكر ، كلما كان ذلك أفضل. يمكن أن يتسبب مرض الزهري الذي لا يزال غير معالج لفترة طويلة في إلحاق أضرار كبيرة بالأعضاء الهامة ، مثل القلب والدماغ.
ينتشر مرض الزهري فقط من خلال الاتصال المباشر مع مريض الزهري. لا يمكن نقلها من خلال مشاركة مرحاض مع شخص آخر أو ارتداء ملابس شخص آخر أو استخدام أواني تناول الطعام لشخص آخر.
</Text>
</ScrollView>
      </View>
    );
  }
}
class TOXOPLASMA extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>

            هو فحص دم يحدد إذا كان لديك أجسام مضادة لطفيل التوكسوبلازما جوندي. يطلق عليه أيضًا اختبار داء المقوسات. جسمك يصنع هذه الأجسام المضادة فقط بعد أن تكون مصابًا بهذا الطفيلي. اعداد وانواع  الأجسام المضادة التي لديك تشير إلى ما إذا كانت اصابة حديثة أم حدثت منذ زمن بعيد .
إذا أصيبت المرأة الحامل ، قد تنتقل العدوى إلى الجنين. هذا يمكن أن يؤدي الى تلف في الدماغ والعمى في الطفل المتنامي. لمعرفة ما إذا كان طفلك قد أصيب بالعدوى ، يستطيع الطبيب اختبار عينة من السائل الأمنيوسي ، وهو السائل الذي يحيط بطفلك في الرحم.

يتم التعرض  لخطر الإصابة من قبل T. gondii عندما يتم أكل  اللحم النيء أو غير المطبوخ جيدا من حيوان مصاب. يمكن أيضًا الاصابة به  عن طريق التعامل مع قطة مصابة أو برازها
</Text>
</ScrollView>
      </View>
    );
  }
}
class Varicella extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            جديري الماء هو عدوى فيروسية تسبب طفح جلدي من بقع وحكة في جميع أنحاء الجسم وأعراضه تشبه أعراض الأنفلونزا.

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
</ScrollView>
      </View>
    );
  }
}
class CORTISOL extends React.Component {
  static navigationOptions = {
  header: null,
  };
  render() {
    return (

      <View style={{ flex: 1, }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>
    <Text style={{fontSize:20}}>
            الكورتيزول ، هي  مادة كيمائية تفرزها الغدة الكظرية ، وهي ذات تأثير ايجابي على الجسم ، إذ تعمل على زيادة الشعور بالاسترخاء والراحة ، أما الخلل في افراز الكورتيزول وزيادة نسبته في الجسم.. فله اضرار صحية تتمثل في الشعور بالقلق والارهاق ، وزيادة الوزن
الكورتيزول مسؤول، بشكل أساسي، عن عملية استقلاب المواد (الأيض) في الجسم ويتم إطلاقه كرد فعل في حالات الضغط. إضافة إلى ذلك, يعمل الكورتيزول على مراقبة فعاليات معينة يقوم بها الجهاز المناعي. بشكل عام, يتم إفراز الكورتيزول بكميات أكبر في ساعات الصباح المبكرة, وتقل هذه الكمية في ساعات المساء. الإفراز الزائد لمادة الكورتيزول، بسبب ورم في الغدة النخامية او في الغدة الكظرية
</Text>
<Text style={{fontSize:20}}>
        171-535NMOL/L
64-328NMOL/L</Text>
</ScrollView>
      </View>
    );
  }
}


export default  Test = StackNavigator(
  {
    Home: Lipidprofile,
  CBC:CBC,
  TSH:TSH,
  Ferritin:Ferritin,
  zinc:zinc,
  FSH:FSH,
  Lh:Lh,
  Testosterone:Testosterone,
  Progesterone:Progesterone,
  B12:B12,
  dihydroxy:dihydroxy,
  Hydroxy:Hydroxy,
  Pt:Pt,
  INR:INR,
  PcT:PcT,
  ptt:ptt,
  ESR:ESR,
  Fasting:Fasting,
  Randomblood:Randomblood,
  CReactive:CReactive,
  Urine:Urine,
  Liver:Liver,
  Alanine:Alanine,
  Glutamyl:Glutamyl,
  Lactate:Lactate,
  ALP:ALP,
  Bilirubin:Bilirubin,
  Kft:Kft,
  folic:folic,
  Hba1c:Hba1c,
  A:A,
  Transferrin:Transferrin,
  tpo:tpo,
  Protein:Protein,
  Prothrombin:Prothrombin,
  Mthafr:Mthafr,
  THROMBIN:THROMBIN,
  Anticoagulants:Anticoagulants,
  Cardiolipin:Cardiolipin,
  APA:APA,
  CA125:CA125,
  Ca15:Ca15,
  Cancer:Cancer,
  Carcinoembryonic:Carcinoembryonic,
  Calcium:Calcium,
  Magnesium:Magnesium,
  Phosphours:Phosphours,
  VitaminA:VitaminA,
  b1:b1,
  b2:b2,
  b6:b6,
  e:e,
  k:k,
  Hepatitis:Hepatitis,
  Rubella:Rubella,
  Rheumatoid:Rheumatoid,
  Antistreptolysin:Antistreptolysin,
  Antinuclear:Antinuclear,
  Citrullinated:Citrullinated,
  Seminal:Seminal,
  Hsv:Hsv,
  HIV:HIV,
  electrophoreses:electrophoreses,
  rapid:rapid,
  Tb:Tb,
  hCG:hCG,
  pylori:pylori,
  Phosphokinase:Phosphokinase,
  Syphilis:Syphilis,
  TOXOPLASMA:TOXOPLASMA,
  Varicella:Varicella,
  CORTISOL:CORTISOL,
  grid:Grid,
Prolactin:Prolactin


},
  {
    initialRouteName: 'grid',
    headerMode: 'none',

  }
);
