import React from 'react';
import { Button, View, Text ,ScrollView} from 'react-native';
import { TabNavigator, StackNavigator,SwitchNavigator } from 'react-navigation';
import Grid from './grid'
import PHOTOS from './grid'
import { Header } from 'react-native-elements'
import { HeaderBackButton } from 'react-navigation';

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
    <ScrollView>

        <Text style={{fontSize:20}}>
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
</ScrollView>

      </View>
    );
  }
}

class CEA extends React.Component {
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

  To monitor cancer treatment, including response to treatment and is used as an indicator of the amount of cancer or tumor size present (or to help regulate cancer; sometimes as a follow-up to a positive cancer screening test to compare whether the level drops to normal (suggesting cancer is likely to be removed) Ie after cancer treatment
  Or when your condition is diagnosed with colon, pancreas, breast, lung, ovary, thyroid or other cancer before starting cancer treatment, and then, if elevated, at intervals during and after treatment; sometimes when cancer is suspected but not Confirm it - or help to discover it

</Text>
</ScrollView>

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

        <Text style={{fontSize:20}}>
        Is a set of analyzes to measure the level of fat and cholesterol and also measure the level of lipoproteins.
Some tests require fasting for a period of 9 to 12 hours before analysis, while others do not.
You should not eat high-fat foods the night before the test.
The test is performed to help determine the risk of heart problems and blood flow, including heart attacks and strokes.

</Text>
<Text style={{fontSize:20}}>
Serum triglycerides</Text>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}>

<Text style={{fontSize:20}}>
 It is a type of fat. The body stores calories that are not immediately used by these triglycerides circulating in the blood to save energy for your muscles to functions. Triglyceride enters the blood after eating. If you eat more calories than your body needs, the level of triglycerides may be high.

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
  Soft wax-like material is present throughout the body. Your body needs a little cholesterol to work properly. But too much cholesterol can block the arteries and lead to heart disease. Everyone must undergo a first-time screening test at the age of 35 and a 45-year-old woman.
</Text>
<Text style={{fontSize:20}}>
Follow-up testing should be done:
    Every 5 years if your results are normal.
    Often people with diabetes, high blood pressure, heart disease, stroke, or blood flow problems to the legs or feet.
   You should check every year or so if you take medications to control high cholesterol.
Cholesterol
</Text>
</View>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}><Text style={{fontSize:20,color:'black'}}>
Severity<Text>--</Text>Adult<Text>--</Text>Children and Adolescents


normal<Text>--</Text>Less than 200<Text>--</Text>Less than 170


Critical Limit<Text>--</Text>220 : 239<Text>--</Text>170 : 199


hight<Text>--</Text>More than 240<Text>--</Text>More than 200</Text>
</View>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}>

<Text style={{fontSize:20}}>
LDL</Text>
<Text style={{fontSize:20}}>
It is called "bad cholesterol" because it takes cholesterol to the arteries, where it collects in the walls of the arteries. Too much cholesterol in the arteries may lead to plaque buildup known as arteriosclerosis. This can increase the risk of arterial thrombosis. If a blood clot separates and reaches arteries in the heart or brain, you may have a stroke or a heart attack.
Sediment accumulation may reduce the flow of blood and oxygen to the main organs. Lack of oxygen to your organs or arteries can lead to kidney or peripheral arterial disease, as well as a heart attack or stroke.
</Text>
</View>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}>

<Text style={{fontSize:20}}>
HDL</Text>
<Text style={{fontSize:20}}>
HDL is known as "good cholesterol" because it transfers cholesterol to the liver to get rid of your body. HDL helps rid the body of excess cholesterol, so it is unlikely to end up in the arteries.
</Text>
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
<Text style={{fontSize:20}}>
  T4 5.4-11.5 mcg / dL,
  </Text>
  <Text style={{fontSize:20}}>
  T3 105-245 ng / dL.
  </Text>
  <Text style={{fontSize:20}}>
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

        <Text style={{fontSize:20}}>Ferritin</Text>
        <Text style={{fontSize:20}}>

Is an intracellular protein that controls iron storage and release
Ferritin is stored in the cells of the body until it is time to create more red blood cells. The body will refer to the cells to release ferritin. The ferrite is then connected to another substance called transferin.
</Text>
<Text style={{fontSize:20}}>
female 15-150ng / l
</Text>
<Text style={{fontSize:20}}>
male 30-400 ng / l
</Text>
</ScrollView>

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
Zinc plays a vital role in the presence of a protein that helps regulate the production of cells in the immune system of the human body. Zinc is concentrated in the strongest muscles of the body especially in the white and red blood cells, retina, skin, liver, kidneys, bones, pancreas, semen and prostate gland in men that also contain large amounts of zinc.
The human body contains more than 300 different enzymes, which requires the presence of zinc to work the body in full natural activities .. The average person needs 2-3 grams of zinc at any given time, knowing that in the human body zinc excretory devices, such as the salivary gland, prostate gland and pancreas. Even the cells involved in the activity of the immune system for zinc secretion.
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
    />
    <ScrollView>

            <Text style={{fontSize:20}}>Follicle-Stimulating Hormone (FSH</Text>
              <Text style={{fontSize:20}}>
The pituitary gland secretes the active hormone of the compass and this hormone plays a key role in controlling the menstrual cycle and the production of mature eggs every month. It is worth noting that the concentration of the hormone varies throughout the woman's menstrual cycle to reach the highest level immediately before ovulation. In men, On the production of sperm, and the focus is constant and does not change throughout the month, is one of the tests used to determine the cause of delayed pregnancy, and the ability of parts of the reproductive system to work properly, Reasons for FSH Examination Reasons for a man's examination This test can be done for a man to determine some problems that may cause infertility, including: Assessing the low number of sperm. Assessment of gonadal insufficiency, dysfunction or failure. Evaluation of testicular dysfunction.
Reasons for conducting the examination for women
Among the reasons that require the examination of women include: Evaluation of infertility problems. Assessing the irregularity of the menstrual cycle, or discontinuation as in the case of menopause. Diagnosis of pituitary disorders or diseases related to ovulation.
Causes of screening for children To determine whether a child is suffering from early puberty, it is the age of girls under 9 years of age and the age of boys under 10 years of age. The test can also be used to determine whether the child is suffering from late puberty
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
    />
    <ScrollView>

            <Text style={{fontSize:20}}>LH)luteinizing hormone</Text>
            <Text style={{fontSize:20}}>
 Is the protein responsible for ovulation in the body of a woman, the production of hormones Progesterone and estrogen, which is also responsible for the production of testosterone in men in the testes, which thus maintains the ability of men to form sperm, and is the hormone responsible for the clarification of the egg and vesicles Ovulation in women in the ovulation period, should be half the value of the hormone "FSH" in the body and this in the early days of the menstrual cycle for women It is also known naturally that the proportion of this hormone increases at a high rate in the days of ovulation because it is the hormone responsible for blowing the "burs" containing an egg in women, which is why the possibility of ovulation, and increase the proportion of this hormone more menopause "after the age of forty," or even As a result of increased hormone "FSH" in the body as well. The opposite may occur, ie, the proportion of this hormone in the body for several reasons, including the treatment of "estrogen" and "testosterone", or the result of tumors in the adrenal gland or ovarian, or the incidence of Sheehan, or due to dysfunction of the pituitary gland in the body.
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
    />
    <ScrollView>

            <Text style={{fontSize:20}}>Testosterone test</Text>
            <Text style={{fontSize:20}}>
