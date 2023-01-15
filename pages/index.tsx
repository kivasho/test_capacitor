import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import * as React from 'react'
import { ChakraProvider, Heading, Stack, StackDivider } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

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
      <Card mt="10">
        <CardHeader>
          <Heading size="md">Client Report</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Summary
              </Heading>
              <Text pt='2' fontSize='sm'>
                View a summary of your cients over the last month.
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform="uppercase">
                Overview
              </Heading>
              <Text pt='2' fontSize='sm'>
                Check out the overview of your clients.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </ChakraProvider>
 )
}
