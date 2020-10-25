//Base imports
import React from 'react';
import { connect } from 'react-redux';

//Material UI components
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core';
import { Image as ImageIcon } from '@material-ui/icons';
import { fetchProduct } from 'redux/example/actions';

const HomePage = (props) => {
  const { fetchProduct, products } = props;

  React.useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);
  return (
    <section>
      <Container maxWidth="xl">
        <Typography component="h3" variant="h3">
          Hello world
        </Typography>
        <List>
          {products.map((el, i) => (
            <ListItem key={i}>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon style={{ color: el.color }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={el.name} secondary={el.year} />
            </ListItem>
          ))}
        </List>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => ({
  products: state.productData.products || [],
});
const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (data) => dispatch(fetchProduct(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
