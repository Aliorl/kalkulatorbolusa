# Bolus calculator

## Demo:

Welome to my currency converter, which you can visit here: http://slodkiezycie.eu/kalkulatorbolusa//

## Page preview:

![website gif](https://media.giphy.com/media/nHiPBH2TclVPexWF67/giphy.gif)

## Description:
Calculator that allows people with diabetes to calculate the dose of insulin to be injected. Calculations are made based on user input. The app takes into account parameters that determine the amount of insulin to be administered, such as: 
- individual insulin sensitivity factor,
- expected level of glucose in the blood,
- insulin-to-carb ratio,
- current blood glucose level,
- carbohydrate exchangers ().

## Explanation for the parameters:
The individual insulin sensitivity factor refers to the drop in blood sugar level. This measurement is done in milligrams per deciliter (mg/dl) and depends on the units of insulin taken. While insulin is meant to help your blood sugar levels fall, they should not fall too far as this can also be risky. Knowing your insulin sensitivity factor enables you to determine the dose you need for short-acting insulin. Insulin sensitivity differs from one person to another, which is why you need to know the correct dose to take. 
Calculating the insulin sensitivity factor of short-acting insulin is based on the “1800 rule.” If you take 30 units daily of the short-acting insulin, divide that into 1800. The result is 60, which one unit of short-acting insulin will decrease the amount of sugar in your blood by about 60 milligrams per deciliter. Then enter "60" into the insulin sensitivity field ("Wrażliwość na insulinę").

Expected blood sugar means your blood sugar level target.
For the majority of healthy individuals, normal blood sugar levels are between 72 to 99 mg/dL when fasting, up to 7.8 mmol/L (140 mg/dL) 2 hours after eating. For people with diabetes, blood sugar level targets are 4 to 7 mmol/L befor meals and under 9 mmol/L fafter meals. Women may be set target blood sugar levels during pregnancy. Enter your expected level of glucose in the blood into the expected blood sugar field ("Pożądany poziom glukozy we krwi").

The insulin-to-carb ratio means you will take 1 unit of insulin for a certain amount of carbohydrate. 
For example, if your insulin-to-carb ratio is 1 unit of insulin for every carbohydrate exchanger (10 grams of carbohydrate), you will take 1 unit of insulin for every carbohydrate exchanger you eat. Then enter 1 into the insulin-to-carb ratio field.
If your insulin-to-carb ratio is 0.5 unit of insulin for every carbohydrate exchanger (10 grams of carbohydrate), you will take 0.5 unit of insulin for every carbohydrate exchanger you eat. Then enter 1 into the insulin-to-carb ratio field.

Current blood sugar means your measured blood sugar level. Enter your current level of glucose in the blood into the current blood sugar field ("Obecny poziom glukozy we krwi").

Carbohydrate exchanger means 10 grams of carbohydrate you want to eat. 
For example: if your goal is 40 grams of carbohydrate at a meal (40 grams of carbohydrate = 4 exchanges x 10 grams carbohydrate per exchange), then you sholud enter 4 exchanges of carbohydrate into the Carbohydrate exchanger field ("Ilość WW").
if your goal is 25 grams of carbohydrate at a meal (25 grams of carbohydrate = 2.5 exchanges x 10 grams carbohydrate per exchange), then you sholud enter 2.5 exchanges of carbohydrate into the Carbohydrate exchanger field ("Ilość WW").

## Technologies used in the project:
- HTML
- CSS
- JavaScript (ES6+ Features)
- BEM convention
