import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GIFComponent} from './GIFComponent';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    findGIF: jest.fn(),
    imageUrl: "hmm"
};

describe('GIFComponent', ()=> {
    const enzymeWrapper = mount(<GIFComponent {...props} />);
    it('should render itself', ()=> {
        const imgProps = enzymeWrapper.find('img').props();
        expect(imgProps.src).toBe("hmm");
        expect(imgProps.alt).toBe("The GIF that is given to you.");
    });
    it('componentWillMount should call this.props.findGIF', ()=> {
        expect(props.findGIF).toHaveBeenCalledWith('Todo');
    });

});

