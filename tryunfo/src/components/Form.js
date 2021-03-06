import PropTypes from 'prop-types';
import React from 'react';
import '../css/Form.css';
import Input from './fields/Input';
import Select from './fields/Select';
import Textarea from './fields/Textarea';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form className="Form">
        <Input
          label="Nome:"
          type="text"
          name="cardName"
          className="Form-cardName"
          id="field-name"
          value={ cardName }
          dataTestid="name-input"
          onChange={ onInputChange }
        />
        <Textarea
          label="Descrição:"
          name="cardDescription"
          className="Form-cardDescription"
          id="field-description"
          value={ cardDescription }
          dataTestid="description-input"
          onChange={ onInputChange }
        />
        <Input
          label="Atributo 1:"
          type="number"
          name="cardAttr1"
          className="Form-cardAttr1"
          id="field-attr1"
          value={ cardAttr1 }
          dataTestid="attr1-input"
          onChange={ onInputChange }
        />
        <Input
          label="Atributo 2:"
          type="number"
          name="cardAttr2"
          className="Form-cardAttr2"
          id="field-attr2"
          value={ cardAttr2 }
          dataTestid="attr2-input"
          onChange={ onInputChange }
        />
        <Input
          label="Atributo 3:"
          type="number"
          name="cardAttr3"
          className="Form-cardAttr3"
          id="field-attr3"
          value={ cardAttr3 }
          dataTestid="attr3-input"
          onChange={ onInputChange }
        />
        <Input
          label="Imagem:"
          type="text"
          name="cardImage"
          className="Form-cardImage"
          id="field-image"
          value={ cardImage }
          fieldContainer
          dataTestid="image-input"
          onChange={ onInputChange }
        />
        <Select
          label="Raridade:"
          name="cardRare"
          className="Form-cardRare"
          id="field-rare"
          value={ cardRare }
          dataTestid="rare-input"
          onChange={ onInputChange }
          options={
            <>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </>
          }
        />
        {
          (hasTrunfo)
            ? <p> Você já tem um Super Trunfo em seu baralho </p>
            : (
              <Input
                label="Super Trunfo"
                labelEnd
                type="checkbox"
                name="cardTrunfo"
                className="Form-cardTrunfo"
                id="field-trunfo"
                checked={ cardTrunfo }
                dataTestid="trunfo-input"
                onChange={ onInputChange }
              />
            )
        }
        <button
          type="submit"
          className="Form-btnSubmit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
