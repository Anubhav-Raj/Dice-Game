import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";
 import ReactDOM from 'react-dom';

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectNumber, setSelectedNumber] = useState();
  const [dice, setDicenum] = useState(1);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);
  const number = [1, 2, 3, 4, 5, 6];

  const startGameHandler = () => {
    setGameStarted(true);
  };

  const onNumberClick = (value) => {
    setSelectedNumber(value);
    setError(null);
  };

    const genRandonNumber = () => {
       if(selectNumber){
        const genratedNumber = Math.ceil(Math.random() * 6);
        setDicenum(genratedNumber);
          console.log(selectNumber,genratedNumber);
          
        if(selectNumber===genratedNumber){
          setScore((prev)=>prev+genratedNumber);
        } else{
         setScore((prev)=>prev-2);
        }
       } else{
        setError("Plese Select Number");
     }
  };

   

  return (
    <>
    
      {gameStarted ? (
        <><Box   pb='10' bg='black'>
          <Stack
            h="100vh"
            maxW="900px"
            mx="auto"
            justify="center"
            align="center"
            
          >
            <Heading   as="h1"  color =  {error ? 'red' :'white'}fontSize="6xl" mb="8">
             {error ? error :'Select Number'}
            </Heading>
            <Flex pb="10">
              {number.map((value, i) => (
                <Flex
                  h="50px"
                  w="50px"
                  bg={selectNumber === value ? "green" : "white"}
                  color="black"
                  justify="center"
                  align="center"
                  fontSize="2xl"
                  key={i}
                  mr="4"
                  borderRadius="md"
                  onClick={() => onNumberClick(value)}
                >
                  {value}
                </Flex>
              ))}
            </Flex>
            <Box h="150px"  width="150px" onClick={genRandonNumber}>
              <Image borderRadius='3xl' src={`/dice/dice${dice}.png`} />
            </Box>
            <Text as="p" fontSize="xl" color='white'>
              Click on dice to roll
            </Text>
            <Text  color={score >0 ?'green':'red'} fontSize="8xl" fontWeight="bold">
              {score}
            </Text>
            <Text fontSize="6xl"  color='white'>Total Score</Text>
            <Button onClick={()=>setScore(0)}  bg='white' >Reset Score</Button>
          </Stack>

          <Stack mx="auto" maxW="1300px" bg='black' >
            <Heading as="h2"  color='white'> Games Rule</Heading>
            <UnorderedList>
              <ListItem  color='white'>Select Number any number</ListItem>
              <ListItem  color='white'> Click on dice image to roll it</ListItem>
              <ListItem  color='white'>
                Select number is equal to obtained dice result then you will get
                same point of dice
              </ListItem>
              <ListItem  color='white'>
                if You are Wrong Score will be deducted by 2 points
              </ListItem>
            </UnorderedList>
          </Stack>
          </Box>
        </>
      ) : (
        <Flex   h="100vh" justify="center" alignItems="center"  bg='black'>
          <Image width="50%" src="./dices.png" />
          <Stack>
            <Heading fontSize="7xl" as="h1"  color='white'>
              The Dices Game
            </Heading>
            <Button
              bg="white"
              color="black"
              alignSelf="flex-end"
              _hover={{ bg: "gray" }}
              onClick={startGameHandler}

            >
              Start Game
            </Button>
          </Stack>
        </Flex>
      )}
  
    </>
  );
};
export default App;