Is the male sexual hormone responsible for the maturity of males and the appearance of signs of puberty, which is excreted from the testicles.
It is recommended to measure the level of testosterone in the early morning with a maximum level in the morning (ie, approximately 8 am).
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
    />
    <ScrollView>

            <Text style={{fontSize:20}}>Progesterone</Text>
            <Text style={{fontSize:20}}>
Is a female hormone produced by the yellow body in the ovaries during the progesterone, ie, in the last two weeks of the menstrual cycle of the female after ovulation, a steroid hormone.
Progesterone is also formed in the sexes in the adrenal cortex. Large amounts of the placenta are also released during pregnancy, and the amount of the fetus increases as the pregnancy progresses and falls days before birth. It also works by lining the mucous endometrium so that the fertilized egg can be implanted
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
        <Text style={{fontSize:20}}>
        It is a vitamin that dissolves in water and has a key role in the normal functioning of the brain and nervous system through the formation of myelin and the maturity of red blood cells. It is one of the B vitamins. Vitamin B12 is involved in the representation of each cell in the human body, especially cells that contribute to the synthesis of DNA as well as lipid metabolism and amino acid. It is not possible for fungi, plants or animals (even humans) to produce vitamin B12 alone. Bacteria and enzymes have the enzymes needed to produce vitamin B12. . Vitamin B12 deficiency can cause irreparable damage, especially in the brain and nervous system. Some symptoms may appear in cases where vitamin deficiency is slightly below average, such as fatigue, lethargy, frustration, poor memory, shortness of breath, headache and skin pigmentation. These symptoms are especially apparent in older people over the age of 60, Vitamin B12, where they produce less acid in the stomach due to aging. Vitamin B12 deficiency can also cause mania and psychosis.
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
    />
    <ScrollView>

          <Text style={{fontSize:20}}>
          Vitamin D is the vitamin known as the suns vitamin . The main source of the sun is the bodys exposure to the body until the body produces this vitamin, by exposing the skin to ultraviolet light from the sun, it converts the cholesterol found in the skin through a series of biological processes to Vitamin D .
          The exposure of hands and feet to the sun from five to ten minutes, two to three times a week long enough to provide the body need of vitamin D, in addition to the availability of limited quantities in some foods  Vitamin D contains many important Function . Perhaps most vital is the regulation of absorption of calcium and phosphorus, facilitating the functions of the natural immune system. Getting enough vitamin D is important for normal growth and development of bones and teeth, as well as improving resistance against certain diseases. If your body does not get enough vitamin D, you are at risk of bone abnormalities such as soft bones (bone marrow) or fragile bones (osteoporosis).
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
      The body converts vitamin D into a chemical known as 25-hydroxy vitamin D, also called calcidiol.
      Examination of 25-hydroxy vitamin D is the best way to control vitamin D levels. The amount of 25 hydroxy vitamin D in the blood is a good indicator of the amount of vitamin D your body possesses. The test can determine whether vitamin D levels are too high or too low It can be an important indicator of osteoporosis (bone weakness) and rickets (bone deformity).
</Text>
      <Text style={{fontSize:20}}>
      A 25-hydroxy vitamin D examination is performed for several different reasons. It can help them to know whether vitamin D is too much or too little to cause bone weakness or other deformities. It can also control people at risk of vitamin D deficiency,

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
          Vitamin D is the vitamin known as the sun's vitamin. The main source of the sun is the body's exposure to the body until the body produces this vitamin, by exposing the skin to ultraviolet light from the sun, it converts the cholesterol found in the skin through a series of biological processes to Vitamin D.
          The exposure of hands and feet to the sun from five to ten minutes, two to three times a week long enough to provide the body need of vitamin D, in addition to the availability of limited quantities in some foods. Vitamin D contains many important Function  Perhaps most vital is the regulation of absorption of calcium and phosphorus, facilitating the Function of the natural immune system. Getting enough vitamin D is important for normal growth and development of bones and teeth, as well as improving resistance against certain diseases. If your body does not get enough vitamin D, you are at risk of bone abnormalities such as soft bones (bone marrow) or fragile bones (osteoporosis).

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

    <Text style={{fontSize:20}}>
INR </Text>
<Text style={{fontSize:20}}>
Is a system developed by the World Health Organization to express the results of the prothrombin time test
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
            Prothrombin time (PT) is a test used to help detect and diagnose bleeding disorder or excessive coagulation disorder; the INR is calculated from the PT result, used to monitor the effectiveness of warfarin (anticoagulant)



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
            Bleeding leads to a series of reactions known as coagulation cascade. Coagulation is the process that your body uses to stop bleeding. Cells called platelets create a cap to cover damaged tissue. The coagulation factors then interact to form a blood clot. Low coagulation factors can prevent clot formation. Lack of coagulation factors can lead to symptoms such asExcessive bleeding, persistent nasal bleeding, and bruising are easy. The examination is used as part of the investigation of possible bleeding disorder or blood clot (coagulation loop); to control anticoagulant heparin treatment. As part of preoperative examination or other surgical procedure

</Text>
<Text>
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

            <Text style={{fontSize:20}}>
            Is a test to examine the speed of deposition of red blood cells within a test sample, with the intention of detecting changes in blood proteins, to link these changes to diseases in the body, and the extent of its response to the treatments provided to him
        </Text>
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
      The amount of glucose in the blood is measured. When a person is eating food, glucose levels rise in his blood, reaching his maximum after an hour of eating. In the normal state, the pancreas secrete the insulin hormone to control the level of glucose in the blood by helping to break it to be used by the body cells to get On energy or to be stored until needed One problem is the lack of enough insulin, or problems at the level of cell response to isolated insulin, or problems at the same time
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
          Is a random blood test to check glucose levels (sugar). This is usually done by finger pricking to take a small drop of blood. This blood is then scanned on a test strip that would give glucose reading.
          Random glucose test is a powerful tool for people with diabetes. Can help assess the quality of disease management

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
      Is a test in which the detection of the proportion of C-protein produced by the liver, in cases of severe inflammation, which makes it a strong indicator of the presence of inflammation in the body
      Evaporative catalysts develop by activating proton
