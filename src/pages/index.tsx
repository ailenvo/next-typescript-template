import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";

interface IPageProps {}

const HomePage = (props: IPageProps) => {
  const router = useRouter();
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 12 }}>
          <Typography variant="h1" textAlign={"center"}>
            Home page
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   // Fetch data from an API or file system at build time

//   // Return the fetched data as props to the page component
//   return {
//     props: {
//       message: "Hello from static generation!",
//     },
//     revalidate: 10, // Optional: Regenerate the page every 10 seconds (ISR)
//   };
// };

export const getServerSideProps: GetServerSideProps = async context => {
  // Fetch data from an API or database
  // const productRes = await api.getServerSide(`${PRODUCT_PATH}s/new`);

  // Return the fetched data as props
  return {
    props: {
      // newProducts: productRes.data,
    },
  };
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   // Fetch the list of posts (this could be an API or database query)

//   // Generate paths for each post
//   const paths = [{ id: "1" }, { id: "2" }].map((post: { id: string }) => ({
//     params: { id: post.id }, // id corresponds to [id].tsx dynamic route
//   }));

//   // Return the paths, and fallback: false means any other routes not returned will 404
//   return {
//     paths,
//     fallback: false, // or 'blocking' or true depending on the need
//   };
// };

export default HomePage;
