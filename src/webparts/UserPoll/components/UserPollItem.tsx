import * as React from 'react';
export interface IUserPollItemProps {
    buttonText: string;
    description: string;
}
export interface IUserPollItemState {
    ItemName: string;
    ItemNumber: string;
}
export default class UserPollItem extends React.Component<IUserPollItemProps, IUserPollItemState> {
    public constructor(props: IUserPollItemProps) {
        super(props);
        
    }
    public render(): React.ReactElement<IUserPollItemState> {
        return (
            <div>
               <div>
                   {this.state.ItemName}
                </div>
            </div>
        );
    }
}