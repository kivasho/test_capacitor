import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import * as React from 'react'
import { ChakraProvider, Heading, Stack, StackDivider, useColorModeValue } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'


export default function Home() {
  return (
    
    <ChakraProvider>
      <Box mt='10'>
      <Tabs isFitted variant='enclosed'>
        <TabList mb='1em'>
          <Tab>
            One
          </Tab>
          <Tab>
            Two
          </Tab>
          <Tab>
            Three
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>One!</p>
          </TabPanel>
          <TabPanel>
            <p>Two!</p>
          </TabPanel>
          <TabPanel>
            <p>Three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Box>
    </ChakraProvider>
  
 )
}
