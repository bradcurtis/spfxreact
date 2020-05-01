import * as React from 'react';
import UserPollItem from './UserPollItem'
export interface IUserPollProps {
    buttonText: string;
    description:string;
    clickHandler: () => void;
}
export interface IUserPollState {
    buttonDisabled: boolean;
    results: IPollResult[];
}

export interface IPollResult{
    title: string
}
export default class UserPoll extends React.Component<IUserPollProps, IUserPollState> {
    public constructor(props: IUserPollProps) {
        super(props);
        this.state = { buttonDisabled: false, results: null};
    }

    onSaveButtonClick() {
        console.log("button clicked")
    }

    public render(): React.ReactElement<IUserPollProps> {

     

        return (
            <div>
                {this.props.buttonText ?
                    <button onClick={this.onSaveButtonClick} disabled={this.state.buttonDisabled}>{this.props.buttonText}</button>
                    : null}

                <div>
                    {this.state.results ?
                        this.state.results.map((result) => (
                        <div>{result.title}</div>
                        ))
                        : null}
                </div>
            </div>
        );
    }

    
   
}