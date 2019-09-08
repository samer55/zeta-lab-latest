import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ListView,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
import { processImages, buildRows, normalizeRows } from './utils';
import PhotoGallery from './PhotoGallery';
import GridItem from './GridItem';
import { NavigationActions } from 'react-navigation'

const maxWidth = Dimensions.get('window').width;

export default class Grid extends React.Component {
  static navigationOptions = {
  header: null,
  };
  componentWillMount() {
  const PHOTOS = [

     {
       id: '35577308923',
       postedBy: 'الرجيم',
       items1 : {
    name: 'lft',press:this.lft,
      },
      items2 : {
    name: 'lipid profile',press:this.lipidp,
     },
     items3 : {
    name: 'Tsh',press:this.tsh,
    },
    items4 : {
    name: 'Fbs',press:this.fbs,
    },
    items5 : {
    name: 'Cortizol hormone',press:this.Cortizol,
    },
    items6 : {
    name: '',press:this.urine,
    },
    items7 : {
    name: '',press:this.kft,
    },
    items8 : {
    name: '',press:this.lipidp,
    },
    items9 : {
    name: '',press:this._openprom,
    },
    items10 : {
    name: '',press:this._openprom,
    },
    items11 : {
    name: '',press:this._openprom,
    },
    items12 : {
    name: '',press:this._openprom,
    },
    items13 : {
    name: '',press:this._openprom,
    },
    items14 : {
    name: '',press:this._openprom,
    },
    items15 : {
     name: '',press:this._openprom,

    },


       width: 800,
       height: 640,
       title: 'Heads or Tails?',
       source:
         require('./gym1.jpeg')

     },
     {
       id: '36390435575',
       postedBy: 'فحوصات الشعر الزائد',
       width: 640,
       items1 : {
     name: 'Testosterone',press:this.Testosterone,
      },
      items2 : {
     name: 'FSH',press:this.Fsh,
     },
     items3 : {
     name: 'LH',press:this.Lh,
     },
     items4 : {
     name: '',press:'',
     },
     items5 : {
     name: '',press:'',
     },
     items6 : {
     name: '',press:'',
     },
     items7 : {
     name: '',press:'',
     },
     items8 : {
     name: '',press:'',
     },
     items9 : {
     name: '',press:'',
     },
     items10 : {
     name: '',press:'',
     },
     items11 : {
     name: '',press:'',
     },
     items12 : {
     name: '',press:'',
     },
     items13 : {
     name: '',press:'',
     },
     items14 : {
     name: '',press:'',
     },
     items15 : {
     name: '',press:'',

     },    height: 427,
       title: 'Ghost Express',
       source:   require('./hair1.jpeg')
     },
     {
       id: '36221070302',
       postedBy: 'فحوصات الدهنيات ',
       width: 640,
       height: 380,
       items1 : {
     name: 'HDL',press:this.lipidp,
      },
      items2 : {
     name: 'LDL',press:this.lipidp,
     },
     items3 : {
     name: 'TOTAL cholesterol',press:this.lipidp,
     },
     items4 : {
     name: 'Serum triglycerides',press:this.lipidp,
     },
     items5 : {
     name: '',press:'',
     },
     items6 : {
     name: '',press:'',
     },
     items7 : {
     name: '',press:'',
     },
     items8 : {
     name: '',press:'',
     },
     items9 : {
     name: '',press:'',
     },
     items10 : {
     name: '',press:'',
     },
     items11 : {
     name: '',press:'',
     },
     items12 : {
     name: '',press:'',
     },
     items13 : {
     name: '',press:'',
     },
     items14 : {
     name: '',press:'',
     },
     items15 : {
     name: '',press:''

     },    title: 'Heideblauwtje - Silver-studded blue',
       source:   require('./fatcol1.jpeg')
     },
     {
       id: '36334926986',
       postedBy: 'مشاكل الغدة الدرقية',
       items1 : {
    name: 'cbc',press:this.cbc,
      },
      items2 : {
    name: 'fbs',press:this.fbs,
     },
     items3 : {
    name: 'ft3',press:this.tsh,
    },
    items4 : {
    name: 'ft4',press:this.tsh,
    },
    items5 : {
    name: 'tsh',press:this.tsh,
    },
    items6 : {
    name: 'tpo',press:this.tpo,
    },
    items7 : {
    name: 'crp',press:this.crp,
    },
    items8 : {
    name: 'hba1c',press:this.hba1c,
    },
    items9 : {
    name: 'microalbumin',press:this.kft,
    },
    items10 : {
    name: '',press:'',
    },
    items11 : {
    name: '',press:'',
    },
    items12 : {
    name: '',press:'',
    },
    items13 : {
    name: '',press:'',
    },
    items14 : {
    name: '',press:'',
    },
    items15 : {
     name: '',press:'',

    },
       width: 512,
       height: 640,
       title: 'white light',
       source:   require('./ver1.jpeg')
     },
     {
       id: '36219754712',
       postedBy: 'فحوصات الخصوبة عند النساء',
       width: 640,
       items1 : {
    name: 'Chromosomal Karyotyping',press:'',
      },
      items2 : {
    name: 'Cardiovascular Disease Associated Risk mutation',press:this.A,
     },
     items3 : {
    name: 'Anti Thrombin III',press:this.THROMBIN,
    },
    items4 : {
    name: 'Anti Mullerian hormone',press:'',
    },
    items5 : {
    name: 'TSH',press:this.tsh,
    },
    items6 : {
    name: 'Anti phospholipid Ab (IgG&IgM)',press:this.Anticoagulants,
    },
    items7 : {
    name: 'Natural killer cell (CD16&CD56)',press:'',
    },
    items8 : {
    name: '',press:'',
    },
    items9 : {
    name: '',press:'',
    },
    items10 : {
    name: '',press:'',
    },
    items11 : {
    name: '',press:'',
    },
    items12 : {
    name: '',press:'',
    },
    items13 : {
    name: '',press:'',
    },
    items14 : {
    name: '',press:'',
    },
    items15 : {
     name: '',press:'',

    },
       height: 402,
       title: 'to fast',
       source:  require('./khoso1.jpeg')
     },
     {
       id: '36378437285',
       postedBy: 'فحوصات الاطفال من 1 ل 10 سنوات',
       width: 640,
       items1 : {
    name: 'cbc',press:this.cbc,
      },
      items2 : {
        name: ' Ferritin',press:this.ferritin,
     },
     items3 : {
    name: 'crp',press:this.crp,
    },
    items4 : {
    name: 'Vitamin b12',press:this.b12,
    },
    items5 : {
    name: 'Vitamin d',press:this.hydroxy,
    },
    items6 : {
    name: 'ASO',press:this.Antistreptolysin,
    },
    items7 : {
    name: '',press:'',
    },
    items8 : {
    name: '',press:'',
    },
    items9 : {
    name: '',press:'',
    },
    items10 : {
    name: '',press:'',
    },
    items11 : {
    name: '',press:'',
    },
    items12 : {
    name: '',press:'',
    },
    items13 : {
    name: '',press:'',
    },
    items14 : {
    name: '',press:'',
    },
    items15 : {
     name: '',press:'',

    },

       height: 427,
       title: 'Bountiful Glory',
       source:  require('./kids1.jpeg')
     },
     {
       id: '36385293895',
       postedBy: 'فحوصات العمال الوافدين',
       width: 640,
       items1 : {
    name: 'cbc',press:this.cbc,
      },
      items2 : {
    name: 'RBS',press:this.RBS,
     },
     items3 : {
    name: 'B-HCG',press:this.hCG,
    },
    items4 : {
    name: 'HIV(1&2)',press:this.HIV,
    },
    items5 : {
    name: 'Mycobacterium tuberculosis(TB)',press:this.Tb,
    },
    items6 : {
    name: 'Hepatitis Bs Antigen (HBsAG)',press:this.Hepatitis,
    },
    items7 : {
    name: 'Hepatitis c virus(HCV) AB',press:this.Hepatitis,
    },
    items8 : {
    name: 'Urine analysis',press:this.urine,
    },
    items9 : {
    name: 'Syphilis',press:this.Syphilis,
    },
    items10 : {
    name: 'Herpes simplex virus( Hsv I&II)',press:this.Hsv,
    },
    items11 : {
    name: '',press:'',
    },
    items12 : {
      name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 360,
       title: 'clouds',
       source:   require('./wafed1.jpeg')
     },
     {
       id: '35981101570',
       postedBy: 'الفيتامينات الأساسية للجسم',
       width: 640,
       items1 : {
    name: 'Magnesium',press:this.magnesium,
      },
      items2 : {
    name: 'Ferritin',press:this.ferritin,
     },
     items3 : {
    name: 'Vitamin b12',press:this.b12,
    },
    items4 : {
    name: 'Zinc',press:this.Zinc,
    },
    items5 : {
    name: '25-hydroxy vitamin D',press:this.hydroxy,
    },
    items6 : {
    name: 'Vitamin A',press:this.Vitamina,
    },
    items7 : {
    name: 'Vitamin B1.B2.B6',press:this.b1,
    },
    items8 : {
    name: 'Vitamin E',press:this.Vitamine,
    },
    items9 : {
    name: 'Vitamin K',press:this.Vitamink,
    },
    items10 : {
    name: '',press:'',
    },
    items11 : {
      name: '',press:'',
    },
    items12 : {
      name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 426,
       title: 'Eastern Ringtail',
       source:   require('./vetamin1.jpeg')
     },
     {
       id: '36215026892',
       postedBy: 'فحوصات العظام والمفاصل',
       width: 640,
       items1 : {
    name: 'cbc',press:this.cbc,
      },
      items2 : {
    name: 'esr',press:this.esr,
     },
     items3 : {
    name: 'fbs',press:this.fbs,
    },
    items4 : {
    name: 'Calcium',press:this.Calcium,
    },
    items5 : {
    name: 'phosphorus(inorganic)',press:this.Phosphours,
    },
    items6 : {
    name: 'magnesium',press:this.magnesium,
    },
    items7 : {
    name: '25-hydroxy vitamin D total',press:this.hydroxy,
    },
    items8 : {
    name: 'Crp',press:this.crp,
    },
    items9 : {
    name: 'Kft',press:this.kft,
    },
    items10 : {
    name: 'Lft',press:this.lft,
    },
    items11 : {
    name: 'Lipid profile',press:this.lipidp,
    },
    items12 : {
    name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 480,
       title: 'Fear of heights?',
       source:  require('./body1.jpeg')
     },
     {
       id: '36383381605',
       postedBy: 'فحوصات تسافط الشعروتكسر الاظافر',
       width: 640,
       items1 : {
    name: 'Cbc',press:this.cbc,
      },
      items2 : {
    name: 'ferritin',press:this.ferritin,
     },
     items3 : {
    name: 'Zinc',press:this.Zinc,
    },
    items4 : {
    name: 'Mg',press:this.Magnesium,
    },
    items5 : {
    name: 'B12',press:this.b12,
    },
    items6 : {
    name: 'Vit D',press:this.Hydroxy,
    },
    items7 : {
    name: 'Tsh',press:this.tsh,
    },
    items8 : {
    name: 'Kft',press:this.kft,
    },
    items9 : {
    name: 'Lft',press:this.lft,
    },
    items10 : {
    name: 'folate',press:this.folate,
    },
    items11 : {
    name: '',press:'',
    },
    items12 : {
      name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 421,
       title: 'Kreiskunst',
       source:   require('./handh.jpeg')
     },


     {
       id: '35991086210',
       postedBy: 'فحوصات تأخر الحمل للإناث',
       width: 640,
       items1 : {
    name: 'Fsh',press:this.Fsh,
      },
      items2 : {
    name: 'Anti Mullerian hormone',press:this.TSH,
     },
     items3 : {
    name: '',press:'',
    },
    items4 : {
      name: '',press:'',
    },
    items5 : {
      name: '',press:'',
    },
    items6 : {
      name: '',press:'',
    },
    items7 : {
      name: '',press:'',
    },
    items8 : {
      name: '',press:'',
    },
    items9 : {
      name: '',press:'',
    },
    items10 : {
      name: '',press:'',
    },
    items11 : {
      name: '',press:'',
    },
    items12 : {
      name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 427,
       title: 'as midnight goes by at the Lofoten',
       source:   require('./late1.jpeg')
     },
     {
       id: '36213975142',
       postedBy: 'فحوصات المراة الحامل',
       width: 640,
       items1 : {
    name: 'Blood group and Rh',press:'',
      },
      items2 : {
    name: 'Cbc',press:this.cbc,
     },
     items3 : {
    name: 'Tsh',press:this.tsh,
    },
    items4 : {
    name: 'Rubella antibodies .IgG',press:this.Rubella,
    },
    items5 : {
    name: 'Urine analysis',press:this.urine,
    },
    items6 : {
    name: 'Hepatitis Bs antigen (HBsAg)',press:this.Hepatitis,
    },
    items7 : {
    name: 'Hepatitis c virus (HCV) Total Ab',press:this.Hepatitis,
    },
    items8 : {
    name: 'Toxoplasma gondii',press:this.Toxoplasma,
    },
    items9 : {
    name: 'syphilis',press:this.Syphilis,
    },
    items10 : {
    name: 'RBS',press:this.RBS,
    },
    items11 : {
    name: 'Varicella Zoster Virus Antibodies IgG and IgM ',press:this.Varicella,
    },
    items12 : {
    name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 427,
       title: 'Dragon Fruit',
       source:   require('./woman1.jpeg')
     },
     {
       id: '35988948010',
       postedBy: 'الخثرات والتجلطات الوراثية',
       width: 640,
       height: 427,
       items1 : {
    name: 'cardiovascular Disease associated Risk.12 mutation',press:'',
      },
      items2 : {
    name: 'cbc',press:this.cbc,
     },
     items3 : {
    name: 'esr',press:this.esr,
    },
    items4 : {
    name: 'fbs',press:this.fbs,
    },
    items5 : {
    name: 'crp',press:this.crp,
    },
    items6 : {
    name: 'urine analysis',press:this.urine,
    },
    items7 : {
    name: 'kft',press:this.kft,
    },
    items8 : {
    name: 'lft',press:this.lft,
    },
    items9 : {
    name: 'lipid profile',press:this.lipidp,
    },
    items10 : {
    name: '',press:'',
    },
    items11 : {
      name: '',press:'',
    },
    items12 : {
      name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       title: 'Posbank bloei van 3 jaar geleden',
       source:   require('./gal1.jpeg')
     },
     {
       id: '35545027504',
       postedBy: 'مشاكل الدورة الشهرية',
       width: 640,
       items1 : {
    name: 'Calcium',press:this.Calcium,
      },
      items2 : {
    name: 'Ferritin',press:this.ferritin,
     },
     items3 : {
    name: 'Fsh',press:this.fsh,
    },
    items4 : {
    name: 'Lh',press:this.Lh,
    },
    items5 : {
    name: 'Prolactin',press:this.Prolactin,
    },
    items6 : {
    name: 'Tsh',press:this.tsh,
    },
    items7 : {
    name: '25-hydroxy vitamin D total',press:this.hydroxy,
    },
    items8 : {
    name: '',press:'',
    },
    items9 : {
      name: '',press:'',
    },
    items10 : {
      name: '',press:'',
    },
    items11 : {
      name: '',press:'',
    },
    items12 : {
      name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 427,
       title: 'CLEOPATRA ( Explore 06.08.2017 )',
       source:   require('./daw1.jpeg')
     },
     {
       id: '35980200700',
       postedBy: 'فحوصات الاجهاض المتكرر',
       width: 427,
       items1 : {
    name: 'Cardiovascular Disease associated risk .12 mutation .pcR',press:this.A,
      },
      items2 : {
    name: 'Anti phospholipid Ab(IgG&Igm)',press:'',
     },
     items3 : {
    name: 'Natural killer cell (Cd16-cd56)',press:'',
    },
    items4 : {
    name: 'Toxoplasma Test',press:this.Toxoplasma,
    },
    items5 : {
    name: '',press:'',
    },
    items6 : {
      name: '',press:'',
    },
    items7 : {
      name: '',press:'',
    },
    items8 : {
      name: '',press:'',
    },
    items9 : {
      name: '',press:'',
    },
    items10 : {
      name: '',press:'',
    },
    items11 : {
      name: '',press:'',
    },
    items12 : {
      name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 640,
       title: 'island on the lake',
       source:   require('./egh1.jpeg')
     },
     {
       id: '36387221395',
       postedBy: 'فحوصات السمنة المفرطة',
       width: 640,
       items1 : {
    name: 'Kft',press:this.kft,
      },
      items2 : {
    name: 'Lipid profile',press:this.lipidp,
     },
     items3 : {
    name: 'FBS',press:this.fbs,
    },
    items4 : {
    name: 'Insulin resiestance',press:this.fbs,
    },
    items5 : {
    name: 'RBS',press:this.RBS,
    },
    items6 : {
    name: 'ferritin',press:this.ferritin,
    },
    items7 : {
    name: 'cbc',press:this.cbc,
    },
    items8 : {
    name: 'Vitamin D',press:this.hydroxy,
    },
    items9 : {
    name: 'Vitamin B12',press:this.b12,
    },
    items10 : {
    name: 'Testosterone',press:this.Testosterone,
    },
    items11 : {
    name: 'Cortisol',press:this.Cortizol,
    },
    items12 : {
    name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 427,
       title: 'Last of the Summer Cherries.',
       source:   require('./fat1.jpeg')
     },
     {
       id: '35984386640',
       postedBy: 'فحوصات النسيان والخمول',
       width: 640,
       items1 : {
    name: 'Vitamin D',press:this.hydroxy,
      },
      items2 : {
    name: 'Vitamin b12',press:this.b12,
     },
     items3 : {
    name: 'Folate',press:this.folate,
    },
    items4 : {
    name: 'TSH',press:this.tsh,
    },
    items5 : {
    name: 'Vitamin B1',press:this.b1,
    },
    items6 : {
    name: '',press:'',
    },
    items7 : {
      name: '',press:'',
    },
    items8 : {
      name: '',press:'',
    },
    items9 : {
      name: '',press:'',
    },
    items10 : {
      name: '',press:'',
    },
    items11 : {
      name: '',press:'',
    },
    items12 : {
      name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 480,
       title: 'Storm Warning',
       source:  require('./forgot1.jpeg')
     },
     {
       id: '35579027583',
       postedBy: 'فحص ما قبل الزواج(ثلاسيميا)',
       width: 640,
       items1 : {
    name: 'Cbc(mcv',press:this.cbc,
      },
      items2 : {
    name: 'Hb-elecrtophoresies',press:this.electrophoreses,
     },
     items3 : {
    name: '',press:'',
    },
    items4 : {
      name: '',press:'',
    },
    items5 : {
      name: '',press:'',
    },
    items6 : {
      name: '',press:'',
    },
    items7 : {
      name: '',press:'',
    },
    items8 : {
      name: '',press:'',
    },
    items9 : {
      name: '',press:'',
    },
    items10 : {
      name: '',press:'',
    },
    items11 : {
      name: '',press:'',
    },
    items12 : {
      name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 427,
       title: 'Spots and shade',
       source:  require('./before1.jpeg')
     },
     {
       id: '35579027583',
       postedBy: 'جرثومة المعدة',
       width: 640,
       items1 : {
    name: 'H.pylori',press:this.pylori,
      },
      items2 : {
    name: '',press:'',
     },
     items3 : {
    name: '',press:'',
    },
    items4 : {
      name: '',press:'',
    },
    items5 : {
      name: '',press:'',
    },
    items6 : {
      name: '',press:'',
    },
    items7 : {
      name: '',press:'',
    },
    items8 : {
      name: '',press:'',
    },
    items9 : {
      name: '',press:'',
    },
    items10 : {
      name: '',press:'',
    },
    items11 : {
      name: '',press:'',
    },
    items12 : {
      name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 427,
       title: 'Spots and shade',
       source:  require('./gor.jpeg')
     },
     {
       id: '35545022354',
       postedBy: 'فحوصات امراض الدم',
       width: 640,
       items1 : {
    name: 'cbc',press:this.cbc,
      },
      items2 : {
    name: 'esr',press:this.esr,
     },
     items3 : {
    name: 'fbs',press:this.fbs,
    },
    items4 : {
    name: 'transferrin',press:this.transferrin,
    },
    items5 : {
    name: 'ferritin',press:this.ferritin,
    },
    items6 : {
    name: 'vitamin b12',press:this.b12,
    },
    items7 : {
    name: 'folate',press:this.folate,
    },
    items8 : {
    name: 'crp',press:this.crp,
    },
    items9 : {
    name: 'kft',press:this.kft,
    },
    items10 : {
    name: 'lft',press:this.lft,
    },
    items11 : {
    name: 'lipid profile',press:this.lipidp,
    },
    items12 : {
    name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 427,
       title: 'A Healthy Lomo Blubree [in explore]',
       source:  require('./blood1.jpeg')
     },
     {
       id: '35545022354',
       postedBy: 'التعرق المفرط',
       width: 640,
       items1 : {
    name: 'FBS',press:this.fbs,
      },
      items2 : {
    name: 'TSH',press:this.tsh,
     },
     items3 : {
    name: 'T3',press:this.tsh,
    },
    items4 : {
    name: 'T4',press:this.tsh,
    },
    items5 : {
    name: 'Uric acid',press:this.kft,
    },
    items6 : {
    name: 'Lipid profile',press:this.lipidp,
    },
    items7 : {
    name: 'Vitamin D',press:this.hydroxy,
    },
    items8 : {
    name: 'Vitamin B12',press:this.b12,
    },
    items9 : {
    name: '',press:'',
    },
    items10 : {
    name: '',press:'',
    },
    items11 : {
    name: '',press:'',
    },
    items12 : {
    name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 427,
       title: 'A Healthy Lomo Blubree [in explore]',
       source:  require('./ta3a.jpeg')
     },
     {
       id: '36215239572',
       postedBy: 'مؤشر الكتل السرطانية  للرجل',
       width: 640,
       items1 : {
    name: 'Cbc',press:this.cbc,
      },
      items2 : {
    name: 'Esr',press:this.esr,
     },
     items3 : {
    name: 'Fbs',press:this.fbs,
    },
    items4 : {
    name: 'Psa total',press:'',
    },
    items5 : {
    name: 'Psa free',press:'',
    },
    items6 : {
    name: 'Ca19-9',press:this.Ca19,
    },
    items7 : {
    name: 'CEA',press:this.CEA,
    },
    items8 : {
    name: 'Crp',press:this.crp,
    },
    items9 : {
    name: '',press:'',
    },
    items10 : {
      name: '',press:'',
    },
    items11 : {
      name: '',press:'',
    },
    items12 : {
      name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 427,
       title: 'Layer cake',
       source:  require('./bmim1.jpeg')
     },
     {
       id: '35988822710',
       postedBy: 'مؤشر الكتل السرطانية للمراة',
       width: 640,
       items1 : {
    name: 'Cbc',press:this.cbc,
      },
      items2 : {
    name: 'Esr',press:this.esr,
     },
     items3 : {
    name: 'Fbs',press:this.fbs,
    },
    items4 : {
    name: 'Ca125',press:this.Ca125,
    },
    items5 : {
    name: 'Ca15-3',press:this.Ca15,
    },
    items6 : {
    name: 'Ca19-9',press:this.Ca19,
    },
    items7 : {
    name: 'CEA',press:this.CEA,
    },
    items8 : {
    name: '',press:'',
    },
    items9 : {
      name: '',press:'',
    },
    items10 : {
      name: '',press:'',
    },
    items11 : {
      name: '',press:'',
    },
    items12 : {
      name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 380,
       title: "A fisherman's prayer (Explored august 5, 2017)",
       source:  require('./fam1.jpeg')
     },
    
     {
       id: '35553153214',
       postedBy: 'فحوصات النشاط واللياقة الدائمة',
       width: 640,
       items1 : {
    name: 'Kft',press:this.kft,
      },
      items2 : {
    name: 'Lft',press:this.lft,
     },
     items3 : {
    name: 'Tsh',press:this.tsh,
    },
    items4 : {
    name: 'Urine analysis',press:this.urine,
    },
    items5 : {
    name: 'Cbc',press:this.cbc,
    },
    items6 : {
    name: 'B12',press:this.b12,
    },
    items7 : {
    name: '',press:'',
    },
    items8 : {
      name: '',press:'',
    },
    items9 : {
      name: '',press:'',
    },
    items10 : {
      name: '',press:'',
    },
    items11 : {
      name: '',press:'',
    },
    items12 : {
      name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 518,
       title: 'Expelled [Explored on August 6th 2017]',
       source:  require('./health1.jpeg')
     },
     {
       id: '36211598492',
       postedBy: 'فحوصات القلب والشرايين(صيام من 8-12ساعة)',
       width: 640,
       items1 : {
    name: 'Cbc',press:this.cbc,
      },
      items2 : {
    name: 'Esr',press:this.esr,
     },
     items3 : {
    name: 'FBS',press:this.fbs,
    },
    items4 : {
    name: 'Vitamin b12',press:this.b12,
    },
    items5 : {
    name: 'Folate',press:this.folate,
    },
    items6 : {
    name: 'Homocysteine',press:this.Mthafr,
    },
    items7 : {
    name: 'CRP',press:this.crp,
    },
    items8 : {
    name: 'urine analysis',press:this.urine,
    },
    items9 : {
    name: 'kft',press:this.kft,
    },
    items10 : {
    name: 'lipid profile',press:this.lipidp,
    },
    items11 : {
    name: 'lft',press:this.lft,
    },
    items12 : {
    name: 'hba1c',press:this.hba1c,
    },
    items13 : {
    name: 'apolipoprotein A1',press:this.apolipoprotein,
    },
    items14 : {
    name: 'apolipoprotein B',press:this.apolipoprotein,
    },
    items15 : {
     name: 'cpk',press:this.cpk,

    },
       height: 427,
       title: 'candies - fresh & fruity',
       source:  require('./heart1.jpeg')
     },
     {
       id: '35993842840',
       postedBy: 'فحوصات  وظائف الكبد',
       width: 640,
       items1 : {
    name: 'Total protein-TP',press:this.Protein,
      },
      items2 : {
    name: 'ALBUMIN',press:this.Liver,
     },
     items3 : {
    name: 'Globulin-Glob',press:this.Liver,
    },
    items4 : {
    name: 'Aspartate Amino Transferase-AST',press:'',
    },
    items5 : {
    name: 'Alanine Amino Transferase _ALT',press:this.Alanine,
    },
    items6 : {
    name: 'Gama Glutamyl Transfrease-GGT',press:this.Glutamyl,
    },
    items7 : {
    name: 'Lactate Dehydrogenase_LDH',press:this.Lactate,
    },
    items8 : {
    name: 'Alkaline Phosphatase  _ALP',press:this.ALP,
    },
    items9 : {
    name: 'Bilirubin',press:this.Bilirubin,
    },
    items10 : {
    name: '',press:'',
    },
    items11 : {
      name: '',press:'',
    },
    items12 : {
      name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 360,
       title: 'Behind the Dike of the Grevelingen Lake.',
       source:  require('./kabed1.jpeg')
     },
     {
       id: '35580081413',
       postedBy: 'فحوصات وظائف الكلى',
       width: 640,
       items1 : {
    name: 'Creatinine Clearance',press:this.Kft,
      },
      items2 : {
    name: 'Microalbuminuria',press:this.kft,
     },
     items3 : {
    name: 'Serum creatinine',press:this.kft,
    },
    items4 : {
    name: 'Blood urea nitrogen',press:this.kft,
    },
    items5 : {
    name: 'Glomerular filtration rate',press:this.kft,
    },
    items6 : {
    name: 'Uric acid',press:this.kft,
    },
    items7 : {
    name: 'Serum Sodium',press:this.kft,
    },
    items8 : {
    name: 'Serum Potassium',press:this.kft,
    },
    items9 : {
    name: 'Chloride',press:this.kft,
    },
    items10 : {
    name: 'Urine analysis',press:this.urine,
    },
    items11 : {
    name: '',press:'',
    },
    items12 : {
      name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 427,
       title: 'Kingy catch (1 of 3)',
       source:  require('./kela1.jpeg')
     },
     {
       id: '35544533004',
       postedBy: 'فحوصات العظام والمفاصل',
       width: 640,
       items1 : {
    name: 'cbc',press:this.cbc,
      },
      items2 : {
    name: 'esr',press:this.esr,
     },
     items3 : {
    name: 'fbs',press:this.fbs,
    },
    items4 : {
    name: 'calcium',press:this.Calcium,
    },
    items5 : {
    name: 'phosphorus(inorganic',press:this.Phosphours,
    },
    items6 : {
    name: 'magnesium',press:this.magnesium,
    },
    items7 : {
    name: '25-hydroxy vitamin D total',press:this.hydroxy,
    },
    items8 : {
    name: 'Crp',press:this.crp,
    },
    items9 : {
    name: 'Kft',press:this.kft,
    },
    items10 : {
    name: 'Lft',press:this.lft,
    },
    items11 : {
    name: 'Lipid profile',press:this.lipidp,
    },
    items12 : {
    name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 431,
       title: 'Off Yer Bike.',
       source:  require('./mafasel1.jpeg')
     },
     {
       id: '35544058694',
       postedBy: 'الخصوبة عند الرجال  قبل الزواج ',
       width: 640,
       items1 : {
    name: 'Testesterone (total&free)',press:this.Testosterone,
      },
      items2 : {
    name: 'Seminal fluid analysis',press:this.Seminal,
     },
     items3 : {
    name: 'Chromosomal Karyotyping',press:'',
    },
    items4 : {
    name: 'Y chromosome microdeletions extended(14',press:'',
    },
    items5 : {
    name: 'microdeletions',press:'',
    },
    items6 : {
    name: 'Cbc',press:this.cbc,
    },
    items7 : {
    name: 'Hemoglobin capillary Electrophoresis',press:this.electrophoreses,
    },
    items8 : {
    name: '',press:'',
    },
    items9 : {
      name: '',press:'',
    },
    items10 : {
      name: '',press:'',
    },
    items11 : {
      name: '',press:'',
    },
    items12 : {
      name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 360,
       title: 'Waar sta ik en waar moet ik heen ?',
       source:  require('./menkh1.jpeg')
     },
     {
       id: '36342182536',
       postedBy: 'الامراض  المنقولة جنسيا',
       width: 640,
       items1 : {
    name: 'Herpes simplex virus( Hsv I&II)',press:this.Hsv,
      },
      items2 : {
    name: 'Chlamydia trachomatis',press:'',
     },
     items3 : {
    name: 'Neisseria gonorrhea',press:'',
    },
    items4 : {
    name: 'Syphilis',press:this.Syphilis,
    },
    items5 : {
    name: 'HIV',press:this.HIV,
    },
    items6 : {
    name: '',press:'',
    },
    items7 : {
      name: '',press:'',
    },
    items8 : {
      name: '',press:'',
    },
    items9 : {
      name: '',press:'',
    },
    items10 : {
      name: '',press:'',
    },
    items11 : {
      name: '',press:'',
    },
    items12 : {
      name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 480,
       title: "I'm in holidays! (iPhone Shot)",
       source:  require('./sex1.jpeg')
     },
     {
       id: '36343386706',
       postedBy: 'فحوصات الشيك اب',
       width: 640,
       items1 : {
    name: 'Cbc',press:this.cbc,
      },
      items2 : {
    name: 'Hba1c',press:this.hba1c,
     },
     items3 : {
    name: 'Lipid profile',press:this.lipidp,
    },
    items4 : {
    name: 'Kft',press:this.kft,
    },
    items5 : {
    name: 'Lft',press:this.lft,
    },
    items6 : {
    name: 'Urine analysis',press:this.urine,
    },
    items7 : {
    name: 'Vitamin b12',press:this.b12,
    },
    items8 : {
    name: 'Vitamin D',press:this.hydroxy,
    },
    items9 : {
    name: 'Tsh',press:this.tsh,
    },
    items10 : {
    name: '',press:'',
    },
    items11 : {
      name: '',press:'',
    },
    items12 : {
      name: '',press:'',
    },
    items13 : {
      name: '',press:'',
    },
    items14 : {
      name: '',press:'',
    },
    items15 : {
      name: '',press:'',

    },
       height: 323,
       title: 'The Norton Sound',
       source:  require('./full1.jpeg')
     },


    ];
    const processedImages = processImages(PHOTOS);
    let rows = buildRows(processedImages, maxWidth);
    rows = normalizeRows(rows, maxWidth);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(rows)
    };
  }
  Testosterone = () => {
  this.props.navigation.navigate('Testosterone')  }
  dihydroxy = () => {
  this.props.navigation.navigate('dihydroxy')  }
  Hydroxy = () => {
  this.props.navigation.navigate('Hydroxy')  }
  Pt = () => {
  this.props.navigation.navigate('Pt')  }
  INR = () => {
  this.props.navigation.navigate('INR')  }
  PcT = () => {
  this.props.navigation.navigate('PcT')  }
  ptt = () => {
  this.props.navigation.navigate('ptt')  }
  ESR = () => {
  this.props.navigation.navigate('ESR')  }
  CReactive = () => {
  this.props.navigation.navigate('CReactive')  }
  Urine = () => {
  this.props.navigation.navigate('Urine')  }
  Liver = () => {
  this.props.navigation.navigate('Liver')  }
  Tb = () => {
  this.props.navigation.navigate('Tb')  }

  Alanine = () => {
  this.props.navigation.navigate('Alanine')  }
  Glutamyl = () => {
  this.props.navigation.navigate('Glutamyl')  }
  Lactate = () => {
  this.props.navigation.navigate('Lactate')  }
  ALP = () => {
  this.props.navigation.navigate('ALP')  }
  Bilirubin = () => {
  this.props.navigation.navigate('Bilirubin')  }
  Kft = () => {
  this.props.navigation.navigate('Kft')  }
  folic = () => {
  this.props.navigation.navigate('folic')  }
  Transferrin = () => {
  this.props.navigation.navigate('Transferrin')  }
  Prothrombin = () => {
  this.props.navigation.navigate('Prothrombin')  }
  Mthafr = () => {
  this.props.navigation.navigate('Mthafr')  }
  THROMBIN = () => {
  this.props.navigation.navigate('THROMBIN')  }
  Anticoagulants = () => {
  this.props.navigation.navigate('Anticoagulants')  }
  Cardiolipin = () => {
  this.props.navigation.navigate('Cardiolipin')  }
  Phosphours = () => {
  this.props.navigation.navigate('Phosphours')  }
  b6 = () => {
  this.props.navigation.navigate('b6')  }
  e = () => {
  this.props.navigation.navigate('e')  }
  k = () => {
  this.props.navigation.navigate('k')  }
  Rheumatoid = () => {
  this.props.navigation.navigate('Rheumatoid')  }
  Citrullinated = () => {
  this.props.navigation.navigate('Citrullinated')  }
  Seminal = () => {
  this.props.navigation.navigate('Seminal')  }
  Hsv = () => {
  this.props.navigation.navigate('Hsv')  }
  electrophoreses = () => {
  this.props.navigation.navigate('electrophoreses')  }
  hCG = () => {
  this.props.navigation.navigate('hCG')  }
  rapid = () => {
  this.props.navigation.navigate('rapid')  }
  pylori = () => {
  this.props.navigation.navigate('pylori')  }

  cbc = () => {
  this.props.navigation.navigate('CBC')  }
  esr = () => {
  this.props.navigation.navigate('ESR')  }
  fbs = () => {
  this.props.navigation.navigate('Fasting')  }
  b12 = () => {
  this.props.navigation.navigate('B12')  }
  folate = () => {
  this.props.navigation.navigate('b6')  }
  crp = () => {
  this.props.navigation.navigate('CReactive')  }
  urine = () => {
  this.props.navigation.navigate('Urine')  }
  kft = () => {
  this.props.navigation.navigate('Kft')  }
  lipidp = () => {
  this.props.navigation.navigate('Home')  }
  lft = () => {
  this.props.navigation.navigate('Liver')  }
  hba1c = () => {
  this.props.navigation.navigate('Hba1c')  }
  apolipoprotein = () => {
  this.props.navigation.navigate('A')  }
  cpk = () => {
  this.props.navigation.navigate('Phosphokinase')  }
  transferrin = () => {
  this.props.navigation.navigate('Transferrin')  }
  ferritin = () => {
  this.props.navigation.navigate('Ferritin')  }
  tsh = () => {
  this.props.navigation.navigate('TSH')  }
  tpo = () => {
  this.props.navigation.navigate('tpo')  }
  magnesium = () => {
  this.props.navigation.navigate('Magnesium')  }
  hydroxy = () => {
  this.props.navigation.navigate('Hydroxy')  }
  Ca19 = () => {
  this.props.navigation.navigate('Cancer')  }
  CEA = () => {
  this.props.navigation.navigate('Carcinoembryonic')  }
  Ca125 = () => {
  this.props.navigation.navigate('CA125')  }
  Ca15 = () => {
  this.props.navigation.navigate('Ca15')  }
  Calcium = () => {
  this.props.navigation.navigate('Calcium')  }
  Fsh = () => {
  this.props.navigation.navigate('FSH')  }
  Lh = () => {
  this.props.navigation.navigate('Lh')  }
  Zinc = () => {
  this.props.navigation.navigate('zinc')  }
  Vitamina = () => {
  this.props.navigation.navigate('VitaminA')  }
  Vitaminb1 = () => {
  this.props.navigation.navigate('b1')  }
  Vitamine = () => {
  this.props.navigation.navigate('e')  }
  Vitamink = () => {
  this.props.navigation.navigate('k')  }
  Rubella = () => {
  this.props.navigation.navigate('Rubella')  }
  Hepatitis = () => {
  this.props.navigation.navigate('Hepatitis')  }
  Toxoplasma = () => {
  this.props.navigation.navigate('TOXOPLASMA')  }
  Syphilis = () => {
  this.props.navigation.navigate('Syphilis')  }
  RBS = () => {
  this.props.navigation.navigate('Randomblood')  }
  Varicella = () => {
  this.props.navigation.navigate('Varicella')  }
  ferritin = () => {
  this.props.navigation.navigate('Ferritin')  }
  HIV = () => {
  this.props.navigation.navigate('HIV')  }
  Antistreptolysin = () => {
  this.props.navigation.navigate('Antistreptolysin')  }
  Antinuclear = () => {
  this.props.navigation.navigate('Antinuclear')  }
  Citrullinated = () => {
  this.props.navigation.navigate('Citrullinated')  }
  Cortizol = () => {
  this.props.navigation.navigate('CORTISOL')  }
  Prolactin = () => {
  this.props.navigation.navigate('Prolactin')  }

  static navigationOptions = () => ({
    title: `نبذة مختصر`,
  headerTintColor: 'red',
  headerStyle: { backgroundColor: 'silver', borderWidth: 1, borderBottomColor: 'white' },
  headerTitleStyle: { color: 'red' }
    });
  renderRow = (onPhotoOpen, row) =>
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 5,
        backgroundColor:'#2d3a86',
        justifyContent: 'space-between'
      }}
    >
      {row.map(item =>
        <GridItem item={item} key={item.id} onPhotoOpen={onPhotoOpen} />
      )}
    </View>;

  render() {

    return (
      <PhotoGallery
        renderContent={({ onPhotoOpen }) =>
          <ListView
          removeClippedSubviews={true}

            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this, onPhotoOpen)}
          />}

      />
    );
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
