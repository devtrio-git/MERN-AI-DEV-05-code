import styles from "./primaryButton.module.css"

function PrimaryButton (props){
    console.log(props)
    return (
        <div>
            <button className={`${styles.button} small`}>{props.title}</button>
        </div>
    )
}

export default PrimaryButton