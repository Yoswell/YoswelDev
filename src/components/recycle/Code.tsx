import { File } from "@/components/icons/HeroIcons"

export function Code() {
    return (
        <article className="cardTerminal">
            <pre>
                <span className="green">grizzlySpark</span>-ss<br></br>
                
                <span> </span>__         __<br></br>
                /  \.-'''-./  \  | Author: <span className="yellow">Vishok</span><br></br>
                \    -   -    /  |---------------<br></br>
                <span> </span>|   o   o   |   | Version: <span className="yellow">1.0</span><br></br>
                <span> </span>\  .-'''-.  /   |---------------<br></br>
                <span>  </span>'-\__Y__/-'    | A versatile text and cipher decoding/encoding tool designed to assist in Capture The Flag (CTF)<br></br>
                <span>     </span>'---'
                
                <br></br><br></br>
                Code    Description                                    Parameters    Input                        Output<br></br>
                ------  ---------------------------------------------  ------------  ---------------------------  ------------------<br></br>
                <span className="blue">C1 </span>      Convert Hexadecimal to Text                   -m -i         Hexadecimal                  Text<br></br>
                <span className="blue">C2 </span>      Convert Text to Hexadecimal                   -m -i         Text                         Hexadecimal<br></br>
                <span className="blue">C3 </span>      Convert Decimal to Text                       -m -i         Decimal                      Text<br></br>
                <span className="blue">C4 </span>      Convert Binary to Text                        -m -i         Binary                       Text<br></br>
                <span className="blue">C5 </span>      Convert Binary to Hexadecimal                 -m -i         Binary                       Hexadecimal<br></br>
                <span className="blue">C6 </span>      Convert Decimal to Hexadecimal                -m -i         Decimal                      Hexadecimal<br></br>
                <span className="blue">C7 </span>      URL Encode                                    -m -i         Text                         URL-encoded String<br></br>
                <span className="blue">C8 </span>      Revert Strings                                -m -i         Text                         Reversed String<br></br>
                <span className="blue">C9 </span>      Convert Long Bytes to Text                    -m -i         Long Bytes                   Text<br></br>
                <span className="blue">C10</span>      Convert Hexadecimal (0x?? format) to Decimal  -m -i         Hexadecimal (0x format)      Decimal<br></br>
                <br></br>
                <span className="purple">D1 </span>     Bases Decode (base64, base58, base62, base85)  -m -i         Base64 Encoded String        Decoded Text<br></br>
                <span className="purple">D2 </span>     Morse Code Decode                              -m -i         Morse Code                   Text<br></br>
                <span className="purple">D3 </span>     ROT13 Decode                                   -m -i         ROT13 Encoded Text           Decoded Text<br></br>
                <span className="purple">D4 </span>     Atbash Cipher Decode                           -m -i         Atbash Encoded Text          Decoded Text<br></br>
                <span className="purple">D5 </span>     Base64 File Decode                             -m -f -r      Base64 File                  Decoded File<br></br>
                <span className="purple">D6 </span>     URL Decode                                     -m -i         URL Encoded String           Decoded String<br></br>
                <span className="purple">D7 </span>     RSA Decode with Parameters (e, n, c, p, q)     -m -f         RSA Parameters               Decrypted Text<br></br>
                <span className="purple">D8 </span>     Vigenère Cipher Decode                         -m -i -k      Encrypted Text, Key          Decrypted Text<br></br>
                <span className="purple">D10</span>     MD5 Hash Cracking                              -m -i         MD5 Hash                     Cracked Text<br></br>
                <span className="purple">D13</span>     Brainfuck Language Decode                      -m -i         Brainfuck Code               Decoded Text<br></br>
                <span className="purple">D14</span>     Caesar Cipher Decode                           -m -i         Caesar Encrypted Text        Decrypted Text<br></br>
                <span className="purple">D15</span>     Bacon Cipher Decode                            -m -i         Bacon Cipher Encrypted Text  Decrypted Text<br></br>
                <span className="purple">D16</span>     Trithemius Cipher Decode                       -m -i         Trithemius Encrypted Text    Decrypted Text<br></br>
                <span className="purple">D17</span>     XOR Brute Force (One Chain, HEX Format)        -m -i         XOR Encrypted Text           Decrypted Text<br></br>
                <span className="purple">D18</span>     Caesar ASCII Decode                            -m -f         Caesar Encrypted ASCII       Decrypted ASCII<br></br>
                <span className="purple">D19</span>     XOR Two Files Decode                           -m -x -y -z   Two Files                    Decrypted File<br></br>
                <br></br>
                <span className="red">E1</span>      Web Scraping                                   -m -i -j      URL, Text Pattern            Extracted Data<br></br>
                <span className="red">E2</span>      Check Active IP                                -m -i         IP Address                   Active Status<br></br>
                <span className="red">E3</span>      Extract Macros                                 -m -x         DOCM File Path               Extracted Macros<br></br>
                <span className="red">E4</span>      Generate Reverse Shell                         -m -i -j      IP, Port                     Reverse Shells<br></br>
                <span className="red">E5</span>      Generate dictionary                            -m -i         Text Pattern                 Dictionary File<br></br>
            </pre>
            <div className="right-panel">
                <span>Explorer files</span>
                <span>
                    <img src="https://skillicons.dev/icons?i=py" alt="Skill used to create the file" />
                    Encode.py
                </span>
                <span>
                    <img src="https://skillicons.dev/icons?i=py" alt="Skill used to create the file" />
                    Decode.py
                </span>
                <span>
                    <img src="https://skillicons.dev/icons?i=py" alt="Skill used to create the file" />
                    Exploit.py
                </span>
                <span>
                    <File />
                    Requeriments.txt
                </span>
                <span>
                    <img src="https://skillicons.dev/icons?i=py" alt="Skill used to create the file" />
                    GrizzlySpark.py
                </span>
            </div>
        </article>
    )
}