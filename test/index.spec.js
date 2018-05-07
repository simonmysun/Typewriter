/* global describe, it, before */

import chai from 'chai';
import Typewriter from '../lib/Typewriter.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Get constructor of Typewriter', () => {
  before(() => {
    lib = Typewriter;
  });
  describe('when I access the constructor', () => {
    it('should return the constructor', () => {
      expect(typeof lib).to.be.equal('function');
    });
  });
});
