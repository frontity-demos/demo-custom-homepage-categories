import React from "react";
import { connect, styled } from "frontity";
import {getPostsGroupedByCategory, createMarkupObject, getRandomColor} from '../helpers/'
import {
  Box,
  Card,
  Heading,
  Text,
  Flex
} from 'rebass'
import Link from './Link'

const Home = ({ state }) => {

  const data = state.source.get(state.router.link)
  const postsPerCategory = getPostsGroupedByCategory(state.source)
console.log(postsPerCategory)
  return (
    <>
      <Flex>
        <Container>
        {
          postsPerCategory.map(({ posts, category }, index) => (
            <BoxCategory key={index}>
              <Heading fontSize={50} p={3} bg='#000' color="#FFF" as='h2'>{category.name}</Heading>
                {posts.map((post, index) => (
                  <article key={index}>
                    <Box >
                      <Card
                        p={1}
                        borderRadius={2}
                        boxShadow='0 0 16px rgba(0, 0, 0, .25)'>

                        <Box px={2}>
                          <Link href={post.link}>
                            <Heading as='h3'>{post.title.rendered}</Heading>
                          </Link>
                          <Text dangerouslySetInnerHTML={createMarkupObject(post.excerpt.rendered)} />
                        </Box>
                      </Card>
                    </Box>
                  </article>
                  ))}
                <Link href={category.link}>
                  <Text >&gt;&gt; See more posts at <strong>{category.name}</strong></Text>
                </Link>
            </BoxCategory>
          ))
        }
        </Container>
        <Sidebar>
            <p>Sidebar</p>
        </Sidebar>
      </Flex>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  background-color: #fff;
  color: #444;  
`

const BoxCategory = styled.div`
  border-radius: 5px;
  padding: 20px;
  border: 4px solid ${getRandomColor};
`

const Sidebar = styled.aside`
  border: 4px solid red;
  padding: 10px;
  margin: 0 10px;
  border-radius: 10px;
  width: 300px;
`

export default connect(Home);