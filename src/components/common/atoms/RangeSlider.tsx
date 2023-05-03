import {
  RangeSlider as ChakraRangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from "@chakra-ui/react";

const RangeSlider = () => {
  return (
    // eslint-disable-next-line jsx-a11y/aria-proptypes
    <ChakraRangeSlider
      aria-label={["min", "max"]}
      defaultValue={[10, 30]}
      colorScheme="blue"
    >
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </ChakraRangeSlider>
  );
};

export default RangeSlider;
