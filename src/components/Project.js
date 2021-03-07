import React, {useEffect, useState} from 'react'
import sanityClient from "../client"


export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType
            link
            Tags
        }`).then((data) => setProjectData(data))
            .catch(console.error);
    }, [])

    return;

}