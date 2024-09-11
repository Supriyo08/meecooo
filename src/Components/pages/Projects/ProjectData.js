import PTW from "../../../assets/PTW.jpg";
import CNC from "../../../assets/CNC.jpg";
import ONE from "../../../assets/33.jpg";


const projectData = {
    data: [
        {
            images: [PTW],
            title:'PTW Machine',
            secondTitle:'PTW Machine',
            specData: {
                specificationTitles: ['LOCATION:','ARCHITECT:','GENERAL CONTRACOR:', 'YEAR:',],
                specifications: ['5610 Wohlen AG','Iuliano Baumanagement GmbH:','EDMA GmbH','2018',],
            },
            arrowLeft: false,
            arrowRight: true,
            paths: ['/projects/edma-gmbh']
        },
        {
            images: [CNC],
            title:'CNC Machine',
            secondTitle: '',
            specData: {
                specificationTitles:['LOCATION:','GENERAL CONTRACOR:','YEAR:'] ,
                specifications:['5612 Villmergen','EDMA GmbH','2017'] ,
            },
            arrowLeft: true,
            arrowRight: true,
            paths: [ '/projects/spot-tec','/projects/wohndesign']
        },{
            images: [ONE],
            title:'c/Z Rolling Machine',
            secondTitle: '„Wohndesign: A Journey Through Architectural Excellence“',
            specData: {
                specificationTitles:['LOCATION:','GENERAL CONTRACOR:','YEAR:'] ,
                specifications:['Wohlen AG','EDMA GmbH','2019'] ,
            },
            arrowLeft: true,
            arrowRight: false,
            paths:[ '/projects/edma-gmbh']
        }      
    ]
}

export default projectData;