</Text>
      <Text style={{fontSize:20}}>
      As a result of exposure to various bacterial agents of bacterial, viral, fungal, rheumatism, and other causes, leading to the release of entrolokin-6, and stokins;
      C-reactive protein, which reaches its peak after infection with bacterial agents about forty-eight hours

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
      Urine analysis is performed to detect the physical properties of urine(Color, macrophage, pH, odor, density)Such as white blood cells, red blood cells, hemoglobin, Urobilinogen, bilirubin,In addition to microscopic examination of urine deposits,Leukocytes, red blood cells, or kidney cells, in addition to detecting the presence of different types of crystals, fungi, or bacteria. Or including epithelial cells
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

          Total protein-TP1_: which combines albumin protein and globulin protein in addition to the coagulation factor, which is the protein of fibrinogen and is estimated based on certain coagulation tests. It is used to check the metabolic or metabolic capacity of the liver The albumin is mainly made in the liver and is essential for normal body functions. Albumins are naturally present in the body, making up about 60% of all plasma proteins.


          Aspartate Amino Transferase-AST
          s an enzyme found in the cells of the body, especially in the heart and liver, and less in the kidneys and muscles. Aspartate levels of the blood-carrying enzyme in the healthy are low. When an injury occurs in the liver or muscle cells, the AST enzyme is released through the blood.



          Alanine Amino Transferase-ALT
          It is an enzyme found in liver and kidney cells, and is found in small amounts in the heart and muscles
          It helps in detecting damage caused by hepatitis or as a result of the use of certain medications or some other substances that may be toxic to the liver


          Gama Glutamyl Transfrease-GGT,
          An enzyme acts as a transport molecule, which helps to move other molecules around the body. It plays an important role in helping the liver metabolize drugs and other toxins.
          GGT is concentrated in the liver, but it is present in the gall bladder, spleen, pancreas and kidneys. For comparison, blood levels of GGT are high when the liver is damaged. This is often the test with other tests
          Liver enzymes if there is a possibility


          Lactate Dehydrogenase-LDH,
          Is an enzyme required during the process of converting sugar into energy for your cells. LDH is present in many types of organs and tissues throughout the body, including liver, heart, pancreas, kidneys, skeletal muscles, lymphatic tissues and blood cells.
          When the disease or injury causes damage to your cells, LDH may be released into the blood stream, leading to an elevated level of LDH in the blood. High LDH in the blood indicates acute or chronic cell damage

          ALP Alkaline Phosphatase
          An enzyme that measures the amount of alkaline phosphatase enzyme
          Abnormal levels of ALP in the blood indicate a problem in the liver, gallbladder or bone. However, they may also indicate malnutrition, kidney cancer tumors, intestinal problems, a pancreatic problem, or a serious infection. The normal range of ALP varies from person to person depending on your age, blood type, gender, and whether you are pregnant


          Bilirubin
          Is a yellow pigment found in the blood and stool. The bilirubin test determines bilirubin levels in the body.
          Sometimes the liver can not treat bilirubin in the body. This can be due to an increase in bilirubin or blockages or infections in the liver.
          When your body contains a lot of bilirubin, your skin and the white of your eyes will start with yellowing. This condition is called jaundice
          Bilirubin is made in the body when the hemoglobin protein breaks down in old red blood cells. The breakdown of old cells is a natural and healthy process.
          Bilirubin moves to the liver. Bilirubin is then processed, mixed in the bile, then excreted in the bile ducts and stored in the gallbladder.
          Eventually, the bile is released into the small intestine to help digest fat. Finally excreted in the stool
          Bilirubin-related liver is called glucuronic acid, a glucose-derived, direct or conjugated bilirubin. Bilirubin, which is not directly associated with glucocortic acid, or not, is called bilirubin. All bilirubin in the blood is called "total bilirubin".
          A comprehensive test of blood bilirubin will receive an accurate number of bilirubin levels in your blood: direct, indirect, and total.
</Text>
      <Text style={{fontSize:20}}>
      Normal 5.5_9 g/dl

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
          It is an enzyme found in liver and kidney cells, and is found in small amounts in the heart and muscles
          It helps in detecting damage caused by hepatitis or as a result of the use of certain medications or some other substances that may be toxic to the liver
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
          An enzyme acts as a transport molecule, which helps to move other molecules around the body. It plays an important role in helping the liver metabolize drugs and other toxins.
          GGT is concentrated in the liver, but it is present in the gall bladder, spleen, pancreas and kidneys. For comparison, blood levels of GGT are high when the liver is damaged. This is often the test with other tests
          Liver enzymes if there is a possibility

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
          Is an enzyme required during the process of converting sugar into energy for your cells. LDH is present in many types of organs and tissues throughout the body, including liver, heart, pancreas, kidneys, skeletal muscles, lymphatic tissues and blood cells.
          When the disease or injury causes damage to your cells, LDH may be released into the blood stream, leading to an elevated level of LDH in the blood. High LDH in the blood indicates acute or chronic cell damage

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
          An enzyme that measures the amount of alkaline phosphatase enzyme
          Abnormal levels of ALP in the blood indicate a problem in the liver, gallbladder or bone. However, they may also indicate malnutrition, kidney cancer tumors, intestinal problems, a pancreatic problem, or a serious infection. The normal range of ALP varies from person to person depending on your age, blood type, gender, and whether you are pregnant
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
          Is a yellow pigment found in the blood and stool. The bilirubin test determines bilirubin levels in the body.
          Sometimes the liver can not treat bilirubin in the body. This can be due to an increase in bilirubin or blockages or infections in the liver.
          When your body contains a lot of bilirubin, your skin and the white of your eyes will start with yellowing. This condition is called jaundice
          Bilirubin is made in the body when the hemoglobin protein breaks down in old red blood cells. The breakdown of old cells is a natural and healthy process.
          Bilirubin moves to the liver. Bilirubin is then processed, mixed in the bile, then excreted in the bile ducts and stored in the gallbladder.
          Eventually, the bile is released into the small intestine to help digest fat. Finally excreted in the stool
          Bilirubin-related liver is called glucuronic acid, a glucose-derived, direct or conjugated bilirubin. Bilirubin, which is not directly associated with glucocortic acid, or not, is called bilirubin. All bilirubin in the blood is called "total bilirubin".
          A comprehensive test of blood bilirubin will receive an accurate number of bilirubin levels in your blood: direct, indirect, and total.
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
          <Text style={{fontSize:20}}>
