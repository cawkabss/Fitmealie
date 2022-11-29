import { BlogPostContent } from 'types/enums/BlogPostContent';
import { BlogPost } from 'types/interfaces/BlogPost';

import preview from './images/preview.png';
import hero from './images/hero.jpg';
import contentImg1 from './images/content-1.jpg';
import contentImg2 from './images/content-2.jpg';

export const POST: BlogPost = {
  title: 'Foods to Reduce Stress and Anxiety',
  description: 'We all experience stress and anxiety to some extent in our lives. The fast pace of the world, countless commitments and responsibilities...',
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
      text: 'We all experience stress and anxiety to some extent in our lives. The fast pace of the world, countless commitments and responsibilities, the overwhelming influx of information in the modern era, and blue screens everywhere — all are aspects of our everyday lives as well as key sources of stress. Luckily, there are ways to fight stress, and one of them, surprisingly, is food. Read on to find out how it works.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'When stressed, our bodies produce the so-called “stress hormone” — cortisol. Like all hormones, its function is to deliver important messages to different parts of our body. This is a very useful hormone for us when its level is steady. It helps us deal with the “act or die” situations that require fast decisions from us. Cortisol also regulates blood pressure, blood sugar, and metabolism. However, it does the opposite of those things when it’s higher or lower than needed. That’s why it is essential to keep cortisol levels within the normal range.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'The first steps to take to manage your cortisol levels are:',
    },
    {
      type: BlogPostContent.List,
      items: [
        'Regulating your sleeping patterns',
        'Exercising',
        'Meditating',
        'Eliminating or avoiding the triggers of stress',
        'Incorporating a balanced diet.',
      ],
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Only together can these activities rid you of stress. Unfortunately, you can’t get the wanted result just by doing one of them. For instance, you can meditate, but if you only sleep 5 hours per day, you`ll still be stressed. The same goes for exercising and eating unhealthy food at the same time. Yes, food is not a primary fighter with stress. That said, here are the foods that can reduce cortisol in your body:',
    },
    {
      type: BlogPostContent.List,
      items: [
        'Vegetables and fruits',
        'Legumes, nuts, and seeds',
        'Fish, seafood, poultry',
        'Whole grain foods',
        'Healthy fats and olive oil',
      ],
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'These foods pertain to a Mediterranean diet. They are packed with omega-3 fatty acids, B, and D vitamins, iron, and zinc. Such components help with metabolism, reduce inflammation, and prevent risks of heart disease, obesity, and even depression. The diet is characteristic of the countries surrounding the Mediterranean sea, such as Greece, Italy, France, and Spain, hence the name. It promotes whole grain foods instead of processed foods that are high in saturated fats and cholesterol and increase the risks of various diseases. Plus, it encourages you to exercise, eat in moderation, and even share your meals with loved ones! Bonus: this diet allows you to sip a little bit of red wine a day.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Let’s explore the specific nutrients the Mediterranean diet provides that can help you on your stress-relieving journey: Omega-3 fatty acids are great at reducing the risk of depression and obesity. Pay attention to these foods rich in omega-3:',
    },
    {
      type: BlogPostContent.List,
      items: [
        'Leafy greens',
        'Walnuts',
        'Chia seeds',
        'Salmon, shrimp, squid, and oysters',
        'Beans',
        'Red caviar',
      ],
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'B and D vitamins are crucial for metabolic processes. Foods rich in those vitamins include:',
    },
    {
      type: BlogPostContent.List,
      items: [
        'Fortified cereal',
        'Sardines, anchovies, and tuna',
        'Eggs',
        'Poultry',
        'Beef',
      ],
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Protein keeps you full, regulates blood sugar, and develops muscles. Find it in:',
    },
    {
      type: BlogPostContent.List,
      items: [
        'Lentils and beans',
        'Peanut butter',
        'Turkey',
        'Quinoa',
      ],
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Battling stress is a long process. However, there are foods that can provide you with short-lived stress relief. Those are magnesium-rich foods:',
    },
    {
      type: BlogPostContent.List,
      items: [
        'Spinach',
        'Bananas',
        'Dark chocolate (at least 90% cocoa)',
        'Avocados',
        'Pumpkin seeds',
        'Figs',
        'Almonds',
        'Low-fat yogurt or kefir',
      ],
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Magnesium is a mineral that balances your blood pressure and blood sugar, boosts your energy, and helps your brain regulate stress. So, eat up!',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'When it comes to foods you should avoid, be aware of the following stress-provoking products, especially when you are already under stress:',
    },
    {
      type: BlogPostContent.List,
      items: [
        'Foods high in added sugars: pastries, breakfast cereals, and flavored yogurts.',
        'Refined carbohydrates: bagels, white bread, pizza, pasta, and soda.',
        'Alcohol',
        'Too much coffee',
        'Fast food',
        'Excessively fried food',
      ],
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Be wary of immediately turning to various dietary supplements. The majority of people are perfectly capable of getting all the needed vitamins and nutrients just by leading a healthy diet. Additionally, there is a great risk of taking too much of certain vitamins, which will be harmful to your health. To top it off, research shows that the effectiveness of dietary supplements is a grey area: they haven’t been tested in women and children, they are not approved by the FDA, and they can cause serious problems in people with certain diseases.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'While correcting your diet, make sure you don’t do that thing where you refuse to eat everything in hopes of a slim figure. Eating less is a stressful action in itself. So if you are already under stress, extreme dieting for the sake of losing weight will only make it worse! Instead of cutting down your eating, cut down the unhealthy foods and add the nutritious and healthy products that we’ve listed above. Too little is as bad as too much!',
    },
    {
      type: BlogPostContent.Image,
      src: contentImg2,
    },
  ],
};
