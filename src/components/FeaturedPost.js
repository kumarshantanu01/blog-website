import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    title:{
        fontSize: 40,
        fontFamily: "Monsterrat",
    },
    cover:{
        backgroundImage: 'url(https://source.unsplash.com/1600x900/?nature)',
        backgroundPosition: "center",
        padding: "35px 25px",
    },
})

export const FeaturedPost = () => {

    const classes = useStyles();
    return (
        <Card className={classes.cover}>
            <CardContent className={classes.textContainer}>
                <Typography className={classes.title} gutterBottom>
                    Title of a longer featured blog post
                </Typography>
                <Typography variant="h5" color="inherit">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs
                </Typography>
            </CardContent>

            <CardActions>
                <Button variant="text" className={classes.btn}>Read More ▶️</Button>
            </CardActions>
        </Card>
    )
}