Urine analysis</Text>
        <Text style={{fontSize:20}}>
        This analysis is performed to ensure that there is no excess protein, blood, bacteria, pus, or sugar in the urine. The analysis is performed by examining the urine sample under a microscope, or by dipping the bar
</Text>
<Text style={{fontSize:20}}>
Creatinine Clearance</Text>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}>

<Text style={{fontSize:20}}>
Creatinine is a natural waste produced by the normal movement of muscles. This test is performed to compare creatinine levels in a 24-hour urine sample with creatinine level in the blood to measure the amount of waste disposed of by the kidneys per minute.
</Text>
<Text style={{fontSize:20}}>
  71-151ml/min
  </Text>
  <Text style={{fontSize:20}}>
  Microalbuminuria
  </Text>
  <Text style={{fontSize:20}}>
  Is a urine test that measures the amount of albumin in the urine.
  Albumin is a protein used by the body to grow cells and to help repair tissues. A certain level of urine may be a sign of kidney damage.
  </Text>
  <Text style={{fontSize:20}}>
  Bjith kidneys are responsible for removing waste of blood and regulate the levels of water fluids in your body. Healthy kidneys make sure that the waste is filtered from your body and that the nutrients and proteins necessary for your health, such as albumin, remain in your body.
  </Text>
  <Text style={{fontSize:20}}>
  Less than 30mg/l
  </Text>
  <Text style={{fontSize:20}}>

Serum creatinine

</Text>
</View>
<View style={{backgroundColor:'white',flexDirection:'column',borderWidth:1,borderColor:'black'}}><Text style={{fontSize:20,color:'black'}}>
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
Nitrogen is a natural waste product created by the body after eating. When the liver breaks the proteins in your food - it produces urea nitrogen in the blood, also known as BUN. The liver releases the substance into the blood, eventually ending up in the kidneys. The amount of waste in the blood is checked. If the levels are outside the normal range, it may mean that your kidney or liver is not working properly.
</Text>
<Text style={{fontSize:20}}>
Normalrange=7.94-22.9mg/dl
</Text>
<Text style={{fontSize:20}}>
1.32-3.82mmol/l
</Text>
<Text style={{fontSize:20}}>
Glomerular filtration rate

</Text>
<Text>
It is used to verify the efficiency of kidney functions, in which the amount of blood passing through the glomeruli is calculated every minute.
</Text>
<Text style={{fontSize:20}}>
Uric acid

</Text>
<Text>
Uric acid is a chemical produced when the body breaks down foods containing organic compounds called purines. The purines are created through the natural process of cell damage in the body
</Text>
<Text style={{fontSize:20}}>
Most uric acid is dissolved in the blood, filtered through the kidneys, and is expelled in the urine. Sometimes the body produces too much uric acid or does not filter enough of it. (Hyperuricemia) is the name of the disorder that occurs when you have too much uric acid in your body. High levels of uric acid are associated with a condition called gout. Gout is a form of arthritis that causes swelling of the joints, especially in the feet and large toes. Another cause of hyperuricemia is increased blood cell death, due to cancer or cancer treatments. This can lead to the accumulation of uric acid in the body.
</Text>
<Text style={{fontSize:20}}>
It is also possible to have very little uric acid in your blood, which is a symptom of liver or kidney disease. It is also a symptom of Fanconi syndrome, a disorder in kidney tubes that inhibits the absorption of substances such as glucose and uric acid. These substances are then passed in urine instead.
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
It is a particularly important component in the functions of nerves and muscles. Your body maintains sodium balance through a variety of mechanisms. Sodium enters the blood through food and drink. The blood is removed from the blood through urine, faeces and sweat. The body needs sodium to control blood pressure. When the sodium is less than the desired limit, signals are sent to the kidneys and sweat glands to stimulate the retention of water in the body to maintain sodium in the human body. Required, the kidneys get rid of excess This can lead to the accumulation of fluid between the cells and increase blood volume accordingly, which means more work for the heart, and more pressure on the blood vessels, Which may cause over time to spasm of blood vessels, high blood pressure or the incidence of heart attacks or strokes.

</Text>
<Text style={{fontSize:20}}>
136-145mmol/l

</Text>
<Text style={{fontSize:20}}>
Serum Potassium

</Text>
<Text style={{fontSize:20}}>
It plays an important role in maintaining the electrical balance on the cell surface. It is very important in the process of communication between different cells in the nervous system and communication between the nerves and muscles. It is also important in the process of transfer of signals and food from outside the cell into the aldosterone works on the secretion of potassium in the urine when it rises, and maintain the cation when it is low level and problems caused by the change in the level of potassium is dysfunction of the nervous system and muscles and serious disorders Heart systems
3.5-5.1 mmol/l
</Text>
<Text style={{fontSize:20}}>
Chloride
</Text>
<Text style={{fontSize:20}}>
It plays an important role in maintaining the electrical balance on the cell surface. It is very important in the process of communication between different cells in the nervous system and communication between the nerves and muscles. It is also important in the process of transfer of signals and food from outside the cell into the aldosterone works on the secretion of potassium in the urine when it rises, and maintain the cation when it is low level and problems caused by the change in the level of potassium is dysfunction of the nervous system and muscles and serious disorders Heart systems
98-107 mmol/l

</Text>
<Text style={{fontSize:20}}>
Homocysteine

