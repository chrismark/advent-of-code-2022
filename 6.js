const input = `mzrzqrzqrrmcmgmrggvjvcczbczccdwdcwcpwwclwwbttdntnsnllpggqhgqgzqggvjjjfqfhhbbvzvmzvvfccnznwntnptpgpcplpwwvgvzvvcgvvbcvcqqhnqqbsbdsbbbgtgvtgvtgvvrfvvjbjcbcchnhrhvvrmmwzwzmwmggjwwwwzrrmbmbmbrrdjrjfrrrmrffzgghtggwddtllhchdhsshjjwfwsfssnbbnjncczsczzvpvssljsjgsjgjcgjggspsfsfhfppsqqzlzjllblsldsldlndnhnffflwfwmwssvzzvqzzblzbbmrrfnrrqnnhfnnhphbhrrlvrlvrvcrrltrtmrrcscchdhqhfffrddzsszwwrbrfftddbwwtdtnndrrghgcgfgrglllcdcsswvwsvszsddjwdwwcvwvmvhhlqlddbhbrrnddpqpttrtctmcmjjtvjjfvvlcldltdtdqdllnrncrnrznzfnfsfnndqqbhhlnhhhsmhhfghgppflllrhhvdddvrvnrnpplwplldttswsbwwtbbvwbwnnhcczmczmczclcttwcchllmsmbbrvbbsjsswbwwbtwtgtrgtrgrnggqwgwmwrmrqmmghhtbbrppjmpppjtjtffvqvbbwsspzsstlstltrrtmtrmrzmmgqqgmmpzmpzpmmgnnrjjgrjjhgjjsccjllwzzsddznnrsrttdllcnntvnttqjjqljqqwlqlmmfdfttzzvgvtvjjwvwsvvhbhrbhbwbzbppbplphpjpzppljjnttnvnggqbqffqgqrrjwjcjllcblbqqglqgqjqrrffjqqqcvqccgrgqgrqrnqqhphccvwwsgspprmprrwdrwrdwdrwrwswbsbcctscttwvvvstvthtrhhddtppgwwqpwwzpzgzszgzvggzqqmbqqrqsrqrmmjjfggztzdzvvqdqzddrrnmmtccsstdsdrrmrnnzzpggbmbqbcbzczppbjbssfzfcfvcvlclgcglcgllvclcwwwpmwwjrrgtrtfrrnznssvvrjvrjrgjrrcsrrstrsrhrpplfljjwrwbbffdpfpzffrhhjrjdrrgpggbhhschcdcdcqcnncjcvjcvjvbvcbvbssnhhsddclcrcrjrdrtdtqdqrddddlcdcttzzlslblbqqcmmdgmmsnmnmccqmmljjncnhnchcdchddwsdssdrsscfcnffcqfqtfqqjcjrrvbrvvhsvvlqlwwsccjbbgpgzgcgbgzgccpvcpvpddqrrqfqtqrqqcjjwvwttrwwblwlrwllnsshdhqdhqqjllzlflvlgllhnllstsbbdqqpnpwpmwwzhzvzcclcvcfvcvssdcdvdpphcphcppffndfnfmfbfwwgzwwwvhwwmcwwwtmtgtvggvbggzzthzzlbzbzmmhlllvgllmfmpmbbldbdnnzzjcctvvsdvssrpsslglqggcchvcvllzhhbcczjjgllvqlvlflglwwscctfcbmdjhgwtfhjrgvvvrmdcpsrtsnvhwnnznnnmrhcnlnmjvdbqztspwbdwlttdtwlwdvqjpgqdzbnssglqczqwvfgdlbdmsbbmggjdhddzvzlqhrggvvccmcmtqdmmpqvvstmqgvntdsmjbzbwstdrmjjmzfgmczjrftwrwnfbdmlddvzdfwwztldqfvdswfdwrfcgptmmjnzngwnflzlvtwpdsvllfwqjnjjjbfcwmgrvlhdvpgprnjthlqlbtlhflzwqjwtqtdzcvqbgtjlnmwchpjrgfndrnzwctjwvwsvflmgnqmplhhwljqcshqqldcnfrdbdcbslrtbnqrvhhjrddmjbtmcjzlqcdcqbfftsmpdpnfrjjwmdpmrvjjmppbnmcbvnzbphjcjlldnpdcwsqfgpmbszvjbpzngvncbfncpmghfrsssrnbbmhnjjvgmjzwtwlpszphgwvtjzdsmvvhnrplmnrllvqvphtbbrnlwmffdmmbhvzfcnbnlbspfwbcbjwgpnbsfpfbdqbnpfcqpngfqwlwcgrzlvfqgfsbppgmfzgjdntdvzvzclbrfwpqmvgmtmppsjzjhqbgjnntdnwvwljndqbtfgrjcfnlpsgsmbdljdzqfclgwhdgndzwbcthmrgzcjbhrrltlsznbsvswtsjbhwqzwchwzbtqmnrqfrzspwrqwwqwvczmntwggltjmvwdftplrgtrltmpvvgslvhctnwwcgtblmqtnsmqdgcbvzlcbrrsstzgzrgzgtmqtvsnzqqwlfgrjbdsvpdjpgmmczddbptwvpthvdjvrpqsbbgctrpqsdnczzbttdrbflrllrnvjswslnghdqfqlnbcctwbnpvspfmrcnprpjzgwsdwlszzpdcgvzjsjtdgjnpwgtqmvsmsvzddcmfwtqjghrrrmvcjbccgrngcvvfvrrmmqmzsvhdqsfqpqnnhhpffrtblnzhwqmsgvvzvgpbczsznzlnvsgjjzqbpjmvpjzqqpzpvplwsvgtwvrhlvggrpvztvchbcwflwhwmvdslvhsgpcqhdhcpvclgmzdngsmbplzrqgwflltzgsglflhqhpnnfszvtgprqhnjlrvwfsjfpcjzbznsprtldvwjlnhqsdlfnwtlpzldfpnjpnnqfgqqrjrnszznlrjgwwlnbbznzcshtfqcprphgsldtgzzgqjvmjrtfhmgptrnqzmtfclqwgprvjptntgwhbqwhdjcfjtrmdwbslhqwgtcqwhjhhmltrlsqbvzqsjqsczvsqlsjdgmnjnpvmmwbsfnfnshmlrdgslbfrnhmdgcjgsqgwlbmlhhnfmcfnswmwgrzmpdmtrcmwgjlgrhzchmhmbjgjrfgdvplvngjnfdrscwqtnsspdszznnnjrdmvwbvnzmmddbcvsphfqsbcmfmfgrcdfjptzqfsjsmjtbswtqzvtfpwbvqsgjzftfssdmcngtgbfmrrsjtllnpsztvgbpgpcrmqsgvcjrpprhqzjwlcdjpvgrqtjcglwnvzvqtncmndzbgpgfbprpqqjfbnzhfzlfrgnfnbpjfrbtjgrgvmczthqsbfplnzvhqjmrrssnzjdhfvlngwptzzdshzhzfpzhmrcjmdvlnlqtsnlbhqgplsltgznshthcwnpzpcgjjwhjstfcdtmmnvbgqzrjpsqwlmlbjnqtrfmbrdsbdlrrwqqvzdnmzhzvrhdftzldzjrtfgzlrwczbzzzqtthdcjtqpcfdwpqlzqmrnsnhwbzhjnqjzgfdcdcrqsjfhpjcdtwnvwzzbwfgdzcmmfvdvdpjsltcrbfqczvvbjscptjsvzndgwhzfjcqljndrcqzhssnqtmjmwjrsqdpqnhwsntqnmrwhvsnvrvpvwbndpmgsnchtnzpjgshcvjgwlwdhqbqhvcwqmwllhcgvbslqvwgswvnsqvvcphbglrvlsczcscznlwzrvjptmbmrgjlhvbrlghcwjdqjlgrcbrhfmbcwgclqzllqtmshbjnhwpgsgtljbwhgcsznvslmglcnmmgjlsptgdqlbtclfbfvjpmqgwwbcvwtdhgjlpvgggjjvmltdgzjdsvtswgblgfcvdvtwrrfljtqjhdflhbtwmcdqpmdqrtjsvdhzstfnqjrzztnwslvwtvgvzfqlzfrhnthjfpvmwmdgrtzhbtwdfscdpwmwwrhgbmqrdftvjvrgzhbpqtqvvlwbmbvlszzqjwhtvwnsjcdcgdlwlrtvjsdqzngcdtpvsddsbqbhtrrpwqdhvdmnnncgccszqtbcgwbdbwrnwrhpwprslbmhrmwpmqzvssfzvrmwrmrzmhrcwvbdtvdflgmrghqngwsgrnctsnhpnmcmfmrtszttqtvvlhdjgplvgnjrtgnfgmdtvwzmzbtzvmhdvpcjqvgpsmdcfrbmqbrlsnccldrfdldqfnsfzznqtvsgwbljgrvbdmggdmhvvdzjfllzwzpddcnvrfggsddqmczfnnfvrwsmvfctctjqdrhvlntflccqgzg`;

const detectFirstMarkerPosition = (input, minChar) => {
  let set = new Set();
  let currentChars = [];
  for (let i = 0; i < input.length; i++) {
    // console.log('filling in');
    // filling stage
    currentChars.push(input[i]);
    // also fill set
    set.add(input[i]);
    // console.log(currentChars, set);
    if (currentChars.length >= minChar)  { // length >= 4
      // check if currentChars has same length then it must be a match
      if (currentChars.length == set.size) {
        return i+1;
      }
      else {
        // clear set
        set.clear();
        // remove leftmost char we dont need it
        currentChars.shift();
        // add new chars back to set
        currentChars.forEach(e => set.add(e));
      }
    }
  }
  return -1;
}

let charsToProcessesStartOfPack = detectFirstMarkerPosition(input, 4);
console.log('charsToProcessesStartOfPack: ', charsToProcessesStartOfPack);
let charsToProcessesStartOfMessage = detectFirstMarkerPosition(input, 14);
console.log('charsToProcessesStartOfMessage: ', charsToProcessesStartOfMessage);