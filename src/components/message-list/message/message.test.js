import {render} from '@testing-library/react';
import {Message} from './message';

describe ("test component", () => {
    it ('should render message', () => {
        const {container} = render (
            <Message message="hello" author="Den" id="1234"/>
        )
        expect (container.querySelector ("h3")).toHaveTextContent ("hello")
        expect (container.querySelector ("p")).toHaveTextContent ("Den")
        expect (container.querySelector ("b")).toHaveTextContent ("12.03")
    });
})