</Text>
<Text style={{fontSize:20}}>
The amino acid is found as a building block in all food proteins, and this harmful amino acid is produced in the body; it cracks the blood vessels, leads to atherosclerosis, and clogged it; which may cause the stroke, or Heart attack, and Alzheimers disease, if it increases its concentration on its normal blood level, and has only one benefit, namely the formation of the amino acid "Cysteine", which enters the formation of yeast and hormones, which include insulin hormone, which regulates the concentration of sugar Blood, but "cystine" is also found in human-treated proteins. Requesting examination to help determine if you are deficient in folic acid or vitamin B 12. To determine whether you are at increased risk of heart attack or stroke

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
        Folic acid, or folic acid, is a vitamin B complex. Folic acid is essential for the production of red blood cells. It can be considered one of the most complex vitamins. It contributes to improving the health of hair, skin, nervous system and symptoms. Which indicate a lack of anemia. Gastrointestinal disorders, thus difficulty absorption of nutrients or. Feeling tired and tired. Feeling tense and anxious. Disorders of the nervous system. The possibility of acidity of the stomach Stomach
        Folic acid is a vitamin B 9, which is necessary for the production of healthy red blood cells. These cells provide oxygen to the entire body,. Folic acid is also important for the normal growth of the fetus. It helps in the growth of cells and tissues in addition to the creation of DNA, which transmits genetic information. This is why folic acid is especially important for pregnant women and pregnant women.
        </Text>

        <Text style={{fontSize:20}}>
  Women should take 400 micrograms of folic acid every day, starting at least one month before conception. Taking extra folic acid during pregnancy can help prevent birth defects in the brain and cord thorns
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
        Is a form of hemoglobin (the blood pigment that carries oxygen) that is linked to glucose.
        The blood test for HbA1c is routinely performed in people with type 1 and type 2 diabetes.
        The level of HbA1c reflects how diabetes is controlled. It reflects glucose levels in the blood over the past six to eight weeks and does not reflect a daily rise and fall of blood glucose
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
        Is a protein that carries HDL ("good") cholesterol. Helps to start an HDL process to remove the bad types of cholesterol from your body. In this way, lipoprotein A can help reduce the risk of cardiovascular disease. Although lipoprotein levels can be measured, it is common to measure HDL and LDL cholesterol ("bad") when looking at cardiovascular risk.
        You may need this test to see if you are at increased risk for heart disease. If you are already suffering from heart problems such as a heart attack. This test is not often used as a fat profile. It measures the level of body fat and HDL cholesterol. But some studies suggest that the results of the apolipoprotein A test are a good measure of the risk of heart disease.
        This test may help improve your risk if you have a family history
        Fasting must be 12-14
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
        It is the main protein in the blood that binds to iron and travels throughout the body. The transferrin test directly measures the level of blood in the bloodstream.
        The examination is done early in the morning and must be 8 hours fast
</Text>
<Text style={{fontSize:20}}>
Iron supplements should be stopped for at least 24 hours
200.00-360.000mg / dl
</Text>
<Text style={{fontSize:20}}>
Total Iron Binding Capacity (TIBC)
        TIBC is a type of blood test that measures whether there is too much iron or too little in the bloodstream.
        Iron is a type of metal found in all cells of the body. You can get the iron you need through your diet. Once iron enters the body, it is transported through the bloodstream by a protein called transferrin, which is produced by the liver. The TIBC test assessed the transferrin transfer range through iron blood.
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
        Are antibodies that develop as a result of an autoimmune attack on the thyroid gland. They target the gland, usually leading to the destruction of the gland over time. Antibodies to TPOAb attack the thyroid peroxidase, an enzyme that plays a role in converting T4 to T3. High levels of TPOAb can be a sign of inflammation of the gland or destruction of tissues such as Hashimotos disease.
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
It is one of many vital proteins in the human body. It plays a big role in controlling your blood clotting process. The ability of your blood to clot is very important. It works to prevent excess blood loss when an injury occurs. However, blood clots in the artery or vein (called clotting) can be very serious.
Protein S is anticoagulant. If there is not enough of it, there may be a harmful type of blood clot. The correct amount of S protein is needed to ensure that the blood clotting process works properly.
In some cases, the protein deficiency is s). Some people are simply born with a deficiency in this anticoagulant. Your doctor may ask if you have a close relative or more who has a history of serious blood clots or if a member of your family is deficient in known S protein.

