import { Card, CardActionArea, CardContent, CardMedia, Grid, Hidden, makeStyles, Typography} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    card: {
        display: "flex",
    },

    cardDetails:{
        flex: 1,
    },

    CardMedia: {
        width: 160,
    },
});

export const PostCard = ({post}) => {

    const classes = useStyles();

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
            <Card className={classes.card}>
            <div className={classes.cardDetails}>
                <CardContent>
                    <Typography component="h2" variant="h5">
                    {post.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                    {post.date}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                    {post.description}
                    </Typography>
                    <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                    Continue reading...
                    </Typography>
                </CardContent>
            </div>

            <Hidden xsDown>
                <CardMedia className={classes.CardMedia} image={post.image}
                title={post.imagetitle}/>
            </Hidden>

            </Card>

            </CardActionArea>
        </Grid>
    )
}
