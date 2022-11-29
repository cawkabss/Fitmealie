import { BlogPostContent } from 'types/enums/BlogPostContent';
import { BlogPost } from 'types/interfaces/BlogPost';

import preview from './images/preview.png';
import hero from './images/hero.jpg';
import contentImg1 from './images/content-1.jpg';
import contentImg2 from './images/content-2.jpg';

export const POST: BlogPost = {
  title: 'What Foods Help Burn Fat?',
  description: 'When we talk about foods that burn fat, we don’t mean that there are some magic beans that would evaporate 5 kilos from your body weight if you eat ...',
  date: 'November 2, 2022',
  preview,
  hero,
  content: [
    {
      type: BlogPostContent.Image,
      src: contentImg1,
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'When we talk about foods that burn fat, we don’t mean that there are some magic beans that would evaporate 5 kilos from your body weight if you eat them for a week. However great that sounds, the reality is a little more intricate than that. The foods you will find in this article do not burn fat on their own. They do that indirectly by way of influencing your metabolism to break down fat, suppressing your appetite, filling you up quicker, and, therefore, making you eat less.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Let’s discover some of the common healthy foods that can contribute to your weight loss.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Oily fish: salmon, mackerel, herring, sardines, trout, and anchovies. Oily fish is rich in omega-3 fatty acids and protein which help your metabolism. These elements also reduce inflammation which has been proven to prevent cancer and cardiovascular diseases. Studies have also shown a decreased risk of dementia in people with oily fish in their diets.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Eggs are another excellent source of protein. They make you feel full longer, which is why it’s a great idea to have eggs in the morning and go about your business without feeling hungry just an hour later.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Hot peppers: jalapeños, habanero, cayenne, and chili peppers. Hot peppers contain a chemical component called capsaicin, which helps your body to break down fats. An added bonus is that when eating spicy foods, you normally end up eating less.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Nuts: walnuts, cashews, almonds, pistachios, and Brazil nuts. Nuts boost your metabolism with the help of magnesium, protein, and healthy fats, and therefore make you lose weight.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Oatmeal is both fiber-rich and filling. It is one of the healthiest breakfast options out there. Make sure not to confuse oatmeal with quick-cooking oats. The former is cooked for about 30 mins and has great nutritional value, while the latter is high-processed food and has none of the oatmeal’s health benefits.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Cinnamon can be a great substitute for sugar and an excellent addition to your oatmeal. It is even more useful for people with diabetes that want to sweeten their drinks or food. Cinnamon also regulates blood sugar levels and increases metabolism.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Green tea’s caffeine and antioxidants, namely catechins, assist your metabolism. Oolong tea is especially good for improving your sleep and brain function due to L-theanine acids.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Coffee is another beverage that helps with weight loss. However, don’t get too excited — while it does help your metabolism, only small amounts of it do so. Drinking too much coffee can cause issues with digestion and insomnia.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Coconut oil is probably the healthiest fat there is. It helps your thyroid to work correctly, and the thyroid, in turn, controls your metabolism. It also encourages your body to spend more energy, which burns stored fat.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Yogurts: meaning low-fat, non-flavored kinds, such as Greek yogurt. Research shows that those who implement yogurt in their diets end up consuming fewer calories. Yogurts are rich in proteins such as whey and casein that reduce your appetite.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Split peas are not only rich in protein, but also contain lots of fiber. Fiber is great at making you feel fuller faster and suppressing your appetite by delaying the release of the ghrelin hormone responsible for hunger. And complex carbohydrates found in split peas boost your energy levels.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Grapefruits have been very controversial in terms of helping with weight loss. Some dieticians recommend drinking grapefruit juice or eating half a fruit before every meal, however, there was a research that proved this tactic useless. Nevertheless, grapefruits contain fiber, vitamin A, and vitamin C, which can’t be bad for your health. Moreover, grapefruits stimulate feelings of fullness, whether because of fiber, or water in them, so it’s not going to hurt to include it in your diet once in a while.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Watermelons are good for filling you up thanks to all the water they contain. The same goes for apples and pears. Although watermelons also have an antioxidant called lycopene that contributes to oral health and normalizes blood pressure.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Unfortunately, there isn’t any healthy get-slim-quick scheme, plan, or diet. Weight loss is a lengthy process that requires a complex approach. That means exercising, getting enough sleep, and eating healthily should all come hand in hand. Just eating specific foods alone will not get you very far in terms of lost pounds. However, the foods listed above can be a great addition to your balanced diet that would surely help out on your way to the body of your dreams.',
    },
    {
      type: BlogPostContent.Image,
      src: contentImg2,
    },
  ],
};