For most people with S protein deficiency, a serious blood clot is often the first sign that something is wrong. Stroke often occurs in the leg or lung, usually no symptoms appear before the event

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
            Is a genetic condition that causes an increased risk of blood formation for serious blood clots. All people make a proteinbine (also called a second factor)
            Prothrombin is produced to help coagulation, and is produced in larger quantities after damage to a blood vessel.
                People who have a prothrombin gene are more prothrombin than normal. As there is more prothrombin in the blood, this increases the risk of blood clots.

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
            The examination is performed to assess the cause of elevated homocysteine ​​levels. The risk of blood clotting or cardiovascular disease (CVD) is determined
            When homocysteine ​​levels rise. Or sometimes when a relative has genetic mutations from MTHFR or has developed or coagulated at an early age

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
            When bleeding occurs, your body has natural defenses that prevent you from losing too much blood. These defenses are known collectively as coagulation. Proteins that help the coagulation process are known as coagulation factors. Coagulation factors also help maintain the consistency of blood flow in blood vessels.
            Coagulation is done to protect against blood loss. But too much clotting can cause life-threatening blood clots. These strokes can prevent blood flow to your vital organs. The body produces certain types of proteins that regulate thrombin thrombosis, one of those proteins
            The amount of antithrombin protein in your body is measured to see if you have an antithrombin deficiency that causes more than normal blood clotting.

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
            A type of antibody produced by the immune system in the body. While most antibodies attack the disease in the body, LAs only attack intact cells and cell proteins.
            They attack phospholipids, which are essential components of cell membranes. LAs are associated with a disorder in the immune system known as antiphospholipid syndrome.
            LAs can increase the risk of blood clotting. However, antibodies can be present and do not lead to clotting.
            Blood clots can be life-threatening if not treated immediately.
            Small blood clots caused by LAs can complicate pregnancy and induce abortion. Multiple abortions may be a sign of LAs, especially if they occur after the first three months.
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
            The examination is done to help investigate the formation of a blood clot or to help determine the cause of repeated miscarriage, or as part of an assessment of phospholipid syndrome or sometimes autoimmune diseases or when you have one or more blood clots (in the vein or artery).
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
            The examination is performed to help check for blood clots or PTT for prolonged periods unexpectedly, especially if you have recurrent miscarriages; sometimes the test is performed to help diagnose or evaluate autoimmune disorder. The test is usually performed when you have a PTT test for periods (High ptt) or when you have non-recurrent blood clots; or when you have frequent miscarriages, especially in the second and third trimester
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
        To monitor the treatment of ovarian cancer or sometimes to evaluate a tumor in the pelvic area (pelvic mass); it is not recommended for screening for symptomatic women but is sometimes asked to help detect early ovarian cancer in people who are identified as at high risk.
        Before starting treatment for ovarian cancer at intervals during and after treatment; sometimes when you have a pelvic mass or are at high risk of developing ovarian cancer
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
        To monitor response to treatment for breast cancer and to help monitor the recurrence of the disease
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

        To monitor response to pancreatic cancer treatment to see recurrence and sometimes to help diagnose pancreatic cancer
        During and / or after pancreatic cancer treatment

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
        To monitor cancer treatment, including response to treatment and is used as an indicator of the amount of cancer or tumor size present (or to help regulate cancer; sometimes as a follow-up to a positive cancer screening test to compare whether the level drops to normal (suggesting cancer is likely to be removed) Ie after cancer treatment
        Or when your condition is diagnosed with colon, pancreas, breast, lung, ovary, thyroid or other cancer before starting cancer treatment, and then, if elevated, at intervals during and after treatment; sometimes when cancer is suspected but not Confirm it - or help to discover it
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
        It is an essential element in the body of living organisms and is available in certain natural proportions that affect it. This element in cells provides a natural proportion that helps the cells of the body to perform their functions properly,
        Calcium is present in many organs, blood and other body fluids, but it is concentrated in bones and teeth
        . Lack of calcium leads to muscle cramps and arthritis. Heart disorders and rickets, and osteoporosis and fragility
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
        Magnesium is the fourth most abundant metal in the human body.
        Where it plays many important roles in the health of the body and brain. The intake of magnesium adequately reduces the risk of osteoporosis in postmenopausal women, promotes bone building, and increases the density; it helps to precipitate calcium in the bones, and contributes to the activation of vitamin D In the kidneys
        Magnesium deficiency may negatively affect the body if it increases calcium intake, increasing the risk of kidney stones
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
            Phosphorus is one of the most important minerals for the health of the human body, because it is a part that does not dare in many functions of the human body, phosphorus combines with calcium and gives the bone strength and hardness is very strong, and it is a component of the genetic material and this substance is found inside the cells, Proteins within the body
            Phosphorus is measured in the blood and helps in diagnosing known cases and is done to follow up the level of abnormal calcium or when you have kidney disorder or uncontrolled diabetes or when taking calcium or phosphate supplements
</Text>
<Text style={{fontSize:20}}>
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
        Vitamin A is a fat-soluble vitamin that plays a key role in maintaining vision, body growth and maintaining immunity and reproductive health.
        Getting adequate amounts of vitamin A from your diet prevents symptoms of deficiency, which include hair loss, skin problems, dry eyes, night blindness and increased susceptibility to infection.
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
        Thiamine was the first vitamin B discovered by scientists. Thats why her name holds the number 1. Like other vitamins B, thiamine is soluble in water and helps the body convert food into energy. You can find them at:
</Text>
<Text style={{fontSize:20}}>
        Foods
            Individual supplements
            Multivitamins
        Thiamine deficiency can affect many different functions of your body, including functions:
            Nervous system
            heart
            brain
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
        Vitamin B2 and Vitamin B help the body build red blood cells and support other cellular functions that give you energy. You get the most out of B vitamins if you are taking dietary supplements or eating foods that contain each. The lack of Vitaine B2 leads to anemia
</Text>
<Text style={{fontSize:20}}>
        It is especially important to ensure that you get adequate amount of riboflavin in the diet of pregnant women. Lack of riboflavin can jeopardize the development of the child and increase the chances of contracting pre-eclampsia, which include high blood pressure during pregnancy. One of the most serious complications of preeclampsia is the lack of blood flow to the placenta.
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
            Vitamin B6, also known as pyridoxine, is one of eight vitamins in complex B complex ..

            Most people get enough vitamin B6 in their diet, but if you are deficient in other complex B vitamins, such as folate and B12, you are more likely to have a vitamin B6 deficiency as well
            Vitamin B6 deficiency is more common in people with liver, kidney, gastrointestinal or autoimmune diseases, as well as smokers, obese people, alcoholics and pregnant women In the body, B6 participates in more than 150 interactions. Which helps your body to process the proteins, carbohydrates and fats you eat. B6 is closely related to the functions of the nervous system and the immune system

            B6 has anti-oxidant and anti-inflammatory properties. This means that it may play a role in helping to prevent chronic diseases such as heart disease and cancer

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
        It is a fat-soluble vitamin and is also called vitamin E. Many studies have shown that many people do not get the appropriate daily proportion of it, which exposes them to a wide range of diseases including general immune weakness in the body, and may lead to deficiency in some cases Alzheimers disease and impaired mental abilities
        Elevated vitamin B6 appears to be associated with high levels of liver lipids or fat, and low vitamin levels indicate malnutrition.
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
        Vitamin K refers to a group of fat-soluble vitamins that play a role in blood clotting, bone metabolism, and regulation of calcium levels in the blood.
        The body needs vitamin K to produce prothrombin, an important clotting factor in blood clotting and bone metabolism. People who use blood thinners, such as warfarin or coumadin, should do a vitamin K test
        Shortage is rare, but in severe cases, it can increase the time of clotting, leading to bleeding and excessive bleeding.
</Text>
        <Text>0.3-2.7nmol / l
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
        Hepatitis is an inflammation and enlargement of the liver. One of the most common causes of acute hepatitis is infection with the hepatitis virus, usually hepatitis A, hepatitis B or hepatitis C. Severe viral hepatitis is a set of blood tests that are carried out together to help diagnose viral hepatitis. Some detection tests detect antibodies produced by the immune system in response to infection and detect proteins (antigens) that indicate the presence of the virus
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
            German measles is a member of the Togavirus family, and humans remain the only natural host of this virus. Usually the move is by inhaling air polluted by the virus
            Primary infections of uterine fever can lead to severe complications for the fetus, especially if the infection occurs during the first four months of pregnancy. Congenital rubella syndrome is often associated with hearing loss, cardiovascular and eye defects.
</Text>
        <Text>Less than 5u/ml negative
</Text>
        <Text>Positive more than 10
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
        Rheumatoid arthritis (RA) is a chronic inflammation of the joints. Similar to a number of other disturbances and conditions. This is why it often takes time to diagnose.
</Text>
<Text style={{fontSize:20}}>
        Blood tests do not provide a simple answer, yes or no, on whether you have arthritis. But it can help your doctor guide you toward diagnosis.
</Text>
<Text style={{fontSize:20}}>
        After you have been diagnosed with arthritis, ongoing blood tests will monitor the side effects of the drugs used in the treatment and also help to track the development of the disorder.
        The RF test is not ideal for determining whether you have arthritis
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
        Is a blood test that checks for a bacterial infection. When you come into contact with harmful bacteria, your body produces antibodies to defend itself against these bacteria. Your body also produces antibodies against the bacteria you fight.
The ASO test measures the antibodies produced by your body in response to a toxic substance known as. Streptolysin O is a toxin produced by Streptococcus (GAS). Your body makes antibodies when you have a bacterial infection caused by GAS.
Usually, when you have a bacterial infection such as sore throat, you receive antibiotics that kill the bacteria bacteria. But some people have no symptoms during the infection
They may not know they need treatment. When this happens, untreated infections can lead to complications in the future. The ASO test can help your doctor determine if you have a bacterial infection by measuring the presence of antibodies to the antibodies in the blood.
Your doctor will perform an ASO test if you have post-streptococcal complications. Some of the common complications of bacteria include:
    Bacterial endocarditis
    Glomerulonephritis
    Rheumatic fever
Antistreptolysin antibodies peak in your system between three to eight weeks after a bacterial infection. High levels can remain for several months. Your doctor can determine if the symptoms are caused by post-streptococcal complications by checking antibody levels

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
        Antibodies are proteins made by your immune system. It helps your body recognize and control the infection. Antibodies usually target harmful substances, such as bacteria and viruses, by activating the immune system to get rid of them.
</Text>
<Text style={{fontSize:20}}>
        Sometimes antibodies target healthy cells and tissues by mistake. This is known as the autoimmune response. Antibodies that attack healthy proteins within the nucleus - the center of control in your cells - are called antibodies to the nucleus (ANA
</Text>
<Text style={{fontSize:20}}>
        When the body receives signals to attack itself, it can lead to autoimmune diseases such as lupus, scleroderma, mixed connective tissue disease, autoimmune hepatitis, and others. Symptoms vary depending on the disease, but may include skin rash, swelling, arthritis, or fatigue.
</Text>
<Text style={{fontSize:20}}>
        While it is normal to have some ANA, the presence of too many of these proteins is a sign of active autoimmune diseases. ANA helps determine the level of ANA in your blood. You may have a self-disturbance if the level is high. However, conditions such as infections, cancer and other medical problems can also lead to a positive test of ANA A check is done if you have signs or symptoms of autoimmune disorder. The ANA test may indicate that you have some type of autoimmune disease, but it can not be used to diagnose a particular disorder.
</Text>
<Text style={{fontSize:20}}>
Titer less than 1/80

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
        It is a protein produced as part of the process that leads to arthritis in rheumatoid arthritis. Used to confirm the diagnosis of rheumatoid arthritis. The anti-CCP antibody is more specific to rheumatoid arthritis. With about 98% privacy, it is a reliable sign to confirm the diagnosis of rheumatoid arthritis. As the antibodies to CCP preceded the diagnosis of rheumatoid arthritis and could exist years before the development of RA symptoms. They are believed to have a pathogen role in RA development
</Text>
<Text style={{fontSize:20}}>
        Anti-antibody to CCP is more reliable than the rheumatoid factor in the diagnosis of rheumatoid arthritis. The anti-CCP test can accurately diagnose rheumatoid arthritis at a very early stage compared with the rheumatoid factor
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
        Sperm analysis is often recommended when couples experience pregnancy problems. The test will help the doctor determine whether the man is sterile. The analysis will also help determine whether the decrease in the number of sperm or sperm dysfunction
</Text>
<Text style={{fontSize:20}}>
        Best Sample: Masturbation is the preferred method to get a clean sample
            Avoid ejaculation for 24 to 72 hours before testing.
            Avoid alcohol, caffeine and drugs such as cocaine and marijuana two to five days before the test
        Avoid any medications and the sample should remain at body temperature. If the weather is warm or cold, the results will be inaccurate. Second, the sample must be delivered to the laboratory within 30 to 60 minutes of leaving the body.
</Text>
<Text style={{fontSize:20}}>
        Sample size - 2-5 ml
        The feeding time is 10-30 minutes
        Ph 7.2-76
</Text>
<Text style={{fontSize:20}}>
        Concentration of sperm 20-160 ml / pump
        Movement 70-90% per hour
        Figure 79-90% normal
        White blood cells less than one million / ml
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
            Herpes simplex virus, also known as HSV,. Herpes can appear in different parts of the body, most commonly on the genitals or mouth. There are two types of herpes simplex virus.

    HSV-1: Also known as oral herpes, this type of cold sores can cause fever blisters around the mouth and on the face.
    HSV-2: This type is generally responsible for genital herpes outbreaks.
The herpes simplex virus is a contagious virus that can be transmitted from person to person through direct contact. The virus is often transmitted to children with HSV-1 from early contact with an infected adult. Then carry the virus with them for the rest of their lives.
HSV-1 infection can occur from general reactions such as:
    Eat from the same pots
Share lip balm
    Kissing
The virus spreads more quickly when the person is infected. Anywhere from 30 to 95 percent of adults are HIV-positive for HSV-1, although they may not suffer
Of outbreaks. It is also possible to get genital herpes from HSV-1 if the person who has had oral sex suffers from cold sores during that period.
HSV-2

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
            It is a virus that destroys the immune system. The immune system helps the body fight inflammation. HIV infects and kills CD4 cells, a type of immune cell called T cells. While HIV kills CD4 cells, the body is more likely to have different types of infection
            HIV is transmitted through body fluids that include:
                blood
                semen
                Vaginal and rectal fluids
                Breast milk
            The virus does not spread in air or water, or through accidental contact.
            The life expectancy of uninfected AIDS is about three years
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
        Hemoglobin testing is a blood test used to measure and identify different types of hemoglobin in the bloodstream. Hemoglobin is the protein found within the red blood cells responsible for transferring oxygen to tissues and organs.

        Genetic mutations in your body can cause improperly formed hemoglobin. This abnormal hemoglobin can cause very little oxygen to reach tissues and organs. There are hundreds of different types of hemoglobin. Include:

            Hemoglobin F: Also known as fetal hemoglobin. It is the type found in growing fetuses and newborns. Hemoglobin is replaced shortly after birth.
            Hemoglobin A: This is also known as adult hemoglobin. It is the most common type of hemoglobin. There are healthy children and adults.
            Hemoglobin C, D, E, M, and S: These rare types of abnormal hemoglobin caused by genetic mutations.

</Text>
</ScrollView>

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
    <ScrollView>

    <Text style={{fontSize:20}}>
    Prolactin is produced by the pituitary gland in the brain. It’s also known as PRL or lactogenic hormone. Prolactin is mainly used to help women produce milk after childbirth.
    It’s important for both male and female reproductive health. The specific Function of prolactin in men is not well-known. However, prolactin levels have been used to measure sexual satisfaction in both men and women. A prolactin level test can reveal other issues caused by the hormone.
    Male up to 20 ng/ml
    Female up to 26ng/ml

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
            Regin test (RPR) is a blood test used to examine syphilis. It works by detecting the non-specific antibodies produced by your body to fight infection.

            Syphilis is a sexually transmitted infection caused by the spirochete bacterium Treponema pallidum, which can be fatal if left untreated.In addition to a specific antibody test, the RPR test allows the doctor to confirm the diagnosis of the active infection and start treatment. Complications and spread of the disease by an infected but unconscious person.
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
            It is a serious infection, usually from the lungs. These bacteria spread when they breathe in the air that is spewed by a person with TB. The bacteria can remain inactive in your body for years.
            When the immune system becomes weak, TB can become active and produce symptoms such as:
                Fever
                Weight loss
                Cough
                Night sweats
            Some people get TB bacteria but do not have symptoms. This condition is known as the passive Tent. TB can remain silent for years before it develops into tuberculosis

            If TB does not respond to antibiotics, it indicates that it is drug-resistant TB. When TB hits your body, it becomes more sensitive to certain bacteria, a test is performed
            PPD to check the current body sensitivity.

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>

        <Text style={{fontSize:20}}>
        The level of the gonadotropic hormone in the blood sample is measured as HCG is produced during pregnancy
  There are differences between blood tests and urine tests that you can buy without a prescription. Urine tests can be affected by factors such as dehydration and time from the day you test, while the hCG blood test can provide definitive results even in cases where hormone levels are low
  During pregnancy, cells in the developing placenta form hCG. Placenta is the sac that feeds the egg after being fertilized and attached to the uterine wall.
  HCG can be detected in the blood sample after about 11 days of pregnancy. The hCG levels continue to multiply every 48 to 72 hours. Reaching a peak of about 8 to 11 weeks after conception. HCG levels then decrease and stabilize, and remain constant for the rest of the pregnancy. The hCG blood test is performed to
      Confirmation of pregnancy
      Determine the approximate age of the fetus
      Diagnosis of abnormal pregnancy, such as ectopic pregnancy
      Diagnosis of potential abortion
      Screen of Down Syndrome

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

<Text>6
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
      <View style={{ flex: 1 }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>

        <Text style={{fontSize:20}}>
        It is a common type of bacteria that grows in the digestive system and has the ability to attack the lining of the stomach. It affects about 60% of the worlds adult population. Are usually harmless, but are responsible for the majority of ulcers in the stomach and intestine
Infections with this strain of bacteria usually do not cause symptoms, but they can lead to diseases in some people, including peptic ulcers, and an inflammation of the stomach known as gastritis. It has been modified to live in a harsh acidic environment in the stomach. These bacteria can change the surrounding environment and reduce their acidity so that they can survive. The spiral shape of the helical bacteria allows penetration of the lining of the stomach, protected by mucus, and can not be accessed by the immune cells of the body. Bacteria can interfere with the immune response and ensure they are not destroyed

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
        An enzyme that helps to make chemical changes in your body) is in your heart, your brain, and your skeletal muscles. When the muscle tissue is damaged, CPK leaks into your blood. Therefore, high levels of CPK usually indicate a type of stress or injury to your heart or other muscles.
        High CPK may indicate muscle inflammation due to disease activity or a nested condition. CPK levels can also be high after exercise, so your doctor may want to re-examine CPK after several days of rest. If your CPK is high without exercise or stays high with rest, your doctor may ask for additional tests to determine which type of isoenzyme is high. This information will help determine the source of the damage (skeletal muscle, heart, or brain). Some medications, such as cholesterol-lowering drugs, can cause an increase in CPK
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
      <View style={{ flex: 1 }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>

        <Text style={{fontSize:20}}>
        Is a sexually transmitted infection caused by a type of bacteria known as pallid sphincter. The first sign of syphilis is a small, painless ulcer. It can appear on the sexual organs, rectum, or inside the mouth. Syphilis can be challenging to diagnose. It can be any affliction to someone without showing any symptoms for years. However, early syphilis is detected, the better. Syphilis, which is not treated for a long time, can cause significant damage to important organs, such as the heart and brain.
        Syphilis spreads only through direct contact with the syphilis patient. It can not be transferred by sharing a toilet with another person, wearing someone else's clothes or using someone else's eating utensils.
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
        A blood test is determined if you have antibodies to the toxoplasmosis gland. It is also called a toxoplasmosis test. Your body makes these antibodies only after you have been infected with this parasite. The numbers and types of antibodies that you have indicate whether a recent injury or occurred long ago.
        If a pregnant woman is infected, the infection may be transmitted to the fetus. This can lead to brain damage and blindness in the growing baby. To find out if your child has been infected, your doctor can test a sample of amniotic fluid, the liquid that surrounds your baby in the womb.

        T gondii is at risk of infection when raw or uneaten meat is eaten from an infected animal. It can also be infected by dealing with an infected cat or its stools
</Text>
</ScrollView>

      </View>
    );
  }
}
class Varicella extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
      <Header
      backgroundColor='white'
    leftComponent={{ icon: 'arrow-back', color: 'red' , onPress:() =>
    this.props.navigation.goBack(null)
    }}
    />
    <ScrollView>

        <Text style={{fontSize:20}}>
        Wasp is a viral infection that causes a rash of patches and itching around the body and its symptoms resemble flu symptoms.

        It is a common childhood disease in the United States, especially in children under the age of 12. Which is rare now, thanks to the vaccine that children get when they are 12 to 15 months old, followed by a booster in 4 to 6 years of age.
        What are the signs and symptoms of chickenpox?

        Smallpox often starts without a traditional rash, with fever, headache, sore throat, or stomach pain. These symptoms may persist for a few days, with fever (38.3 ° - 38.8 ° C). A red rash usually starts on the abdomen, back, and face, and then spreads to any other place in the body (including the scalp, mouth, arms, legs, and genitals).

        The rash starts with a multitude of small red bumps that look like pimples or insect bites. Appear in waves over 2 to 4 days, then turn into thin-walled blisters filled with fluids.
        All three stages of smallpox (red bumps, pimples, fangs) appear on the body at the same time. The rash may spread more widely or be more severe in children with impaired immune system or skin disorders such as eczema.
        The varicella-zoster (VZV) virus is caused by a varicella-zoster (VZV) virus. After a person has infected chickenpox, the virus remains dormant in the nervous system for the rest of its life, despite the disappearance of chickenpox. The virus can then reactivate itself.
        Children who are vaccinated against chickenpox are less likely to develop shingles when they grow up. If this happens, shingles are usually milder and less likely to cause complications than a person who has not been immunized.
        Smallpox is very contagious - most children who have infected siblings will also get it (if they have not already had the disease or the vaccine), they develop symptoms two weeks after the first child.

        The pox virus travels through the air (by coughing and sneezing) and by direct contact with the mucus, saliva or fluid from the pimples. Smallpox pox is contagious from about two days before the rash starts until all pimples are peeled off.
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
        Cortisol, a chemical produced by the adrenal gland, has a positive effect on the body, as it works to increase the feeling of relaxation and rest, while the imbalance in the secretion of cortisol and increase in the body .. It has health damage is the sense of anxiety and fatigue, and weight gain
        Cortisol is primarily responsible for metabolizing substances in the body and is released as a reaction in stress situations. In addition, cortisol monitors certain immune system activities. In general, cortisol is excreted in larger quantities in the early morning hours, and this amount is reduced in the evening. Excessive secretion of cortisol due to tumor in the pituitary or adrenal gland
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
Cea:CEA,
Prolactin:Prolactin
},
  {
    initialRouteName: 'grid',
    headerMode: 'none',
  },

);
