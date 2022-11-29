import { BlogPostContent } from 'types/enums/BlogPostContent';
import { BlogPost } from 'types/interfaces/BlogPost';

import preview from './images/preview.png';
import hero from './images/hero.jpg';
import contentImg1 from './images/content-1.jpg';
import contentImg2 from './images/content-2.jpg';

export const POST: BlogPost = {
  title: 'How to Stop Overeating?',
  description: 'Overeating happens to everyone. Sometimes, when freshly-made cheesy pizza is in front of you, it is almost impossible to resist inhaling it in one go...',
  date: 'November 2, 2022',
  preview: preview,
  hero,
  content: [
    {
      type: BlogPostContent.Image,
      src: contentImg1,
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Overeating happens to everyone. Sometimes, when freshly-made cheesy pizza is in front of you, it is almost impossible to resist inhaling it in one go. However, when overeating is regular, it becomes a serious issue that brings grave consequences to your health. Overeating causes weight gain, heart disease, and obesity. That is why it is essential to monitor your eating habits, maintain a balanced diet, and control your weight to keep your health in check.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Our body wastes significant energy to digest food. This is why after you overeat you normally feel weak, drained, and tired. And to no surprise, since your body is trying to cope with extreme amounts of food you consumed. Keep in mind that processed food depletes more energy, while vegetables and fruit are much easier to digest.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Before eating a second helping, or indulging in some snack even though you’re not hungry, try to think about how you will feel after you eat it. Remember feeling too full, your stomach heavy or even hurting from overstretching, and your energy being at 0%? Or worse, those feelings of guilt, regret, and disappointment that come soon after you’re done. Do you really want to feel like that again? Now, try to imagine your feelings after not eating this extra portion instead. Most likely, you would be proud of yourself, happy that you resisted the temptation, and satisfied with your healthy decisions. The right choice is obvious.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'When thinking about eating something, try to listen to your body first: are you actually hungry? Or is the food just smelling good and tempting you to indulge? If the latter is true, wait it out. Get away from the smell and drink some water. That is another common cause of overeating — you eat when you actually want to drink because you mistake thirst for hunger.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Aim to eat before you are actually hungry. It may sound contradictory, but hunger causes you to make very poor eating choices. It is perfectly logical that when you are really hungry, the last thing on your mind is a 1.5-hour-long preparation of a fancy meal. Most likely, you will go for fast food, some snacks, or semi-processed food that’s quick to make. You would also eat it very fast due to being ravenous, which is unhealthy and most likely will make you overeat. Not to mention the little nutritional value and countless unwanted elements of such food, like fats, sugar, and cholesterol.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Another common mistake is inhaling food like a hoover. Apparently, it takes more time for our brain to realize that we’re full, causing us to eat more than necessary. When you draw out your meal for 20 more minutes and eat slowly, it will be enough time for the brain to catch up with the body and you will start feeling full before you’ve eaten too much. If eating fast is your habitual behavior, try to focus on chewing each bite thoroughly. Yes, it will take more time, but there is a considerable upside. Chewing causes your body to produce the acids responsible for digestion. That means you will digest food better, fill up quicker, and avoid overeating.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Choose foods rich in fiber, such as fish, beans, avocados, Brussels sprouts, oats, chia seeds, whole grains, etc. With high fiber intake you will get full faster and for longer periods. The same goes for protein, which can be found in seafood, lean meats, tofu, nuts, Greek yogurt, and cottage cheese.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'If you want to trick your brain, choose high-volume foods with few calories. The plate will look big, but the calorie value of the meal will be within the norm. Such foods can be spinach, broccoli, cauliflower, eggplants, cereal, fresh fruit, and mushrooms.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Also, surround yourself with people who eat moderately during a shared meal. The thing is, people tend to match the amount they eat to those next to them. So if your friend has a habit of overeating, try to meet with them on a different occasion, and eat with people who have healthy eating habits instead.',
    },
    {
      type: BlogPostContent.Paragraph,
      text: 'Stopping overeating is hard, but not impossible. Use these tips and believe in yourself: you can do it!',
    },
    {
      type: BlogPostContent.Image,
      src: contentImg2,
    },
  ],
};
