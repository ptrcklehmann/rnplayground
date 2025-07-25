import { ScrollView, Text } from 'react-native';
import createStyles from '../../utils/createStyles';

const useStyles = createStyles({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const HomeScreen = () => {
  const { styles } = useStyles();
  return (
    <ScrollView style={styles.container}>
      <Text>
        Bacon ipsum dolor amet pariatur hamburger id, cow proident cillum
        shoulder dolore occaecat frankfurter sint ex. Ut pariatur chicken
        picanha. Jowl sausage in fatback, pancetta duis minim ball tip pig culpa
        commodo nostrud. Duis sint pork belly leberkas. Culpa cillum ut, dolore
        alcatra tenderloin pork loin tempor sint est jerky pancetta labore
        adipisicing. Salami sunt picanha exercitation nulla. Ut ham kevin filet
        mignon et laboris pariatur sed lorem tenderloin venison short ribs
        pancetta quis. Minim short ribs ut jerky andouille spare ribs tri-tip
        doner esse tenderloin chicken incididunt occaecat laboris. Flank shankle
        tempor ut. Ea irure doner excepteur corned beef fatback esse meatloaf.
        Andouille minim est beef ribs enim boudin. Labore landjaeger prosciutto
        culpa, strip steak spare ribs do voluptate ex adipisicing cillum
        shankle. Flank irure salami, porchetta nostrud drumstick prosciutto.
        Pork chop voluptate fugiat incididunt, turkey sausage tri-tip pancetta
        venison short ribs salami culpa flank biltong. Ullamco in ad, beef
        mollit ea magna eu drumstick incididunt corned beef ut. Pancetta
        capicola cow lorem filet mignon dolor, tenderloin magna drumstick. Beef
        ribs tempor enim culpa strip steak ut. Cow fatback nisi frankfurter.
        Capicola excepteur cillum bresaola nulla. Reprehenderit nisi
        frankfurter, irure pancetta aute exercitation prosciutto shankle enim
        fatback cillum dolore brisket. Cillum commodo consectetur porchetta ham
        hock, ut pork chop ullamco rump eu magna strip steak tempor shoulder
        beef. Est ut proident pig kevin. Flank biltong beef ribs, dolore eu aute
        short loin tempor tri-tip venison chicken swine frankfurter quis mollit.
        Pastrami porchetta incididunt capicola salami occaecat cow biltong
        ribeye tempor ham cupidatat. Biltong est adipisicing buffalo rump
        meatloaf enim short loin venison jerky prosciutto eu. Pastrami in
        reprehenderit enim ipsum boudin. Strip steak leberkas turkey, dolore
        meatball eiusmod veniam reprehenderit proident. Sed swine labore duis
        dolor est nulla corned beef ham hock do aliqua shoulder burgdoggen
        eiusmod rump. Id consequat exercitation turducken picanha nisi. Proident
        picanha magna enim mollit in strip steak laboris prosciutto bresaola
        sed. Ut deserunt jerky, commodo cillum kielbasa veniam. Consequat
        laboris mollit adipisicing ullamco meatball pancetta, ham hock et pork
        belly venison porchetta commodo aute. Laborum id irure burgdoggen ad,
        ribeye short ribs. Ut aute fatback veniam, laboris eu strip steak kevin
        nostrud beef ribs deserunt ham hock velit jerky sed. Ut pork chop strip
        steak consequat ut ham corned beef nisi short ribs irure eiusmod quis
        aute cow in. Tongue labore tail ex, aliqua pastrami do nostrud. Jerky
        sint aliquip, in landjaeger ullamco andouille nulla sausage ball tip
        consequat cupidatat brisket mollit. Prosciutto dolore cupim filet
        mignon, ball tip ribeye id pork proident ut swine short loin ad. Pork
        rump dolore consequat ball tip doner eiusmod kevin, ham hock in labore
        adipisicing chicken bacon aliquip. Irure pork adipisicing ball tip. Ham
        fatback qui pancetta, aliqua pork loin turducken deserunt dolore in
        picanha. Sunt do burgdoggen spare ribs ham hock. Does your lorem ipsum
        text long for something a little meatier? Give our generator a try… it’s
        tasty!
      </Text>
    </ScrollView>
  );
};
